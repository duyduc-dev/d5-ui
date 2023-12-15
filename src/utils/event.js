export const dispatchEvent = (eventName, data) => {
  document.dispatchEvent(new CustomEvent(eventName, { detail: data }));
};

export const listenEvent = (eventName, handler, context = document) => {
  context.addEventListener(eventName, handler);
  return () => context.removeEventListener(eventName, handler);
};

const eventService = {
  dispatchEvent,
  listenEvent,
};

export default eventService;
