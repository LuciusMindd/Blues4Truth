function Header({title,subtitle}) {

  return ( 
  <div >
    <h1></h1>
        <h2 className= " text-3xl border-4 py-1 my-1 m-60" > {title}</h2>
        <h3 className=" text-xl " > {subtitle}</h3> 


    </div>
  )
};

export default Header;
