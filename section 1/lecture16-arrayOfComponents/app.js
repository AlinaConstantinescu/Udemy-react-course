
    let cards = data.map((date, i)=>{
      return(
        <Card key={i} data={date}/>
      )
    });
    console.log(cards);

    ReactDOM.render(
      <div className='row'>
        {cards}
      </div>,
      document.getElementById('root')
    )