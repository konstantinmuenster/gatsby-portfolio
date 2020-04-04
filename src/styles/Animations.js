export const fade = toggle => {
  return {
    opacity: toggle ? 1 : 0
  }
}

export const fadeUp = toggle => {
  return {
    opacity: toggle ? 1 : 0,
    y: toggle ? 0 : 10,
  }
}

export const fadeLeft = toggle => {
  return {
    opacity: toggle ? 1 : 0,
    x: toggle ? 0 : 10
  }
}
