function Header({title,subtitle}) {

  return ( 
  <div >
    <h1></h1>
        <h2 className= " text-1xl border py-1 my-1 m-30" > {title}</h2>
        <h3 className=" text-xl " > {subtitle}</h3> 


    </div>
  )
};

export default Header;
