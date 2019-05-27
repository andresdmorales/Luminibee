<html>
<div id="main-form">
  <div id="form-div">
    <form id="form-one" class="form">
      <h1>HELLO</h1>
      <p class="name">
        <input name="name" type="text"       class="validate[required,custom[onlyLetter],length[0,100]] feedback-input" placeholder="My name is" id="name" />
      </p>
      
      <p class="email">
        <input name="email" type="text" class="validate[required,custom[email]] feedback-input" id="email" placeholder="My email is" />
      </p>
      
      <p class="text">
        <textarea name="text" class="validate[required,length[6,300]] feedback-input" id="comment" placeholder="My message is"></textarea>
      </p>
      
      
      <div class="submit">
        <input type="submit" value="Go" id="button-bottom"/>
        <div class="ease"></div>
      </div>
    </form>
  </div>
  </html>
