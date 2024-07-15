import axios from 'axios';
import React, { useState, useEffect, useRef } from 'react';
import { Container as MapDiv, NaverMap, Marker, useNavermaps } from 'react-naver-maps'

const CampService = () => {
  const [camps, setCamps] = useState([]);
  const [lat, setLat] = useState(0.0);
  const [lng, setLng] = useState(0.0);
  const mapRef = useRef(null);
  const [infowindow, setInfoWindow] = useState(null)
  const campService = async () => {
    const url = `https://apis.data.go.kr/B551011/GoCamping/locationBasedList?serviceKey=&numOfRows=100&pageNo=1&MobileOS=ETC&MobileApp=AppTest&mapX=128.6142847&mapY=36.0345423&radius=2000&_type=json`;

    try {
      const response = await axios.get(url);
      if (response.status === 200) {
        return response.data.response.body.items.item;
      } else {
        console.error('문제가 발생했습니다.');
      }
    } catch (error) {
      console.error('Error fetching camp data:', error);
      throw error;
    }
  };

  const getCurrentLocation = () => {
    const geolocationOptions = {
      enableHighAccuracy: true,
      timeout: 1000 * 60 * 1,
      maximumAge: 1000 * 3600 * 24,
    };

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLat(position.coords.latitude);
        setLng(position.coords.longitude);
      },
      (error) => {
        console.error("Error getting location:", error);
      },
      geolocationOptions
    );
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await campService();
        setCamps(data);
        getCurrentLocation(); // 현재 위치 가져오기
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const { naver } = window;
    if (mapRef.current && naver && lat !== 0.0 && lng !== 0.0) {
      const location = new naver.maps.LatLng(lat, lng);
      const map = new naver.maps.Map(mapRef.current, {
        center: location,
        zoom: 17,
      });

      // 현재 위치에 마커 추가
      new naver.maps.Marker({
        position: location,
        map,
        title: "우리집"
      });

      // 캠프 데이터 마커 추가
      camps.map((camp) => {
        const { mapX, mapY, facltNm,contentId} = camp;
      
        console.log("adad" + {facltNm} + {mapX});     
       let newMarker =  new naver.maps.Marker({
          position: new naver.maps.LatLng(mapY, mapX), // lat, lng 순서 주의
          map,
          title: facltNm,
        });
        
        naver.maps.Event.addListener(newMarker, 'click', () =>
          console.log(facltNm)
        );
      });
    }
  }, [lat, lng, camps]); // lat, lng, camps가 변경될 때마다 실행

  return (
    
    <div>
      <div  ref={mapRef} style={{ width: "100%", height: "500px" }}></div>
      {camps.map((camp) => (
        <div key={camp.contentId}>
          <h1>{camp.facltNm}</h1>
          <p>{camp.addr1}</p>
          <p>{camp.lineIntro}</p>
          {camp.firstImageUrl && <img src={camp.firstImageUrl} alt={camp.facltNm} />}
          <p>Latitude: {camp.mapX}</p>
          <p>Longitude: {camp.mapY}</p>
        </div>
      ))}
    </div>
  
  );
};

export default CampService;
