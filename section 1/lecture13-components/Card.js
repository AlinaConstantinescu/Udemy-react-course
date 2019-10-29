function Card(){
  return (
    <div className='row'>
      <div className="col s2">
        <div classname='card hoverable small'>
          
          <div className='card-image'>
            <img src='https://lorempixel.com/400/400/nature/' />
          </div>

          <div className='card-content'>
            <p>React From the beginning</p>
            <p>Robert Bunch</p>
          </div>

          <div className='card-action'>
            <a href='#'>$9.99</a>
          </div>

        </div>
      </div>
    </div>
  )
}