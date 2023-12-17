"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkast_block_templates"] = self["webpackChunkast_block_templates"] || []).push([["src_components_reusable_single-block_lazy-single-block_js"],{

/***/ "./src/components/reusable/single-block/favorite-single-block.js":
/*!***********************************************************************!*\
  !*** ./src/components/reusable/single-block/favorite-single-block.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/element */ \"react\");\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/compose */ \"./node_modules/@wordpress/compose/build-module/higher-order/compose.js\");\n/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/data */ \"./node_modules/@wordpress/data/build-module/components/use-select/index.js\");\n/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/data */ \"./node_modules/@wordpress/data/build-module/components/with-select/index.js\");\n/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @wordpress/data */ \"./node_modules/@wordpress/data/build-module/components/with-dispatch/index.js\");\n/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/api-fetch */ \"./node_modules/@wordpress/api-fetch/build-module/index.js\");\n/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @heroicons/react/24/outline */ \"./node_modules/@heroicons/react/24/outline/esm/HeartIcon.js\");\n/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/helpers */ \"./src/utils/helpers.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils_event_emitter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/event-emitter */ \"./src/utils/event-emitter.js\");\n/* harmony import */ var _tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../tooltip */ \"./src/components/reusable/tooltip/index.js\");\nfunction _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\n\n\n\n\n\n\nconst {\n  site_url: siteUrl\n} = ast_block_template_vars;\nconst FavoriteSingleBlock = _ref => {\n  let {\n    item,\n    className,\n    setFavorites,\n    setFilterBlocksByCategory,\n    filterBlocksByCategory,\n    filterBlocksPagesByCategory,\n    setFilterBlocksPagesByCategory,\n    ...props\n  } = _ref;\n  const {\n    favorites,\n    currentScreen\n  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(select => {\n    const {\n      getFavorites,\n      getCurrentScreen\n    } = select('ast-block-templates');\n    return {\n      favorites: getFavorites(),\n      currentScreen: getCurrentScreen()\n    };\n  });\n  const type = currentScreen === 'all-blocks-grid' ? 'block' : 'page';\n  const [isFavorite, setIsFavorite] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_6__.useState)(favorites[type]?.includes(+item.ID));\n  const handleClick = async event => {\n    event?.preventDefault();\n    event?.stopPropagation();\n    try {\n      await (0,_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n        path: `${siteUrl}/wp-json/gutenberg-templates/v1/favorite`,\n        data: {\n          type: item.type,\n          block_id: item.ID,\n          status: !isFavorite\n        },\n        method: 'POST',\n        headers: {\n          'X-WP-Nonce': ast_block_template_vars.rest_api_nonce,\n          'content-type': 'application/json'\n        }\n      });\n    } catch (error) {\n      // Do nothing\n      console.error(error);\n    }\n    let updatedFavorites = {\n      ...favorites\n    };\n    if (!isFavorite) {\n      updatedFavorites = {\n        ...favorites,\n        [type]: [...new Set([...favorites[type], (0,lodash__WEBPACK_IMPORTED_MODULE_2__.parseInt)(item.ID)])]\n      };\n    } else {\n      updatedFavorites = {\n        ...favorites,\n        [type]: favorites[type].filter(id => id !== (0,lodash__WEBPACK_IMPORTED_MODULE_2__.parseInt)(item.ID))\n      };\n    }\n    setIsFavorite(!isFavorite);\n    setFavorites(updatedFavorites);\n    if (!!updatedFavorites[type].length) {\n      return;\n    }\n    if (filterBlocksByCategory !== 'favorite' && filterBlocksPagesByCategory !== 'favorite') {\n      return;\n    }\n    if ('block' === type) {\n      setFilterBlocksByCategory('');\n    }\n    if ('page' === type) {\n      setFilterBlocksPagesByCategory('');\n    }\n    _utils_event_emitter__WEBPACK_IMPORTED_MODULE_3__[\"default\"].emit('reset-list-count');\n  };\n  return /*#__PURE__*/React.createElement(\"button\", _extends({\n    className: (0,_utils_helpers__WEBPACK_IMPORTED_MODULE_1__.classNames)('flex items-center justify-center rounded-full p-2 bg-white cursor-pointer border-0 focus:outline-none', isFavorite ? '' : 'text-icon-secondary', className),\n    onClick: handleClick\n  }, props), /*#__PURE__*/React.createElement(_tooltip__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    content: !isFavorite && 'Add to favorites'\n  }, /*#__PURE__*/React.createElement(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    className: (0,_utils_helpers__WEBPACK_IMPORTED_MODULE_1__.classNames)('w-6 h-6 transition-colors ease-out duration-150', isFavorite ? 'fill-favorite text-favorite' : 'hover:fill-favorite hover:text-favorite')\n  })));\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = ((0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_8__[\"default\"])((0,_wordpress_data__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(select => {\n  const {\n    getFilterBlocksByCategory,\n    getFilterBlocksPagesByCategory\n  } = select('ast-block-templates');\n  return {\n    filterBlocksByCategory: getFilterBlocksByCategory(),\n    filterBlocksPagesByCategory: getFilterBlocksPagesByCategory()\n  };\n}), (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_10__[\"default\"])(dispatch => {\n  const {\n    setFavorites,\n    setFilterBlocksByCategory,\n    setFilterBlocksPagesByCategory\n  } = dispatch('ast-block-templates');\n  return {\n    setFavorites,\n    setFilterBlocksByCategory,\n    setFilterBlocksPagesByCategory\n  };\n}))(FavoriteSingleBlock));\n\n//# sourceURL=webpack://ast-block-templates/./src/components/reusable/single-block/favorite-single-block.js?");

/***/ }),

/***/ "./src/components/reusable/single-block/lazy-single-block.js":
/*!*******************************************************************!*\
  !*** ./src/components/reusable/single-block/lazy-single-block.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/compose */ \"./node_modules/@wordpress/compose/build-module/higher-order/compose.js\");\n/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/data */ \"./node_modules/@wordpress/data/build-module/components/with-select/index.js\");\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */ \"react\");\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/helpers */ \"./src/utils/helpers.js\");\n/* harmony import */ var _import_block_button_import_block_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../import-block-button/import-block-button */ \"./src/components/reusable/import-block-button/import-block-button.js\");\n/* harmony import */ var _favorite_single_block__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./favorite-single-block */ \"./src/components/reusable/single-block/favorite-single-block.js\");\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils.js */ \"./src/components/reusable/single-block/utils.js\");\n/* harmony import */ var _utils_easing_functions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../utils/easing-functions */ \"./src/utils/easing-functions.js\");\n\n\n\n\n\n\n\n\nconst {\n  spectra_common_styles\n} = ast_block_template_vars;\nconst visibility = {\n  hidden: 'hidden',\n  visible: 'visible'\n};\nconst SingleBlock = _ref => {\n  let {\n    item,\n    content,\n    stylesheet,\n    astraCustomizer,\n    globalStylesheet,\n    colorPalette,\n    dynamicContent,\n    selectedImages,\n    disableAi,\n    togglePopup,\n    // disablePreview,\n    email,\n    phone,\n    address\n  } = _ref;\n  const thumbnailRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_5__.useRef)(null);\n  const thumbnailContainerRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_5__.useRef)(null);\n  const thumbnail_image_url = item['thumbnail-image-url'] || '';\n  const featured_image_url = item['featured-image-url'] || '';\n  let landscapeCounter = 0;\n  let portraitCounter = 0;\n  let containerImageCounter = 0;\n  const [selfState, setSelfState] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_5__.useState)({\n    importing: false\n  });\n  const [imageThumbnailURL, setThumbnailImageURL] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_5__.useState)(`${ast_block_template_vars.uri}dist/placeholder_200_200.png`);\n  const [imageFeaturedlURL, setFeaturedImageURL] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_5__.useState)(`${ast_block_template_vars.uri}dist/placeholder_200_200.png`);\n  const replaceImages = (images, previewImages) => {\n    if (disableAi) {\n      return;\n    }\n    if (Object.keys(dynamicContent).length === 0 || !dynamicContent.hasOwnProperty(item.category)) {\n      return;\n    }\n    const landscapeImages = previewImages.landscape ? previewImages.landscape : [];\n    const portraitImages = previewImages.portrait ? previewImages.portrait : [];\n    if (landscapeImages.length === 0 || portraitImages.length === 0) {\n      return;\n    }\n    images?.forEach(function (image, imgIndex) {\n      if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.shouldSkipReplacement)(image.src)) {\n        return;\n      }\n      image.onload = () => {\n        // Skip if the image is already replaced.\n        const imageSrc = image.getAttribute('src') || '';\n        if (imageSrc.includes('unsplash') || imageSrc.includes('pexels') || imageSrc.includes('pixabay')) {\n          updateVisibility(image, visibility.visible);\n          return;\n        }\n        const orientation = (0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.getImageOrientation)(image.src);\n\n        // Initialize the counter using the current image index.\n        landscapeCounter = imgIndex % landscapeImages.length;\n        portraitCounter = imgIndex % portraitImages.length;\n        let imageUrl;\n        if (orientation === 'landscape') {\n          imageUrl = landscapeImages[landscapeCounter];\n        } else {\n          imageUrl = portraitImages[portraitCounter];\n        }\n        if (undefined === imageUrl) {\n          updateVisibility(image, visibility.visible);\n          return;\n        }\n        if (!(imageUrl.url.includes('unsplash') || imageUrl.url.includes('pexels') || imageUrl.url.includes('pixabay'))) {\n          updateVisibility(image, visibility.visible);\n          return;\n        }\n        if (orientation === 'landscape') {\n          landscapeCounter++;\n          // Reset the counter if it exceeds the number of images.\n          landscapeCounter %= landscapeImages.length;\n        } else {\n          portraitCounter++;\n          // Reset the counter if it exceeds the number of images.\n          portraitCounter %= portraitImages.length;\n        }\n        if ('PICTURE' === image.parentNode.nodeName) {\n          const sourceElements = image.parentNode.querySelectorAll('source');\n          sourceElements.forEach(source => {\n            source.setAttribute('srcset', imageUrl.optimized_url);\n          });\n          const imageElement = image.parentNode.querySelector('img');\n          imageElement.setAttribute('src', imageUrl.optimized_url);\n        } else {\n          const newImage = document.createElement('img');\n          newImage.src = imageUrl.optimized_url;\n          image.parentNode.replaceChild(newImage, image);\n        }\n        updateVisibility(image, visibility.visible);\n      };\n      image.onerror = () => {\n        updateVisibility(image, visibility.visible);\n      };\n    });\n  };\n  const replaceContactDetails = contentStr => {\n    const emailSrc = 'contact@example.com';\n    const phoneSrc = '202-555-0188';\n    const addressSrc = '2360 Hood Avenue, San Diego, CA, 92123';\n    if (email) {\n      contentStr = contentStr.replace(emailSrc, email);\n    }\n    if (phone) {\n      contentStr = contentStr.replace(phoneSrc, phone);\n    }\n    if (address) {\n      contentStr = contentStr.replace(addressSrc, address);\n    }\n    return contentStr;\n  };\n  const replaceContainerImages = (styleContent, images) => {\n    if (disableAi) {\n      return styleContent;\n    }\n    if (Object.keys(dynamicContent).length === 0 || !dynamicContent.hasOwnProperty(item.category)) {\n      return styleContent;\n    }\n    if (images && images.length === 0) {\n      return styleContent;\n    }\n    const backgroundImageRegex = /background-image\\s*:\\s*url\\(['\"]?([^'\")]+)['\"]?\\)/g;\n    const newStyleContent = styleContent.replace(backgroundImageRegex, function (match, imageUrl) {\n      if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.shouldSkipReplacement)(imageUrl)) {\n        return match;\n      }\n      if (!images[containerImageCounter]?.url) {\n        return '';\n      }\n      const currentImageUrl = images[containerImageCounter]?.url;\n      containerImageCounter++;\n      containerImageCounter %= images.length;\n      return 'background-image: url(\"' + currentImageUrl + '\")';\n    });\n    return newStyleContent;\n  };\n  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_5__.useLayoutEffect)(() => {\n    let isMounted = true;\n    const allImages = {\n      landscape: [],\n      portrait: []\n    };\n    selectedImages?.forEach(image => {\n      if (image.orientation === 'landscape') {\n        allImages.landscape.push(image);\n      } else {\n        allImages.portrait.push(image);\n      }\n    });\n    const previewImages = allImages;\n    const imgThumbnail = new Image();\n    imgThumbnail.src = thumbnail_image_url;\n    const imgFeatured = new Image();\n    imgFeatured.src = featured_image_url;\n    const thumbnailContainer = thumbnailContainerRef.current;\n    function handleThumbnailLoad(image, setURL) {\n      if (isMounted) {\n        image.onload = () => {\n          setURL(image.src);\n        };\n      }\n    }\n    handleThumbnailLoad(imgThumbnail, setThumbnailImageURL);\n    handleThumbnailLoad(imgFeatured, setFeaturedImageURL);\n    const astraWpEditorCss = document.getElementById('astra-wp-editor-styles-inline-css')?.textContent.replace(/:root/g, '.block-container').replace(/body/g, '.block-container'),\n      astraBlockEditorCss = document.getElementById('astra-block-editor-styles-inline-css')?.textContent.replace(/:root/g, '.block-container').replace(/body/g, '.block-container');\n    let markup = ``;\n    if (stylesheet) {\n      stylesheet = replaceContainerImages(stylesheet, previewImages?.landscape);\n    }\n    markup += astraCustomizer ? `<style type=\"text/css\" id=\"gt-astra-customizer\">${astraCustomizer}</style>` : '';\n    markup += `<style type=\"text/css\" id=\"gt-spectra-common-stylesheet\">${spectra_common_styles}</style>`;\n    markup = stylesheet ? `${markup} <style type=\"text/css\" id=\"gt-common-stylesheet\">${stylesheet}</style>` : markup;\n    if (globalStylesheet) {\n      markup = markup + `<style type=\"text/css\" id=\"gt-global-stylesheet\"> ${globalStylesheet} </style>`;\n    }\n    if (astraWpEditorCss) {\n      markup = markup + `<style type=\"text/css\" id=\"gt-wpeditor-css\" > ${astraWpEditorCss} </style>`;\n    }\n    if (astraBlockEditorCss) {\n      markup = markup + `<style type=\"text/css\" id=\"gt-blockeditor-css\"> ${astraBlockEditorCss} </style>`;\n    }\n    if (thumbnailContainer && content) {\n      let shadow = thumbnailContainer.shadowRoot;\n      if (shadow === null) {\n        shadow = thumbnailContainer.attachShadow({\n          mode: 'open'\n        });\n      }\n      if (shadow === null) {\n        return;\n      }\n      let original_content = content;\n      if (!disableAi) {\n        const dynamic_content = dynamicContent ? dynamicContent[item.category] : [];\n        if (dynamic_content && Object.keys(dynamic_content)?.length > 0) {\n          Object.keys(dynamic_content).forEach(key => {\n            original_content = dynamic_content[key] !== null ? original_content.replace(key, dynamic_content[key]) : original_content;\n          });\n        }\n        if (Object.keys(dynamicContent).length > 0 && dynamicContent.hasOwnProperty(item.category)) {\n          original_content = replaceContactDetails(original_content);\n          original_content = replaceGoogleMapLocation(original_content);\n        }\n      }\n      shadow.innerHTML = markup + '<div class=\"st-block-container\">' + original_content + '</div>';\n      // shadow.innerHTML = markup + '<div class=\"st-block-container\">' + ast_block_template_vars.header_markup + original_content + ast_block_template_vars.footer_markup + '</div>';\n      colorPalette.forEach((color, index) => {\n        shadow?.host.style.setProperty(`--ast-global-color-${index}`, color);\n      });\n      const images = thumbnailContainer.shadowRoot.querySelectorAll('img');\n      if (shadow) {\n        images.forEach(imageItem => {\n          if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.shouldSkipReplacement)(imageItem.src) || disableAi || previewImages.landscape.length === 0 || previewImages.portrait.length === 0 || Object.keys(dynamicContent).length === 0 || !dynamicContent.hasOwnProperty(item.category)) {\n            return;\n          }\n          updateVisibility(imageItem, visibility.hidden);\n        });\n        updateScaling();\n        replaceImages(images, previewImages);\n      }\n    }\n    return () => {\n      isMounted = false;\n    };\n  }, [item, disableAi, dynamicContent, selectedImages]);\n  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_5__.useEffect)(() => {\n    const resizeObserver = new ResizeObserver(updateScaling);\n    resizeObserver.observe(document.documentElement);\n    return () => {\n      if (!resizeObserver) {\n        return;\n      }\n      resizeObserver.disconnect();\n    };\n  }, []);\n  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_5__.useEffect)(() => {\n    const astPopup = document.querySelector('#ast-block-templates-modal-wrap');\n    if (!astPopup) {\n      return;\n    }\n    const observer = new MutationObserver(updateScaling);\n    observer.observe(astPopup, {\n      childList: true,\n      attributes: true,\n      subtree: true\n    });\n    return () => {\n      if (!observer) {\n        return;\n      }\n      observer.disconnect();\n    };\n  }, []);\n  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_5__.useEffect)(() => {\n    const thumbnailContainer = thumbnailContainerRef?.current;\n    if (thumbnailContainer) {\n      const shadow = thumbnailContainer.shadowRoot;\n      colorPalette.forEach((color, index) => {\n        if (shadow === null) {\n          return;\n        }\n        shadow.host.style.setProperty(`--ast-global-color-${index}`, color);\n      });\n    }\n  }, [colorPalette]);\n  function updateScaling() {\n    const thumbnail = thumbnailRef?.current;\n    const thumbnailContainer = thumbnailContainerRef?.current;\n    if (!thumbnail || !thumbnailContainer) {\n      return;\n    }\n    const width = thumbnail.parentNode.offsetWidth;\n    const scale = width / 1200;\n    const scaledHeight = scale * thumbnailContainer.offsetHeight;\n    thumbnail.style.transform = `scale(${scale})`;\n    thumbnail.style.height = `${scaledHeight}px`;\n  }\n  const updateVisibility = (element, value) => {\n    if (!element) {\n      return;\n    }\n    element.style.visibility = value;\n  };\n  const replaceGoogleMapLocation = function () {\n    let contentStr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';\n    if (!address) {\n      return contentStr;\n    }\n    const regex = /(<iframe[^>]+src=\"https:\\/\\/maps\\.google\\.com\\/maps\\?q=)([^&]+)(&z=\\d+&hl=en&t=m&output=embed&iwloc=near\"[^>]*><\\/iframe>)/g;\n    return contentStr.replace(regex, `$1${encodeURIComponent(address)}$3`);\n  };\n  let scrollTimeout = 0;\n  let startScroll = 0;\n  const scrollToPosition = (element, position, duration) => {\n    const start = element.scrollTop;\n    const change = position - start;\n    const increment = 20;\n    let currentTime = 0;\n    const animateScroll = function () {\n      currentTime += increment;\n      const val = _utils_easing_functions__WEBPACK_IMPORTED_MODULE_4__[\"default\"].linearTween(currentTime, start, change, duration);\n      element.scrollTop = val;\n      if (currentTime < duration) {\n        scrollTimeout = setTimeout(animateScroll, increment);\n      }\n    };\n    animateScroll();\n  };\n  const handleScrollDown = () => {\n    if (item.type !== 'page') {\n      return;\n    }\n    const scrollContainer = thumbnailContainerRef.current;\n    if (scrollTimeout) {\n      clearTimeout(scrollTimeout);\n    }\n    startScroll = setTimeout(() => {\n      scrollToPosition(scrollContainer, scrollContainer.scrollHeight, 4000);\n    }, 1000);\n  };\n  const handleScrollUp = () => {\n    if (startScroll) {\n      clearTimeout(startScroll);\n    }\n    const scrollContainer = thumbnailContainerRef.current;\n    if (scrollTimeout) {\n      clearTimeout(scrollTimeout);\n    }\n    scrollToPosition(scrollContainer, 0, 1500);\n  };\n\n  // Reset the counter when the popup is closed.\n  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_5__.useEffect)(() => {\n    if (!togglePopup) {\n      landscapeCounter = 0;\n      portraitCounter = 0;\n      containerImageCounter = 0;\n    }\n  }, [togglePopup]);\n  return /*#__PURE__*/React.createElement(\"div\", {\n    className: (0,_utils_helpers__WEBPACK_IMPORTED_MODULE_0__.classNames)('w-full h-fit p-5', true === selfState.importing ? 'importing' : '')\n  }, /*#__PURE__*/React.createElement(\"div\", {\n    className: \"cursor-pointer relative border border-solid border-border-primary hover:border-accent-spectra transition duration-150 ease-in-out overflow-hidden group\"\n  }, /*#__PURE__*/React.createElement(\"div\", {\n    className: \"thumbnail left-0 m-0 min-h-[auto] overflow-visible text-left top-0 origin-top-left relative pointer-events-none\",\n    ref: thumbnailRef\n  }, /*#__PURE__*/React.createElement(\"div\", {\n    className: \"absolute w-[1200px] pointer-events-none max-h-[1600px] overflow-hidden\",\n    ref: thumbnailContainerRef\n  }, !content && /*#__PURE__*/React.createElement(\"img\", {\n    srcSet: `${imageFeaturedlURL}, ${imageThumbnailURL}`,\n    src: imageThumbnailURL,\n    alt: \"Preview\"\n  }), /*#__PURE__*/React.createElement(\"div\", {\n    className: \"preview\"\n  }, /*#__PURE__*/React.createElement(\"span\", {\n    className: \"ast-block-templates-icon ast-block-templates-icon-search\"\n  })))), /*#__PURE__*/React.createElement(\"div\", {\n    className: \"absolute inset-0 grid grid-cols-1 grid-rows-1 place-items-end\",\n    onMouseEnter: handleScrollDown,\n    onMouseLeave: handleScrollUp\n  }, /*#__PURE__*/React.createElement(\"div\", {\n    className: (0,_utils_helpers__WEBPACK_IMPORTED_MODULE_0__.classNames)('opacity-0 group-hover:opacity-100 w-full flex items-center justify-between px-[20px] py-[14px] backdrop-blur-sm bg-white/[0.85] shadow-action-buttons transition-all duration-150 ease-in-out', true === selfState.importing ? 'opacity-100' : '')\n  }, /*#__PURE__*/React.createElement(_import_block_button_import_block_button__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    title: \"Insert\",\n    liveRequest: true,\n    item: item,\n    importing: selfState.importing,\n    onClick: () => {\n      setSelfState({\n        ...selfState,\n        importing: true\n      });\n    },\n    onBlockImport: () => {\n      setSelfState({\n        ...selfState,\n        importing: false\n      });\n    }\n  }), /*#__PURE__*/React.createElement(_favorite_single_block__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    item: item\n  })))));\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = ((0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_6__[\"default\"])((0,_wordpress_data__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(select => {\n  const {\n    getDisableAi,\n    getDisablePreview,\n    getTogglePopup\n  } = select('ast-block-templates');\n  return {\n    disableAi: getDisableAi(),\n    disablePreview: getDisablePreview(),\n    togglePopup: getTogglePopup()\n  };\n}))((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_5__.memo)(SingleBlock)));\n\n//# sourceURL=webpack://ast-block-templates/./src/components/reusable/single-block/lazy-single-block.js?");

/***/ }),

/***/ "./src/components/reusable/single-block/utils.js":
/*!*******************************************************!*\
  !*** ./src/components/reusable/single-block/utils.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getImageOrientation: function() { return /* binding */ getImageOrientation; },\n/* harmony export */   shouldSkipReplacement: function() { return /* binding */ shouldSkipReplacement; },\n/* harmony export */   withinIframe: function() { return /* binding */ withinIframe; }\n/* harmony export */ });\nconst withinIframe = () => {\n  if (window.location.href !== window.parent.location.href) {\n    return true;\n  }\n  return false;\n};\nconst getImageOrientation = imageUrl => {\n  // eslint-disable-next-line no-undef\n  const img = new Image();\n  img.src = imageUrl;\n  if (img.width > img.height) {\n    return 'landscape';\n  }\n  return 'portrait';\n};\nconst shouldSkipReplacement = imageUrl => {\n  const skipKeywords = ['skip', 'logo', 'fav-icon'];\n  for (const keyword of skipKeywords) {\n    if (imageUrl.includes(keyword)) {\n      return true;\n    }\n  }\n  return false;\n};\n\n//# sourceURL=webpack://ast-block-templates/./src/components/reusable/single-block/utils.js?");

/***/ }),

/***/ "./src/utils/easing-functions.js":
/*!***************************************!*\
  !*** ./src/utils/easing-functions.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nconst easingFunctions = {\n  // linear easing function\n  linearTween(t, b, c, d) {\n    return c * t / d + b;\n  },\n  // ease in function\n  easeInQuad(t, b, c, d) {\n    t /= d;\n    return c * t * t + b;\n  },\n  // ease out function\n  easeOutQuad(t, b, c, d) {\n    t /= d;\n    return -c * t * (t - 2) + b;\n  },\n  // ease in out function\n  easeInOutQuad(t, b, c, d) {\n    t /= d / 2;\n    if (t < 1) {\n      return c / 2 * t * t + b;\n    }\n    t--;\n    return -c / 2 * (t * (t - 2) - 1) + b;\n  },\n  // ease in cubic function\n  easeInCubic(t, b, c, d) {\n    t /= d;\n    return c * t * t * t + b;\n  },\n  // ease out cubic function\n  easeOutCubic(t, b, c, d) {\n    t /= d;\n    t--;\n    return c * (t * t * t + 1) + b;\n  },\n  // ease in out cubic function\n  easeInOutCubic(t, b, c, d) {\n    t /= d / 2;\n    if (t < 1) {\n      return c / 2 * t * t * t + b;\n    }\n    t -= 2;\n    return c / 2 * (t * t * t + 2) + b;\n  }\n};\nObject.seal(easingFunctions);\n/* harmony default export */ __webpack_exports__[\"default\"] = (easingFunctions);\n\n//# sourceURL=webpack://ast-block-templates/./src/utils/easing-functions.js?");

/***/ }),

/***/ "./node_modules/@heroicons/react/24/outline/esm/HeartIcon.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@heroicons/react/24/outline/esm/HeartIcon.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n\nfunction HeartIcon({\n  title,\n  titleId,\n  ...props\n}, svgRef) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"svg\", Object.assign({\n    xmlns: \"http://www.w3.org/2000/svg\",\n    fill: \"none\",\n    viewBox: \"0 0 24 24\",\n    strokeWidth: 1.5,\n    stroke: \"currentColor\",\n    \"aria-hidden\": \"true\",\n    ref: svgRef,\n    \"aria-labelledby\": titleId\n  }, props), title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"title\", {\n    id: titleId\n  }, title) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"path\", {\n    strokeLinecap: \"round\",\n    strokeLinejoin: \"round\",\n    d: \"M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z\"\n  }));\n}\nconst ForwardRef = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(HeartIcon);\n/* harmony default export */ __webpack_exports__[\"default\"] = (ForwardRef);\n\n//# sourceURL=webpack://ast-block-templates/./node_modules/@heroicons/react/24/outline/esm/HeartIcon.js?");

/***/ })

}]);