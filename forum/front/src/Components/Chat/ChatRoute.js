import React from 'react';
import './ChatRoute.css';
import ChatBox from './ChatBox';
import ChatNav from './ChatNav';
import ChatOnline from './ChatOnline';


function ChatRoute() {
  //let bt = () => { return btn('mytest') };
  function handleSubmit(event){
    event.preventDefault();
    console.log(event.target);
    var formData = new FormData(event.target);

    const data = new URLSearchParams();
    for (const pair of new FormData(event.target)) {
        data.append(pair[0], pair[1]);
    }

    /* const data = [...formData.entries()];
    const asString = data
      .map(x => `${encodeURIComponent(x[0])}=${encodeURIComponent(x[1])}`)
      .join('&'); */
    console.log(data);
    fetch("/api/createMessage", {
      method: 'post',
      body: data,
    })
    .then(()=>window.location.reload());

  }
  var category = new URLSearchParams(window.location.search).get("category") ?? "Forum";
  return (
    <div className="ChatPage">
      <div className="Nav">
        <ChatNav />
      </div>
      <div className="Chat">
          <div className="Box">
            <ChatBox text="hello" category={category}/>
            <form action="/api/createMessag" method="post" onSubmit={handleSubmit}>
              <input type="hidden" name="user" id="user" value="si.mo@email.com"></input>
              <input type="hidden" name="cat"  id="cat"  value={category}></input>
              <textarea type="text"   name="msg"  id="msg"  placeholder="new message"></textarea>
              <button type="submit">Submit</button>
            </form>
          </div>
          <div className="Online">
            {/* <ChatOnline endpoint="api/online"/> */}
          </div>
      </div>
    </div>
  );
}

export default ChatRoute;
