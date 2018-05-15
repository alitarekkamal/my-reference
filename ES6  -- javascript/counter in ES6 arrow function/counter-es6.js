$(document).ready(function(){
  $(function(){
    const counter1 = new counter(100, 500);
  });
  class counter{
    constructor(start, wait){
      this.count = start;
      setInterval(()=>{
        this.count++;
        $(".counter").html(this.count);
      }, wait);
    }
  }
});
