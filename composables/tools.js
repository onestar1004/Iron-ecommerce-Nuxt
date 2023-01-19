import moment from 'moment-timezone';

export const generateID = () => {
  const alphabet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const id_length = 8;

  var rtn = '';
  for (var i = 0; i < id_length; i++) {
    rtn += alphabet.charAt(Math.floor(Math.random() * alphabet.length));
  }

  return rtn;
}

export const getImage = (parameters) => {
  if(parameters.image) {
    var image = parameters.image;
    var image = image.replace('http://', 'https://');
    var imageSrc = image;
    var parameterArray = [];
    if(parameters.type) {
      parameterArray.push(parameters.type);
    }
    if(parameters.width) {
      parameterArray.push('w_'+parameters.width);
    }
    if(parameters.height) {
      parameterArray.push('h_'+parameters.height);
    }
    if(parameters.quality) {
      parameterArray.push('q_'+parameters.quality);
    }
    var parameterString = parameterArray.join();
    if(parameterString) {
    imageSrc = imageSrc.replace('/image/upload/', '/image/upload/'+parameterString+'/');
    }
    if(parameterString) {
      imageSrc = imageSrc.replace('/image/upload/', '/image/upload/'+parameterString+'/');

      if(imageSrc.includes('/w_520/') && parameters.width) {
        imageSrc = imageSrc.replace('/w_520/', '/');
      }
    }
    if(parameters.format) {
      imageSrc = imageSrc.replace(/.jpg/g, parameters.format);
    }
    return imageSrc;
  }
}

export const createDebounce = () => {
  let timeout = null;
  return function (fnc, delayMs) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      fnc();
    }, delayMs || 500);
  }
}

export const smoothScroll = (data) => {
  let item = document.querySelector(data.element);
  let scroller = window;
  if(data.scroller) scroller = document.querySelector(data.scroller);
  let offset = data.offset || 0;

  let isWindowScroll = true;
  if(data.scroller) isWindowScroll = false;

  let scrollY = scroller.scrollY || scroller.scrollTop

  var diff=(item.offsetTop - scrollY + offset)/20;


  if(!scroller._lastDiff){
      scroller._lastDiff = 0;
  }

  if (Math.abs(diff)>2) {
      if(isWindowScroll) {
        scroller.scrollTo(0, (scrollY+diff))
      } else {
        scroller.scrollTop = scrollY + diff;
      }
      clearTimeout(scroller._TO)

      if(diff !== scroller._lastDiff){
          scroller._lastDiff = diff;
          scroller._TO=setTimeout(smoothScroll, 15, {element: data.element, offset: data.offset, scroller: data.scroller});
      }
  } else {
    if(isWindowScroll) {
      scroller.scrollTo(0, item.offsetTop)
    } else {
      scroller.scrollTop = scrollY + diff;
    }
  }
}

export const currency = (value) => {
  value = (parseFloat(value) || 0);
  value = value.toFixed(value % 1 === 0 ? 0 : 2); // Remove empty 00
  value = value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','); // Add comma separator
  return `$${value}`;
}

export const monthOnly = (timestamp) => {
  return moment(timestamp).format('MMM');
}

export const dateFragment = (timestamp) => {
  return moment(timestamp).format('DD, YYYY');
}

export const Toast = (parameters = {}) => {
  Swal.fire({
    icon: parameters.icon || 'success',
    title: parameters.title,
    text: parameters.text,
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    onOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })
}

export const delay = ms => new Promise(res => setTimeout(res, ms));