const isClient = () => {
  return typeof window !== "undefined" ? true : false
}

export const isMobile = () => {
  return isClient() && window.innerWidth < 991 ? true : false
  return "Object Window not defined on server"
}