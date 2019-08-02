import React from 'react'
import BlogRollCa from './BlogRoll.ca'
import BlogRollEs from './BlogRoll.es'
import BlogRollEn from './BlogRoll.en'

const localizedBlogRoll = (languageKey) => {
  return (languageKey === "ca") ? <BlogRollCa /> : 
         (languageKey === "es") ? <BlogRollEs /> : 
         <BlogRollEn />;
}

export default localizedBlogRoll