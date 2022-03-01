const mount = (el) => {
    el.innerHTML = '<div>Hello 3</div>';
  };
  
  if (process.env.NODE_ENV === 'development') {
    const el = document.querySelector('#dev-remote3');
    if (el) {
      mount(el);
    }
  }
  
  export { mount };