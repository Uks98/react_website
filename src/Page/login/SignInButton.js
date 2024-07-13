

function LoginButton(props){
   return (
    <button className={props.className} onClick={()=>{console.log("버튼클릭")}}>
      <p>{props.name}</p>
    </button>
  );
};

export default LoginButton;