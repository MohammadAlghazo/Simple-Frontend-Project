document.addEventListener('DOMContentLoaded', function() {
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      
   
      tabContents.forEach(content => {
        content.classList.remove('active');
      });
      
    
      tabBtns.forEach(btn => {
        btn.classList.remove('active');
      });
      
     
      const tabId = this.getAttribute('data-tab');
      document.getElementById(tabId).classList.add('active');
      
     
      this.classList.add('active');
    });
  });
});