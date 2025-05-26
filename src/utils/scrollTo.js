export const scrollTo = (elementId) => {
  const element = document.getElementById(elementId);
  if (element) {
    const header = document.getElementById('header');
    const offset = header ? header.offsetHeight : 0;
    const elementPosition = element.offsetTop - offset;
    
    window.scrollTo({
      top: elementPosition,
      behavior: 'smooth'
    });
  }
};