const mount = (el) => {
  el.innerHTML = '<div>Hello 2 anshu</div>';
  };
  
  if (process.env.NODE_ENV === 'development') {
    const el = document.querySelector('#dev-remote2');
    if (el) {
      mount(el);
    }
  }
  
  export { mount };