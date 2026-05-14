// src/lib/sessionFlags.ts
export const introSeen     = () => sessionStorage.getItem('intro-seen') === '1';
export const setIntroSeen  = () => sessionStorage.setItem('intro-seen', '1');
export const letterTyped   = () => sessionStorage.getItem('letter-typed') === '1';
export const setLetterTyped= () => sessionStorage.setItem('letter-typed', '1');
export const secretFound   = () => sessionStorage.getItem('secret-found') === '1';
export const setSecretFound= () => sessionStorage.setItem('secret-found', '1');
export const polaroidOpened= () => sessionStorage.getItem('polaroid-opened') === '1';
export const setPolaroidOpened = () => sessionStorage.setItem('polaroid-opened', '1');
