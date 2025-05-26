/**
 * Lấy element DOM giống querySelector
 * @param {string} el - CSS selector 
 * @param {boolean} [all=false] - Lấy tất cả elements?
 * @returns {HTMLElement|NodeList|null}
 */
export const select = (el, all = false) => {
  el = el.trim();
  if (all) {
    return [...document.querySelectorAll(el)];
  } else {
    return document.querySelector(el);
  }
};

/**
 * Thêm event listener
 * @param {string} type - Loại event
 * @param {string} selector - CSS selector
 * @param {Function} listener - Callback function
 * @param {boolean} [all=false] - Áp dụng cho tất cả elements?
 */
export const on = (type, selector, listener, all = false) => {
  const elements = select(selector, all);
  
  if (elements) {
    if (Array.isArray(elements)) {
      elements.forEach(e => e.addEventListener(type, listener));
    } else {
      elements.addEventListener(type, listener);
    }
  }
};

/**
 * Scroll mượt đến element
 * @param {string} elementId - ID của element cần scroll tới
 * @param {number} [offset=0] - Offset từ top
 */
export const scrollTo = (elementId, offset = 0) => {
  const element = document.getElementById(elementId);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({
      top: elementPosition - offset,
      behavior: 'smooth'
    });
  }
};

/**
 * Kiểm tra element có visible trong viewport không
 * @param {HTMLElement} el 
 * @returns {boolean}
 */
export const isElementInViewport = (el) => {
  if (!el) return false;
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

export default {
  select,
  on,
  scrollTo,
  isElementInViewport
};