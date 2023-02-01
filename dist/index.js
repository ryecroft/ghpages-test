(function () {
'use strict';
const style = "*,\n::after,\n::before {\n  box-sizing: border-box;\n}\n\n.icon-nightmode-toggle {\n  position: absolute;\n  right: 5pt;\n  top: 5pt;\n  display: inline-block;\n  background-color: rgba(0, 0, 0, 0.392);\n  cursor: pointer;\n  width: var(--icon-size);\n  height: var(--icon-size);\n  -webkit-mask-size: var(--icon-size) var(--icon-size);\n  -webkit-mask-repeat: no-repeat;\n  -webkit-mask-position: center;\n  mask-size: var(--icon-size) var(--icon-size);\n  mask-repeat: no-repeat;\n  mask-position: center;\n  mask: url(\"/assets/moon.svg\");\n  -webkit-mask: url(\"/assets/moon.svg\");\n}\n\n.icon-nightmode-toggle:focus {\n  background-color: var(--flash-color);\n}\n\ninput[type=search]::-webkit-search-decoration,\ninput[type=search]::-webkit-search-cancel-button,\ninput[type=search]::-webkit-search-results-button,\ninput[type=search]::-webkit-search-results-decoration {\n  display: none;\n}\n\nukc-searchbar {\n  margin-bottom: 12px;\n  transition: all;\n}\n\nfilters-controller {\n  display: block;\n  width: 100vw;\n  height: 600px;\n  position: fixed;\n  bottom: 0;\n  z-index: 100000;\n}\n\nfilters-controller .rfd-search .filters-controller-content {\n  width: 100vw;\n  height: 100vh;\n  padding: var(--padding);\n  background-color: var(--background-color);\n  color: white;\n  z-index: 2000000 !important;\n  position: absolute;\n  top: 100vh;\n  border-top-left-radius: 10pt;\n  border-top-right-radius: 10pt;\n  transition: top 0.3s cubic-bezier(0.22, 1, 0.3, 1);\n}\n\nfilters-controller .rfd-search #gray-view {\n  opacity: 0;\n  width: 100vw;\n  height: 140vh;\n  background-color: rgba(0, 0, 0, 0.7);\n  position: fixed;\n  top: 0vw;\n  left: 0vw;\n  z-index: 1 !important;\n  backdrop-filter: blur(5px);\n  -webkit-backdrop-filter: blur(5px);\n  transition: opacity 0.2s ease-out;\n}\n\n.nightmode .icon-nightmode-toggle {\n  width: var(--icon-size);\n  height: var(--icon-size);\n  -webkit-mask-size: var(--icon-size) var(--icon-size);\n  -webkit-mask-repeat: no-repeat;\n  -webkit-mask-position: center;\n  mask-size: var(--icon-size) var(--icon-size);\n  mask-repeat: no-repeat;\n  mask-position: center;\n  mask: url(\"/assets/sun.svg\");\n  -webkit-mask: url(\"/assets/sun.svg\");\n  background-color: rgba(255, 255, 255, 0.492);\n}\n\n.nightmode .rfd-search {\n  --background-color-page: #19181f;\n  --background-color-page-semi: #1e1d25ff;\n  --brightness-multiplier: 100%;\n  --background-color: #282630;\n  --background-color-2: var(--background-color-page-semi);\n  --title-color: rgb(217, 217, 217);\n  --subtitle-color: rgba(255, 255, 255, 0.62);\n  --subtitle-color-2: rgba(255, 255, 255, 0.492);\n  --subtitle-color-3: rgba(255, 255, 255, 0.39);\n  --subtitle-color-4: rgba(255, 255, 255, 0.28);\n  --flash-color: hotpink;\n  --border-color: #565656;\n}\n\n.nightmode .rfd-search logbook-result .result-entry-container {\n  border-bottom: solid #212029 1px;\n}\n\n.nightmode .rfd-search page-button {\n  background-color: var(--background-color);\n  color: var(--subtitle-color-2);\n}\n\n.nightmode .rfd-search .page-control-current {\n  color: var(--subtitle-color-2);\n  background-color: var(--background-color-2);\n}\n\n.nightmode .rfd-search #page-control-next.disabled,\n.nightmode .rfd-search #page-control-previous.disabled {\n  background-color: var(--background-color);\n}\n\n.nightmode .rfd-search #search-widget {\n  box-shadow: 0px 0px 10px rgba(1, 1, 1, 0.2);\n}\n\n.nightmode .rfd-search .gray-background input {\n  background-color: var(--background-color);\n}\n\n@media (hover: hover) and (pointer: fine) {\n  .nightmode .icon-nightmode-toggle:hover {\n    background-color: var(--flash-color);\n  }\n  .nightmode .result-entry:hover {\n    border-radius: calc(var(--radius) * 0.7);\n  }\n  .nightmode .mouse-over:hover {\n    color: var(--flash-color);\n  }\n  .nightmode .icon:hover {\n    background-color: var(--flash-color);\n  }\n  .nightmode .result-entry-container:hover {\n    background-color: var(--background-color-2);\n  }\n  .nightmode .page-control-page:hover {\n    border-color: var(--flash-color);\n    color: var(--flash-color);\n    z-index: 2;\n  }\n  .nightmode .page-control-current:hover {\n    border-color: var(--background-color-2);\n    color: var(--subtitle-color-2);\n    z-index: 2;\n  }\n  .nightmode #page-control-next.disabled:hover,\n.nightmode #page-control-previous.disabled:hover {\n    color: var(--subtitle-color-2);\n  }\n  .nightmode #page-control-next:hover,\n.nightmode #page-control-previous:hover {\n    border-color: var(--flash-color);\n    color: var(--flash-color);\n    z-index: 2;\n  }\n  .nightmode a:hover {\n    color: var(--flash-color);\n  }\n  .nightmode .page-control-page:hover {\n    color: var(--flash-color);\n  }\n  .nightmode .page-control-current:hover {\n    color: var(--subtitle-color-2);\n  }\n  .nightmode #page-control-next.disabled:hover,\n.nightmode #page-control-previous.disabled:hover {\n    color: var(--subtitle-color-2);\n  }\n}\n\nhtml {\n  --background-color-page: #e8e8e8;\n  --base-mask-size: 2rem;\n  --icon-size: var(--base-mask-size);\n  --big-screen-multiplier: 0.45;\n}\n\n.rfd-search {\n  --background-color-page-semi: #eeeeef;\n  --brightness-multiplier: 100%;\n  --background-color: white;\n  --background-color-2: #dadada;\n  --title-color: rgba(0, 0, 0, 0.75);\n  --subtitle-color: rgba(0, 0, 0, 0.65);\n  --subtitle-color-2: rgba(0, 0, 0, 0.5);\n  --subtitle-color-3: rgba(0, 0, 0, 0.45);\n  --subtitle-color-4: rgba(0, 0, 0, 0.35);\n  --flash-color: var(--flash-color);\n  --border-color: #444444;\n  --base-padding: 10pt;\n  --base-font-size: 1.1rem;\n  --base-font-size-2: calc(var(--base-font-size) * 0.9);\n  --base-font-size-3: calc(var(--base-font-size-2) * 0.9);\n  --base-font-size-4: calc(var(--base-font-size-3) * 1);\n  --base-result-icon-size: 1.7rem;\n  --padding: var(--base-padding);\n  --font-size: var(--base-font-size);\n  --font-size-2: var(--base-font-size-2);\n  --font-size-3: var(--base-font-size-3);\n  --font-size-4: var(--base-font-size-4);\n  --page-control-font-size: 1.3rem;\n  --page-control-size: calc(var(--page-control-font-size) * 1.8);\n  --result-icon-size: var(--base-result-icon-size);\n  --radius: 10pt;\n  --page-control-radius: 5pt;\n  --radius-search-results: 0pt;\n  --border-width: 1pt;\n  --search-container-z-index: 1030;\n  --gray-view-opacity-animation-duration: 0.2s;\n  margin-bottom: 16px;\n}\n\n.rfd-search crag-icon *,\n.rfd-search buttress-icon *,\n.rfd-search topo-dot *,\n.rfd-search external-link-icon * {\n  width: var(--result-icon-size);\n  height: var(--result-icon-size);\n}\n\n.rfd-search select {\n  background-color: var(--background-color);\n  color: var(--subtitle-color);\n  border: none;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  text-overflow: \"\";\n}\n\n.rfd-search {\n  width: 100%;\n  font-size: var(--font-size);\n  position: relative;\n}\n\n.rfd-search ::-webkit-scrollbar-thumb {\n  filter: brightness(80%);\n}\n\n.rfd-search #searchbar-footer,\n.rfd-search #searchbar-query-suggestion-flex {\n  filter: brightness(90%);\n}\n\n.rfd-search ::-webkit-scrollbar {\n  height: 10pt;\n  width: 5pt;\n}\n\n.rfd-search ::-webkit-scrollbar-thumb {\n  background: var(--background-color-2);\n}\n\n.rfd-search ::-webkit-scrollbar-track {\n  background: rgba(1, 1, 1, 0);\n}\n\n.rfd-search scrollbar-thumb {\n  background: var(--background-color-2);\n}\n\n.rfd-search scrollbar-track {\n  background: rgba(1, 1, 1, 0);\n}\n\n.rfd-search ul {\n  list-style-type: none;\n  margin: 0pt;\n  padding: 0pt;\n  padding-bottom: var(--padding);\n  outline: none;\n}\n\n.rfd-search ul a:link {\n  color: unset;\n}\n\n.rfd-search ul a:visited {\n  color: unset;\n}\n\n.rfd-search ul a:hover {\n  color: unset;\n}\n\n.rfd-search ul a:active {\n  color: unset;\n}\n\n.rfd-search input {\n  outline: none;\n  width: 100%;\n  font-size: var(--font-size);\n  border-radius: var(--radius);\n  color: rgba(0, 0, 0, 0);\n  background-color: var(--background-color);\n  color: var(--title-color);\n  border: none;\n  transition-property: all;\n}\n\n.rfd-search a {\n  text-decoration: none !important;\n}\n\n.rfd-search a:link {\n  color: cadetblue;\n}\n\n.rfd-search a:visited {\n  color: cadetblue;\n}\n\n.rfd-search a:active {\n  color: var(--flash-color);\n}\n\n.rfd-search #name-dash {\n  display: none;\n}\n\n.rfd-search .logged-clean logbook-indicator,\n.rfd-search .logged-followed logbook-indicator,\n.rfd-search .logged-dogged logbook-indicator {\n  display: block;\n}\n\n.rfd-search .on-wishlist wishlist-indicator {\n  display: block;\n}\n\n.rfd-search .logged-clean.on-wishlist wishlist-indicator,\n.rfd-search .logged-followed.on-wishlist wishlist-indicator,\n.rfd-search .logged-dogged.on-wishlist wishlist-indicator {\n  right: 24px;\n}\n\n.rfd-search logbook-indicator {\n  display: none;\n  position: absolute;\n  top: 0px;\n  right: -6px;\n  width: calc(var(--result-icon-size) * 1);\n  height: calc(var(--result-icon-size) * 1);\n}\n\n.rfd-search wishlist-indicator {\n  display: none;\n  position: absolute;\n  top: -1px;\n  right: 4px;\n  width: calc(var(--result-icon-size) * 0.5);\n  height: calc(var(--result-icon-size) * 0.5);\n}\n\n.rfd-search input,\n.rfd-search #search-query-description,\n.rfd-search .search-results-search-query-description {\n  padding: calc(var(--padding) * 0.65);\n  padding-left: var(--padding);\n}\n\n.rfd-search #filter-icon {\n  left: 16px;\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  background-color: var(--subtitle-color);\n}\n\n.rfd-search #filter-bar-container input {\n  width: calc(100% - (var(--padding) * 2 - 8px));\n  display: block;\n  padding: var(--padding);\n  padding-top: calc(var(--padding) - 2px);\n  padding-bottom: calc(var(--padding) - 2px);\n  padding-left: 40px;\n  margin: var(--padding);\n  margin-right: calc(var(--padding) - 4px);\n  margin-left: calc(var(--padding) - 4px);\n  border-width: var(--border-width);\n  background-color: var(--background-color-page-semi);\n  transition: all 0.2s;\n}\n\n.rfd-search #name-and-grade {\n  display: flex;\n  justify-content: space-between;\n  font-weight: 500;\n}\n\n.rfd-search #gray-view {\n  width: 100vw;\n  height: 140vh;\n  background-color: rgba(0, 0, 0, 0.7);\n  position: fixed;\n  top: 0vw;\n  left: 0vw;\n  z-index: calc(var(--search-container-z-index) - 1);\n  opacity: 1;\n  backdrop-filter: blur(5px);\n  -webkit-backdrop-filter: blur(5px);\n}\n\n.rfd-search #search-container {\n  position: relative;\n  z-index: var(--search-container-z-index);\n}\n\n.rfd-search #search-container input {\n  padding-right: calc(var(--icon-size) + var(--padding));\n  padding-left: calc(var(--icon-size) + var(--padding) - 4px);\n  transition: all 0.2s;\n}\n\n.rfd-search #searchbar-inner-container {\n  position: relative;\n}\n\n.rfd-search #search-absolute {\n  position: absolute;\n  top: 0;\n  width: 100%;\n  transition: transform 0.3s ease-out;\n}\n\n.rfd-search #search-results-header-container,\n.rfd-search #search-widget,\n.rfd-search #search-results-widget {\n  border-width: var(--border-width);\n  background-color: var(--background-color);\n  transition: all 0.2s;\n}\n\n.rfd-search #search-widget,\n.rfd-search #search-results-widget {\n  overflow: hidden;\n}\n\n.rfd-search #search-widget {\n  box-shadow: 0px 0px 10px rgba(1, 1, 1, 0.1);\n  transition: opacity 0.3s;\n  border-radius: var(--radius);\n}\n\n.rfd-search #search-results-header-container,\n.rfd-search #search-results-widget {\n  margin-left: calc(-50vw + 50%);\n  margin-right: calc(-51vw + 51%);\n}\n\n.rfd-search #searchbar-footer {\n  background-color: var(--background-color);\n  font-size: var(--font-size-4);\n  color: var(--subtitle-color-2);\n  border-bottom-left-radius: var(--radius);\n  border-bottom-right-radius: var(--radius);\n  filter: brightness(90%);\n}\n\n.rfd-search #search-results-container {\n  contain: layout paint;\n  overflow-y: auto;\n  overflow-x: hidden;\n  overscroll-behavior-y: contain;\n  scrollbar-color: var(--background-color-2) rgba(1, 1, 1, 0);\n  transition: opacity 0.3s ease-out;\n}\n\n.rfd-search #search-icon {\n  position: absolute;\n  left: 4pt;\n  top: 50%;\n  transform: translateY(-50%);\n  background-color: var(--subtitle-color);\n}\n\n.rfd-search #filter-bar-container {\n  position: relative;\n}\n\n.rfd-search #input-hidden {\n  background-color: rgba(0, 0, 0, 0) !important;\n}\n\n.rfd-search #delete-search-text-button,\n.rfd-search #filter-delete-text-button {\n  position: absolute;\n  right: 0px;\n  top: 50%;\n  transform: translateY(-50%);\n  cursor: pointer;\n}\n\n.rfd-search #filter-delete-text-button {\n  right: 10px;\n}\n\n.rfd-search #return-key-action {\n  padding: var(--padding);\n  margin-top: calc(var(--padding) * 5);\n}\n\n.rfd-search #search-results-header-container {\n  backface-visibility: hidden;\n  background-color: var(--background-color);\n  position: sticky;\n  z-index: 2;\n  width: 100vw;\n  margin-left: -15px;\n}\n\n.rfd-search .routes-viewer-header {\n  padding-left: var(--padding);\n  width: 100%;\n}\n\n.rfd-search .result-icon {\n  display: inline-block;\n}\n\n.rfd-search .gray-background input {\n  background-color: #e0e0e0;\n  transition: background-color 0.2s ease;\n}\n\n.rfd-search .normal-background input {\n  background-color: var(--background-color);\n  transition: background-color 0.2s ease;\n}\n\n.rfd-search .searchbar-help-text-container {\n  transition: height 0.2s ease;\n  overscroll-behavior-y: contain;\n}\n\n.rfd-search #searchbar-help-text {\n  padding: calc(var(--padding) * 2);\n}\n\n.rfd-search #placeholder-short-display {\n  color: var(--title-color);\n  opacity: 0.5;\n  margin-left: -6px;\n}\n\n.rfd-search #searchbar-short-display-container {\n  position: absolute;\n  left: 4pt;\n  transform: translateY(-8%);\n}\n\n.rfd-search #search-icon-short-display {\n  background-color: var(--subtitle-color-3);\n  display: inline-block;\n  transform: translateY(30%);\n}\n\n.rfd-search #searchbar-query-suggestion-flex {\n  position: relative;\n  padding-right: calc(var(--icon-size) + var(--padding));\n  border-bottom-left-radius: var(--radius);\n  border-bottom-right-radius: var(--radius);\n}\n\n.rfd-search .ascent-notes a,\n.rfd-search .ascent-details a {\n  color: #bbdcee !important;\n  opacity: 0.7;\n  line-height: 1.3em;\n}\n\n.rfd-search #help-button,\n.rfd-search #filter-bar-help-button {\n  position: absolute;\n  right: 0pt;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n.rfd-search #searchbar-query-suggestion-flex,\n.rfd-search #search-query-description,\n.rfd-search .search-results-search-query-description {\n  font-size: var(--font-size-3);\n  color: var(--subtitle-color-2);\n  background-color: var(--background-color);\n}\n\n.rfd-search #focus-searchbar {\n  display: none;\n}\n\n.rfd-search .important {\n  font-weight: bold;\n  color: #f8ca23;\n}\n\n.rfd-search .pitch-grade {\n  font-weight: bold;\n  color: var(--title-color);\n}\n\n.rfd-search .pitch-number {\n  font-weight: bold;\n  color: var(--title-color);\n}\n\n.rfd-search .pitch-length {\n  font-weight: 500;\n  color: var(--title-color);\n}\n\n.rfd-search .logged {\n  background-color: green;\n}\n\n.rfd-search .page-control {\n  display: flex;\n  justify-content: flex-end;\n  align-content: center;\n  margin-top: var(--padding);\n  margin-bottom: var(--padding);\n  margin-left: calc(-50vw + 50%);\n  margin-right: calc(-50vw + 50% + var(--padding));\n}\n\n.rfd-search .fa-button {\n  border: 0;\n  width: 40px;\n  height: 40px;\n  background-color: var(--background-color);\n  border-radius: var(--radius);\n  color: var(--subtitle-color);\n  transition: background-color 0.2s ease-out;\n}\n\n.rfd-search .fa-button:hover {\n  background-color: var(--background-color-2);\n}\n\n.rfd-search .fa-button i {\n  transition: rotate 0.2s ease-out;\n}\n\n.rfd-search .hidden {\n  display: none;\n}\n\n.rfd-search #page-control-previous,\n.rfd-search #page-control-next,\n.rfd-search page-button {\n  display: flex;\n  align-items: center;\n  text-align: center;\n  aspect-ratio: 1/1;\n  font-family: monospace;\n  background-color: var(--background-color);\n  border: solid;\n  color: var(--subtitle-color-2);\n  margin-left: calc(var(--border-width) * -1);\n  border-width: var(--border-width);\n  border-color: var(--background-color-2);\n  justify-content: center;\n  font-weight: 900;\n  cursor: pointer;\n  font-size: var(--page-control-font-size);\n  height: var(--page-control-size);\n  width: var(--page-control-size);\n}\n\n.rfd-search #page-control-previous {\n  border-top-left-radius: var(--page-control-radius);\n  border-bottom-left-radius: var(--page-control-radius);\n}\n\n.rfd-search #page-control-next {\n  border-top-right-radius: var(--page-control-radius);\n  border-bottom-right-radius: var(--page-control-radius);\n}\n\n.rfd-search page-button {\n  display: flex;\n  justify-content: center;\n  align-content: center;\n}\n\n.rfd-search section-header {\n  display: flex;\n  justify-content: space-between;\n  font-size: var(--font-size-3);\n  color: var(--subtitle-color-2);\n  padding: var(--padding);\n  padding-right: calc(var(--padding) / 2);\n  padding-top: calc(var(--padding) / 2);\n  padding-bottom: calc(var(--padding) / 2 - 2px);\n  background-color: var(--background-color-page-semi);\n}\n\n.rfd-search .page-control-current {\n  border-color: var(--background-color-2);\n  color: var(--subtitle-color-2);\n  background-color: var(--background-color-2);\n  filter: brightness(110%);\n  cursor: default;\n}\n\n.rfd-search #page-control-next.disabled,\n.rfd-search #page-control-previous.disabled {\n  background-color: var(--background-color);\n  border-color: var(--background-color-2);\n  cursor: default;\n  opacity: 0.4;\n}\n\n.rfd-search .routes-viewer-controls {\n  color: var(--subtitle-color-2);\n  font-size: 0.9em;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  margin-bottom: 0px;\n}\n\n.rfd-search .routes-viewer-sort-order {\n  flex-grow: 0;\n  font-family: monospace;\n  font-weight: 600;\n  margin-bottom: 0px;\n}\n\n.rfd-search .result-entry {\n  display: flex;\n}\n\n.rfd-search .result-icon-area {\n  margin-top: -4pt;\n  width: 30pt;\n}\n\n.rfd-search .ascent-details {\n  display: flex;\n  justify-content: space-between;\n  margin-top: 10px;\n  color: var(--subtitle-color-4);\n  font-size: calc(var(--font-size-4) * 0.9);\n}\n\n.rfd-search .ascent-notes {\n  margin-top: 14px;\n  margin-bottom: 18px;\n  font-style: italic;\n  line-height: calc(var(--font-size-4) * 1.2);\n  color: var(--subtitle-color-2);\n  font-size: calc(var(--font-size-4) * 0.9);\n}\n\n.rfd-search .result-text-area {\n  width: 100%;\n  max-width: calc(100% - 36px);\n  display: flex;\n  flex-direction: column;\n}\n\n.rfd-search .result-title {\n  overflow-x: clip;\n  text-overflow: ellipsis;\n  white-space: pre;\n}\n\n.rfd-search .result-crag-name {\n  overflow-x: clip;\n  text-overflow: ellipsis;\n}\n\n.rfd-search .result-entry-start {\n  margin-bottom: 6pt;\n  display: block;\n}\n\n.rfd-search .result-entry-end {\n  display: flex;\n  align-items: baseline;\n}\n\n.rfd-search .selected .result-entry {\n  background-color: var(--background-color-2);\n}\n\n.rfd-search .selected .result-entry * {\n  background-color: var(--background-color-2);\n}\n\n.rfd-search .footer-content {\n  padding: 10px;\n}\n\n.rfd-search .keycode {\n  display: none;\n  background-color: var(--background-color-2);\n  border-radius: 3pt;\n  padding: 4pt;\n}\n\n.rfd-search .display-if-necessary {\n  display: block;\n}\n\n.rfd-search .result-entry {\n  font-size: var(--font-size-2);\n  color: var(--title-color);\n  padding: var(--padding);\n  padding-top: calc(var(--padding) + 4px);\n  padding-bottom: calc(var(--padding) + 2px);\n  display: flex;\n}\n\n.rfd-search .result-entry-end {\n  white-space: nowrap;\n}\n\n.rfd-search .result-entry-start {\n  white-space: nowrap;\n}\n\n.rfd-search .result-grade {\n  font-size: var(--font-size-3);\n  font-style: italic;\n  color: var(--subtitle-color);\n  white-space: pre;\n}\n\n.rfd-search .result-star-count {\n  font-size: var(--font-size-2);\n  font-style: italic;\n  font-weight: bolder;\n  color: hotpink;\n}\n\n.rfd-search .result-crag-name {\n  font-size: var(--font-size-4);\n  color: var(--subtitle-color-2);\n}\n\n.rfd-search .result-context,\n.rfd-search .result-sub-context {\n  font-style: italic;\n  font-size: var(--font-size-4);\n  color: var(--subtitle-color-4);\n}\n\n.rfd-search .search-container {\n  background-color: none;\n}\n\n.rfd-search .loader-stopped,\n.rfd-search .divider {\n  opacity: 1;\n  height: var(--border-width);\n  background-color: var(--background-color-2);\n}\n\n.rfd-search .divider-no-height-set {\n  opacity: 1;\n  background-color: var(--background-color-2);\n}\n\n.rfd-search .icon {\n  background-color: var(--subtitle-color);\n  margin-right: 4pt;\n  cursor: pointer;\n}\n\n.rfd-search .icon:focus {\n  background-color: var(--flash-color);\n}\n\n.rfd-search .icon-magnifying-glass {\n  width: var(--icon-size);\n  height: var(--icon-size);\n  -webkit-mask-size: var(--icon-size) var(--icon-size);\n  -webkit-mask-repeat: no-repeat;\n  -webkit-mask-position: center;\n  mask-size: var(--icon-size) var(--icon-size);\n  mask-repeat: no-repeat;\n  mask-position: center;\n  mask: url(\"/assets/magnifying-glass.svg\");\n  -webkit-mask: url(\"/assets/magnifying-glass.svg\");\n}\n\n.rfd-search .icon-question-mark {\n  width: var(--icon-size);\n  height: var(--icon-size);\n  -webkit-mask-size: var(--icon-size) var(--icon-size);\n  -webkit-mask-repeat: no-repeat;\n  -webkit-mask-position: center;\n  mask-size: var(--icon-size) var(--icon-size);\n  mask-repeat: no-repeat;\n  mask-position: center;\n  mask: url(\"/assets/question-mark.svg\");\n  -webkit-mask: url(\"/assets/question-mark.svg\");\n}\n\n.rfd-search .icon-external-link {\n  width: var(--icon-size);\n  height: var(--icon-size);\n  -webkit-mask-size: var(--icon-size) var(--icon-size);\n  -webkit-mask-repeat: no-repeat;\n  -webkit-mask-position: center;\n  mask-size: var(--icon-size) var(--icon-size);\n  mask-repeat: no-repeat;\n  mask-position: center;\n  mask: url(\"/assets/external-link.svg\");\n  -webkit-mask: url(\"/assets/external-link.svg\");\n}\n\n.rfd-search .icon-circle-times {\n  width: var(--icon-size);\n  height: var(--icon-size);\n  -webkit-mask-size: var(--icon-size) var(--icon-size);\n  -webkit-mask-repeat: no-repeat;\n  -webkit-mask-position: center;\n  mask-size: var(--icon-size) var(--icon-size);\n  mask-repeat: no-repeat;\n  mask-position: center;\n  mask: url(\"/assets/circle-times.svg\");\n  -webkit-mask: url(\"/assets/circle-times.svg\");\n}\n\n.rfd-search .result-entry-container {\n  line-height: 1;\n}\n\n.rfd-search #search-results-widget .result-entry-container {\n  border-bottom: solid var(--background-color-page-semi) 1px;\n}\n\n.rfd-search route-result .result-text-area,\n.rfd-search logbook-result .result-text-area {\n  max-width: 100%;\n  padding-left: 40px;\n}\n\n.rfd-search .ascent-style-indicator {\n  margin-left: -15px;\n  margin-right: 4px;\n}\n\n.rfd-search .mouse-over {\n  color: cadetblue;\n  cursor: pointer;\n}\n\n.rfd-search .mouse-over:focus {\n  color: var(--flash-color);\n}\n\n.rfd-search .fade-in {\n  -webkit-animation: fadein var(--gray-view-opacity-animation-duration) linear forwards;\n  animation: fadein var(--gray-view-opacity-animation-duration) linear forwards;\n}\n\n@-webkit-keyframes fadein {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n@-moz-keyframes fadein {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n@-o-keyframes fadein {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n@keyframes fadein {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n.rfd-search .fade-out {\n  -webkit-animation: fadeout var(--gray-view-opacity-animation-duration) linear forwards;\n  animation: fadeout var(--gray-view-opacity-animation-duration) linear forwards;\n}\n\n@-webkit-keyframes fadeout {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n\n@-moz-keyframes fadeout {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n\n@-o-keyframes fadeout {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n\n@keyframes fadeout {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n\n.loader-stopped {\n  position: relative;\n  background: var(--background-color-2);\n  overflow: hidden;\n}\n\n.loader-spinning {\n  position: relative;\n  height: 2px;\n  background: transparent;\n  overflow: hidden;\n  animation: loader-rainbow 1.5s infinite linear;\n}\n\n.loader-spinning:after {\n  display: block;\n  content: \" \";\n  position: absolute;\n  height: 100%;\n  background: hotpink;\n  left: 0;\n  transform: translate3d(-150%, 0, 0);\n  animation: loader-stripe 1.5s infinite linear;\n}\n\n@keyframes loader-stripe {\n  0% {\n    transform: translate3d(-100%, 0, 0);\n  }\n  100% {\n    transform: translate3d(100%, 0, 0);\n  }\n}\n\n@keyframes loader-rainbow {\n  0% {\n    background: var(--background-color-2);\n  }\n  50% {\n    background: hotpink;\n  }\n  100% {\n    background: var(--background-color-2);\n  }\n}\n\n@media only screen and (min-width: 768px) {\n  :root {\n    --icon-size: 2rem;\n  }\n  .big-screen-spacer {\n    display: block;\n    min-height: 1rem;\n  }\n  search-results-viewer {\n    margin-top: 12px;\n  }\n  .rfd-search {\n    --page-control-size: 18pt;\n    --radius: 4pt;\n    --page-control-radius: 4pt;\n    --radius-search-results: 4pt;\n    --border-width: 1pt;\n    --font-size: 0.9rem;\n    --page-control-font-size: var(--font-size-3);\n    --font-size-2: calc(var(--font-size) * 0.9);\n    --font-size-3: calc(var(--font-size-2) * 0.9);\n    --font-size-4: calc(var(--font-size-3) * 0.9);\n    --result-icon-size: 1.5rem;\n  }\n  .rfd-search logbook-indicator {\n    right: -5px;\n  }\n  .rfd-search wishlist-indicator {\n    right: 0px;\n  }\n  .rfd-search #name-dash {\n    display: inline-block;\n  }\n  .rfd-search #star-count-and-route-grade {\n    display: flex;\n    flex-direction: row-reverse;\n    translate: 0 1.5px;\n  }\n  .rfd-search #star-count-and-route-grade * {\n    margin-right: 0.2rem;\n  }\n  .rfd-search #search-icon {\n    background-color: var(--subtitle-color);\n  }\n  .rfd-search input {\n    padding-top: 4pt;\n    padding-bottom: 4pt;\n  }\n  .rfd-search #focus-searchbar,\n.rfd-search .keycode {\n    display: unset;\n  }\n  .rfd-search #search-results-header-container {\n    border-top-left-radius: var(--radius);\n    border-top-right-radius: var(--radius);\n    width: 100%;\n  }\n  .rfd-search #searchbar-help-text {\n    padding: calc(var(--base-padding) * var(--big-screen-multiplier) * 2);\n  }\n  .rfd-search #search-results-header-container,\n.rfd-search #search-results-widget {\n    border: solid var(--background-color-2) var(--border-width);\n    margin-right: 50%;\n    margin-left: 50%;\n    transform: translateX(-50%);\n    min-width: 700px;\n    box-shadow: 0px 0px 10px rgba(1, 1, 1, 0.1);\n  }\n  .rfd-search #search-results-widget {\n    border-top-width: 0;\n  }\n  .rfd-search #search-results-header-container {\n    border-bottom-width: 0;\n  }\n  .rfd-search #placeholder-short-display {\n    margin-left: 0px;\n    position: absolute;\n    white-space: nowrap;\n    transform: translate(4px, 15px);\n  }\n  .rfd-search #searchbar-short-display-container {\n    transform: translateY(-26%);\n  }\n  .rfd-search #search-results-header-container {\n    border-top-left-radius: var(--radius-search-results);\n    border-top-right-radius: var(--radius-search-results);\n  }\n  .rfd-search .page-control {\n    width: 400pt;\n    margin-right: 50%;\n    margin-left: 50%;\n    transform: translateX(-50%);\n    min-width: 700px;\n  }\n  .rfd-search #filter-bar-container input {\n    padding-top: calc(var(--padding) / 2);\n    padding-bottom: calc(var(--padding) / 2);\n  }\n  .rfd-search #search-container {\n    max-width: 500pt;\n    left: 50%;\n    transform: translateX(-50%);\n  }\n  .rfd-search #search-results-header-container {\n    width: unset;\n  }\n  .rfd-search #searchbar-query-suggestion-flex,\n.rfd-search #search-query-description,\n.rfd-search .search-results-search-query-description {\n    font-size: calc(var(--font-size-2) * 0.9);\n  }\n  .rfd-search .result-entry-container {\n    line-height: 1;\n  }\n  .rfd-search .ascent-details {\n    font-size: var(--font-size-3);\n  }\n  .rfd-search .ascent-notes {\n    font-size: var(--font-size-3);\n  }\n  .rfd-search .result-entry {\n    padding-top: calc(var(--padding) / 1);\n    padding-bottom: calc(var(--padding) / 1);\n    align-items: center;\n  }\n  .rfd-search .result-crag-name {\n    padding-bottom: 2pt;\n  }\n  .rfd-search .selected .result-entry {\n    border-radius: calc(var(--radius) * 0.7);\n  }\n  .rfd-search .icon {\n    margin-right: unset;\n  }\n  .rfd-search .divider-no-height-set {\n    margin: 4px;\n  }\n  .rfd-search .result-entry-end {\n    padding-left: var(--padding);\n    flex-direction: column;\n    align-items: baseline;\n    flex-grow: 1;\n  }\n  .rfd-search .footer-content {\n    padding: 4px;\n    padding-right: 10px;\n  }\n  .rfd-search .nightmode #search-results-header-container,\n.rfd-search .nightmode #search-results-widget {\n    box-shadow: 0px 0px 10px rgba(1, 1, 1, 0.2);\n  }\n  .rfd-search .result-icon-area {\n    margin-top: unset;\n  }\n  .rfd-search .result-text-area {\n    flex-direction: row;\n    justify-content: space-between;\n  }\n  .rfd-search .result-entry-start {\n    align-self: center;\n    margin-bottom: unset;\n  }\n  .rfd-search .result-entry-end {\n    flex-direction: column;\n    align-items: flex-end;\n  }\n}";

function closestShadowPiercing(el, tagName) {
    const closest = el.closest(tagName);
    if (!closest) {
        const shadow = el.getRootNode();
        if (!(shadow instanceof ShadowRoot))
            return null;
        return shadow.host.closest(tagName);
    }
    return closest;
}
const parseElementTags = (el, tag, parse) => (el.getAttribute(tag) || '')
    .trim()
    .split(/\s+/g)
    .map((tagPart) => parse(tagPart));
const registry = new Map();
const observer$1 = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
        if (mutation.type === 'attributes') {
            const tag = mutation.attributeName;
            const el = mutation.target;
            if (el instanceof Element && registry.has(tag)) {
                const [parse, found] = registry.get(tag);
                for (const [tagName, ...meta] of parseElementTags(el, tag, parse)) {
                    const controller = closestShadowPiercing(el, tagName);
                    if (controller)
                        found(el, controller, tag, ...meta);
                }
            }
        }
        else if (mutation.addedNodes.length) {
            for (const node of mutation.addedNodes) {
                if (node instanceof Element)
                    observeElementForTags(node);
            }
        }
    }
});
const registerTag = (tag, parse, found) => {
    if (registry.has(tag))
        throw new Error('duplicate tag');
    registry.set(tag, [parse, found]);
};
const observeElementForTags = (root) => {
    for (const [tag, [parse, found]] of registry) {
        for (const el of root.querySelectorAll(`[${tag}]`)) {
            for (const [tagName, ...meta] of parseElementTags(el, tag, parse)) {
                const controller = closestShadowPiercing(el, tagName);
                if (controller)
                    found(el, controller, tag, ...meta);
            }
        }
        if (root instanceof Element && root.hasAttribute(tag)) {
            for (const [tagName, ...meta] of parseElementTags(root, tag, parse)) {
                const controller = closestShadowPiercing(root, tagName);
                if (controller)
                    found(root, controller, tag, ...meta);
            }
        }
    }
    observer$1.observe(root instanceof Element ? root.ownerDocument : root, {
        childList: true,
        subtree: true,
        attributeFilter: Array.from(registry.keys())
    });
};

const getPropertyDescriptor = (instance, key) => {
    while (instance) {
        const descriptor = Object.getOwnPropertyDescriptor(instance, key);
        if (descriptor)
            return descriptor;
        instance = Object.getPrototypeOf(instance);
    }
};

const getType = (descriptor) => {
    if (descriptor) {
        if (typeof descriptor.value === 'function')
            return 'method';
        if (typeof descriptor.get === 'function')
            return 'getter';
        if (typeof descriptor.set === 'function')
            return 'setter';
    }
    return 'field';
};
function createMark(validate, initialize) {
    const marks = new WeakMap();
    const get = (proto) => {
        if (!marks.has(proto)) {
            const parent = Object.getPrototypeOf(proto);
            marks.set(proto, new Set(parent ? get(parent) || [] : []));
        }
        return marks.get(proto);
    };
    const marker = (proto, name, descriptor) => {
        if (get(proto).has(name))
            return;
        validate({ name, kind: getType(descriptor) });
        get(proto).add(name);
    };
    marker.static = Symbol();
    const getMarks = (instance) => {
        const proto = Object.getPrototypeOf(instance);
        for (const key of proto.constructor[marker.static] || []) {
            marker(proto, key, Object.getOwnPropertyDescriptor(proto, key));
        }
        return new Set(get(proto));
    };
    return [
        marker,
        getMarks,
        (instance) => {
            for (const name of getMarks(instance)) {
                const access = getPropertyDescriptor(instance, name) || {
                    value: void 0,
                    configurable: true,
                    writable: true,
                    enumerable: true
                };
                const newDescriptor = initialize(instance, { name, kind: getType(access), access }) || access;
                Object.defineProperty(instance, name, Object.assign({ configurable: true, enumerable: true }, newDescriptor));
            }
        }
    ];
}

const abilityMarkers = new WeakMap();
const createAbility = (decorate) => {
    return (Class) => {
        const markers = abilityMarkers.get(Class);
        if (markers?.has(decorate))
            return Class;
        const NewClass = decorate(Class);
        Object.defineProperty(NewClass, 'name', { value: Class.name });
        const newMarkers = new Set(markers);
        newMarkers.add(decorate);
        abilityMarkers.set(NewClass, newMarkers);
        return NewClass;
    };
};

const attachShadowCallback = Symbol();
const attachInternalsCallback = Symbol();
const shadows$1 = new WeakMap();
const internals = new WeakMap();
const internalsCalled = new WeakSet();
const controllable = createAbility((Class) => class extends Class {
    // TS mandates Constructors that get mixins have `...args: any[]`
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    constructor(...args) {
        super(...args);
        const shadowRoot = this.shadowRoot;
        if (shadowRoot && shadowRoot !== shadows$1.get(this))
            this[attachShadowCallback](shadowRoot);
        if (!internalsCalled.has(this)) {
            try {
                this.attachInternals();
            }
            catch {
                // Ignore errors
            }
        }
    }
    connectedCallback() {
        this.setAttribute('data-catalyst', '');
        super.connectedCallback?.();
    }
    attachShadow(...args) {
        const shadowRoot = super.attachShadow(...args);
        this[attachShadowCallback](shadowRoot);
        return shadowRoot;
    }
    [attachShadowCallback](shadowRoot) {
        shadows$1.set(this, shadowRoot);
    }
    attachInternals() {
        if (internals.has(this) && !internalsCalled.has(this)) {
            internalsCalled.add(this);
            return internals.get(this);
        }
        const elementInternals = super.attachInternals();
        this[attachInternalsCallback](elementInternals);
        internals.set(this, elementInternals);
        return elementInternals;
    }
    [attachInternalsCallback](elementInternals) {
        const shadowRoot = elementInternals.shadowRoot;
        if (shadowRoot && shadowRoot !== shadows$1.get(this)) {
            this[attachShadowCallback](shadowRoot);
        }
    }
});

const dasherize = (str) => String(typeof str === 'symbol' ? str.description : str)
    .replace(/([A-Z]($|[a-z]))/g, '-$1')
    .replace(/--/g, '-')
    .replace(/^-|-$/, '')
    .toLowerCase();
const mustDasherize = (str, type = 'property') => {
    const dashed = dasherize(str);
    if (!dashed.includes('-')) {
        throw new DOMException(`${type}: ${String(str)} is not a valid ${type} name`, 'SyntaxError');
    }
    return dashed;
};

const targetChangedCallback = Symbol();
const targetsChangedCallback = Symbol();
const [target, getTarget, initializeTarget] = createMark(({ name, kind }) => {
    if (kind === 'getter')
        throw new Error(`@target cannot decorate get ${String(name)}`);
}, (instance, { name, access }) => {
    const selector = [
        `[data-target~="${instance.tagName.toLowerCase()}.${dasherize(name)}"]`,
        `[data-target~="${instance.tagName.toLowerCase()}.${String(name)}"]`
    ];
    const find = findTarget(instance, selector.join(', '), false);
    return {
        get: find,
        set: () => {
            if (access?.set)
                access.set.call(instance, find());
        }
    };
});
const [targets, getTargets, initializeTargets] = createMark(({ name, kind }) => {
    if (kind === 'getter')
        throw new Error(`@target cannot decorate get ${String(name)}`);
}, (instance, { name, access }) => {
    const selector = [
        `[data-targets~="${instance.tagName.toLowerCase()}.${dasherize(name)}"]`,
        `[data-targets~="${instance.tagName.toLowerCase()}.${String(name)}"]`
    ];
    const find = findTarget(instance, selector.join(', '), true);
    return {
        get: find,
        set: () => {
            if (access?.set)
                access.set.call(instance, find());
        }
    };
});
function setTarget(el, controller, tag, key) {
    const get = tag === 'data-targets' ? getTargets : getTarget;
    if (controller instanceof ShadowRoot) {
        controller = controllers.get(controller);
    }
    if (controller && get(controller)?.has(key)) {
        controller[key] = {};
    }
}
registerTag('data-target', (str) => str.split('.'), setTarget);
registerTag('data-targets', (str) => str.split('.'), setTarget);
const shadows = new WeakMap();
const controllers = new WeakMap();
const findTarget = (controller, selector, many) => () => {
    const nodes = [];
    const shadow = shadows.get(controller);
    if (shadow) {
        for (const el of shadow.querySelectorAll(selector)) {
            if (!el.closest(controller.tagName)) {
                nodes.push(el);
                if (!many)
                    break;
            }
        }
    }
    if (many || !nodes.length) {
        for (const el of controller.querySelectorAll(selector)) {
            if (el.closest(controller.tagName) === controller) {
                nodes.push(el);
                if (!many)
                    break;
            }
        }
    }
    return many ? nodes : nodes[0];
};
const targetable = createAbility((Class) => class extends controllable(Class) {
    constructor() {
        super();
        observeElementForTags(this);
        initializeTarget(this);
        initializeTargets(this);
    }
    [targetChangedCallback]() {
        return;
    }
    [targetsChangedCallback]() {
        return;
    }
    [attachShadowCallback](root) {
        super[attachShadowCallback]?.(root);
        shadows.set(this, root);
        controllers.set(root, this);
        observeElementForTags(root);
    }
});

const attrChangedCallback = Symbol();
const Identity = (v) => v;
let setFromMutation = false;
const attrs = new WeakMap();
const handleMutations = (mutations) => {
    for (const mutation of mutations) {
        if (mutation.type === 'attributes') {
            const name = mutation.attributeName;
            const el = mutation.target;
            const key = attrs.get(el)?.get(name);
            if (key) {
                setFromMutation = true;
                el[key] = el.getAttribute(name);
                setFromMutation = false;
            }
        }
    }
};
const observer = new MutationObserver(handleMutations);
const [attr, getAttr, initializeAttrs] = createMark(({ name }) => mustDasherize(name, '@attr'), (instance, { name, kind, access }) => {
    let cast = Identity;
    let initialValue;
    if (access.get) {
        initialValue = access.get.call(instance);
    }
    else if ('value' in access && kind !== 'method') {
        initialValue = access.value;
    }
    let value = initialValue;
    const attributeName = dasherize(name);
    const setCallback = (kind === 'method' ? access.value : access.set) || Identity;
    const getCallback = access.get || (() => value);
    if (!attrs.get(instance))
        attrs.set(instance, new Map());
    attrs.get(instance).set(attributeName, name);
    if (typeof value === 'number') {
        cast = Number;
    }
    else if (typeof value === 'boolean') {
        cast = Boolean;
    }
    else if (typeof value === 'string') {
        cast = String;
    }
    const queue = new Map();
    const requestAttrChanged = async (newValue) => {
        queue.set(name, newValue);
        if (queue.size > 1)
            return;
        await Promise.resolve();
        const changed = new Map(queue);
        queue.clear();
        instance[attrChangedCallback](changed);
    };
    return {
        get() {
            const has = instance.hasAttribute(attributeName);
            if (has) {
                return cast === Boolean ? has : cast(instance.getAttribute(attributeName));
            }
            return cast(getCallback.call(instance));
        },
        set(newValue) {
            const isInitial = newValue === null;
            if (isInitial)
                newValue = initialValue;
            const same = Object.is(value, newValue);
            value = newValue;
            setCallback.call(instance, value);
            if (setFromMutation || same || isInitial)
                return;
            requestAttrChanged(newValue);
        }
    };
});
const attrable = createAbility((Class) => class extends controllable(Class) {
    constructor() {
        super();
        initializeAttrs(this);
        observer.observe(this, { attributeFilter: Array.from(getAttr(this)).map(dasherize) });
    }
    [attrChangedCallback](changed) {
        if (!this.isConnected)
            return;
        for (const [name, value] of changed) {
            if (typeof value === 'boolean') {
                this.toggleAttribute(dasherize(name), value);
            }
            else {
                this.setAttribute(dasherize(name), String(value));
            }
        }
    }
});

const parseActionAttribute = (tag) => {
    const eventSep = tag.lastIndexOf(':');
    const methodSep = Math.max(0, tag.lastIndexOf('#')) || tag.length;
    return [tag.slice(eventSep + 1, methodSep), tag.slice(0, eventSep), tag.slice(methodSep + 1) || 'handleEvent'];
};
registerTag('data-action', parseActionAttribute, (el, controller, tag, event) => {
    el.addEventListener(event, handleEvent);
});
const actionables = new WeakSet();
// Bind a single function to all events to avoid anonymous closure performance penalty.
function handleEvent(event) {
    const el = event.currentTarget;
    for (const [tag, type, method] of parseElementTags(el, 'data-action', parseActionAttribute)) {
        if (event.type === type) {
            const controller = el.closest(tag);
            if (actionables.has(controller) && typeof controller[method] === 'function') {
                controller[method](event);
            }
            const root = el.getRootNode();
            if (root instanceof ShadowRoot) {
                const shadowController = root.host;
                if (shadowController.matches(tag) && actionables.has(shadowController)) {
                    if (typeof shadowController[method] === 'function') {
                        shadowController[method](event);
                    }
                }
            }
        }
    }
}
const actionable = createAbility((Class) => class extends controllable(Class) {
    constructor() {
        super();
        actionables.add(this);
        observeElementForTags(this);
    }
    [attachShadowCallback](root) {
        super[attachShadowCallback]?.(root);
        observeElementForTags(root);
    }
});

/**
 * Register the controller as a custom element.
 *
 * The classname is converted to a approriate tag name.
 *
 * Example: HelloController => hello-controller
 */
function register(classObject) {
    const name = dasherize(classObject.name).replace(/-(element|controller|component)$/, '');
    try {
        window.customElements.define(name, classObject);
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        window[classObject.name] = customElements.get(name);
    }
    catch (e) {
        // The only reason for window.customElements.define to throw a `NotSupportedError`
        // is if the element has already been defined.
        if (!(e instanceof DOMException && e.name === 'NotSupportedError'))
            throw e;
    }
    return classObject;
}

/**
 * Controller is a decorator to be used over a class that extends HTMLElement.
 * It will automatically `register()` the component in the customElement
 * registry, as well as ensuring `bind(this)` is called on `connectedCallback`,
 * wrapping the classes `connectedCallback` method if needed.
 */
function controller(Class) {
    return register(actionable(attrable(targetable(Class))));
}

new Promise(resolve => {
    if (document.readyState !== 'loading') {
        resolve();
    }
    else {
        document.addEventListener('readystatechange', () => resolve(), { once: true });
    }
});
new Promise(resolve => {
    const controller = new AbortController();
    controller.signal.addEventListener('abort', () => resolve());
    const listenerOptions = { once: true, passive: true, signal: controller.signal };
    const handler = () => controller.abort();
    document.addEventListener('mousedown', handler, listenerOptions);
    // eslint-disable-next-line github/require-passive-events
    document.addEventListener('touchstart', handler, listenerOptions);
    document.addEventListener('keydown', handler, listenerOptions);
    document.addEventListener('pointerdown', handler, listenerOptions);
});

/*! @license DOMPurify 2.4.1 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/2.4.1/LICENSE */

function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var hasOwnProperty$1 = Object.hasOwnProperty,
    setPrototypeOf = Object.setPrototypeOf,
    isFrozen = Object.isFrozen,
    getPrototypeOf = Object.getPrototypeOf,
    getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var freeze = Object.freeze,
    seal = Object.seal,
    create = Object.create; // eslint-disable-line import/no-mutable-exports

var _ref = typeof Reflect !== 'undefined' && Reflect,
    apply$1 = _ref.apply,
    construct = _ref.construct;

if (!apply$1) {
  apply$1 = function apply(fun, thisValue, args) {
    return fun.apply(thisValue, args);
  };
}

if (!freeze) {
  freeze = function freeze(x) {
    return x;
  };
}

if (!seal) {
  seal = function seal(x) {
    return x;
  };
}

if (!construct) {
  construct = function construct(Func, args) {
    return _construct(Func, _toConsumableArray(args));
  };
}

var arrayForEach = unapply(Array.prototype.forEach);
var arrayPop = unapply(Array.prototype.pop);
var arrayPush = unapply(Array.prototype.push);
var stringToLowerCase = unapply(String.prototype.toLowerCase);
var stringToString = unapply(String.prototype.toString);
var stringMatch = unapply(String.prototype.match);
var stringReplace = unapply(String.prototype.replace);
var stringIndexOf = unapply(String.prototype.indexOf);
var stringTrim = unapply(String.prototype.trim);
var regExpTest = unapply(RegExp.prototype.test);
var typeErrorCreate = unconstruct(TypeError);
function unapply(func) {
  return function (thisArg) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return apply$1(func, thisArg, args);
  };
}
function unconstruct(func) {
  return function () {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return construct(func, args);
  };
}
/* Add properties to a lookup table */

function addToSet(set, array, transformCaseFunc) {
  transformCaseFunc = transformCaseFunc ? transformCaseFunc : stringToLowerCase;

  if (setPrototypeOf) {
    // Make 'in' and truthy checks like Boolean(set.constructor)
    // independent of any properties defined on Object.prototype.
    // Prevent prototype setters from intercepting set as a this value.
    setPrototypeOf(set, null);
  }

  var l = array.length;

  while (l--) {
    var element = array[l];

    if (typeof element === 'string') {
      var lcElement = transformCaseFunc(element);

      if (lcElement !== element) {
        // Config presets (e.g. tags.js, attrs.js) are immutable.
        if (!isFrozen(array)) {
          array[l] = lcElement;
        }

        element = lcElement;
      }
    }

    set[element] = true;
  }

  return set;
}
/* Shallow clone an object */

function clone(object) {
  var newObject = create(null);
  var property;

  for (property in object) {
    if (apply$1(hasOwnProperty$1, object, [property])) {
      newObject[property] = object[property];
    }
  }

  return newObject;
}
/* IE10 doesn't support __lookupGetter__ so lets'
 * simulate it. It also automatically checks
 * if the prop is function or getter and behaves
 * accordingly. */

function lookupGetter(object, prop) {
  while (object !== null) {
    var desc = getOwnPropertyDescriptor(object, prop);

    if (desc) {
      if (desc.get) {
        return unapply(desc.get);
      }

      if (typeof desc.value === 'function') {
        return unapply(desc.value);
      }
    }

    object = getPrototypeOf(object);
  }

  function fallbackValue(element) {
    console.warn('fallback value for', element);
    return null;
  }

  return fallbackValue;
}

var html$1$1 = freeze(['a', 'abbr', 'acronym', 'address', 'area', 'article', 'aside', 'audio', 'b', 'bdi', 'bdo', 'big', 'blink', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'center', 'cite', 'code', 'col', 'colgroup', 'content', 'data', 'datalist', 'dd', 'decorator', 'del', 'details', 'dfn', 'dialog', 'dir', 'div', 'dl', 'dt', 'element', 'em', 'fieldset', 'figcaption', 'figure', 'font', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'img', 'input', 'ins', 'kbd', 'label', 'legend', 'li', 'main', 'map', 'mark', 'marquee', 'menu', 'menuitem', 'meter', 'nav', 'nobr', 'ol', 'optgroup', 'option', 'output', 'p', 'picture', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'section', 'select', 'shadow', 'small', 'source', 'spacer', 'span', 'strike', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'template', 'textarea', 'tfoot', 'th', 'thead', 'time', 'tr', 'track', 'tt', 'u', 'ul', 'var', 'video', 'wbr']); // SVG

var svg$1 = freeze(['svg', 'a', 'altglyph', 'altglyphdef', 'altglyphitem', 'animatecolor', 'animatemotion', 'animatetransform', 'circle', 'clippath', 'defs', 'desc', 'ellipse', 'filter', 'font', 'g', 'glyph', 'glyphref', 'hkern', 'image', 'line', 'lineargradient', 'marker', 'mask', 'metadata', 'mpath', 'path', 'pattern', 'polygon', 'polyline', 'radialgradient', 'rect', 'stop', 'style', 'switch', 'symbol', 'text', 'textpath', 'title', 'tref', 'tspan', 'view', 'vkern']);
var svgFilters = freeze(['feBlend', 'feColorMatrix', 'feComponentTransfer', 'feComposite', 'feConvolveMatrix', 'feDiffuseLighting', 'feDisplacementMap', 'feDistantLight', 'feFlood', 'feFuncA', 'feFuncB', 'feFuncG', 'feFuncR', 'feGaussianBlur', 'feImage', 'feMerge', 'feMergeNode', 'feMorphology', 'feOffset', 'fePointLight', 'feSpecularLighting', 'feSpotLight', 'feTile', 'feTurbulence']); // List of SVG elements that are disallowed by default.
// We still need to know them so that we can do namespace
// checks properly in case one wants to add them to
// allow-list.

var svgDisallowed = freeze(['animate', 'color-profile', 'cursor', 'discard', 'fedropshadow', 'font-face', 'font-face-format', 'font-face-name', 'font-face-src', 'font-face-uri', 'foreignobject', 'hatch', 'hatchpath', 'mesh', 'meshgradient', 'meshpatch', 'meshrow', 'missing-glyph', 'script', 'set', 'solidcolor', 'unknown', 'use']);
var mathMl$1 = freeze(['math', 'menclose', 'merror', 'mfenced', 'mfrac', 'mglyph', 'mi', 'mlabeledtr', 'mmultiscripts', 'mn', 'mo', 'mover', 'mpadded', 'mphantom', 'mroot', 'mrow', 'ms', 'mspace', 'msqrt', 'mstyle', 'msub', 'msup', 'msubsup', 'mtable', 'mtd', 'mtext', 'mtr', 'munder', 'munderover']); // Similarly to SVG, we want to know all MathML elements,
// even those that we disallow by default.

var mathMlDisallowed = freeze(['maction', 'maligngroup', 'malignmark', 'mlongdiv', 'mscarries', 'mscarry', 'msgroup', 'mstack', 'msline', 'msrow', 'semantics', 'annotation', 'annotation-xml', 'mprescripts', 'none']);
var text = freeze(['#text']);

var html$2 = freeze(['accept', 'action', 'align', 'alt', 'autocapitalize', 'autocomplete', 'autopictureinpicture', 'autoplay', 'background', 'bgcolor', 'border', 'capture', 'cellpadding', 'cellspacing', 'checked', 'cite', 'class', 'clear', 'color', 'cols', 'colspan', 'controls', 'controlslist', 'coords', 'crossorigin', 'datetime', 'decoding', 'default', 'dir', 'disabled', 'disablepictureinpicture', 'disableremoteplayback', 'download', 'draggable', 'enctype', 'enterkeyhint', 'face', 'for', 'headers', 'height', 'hidden', 'high', 'href', 'hreflang', 'id', 'inputmode', 'integrity', 'ismap', 'kind', 'label', 'lang', 'list', 'loading', 'loop', 'low', 'max', 'maxlength', 'media', 'method', 'min', 'minlength', 'multiple', 'muted', 'name', 'nonce', 'noshade', 'novalidate', 'nowrap', 'open', 'optimum', 'pattern', 'placeholder', 'playsinline', 'poster', 'preload', 'pubdate', 'radiogroup', 'readonly', 'rel', 'required', 'rev', 'reversed', 'role', 'rows', 'rowspan', 'spellcheck', 'scope', 'selected', 'shape', 'size', 'sizes', 'span', 'srclang', 'start', 'src', 'srcset', 'step', 'style', 'summary', 'tabindex', 'title', 'translate', 'type', 'usemap', 'valign', 'value', 'width', 'xmlns', 'slot']);
var svg = freeze(['accent-height', 'accumulate', 'additive', 'alignment-baseline', 'ascent', 'attributename', 'attributetype', 'azimuth', 'basefrequency', 'baseline-shift', 'begin', 'bias', 'by', 'class', 'clip', 'clippathunits', 'clip-path', 'clip-rule', 'color', 'color-interpolation', 'color-interpolation-filters', 'color-profile', 'color-rendering', 'cx', 'cy', 'd', 'dx', 'dy', 'diffuseconstant', 'direction', 'display', 'divisor', 'dur', 'edgemode', 'elevation', 'end', 'fill', 'fill-opacity', 'fill-rule', 'filter', 'filterunits', 'flood-color', 'flood-opacity', 'font-family', 'font-size', 'font-size-adjust', 'font-stretch', 'font-style', 'font-variant', 'font-weight', 'fx', 'fy', 'g1', 'g2', 'glyph-name', 'glyphref', 'gradientunits', 'gradienttransform', 'height', 'href', 'id', 'image-rendering', 'in', 'in2', 'k', 'k1', 'k2', 'k3', 'k4', 'kerning', 'keypoints', 'keysplines', 'keytimes', 'lang', 'lengthadjust', 'letter-spacing', 'kernelmatrix', 'kernelunitlength', 'lighting-color', 'local', 'marker-end', 'marker-mid', 'marker-start', 'markerheight', 'markerunits', 'markerwidth', 'maskcontentunits', 'maskunits', 'max', 'mask', 'media', 'method', 'mode', 'min', 'name', 'numoctaves', 'offset', 'operator', 'opacity', 'order', 'orient', 'orientation', 'origin', 'overflow', 'paint-order', 'path', 'pathlength', 'patterncontentunits', 'patterntransform', 'patternunits', 'points', 'preservealpha', 'preserveaspectratio', 'primitiveunits', 'r', 'rx', 'ry', 'radius', 'refx', 'refy', 'repeatcount', 'repeatdur', 'restart', 'result', 'rotate', 'scale', 'seed', 'shape-rendering', 'specularconstant', 'specularexponent', 'spreadmethod', 'startoffset', 'stddeviation', 'stitchtiles', 'stop-color', 'stop-opacity', 'stroke-dasharray', 'stroke-dashoffset', 'stroke-linecap', 'stroke-linejoin', 'stroke-miterlimit', 'stroke-opacity', 'stroke', 'stroke-width', 'style', 'surfacescale', 'systemlanguage', 'tabindex', 'targetx', 'targety', 'transform', 'transform-origin', 'text-anchor', 'text-decoration', 'text-rendering', 'textlength', 'type', 'u1', 'u2', 'unicode', 'values', 'viewbox', 'visibility', 'version', 'vert-adv-y', 'vert-origin-x', 'vert-origin-y', 'width', 'word-spacing', 'wrap', 'writing-mode', 'xchannelselector', 'ychannelselector', 'x', 'x1', 'x2', 'xmlns', 'y', 'y1', 'y2', 'z', 'zoomandpan']);
var mathMl = freeze(['accent', 'accentunder', 'align', 'bevelled', 'close', 'columnsalign', 'columnlines', 'columnspan', 'denomalign', 'depth', 'dir', 'display', 'displaystyle', 'encoding', 'fence', 'frame', 'height', 'href', 'id', 'largeop', 'length', 'linethickness', 'lspace', 'lquote', 'mathbackground', 'mathcolor', 'mathsize', 'mathvariant', 'maxsize', 'minsize', 'movablelimits', 'notation', 'numalign', 'open', 'rowalign', 'rowlines', 'rowspacing', 'rowspan', 'rspace', 'rquote', 'scriptlevel', 'scriptminsize', 'scriptsizemultiplier', 'selection', 'separator', 'separators', 'stretchy', 'subscriptshift', 'supscriptshift', 'symmetric', 'voffset', 'width', 'xmlns']);
var xml = freeze(['xlink:href', 'xml:id', 'xlink:title', 'xml:space', 'xmlns:xlink']);

var MUSTACHE_EXPR = seal(/\{\{[\w\W]*|[\w\W]*\}\}/gm); // Specify template detection regex for SAFE_FOR_TEMPLATES mode

var ERB_EXPR = seal(/<%[\w\W]*|[\w\W]*%>/gm);
var TMPLIT_EXPR = seal(/\${[\w\W]*}/gm);
var DATA_ATTR = seal(/^data-[\-\w.\u00B7-\uFFFF]/); // eslint-disable-line no-useless-escape

var ARIA_ATTR = seal(/^aria-[\-\w]+$/); // eslint-disable-line no-useless-escape

var IS_ALLOWED_URI = seal(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i // eslint-disable-line no-useless-escape
);
var IS_SCRIPT_OR_DATA = seal(/^(?:\w+script|data):/i);
var ATTR_WHITESPACE = seal(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g // eslint-disable-line no-control-regex
);
var DOCTYPE_NAME = seal(/^html$/i);

var getGlobal = function getGlobal() {
  return typeof window === 'undefined' ? null : window;
};
/**
 * Creates a no-op policy for internal use only.
 * Don't export this function outside this module!
 * @param {?TrustedTypePolicyFactory} trustedTypes The policy factory.
 * @param {Document} document The document object (to determine policy name suffix)
 * @return {?TrustedTypePolicy} The policy created (or null, if Trusted Types
 * are not supported).
 */


var _createTrustedTypesPolicy = function _createTrustedTypesPolicy(trustedTypes, document) {
  if (_typeof(trustedTypes) !== 'object' || typeof trustedTypes.createPolicy !== 'function') {
    return null;
  } // Allow the callers to control the unique policy name
  // by adding a data-tt-policy-suffix to the script element with the DOMPurify.
  // Policy creation with duplicate names throws in Trusted Types.


  var suffix = null;
  var ATTR_NAME = 'data-tt-policy-suffix';

  if (document.currentScript && document.currentScript.hasAttribute(ATTR_NAME)) {
    suffix = document.currentScript.getAttribute(ATTR_NAME);
  }

  var policyName = 'dompurify' + (suffix ? '#' + suffix : '');

  try {
    return trustedTypes.createPolicy(policyName, {
      createHTML: function createHTML(html) {
        return html;
      },
      createScriptURL: function createScriptURL(scriptUrl) {
        return scriptUrl;
      }
    });
  } catch (_) {
    // Policy creation failed (most likely another DOMPurify script has
    // already run). Skip creating the policy, as this will only cause errors
    // if TT are enforced.
    console.warn('TrustedTypes policy ' + policyName + ' could not be created.');
    return null;
  }
};

function createDOMPurify() {
  var window = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : getGlobal();

  var DOMPurify = function DOMPurify(root) {
    return createDOMPurify(root);
  };
  /**
   * Version label, exposed for easier checks
   * if DOMPurify is up to date or not
   */


  DOMPurify.version = '2.4.1';
  /**
   * Array of elements that DOMPurify removed during sanitation.
   * Empty if nothing was removed.
   */

  DOMPurify.removed = [];

  if (!window || !window.document || window.document.nodeType !== 9) {
    // Not running in a browser, provide a factory function
    // so that you can pass your own Window
    DOMPurify.isSupported = false;
    return DOMPurify;
  }

  var originalDocument = window.document;
  var document = window.document;
  var DocumentFragment = window.DocumentFragment,
      HTMLTemplateElement = window.HTMLTemplateElement,
      Node = window.Node,
      Element = window.Element,
      NodeFilter = window.NodeFilter,
      _window$NamedNodeMap = window.NamedNodeMap,
      NamedNodeMap = _window$NamedNodeMap === void 0 ? window.NamedNodeMap || window.MozNamedAttrMap : _window$NamedNodeMap,
      HTMLFormElement = window.HTMLFormElement,
      DOMParser = window.DOMParser,
      trustedTypes = window.trustedTypes;
  var ElementPrototype = Element.prototype;
  var cloneNode = lookupGetter(ElementPrototype, 'cloneNode');
  var getNextSibling = lookupGetter(ElementPrototype, 'nextSibling');
  var getChildNodes = lookupGetter(ElementPrototype, 'childNodes');
  var getParentNode = lookupGetter(ElementPrototype, 'parentNode'); // As per issue #47, the web-components registry is inherited by a
  // new document created via createHTMLDocument. As per the spec
  // (http://w3c.github.io/webcomponents/spec/custom/#creating-and-passing-registries)
  // a new empty registry is used when creating a template contents owner
  // document, so we use that as our parent document to ensure nothing
  // is inherited.

  if (typeof HTMLTemplateElement === 'function') {
    var template = document.createElement('template');

    if (template.content && template.content.ownerDocument) {
      document = template.content.ownerDocument;
    }
  }

  var trustedTypesPolicy = _createTrustedTypesPolicy(trustedTypes, originalDocument);

  var emptyHTML = trustedTypesPolicy ? trustedTypesPolicy.createHTML('') : '';
  var _document = document,
      implementation = _document.implementation,
      createNodeIterator = _document.createNodeIterator,
      createDocumentFragment = _document.createDocumentFragment,
      getElementsByTagName = _document.getElementsByTagName;
  var importNode = originalDocument.importNode;
  var documentMode = {};

  try {
    documentMode = clone(document).documentMode ? document.documentMode : {};
  } catch (_) {}

  var hooks = {};
  /**
   * Expose whether this browser supports running the full DOMPurify.
   */

  DOMPurify.isSupported = typeof getParentNode === 'function' && implementation && typeof implementation.createHTMLDocument !== 'undefined' && documentMode !== 9;
  var MUSTACHE_EXPR$1 = MUSTACHE_EXPR,
      ERB_EXPR$1 = ERB_EXPR,
      TMPLIT_EXPR$1 = TMPLIT_EXPR,
      DATA_ATTR$1 = DATA_ATTR,
      ARIA_ATTR$1 = ARIA_ATTR,
      IS_SCRIPT_OR_DATA$1 = IS_SCRIPT_OR_DATA,
      ATTR_WHITESPACE$1 = ATTR_WHITESPACE;
  var IS_ALLOWED_URI$1 = IS_ALLOWED_URI;
  /**
   * We consider the elements and attributes below to be safe. Ideally
   * don't add any new ones but feel free to remove unwanted ones.
   */

  /* allowed element names */

  var ALLOWED_TAGS = null;
  var DEFAULT_ALLOWED_TAGS = addToSet({}, [].concat(_toConsumableArray(html$1$1), _toConsumableArray(svg$1), _toConsumableArray(svgFilters), _toConsumableArray(mathMl$1), _toConsumableArray(text)));
  /* Allowed attribute names */

  var ALLOWED_ATTR = null;
  var DEFAULT_ALLOWED_ATTR = addToSet({}, [].concat(_toConsumableArray(html$2), _toConsumableArray(svg), _toConsumableArray(mathMl), _toConsumableArray(xml)));
  /*
   * Configure how DOMPUrify should handle custom elements and their attributes as well as customized built-in elements.
   * @property {RegExp|Function|null} tagNameCheck one of [null, regexPattern, predicate]. Default: `null` (disallow any custom elements)
   * @property {RegExp|Function|null} attributeNameCheck one of [null, regexPattern, predicate]. Default: `null` (disallow any attributes not on the allow list)
   * @property {boolean} allowCustomizedBuiltInElements allow custom elements derived from built-ins if they pass CUSTOM_ELEMENT_HANDLING.tagNameCheck. Default: `false`.
   */

  var CUSTOM_ELEMENT_HANDLING = Object.seal(Object.create(null, {
    tagNameCheck: {
      writable: true,
      configurable: false,
      enumerable: true,
      value: null
    },
    attributeNameCheck: {
      writable: true,
      configurable: false,
      enumerable: true,
      value: null
    },
    allowCustomizedBuiltInElements: {
      writable: true,
      configurable: false,
      enumerable: true,
      value: false
    }
  }));
  /* Explicitly forbidden tags (overrides ALLOWED_TAGS/ADD_TAGS) */

  var FORBID_TAGS = null;
  /* Explicitly forbidden attributes (overrides ALLOWED_ATTR/ADD_ATTR) */

  var FORBID_ATTR = null;
  /* Decide if ARIA attributes are okay */

  var ALLOW_ARIA_ATTR = true;
  /* Decide if custom data attributes are okay */

  var ALLOW_DATA_ATTR = true;
  /* Decide if unknown protocols are okay */

  var ALLOW_UNKNOWN_PROTOCOLS = false;
  /* Output should be safe for common template engines.
   * This means, DOMPurify removes data attributes, mustaches and ERB
   */

  var SAFE_FOR_TEMPLATES = false;
  /* Decide if document with <html>... should be returned */

  var WHOLE_DOCUMENT = false;
  /* Track whether config is already set on this instance of DOMPurify. */

  var SET_CONFIG = false;
  /* Decide if all elements (e.g. style, script) must be children of
   * document.body. By default, browsers might move them to document.head */

  var FORCE_BODY = false;
  /* Decide if a DOM `HTMLBodyElement` should be returned, instead of a html
   * string (or a TrustedHTML object if Trusted Types are supported).
   * If `WHOLE_DOCUMENT` is enabled a `HTMLHtmlElement` will be returned instead
   */

  var RETURN_DOM = false;
  /* Decide if a DOM `DocumentFragment` should be returned, instead of a html
   * string  (or a TrustedHTML object if Trusted Types are supported) */

  var RETURN_DOM_FRAGMENT = false;
  /* Try to return a Trusted Type object instead of a string, return a string in
   * case Trusted Types are not supported  */

  var RETURN_TRUSTED_TYPE = false;
  /* Output should be free from DOM clobbering attacks?
   * This sanitizes markups named with colliding, clobberable built-in DOM APIs.
   */

  var SANITIZE_DOM = true;
  /* Achieve full DOM Clobbering protection by isolating the namespace of named
   * properties and JS variables, mitigating attacks that abuse the HTML/DOM spec rules.
   *
   * HTML/DOM spec rules that enable DOM Clobbering:
   *   - Named Access on Window (§7.3.3)
   *   - DOM Tree Accessors (§3.1.5)
   *   - Form Element Parent-Child Relations (§4.10.3)
   *   - Iframe srcdoc / Nested WindowProxies (§4.8.5)
   *   - HTMLCollection (§4.2.10.2)
   *
   * Namespace isolation is implemented by prefixing `id` and `name` attributes
   * with a constant string, i.e., `user-content-`
   */

  var SANITIZE_NAMED_PROPS = false;
  var SANITIZE_NAMED_PROPS_PREFIX = 'user-content-';
  /* Keep element content when removing element? */

  var KEEP_CONTENT = true;
  /* If a `Node` is passed to sanitize(), then performs sanitization in-place instead
   * of importing it into a new Document and returning a sanitized copy */

  var IN_PLACE = false;
  /* Allow usage of profiles like html, svg and mathMl */

  var USE_PROFILES = {};
  /* Tags to ignore content of when KEEP_CONTENT is true */

  var FORBID_CONTENTS = null;
  var DEFAULT_FORBID_CONTENTS = addToSet({}, ['annotation-xml', 'audio', 'colgroup', 'desc', 'foreignobject', 'head', 'iframe', 'math', 'mi', 'mn', 'mo', 'ms', 'mtext', 'noembed', 'noframes', 'noscript', 'plaintext', 'script', 'style', 'svg', 'template', 'thead', 'title', 'video', 'xmp']);
  /* Tags that are safe for data: URIs */

  var DATA_URI_TAGS = null;
  var DEFAULT_DATA_URI_TAGS = addToSet({}, ['audio', 'video', 'img', 'source', 'image', 'track']);
  /* Attributes safe for values like "javascript:" */

  var URI_SAFE_ATTRIBUTES = null;
  var DEFAULT_URI_SAFE_ATTRIBUTES = addToSet({}, ['alt', 'class', 'for', 'id', 'label', 'name', 'pattern', 'placeholder', 'role', 'summary', 'title', 'value', 'style', 'xmlns']);
  var MATHML_NAMESPACE = 'http://www.w3.org/1998/Math/MathML';
  var SVG_NAMESPACE = 'http://www.w3.org/2000/svg';
  var HTML_NAMESPACE = 'http://www.w3.org/1999/xhtml';
  /* Document namespace */

  var NAMESPACE = HTML_NAMESPACE;
  var IS_EMPTY_INPUT = false;
  /* Allowed XHTML+XML namespaces */

  var ALLOWED_NAMESPACES = null;
  var DEFAULT_ALLOWED_NAMESPACES = addToSet({}, [MATHML_NAMESPACE, SVG_NAMESPACE, HTML_NAMESPACE], stringToString);
  /* Parsing of strict XHTML documents */

  var PARSER_MEDIA_TYPE;
  var SUPPORTED_PARSER_MEDIA_TYPES = ['application/xhtml+xml', 'text/html'];
  var DEFAULT_PARSER_MEDIA_TYPE = 'text/html';
  var transformCaseFunc;
  /* Keep a reference to config to pass to hooks */

  var CONFIG = null;
  /* Ideally, do not touch anything below this line */

  /* ______________________________________________ */

  var formElement = document.createElement('form');

  var isRegexOrFunction = function isRegexOrFunction(testValue) {
    return testValue instanceof RegExp || testValue instanceof Function;
  };
  /**
   * _parseConfig
   *
   * @param  {Object} cfg optional config literal
   */
  // eslint-disable-next-line complexity


  var _parseConfig = function _parseConfig(cfg) {
    if (CONFIG && CONFIG === cfg) {
      return;
    }
    /* Shield configuration object from tampering */


    if (!cfg || _typeof(cfg) !== 'object') {
      cfg = {};
    }
    /* Shield configuration object from prototype pollution */


    cfg = clone(cfg);
    PARSER_MEDIA_TYPE = // eslint-disable-next-line unicorn/prefer-includes
    SUPPORTED_PARSER_MEDIA_TYPES.indexOf(cfg.PARSER_MEDIA_TYPE) === -1 ? PARSER_MEDIA_TYPE = DEFAULT_PARSER_MEDIA_TYPE : PARSER_MEDIA_TYPE = cfg.PARSER_MEDIA_TYPE; // HTML tags and attributes are not case-sensitive, converting to lowercase. Keeping XHTML as is.

    transformCaseFunc = PARSER_MEDIA_TYPE === 'application/xhtml+xml' ? stringToString : stringToLowerCase;
    /* Set configuration parameters */

    ALLOWED_TAGS = 'ALLOWED_TAGS' in cfg ? addToSet({}, cfg.ALLOWED_TAGS, transformCaseFunc) : DEFAULT_ALLOWED_TAGS;
    ALLOWED_ATTR = 'ALLOWED_ATTR' in cfg ? addToSet({}, cfg.ALLOWED_ATTR, transformCaseFunc) : DEFAULT_ALLOWED_ATTR;
    ALLOWED_NAMESPACES = 'ALLOWED_NAMESPACES' in cfg ? addToSet({}, cfg.ALLOWED_NAMESPACES, stringToString) : DEFAULT_ALLOWED_NAMESPACES;
    URI_SAFE_ATTRIBUTES = 'ADD_URI_SAFE_ATTR' in cfg ? addToSet(clone(DEFAULT_URI_SAFE_ATTRIBUTES), // eslint-disable-line indent
    cfg.ADD_URI_SAFE_ATTR, // eslint-disable-line indent
    transformCaseFunc // eslint-disable-line indent
    ) // eslint-disable-line indent
    : DEFAULT_URI_SAFE_ATTRIBUTES;
    DATA_URI_TAGS = 'ADD_DATA_URI_TAGS' in cfg ? addToSet(clone(DEFAULT_DATA_URI_TAGS), // eslint-disable-line indent
    cfg.ADD_DATA_URI_TAGS, // eslint-disable-line indent
    transformCaseFunc // eslint-disable-line indent
    ) // eslint-disable-line indent
    : DEFAULT_DATA_URI_TAGS;
    FORBID_CONTENTS = 'FORBID_CONTENTS' in cfg ? addToSet({}, cfg.FORBID_CONTENTS, transformCaseFunc) : DEFAULT_FORBID_CONTENTS;
    FORBID_TAGS = 'FORBID_TAGS' in cfg ? addToSet({}, cfg.FORBID_TAGS, transformCaseFunc) : {};
    FORBID_ATTR = 'FORBID_ATTR' in cfg ? addToSet({}, cfg.FORBID_ATTR, transformCaseFunc) : {};
    USE_PROFILES = 'USE_PROFILES' in cfg ? cfg.USE_PROFILES : false;
    ALLOW_ARIA_ATTR = cfg.ALLOW_ARIA_ATTR !== false; // Default true

    ALLOW_DATA_ATTR = cfg.ALLOW_DATA_ATTR !== false; // Default true

    ALLOW_UNKNOWN_PROTOCOLS = cfg.ALLOW_UNKNOWN_PROTOCOLS || false; // Default false

    SAFE_FOR_TEMPLATES = cfg.SAFE_FOR_TEMPLATES || false; // Default false

    WHOLE_DOCUMENT = cfg.WHOLE_DOCUMENT || false; // Default false

    RETURN_DOM = cfg.RETURN_DOM || false; // Default false

    RETURN_DOM_FRAGMENT = cfg.RETURN_DOM_FRAGMENT || false; // Default false

    RETURN_TRUSTED_TYPE = cfg.RETURN_TRUSTED_TYPE || false; // Default false

    FORCE_BODY = cfg.FORCE_BODY || false; // Default false

    SANITIZE_DOM = cfg.SANITIZE_DOM !== false; // Default true

    SANITIZE_NAMED_PROPS = cfg.SANITIZE_NAMED_PROPS || false; // Default false

    KEEP_CONTENT = cfg.KEEP_CONTENT !== false; // Default true

    IN_PLACE = cfg.IN_PLACE || false; // Default false

    IS_ALLOWED_URI$1 = cfg.ALLOWED_URI_REGEXP || IS_ALLOWED_URI$1;
    NAMESPACE = cfg.NAMESPACE || HTML_NAMESPACE;

    if (cfg.CUSTOM_ELEMENT_HANDLING && isRegexOrFunction(cfg.CUSTOM_ELEMENT_HANDLING.tagNameCheck)) {
      CUSTOM_ELEMENT_HANDLING.tagNameCheck = cfg.CUSTOM_ELEMENT_HANDLING.tagNameCheck;
    }

    if (cfg.CUSTOM_ELEMENT_HANDLING && isRegexOrFunction(cfg.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)) {
      CUSTOM_ELEMENT_HANDLING.attributeNameCheck = cfg.CUSTOM_ELEMENT_HANDLING.attributeNameCheck;
    }

    if (cfg.CUSTOM_ELEMENT_HANDLING && typeof cfg.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements === 'boolean') {
      CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements = cfg.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements;
    }

    if (SAFE_FOR_TEMPLATES) {
      ALLOW_DATA_ATTR = false;
    }

    if (RETURN_DOM_FRAGMENT) {
      RETURN_DOM = true;
    }
    /* Parse profile info */


    if (USE_PROFILES) {
      ALLOWED_TAGS = addToSet({}, _toConsumableArray(text));
      ALLOWED_ATTR = [];

      if (USE_PROFILES.html === true) {
        addToSet(ALLOWED_TAGS, html$1$1);
        addToSet(ALLOWED_ATTR, html$2);
      }

      if (USE_PROFILES.svg === true) {
        addToSet(ALLOWED_TAGS, svg$1);
        addToSet(ALLOWED_ATTR, svg);
        addToSet(ALLOWED_ATTR, xml);
      }

      if (USE_PROFILES.svgFilters === true) {
        addToSet(ALLOWED_TAGS, svgFilters);
        addToSet(ALLOWED_ATTR, svg);
        addToSet(ALLOWED_ATTR, xml);
      }

      if (USE_PROFILES.mathMl === true) {
        addToSet(ALLOWED_TAGS, mathMl$1);
        addToSet(ALLOWED_ATTR, mathMl);
        addToSet(ALLOWED_ATTR, xml);
      }
    }
    /* Merge configuration parameters */


    if (cfg.ADD_TAGS) {
      if (ALLOWED_TAGS === DEFAULT_ALLOWED_TAGS) {
        ALLOWED_TAGS = clone(ALLOWED_TAGS);
      }

      addToSet(ALLOWED_TAGS, cfg.ADD_TAGS, transformCaseFunc);
    }

    if (cfg.ADD_ATTR) {
      if (ALLOWED_ATTR === DEFAULT_ALLOWED_ATTR) {
        ALLOWED_ATTR = clone(ALLOWED_ATTR);
      }

      addToSet(ALLOWED_ATTR, cfg.ADD_ATTR, transformCaseFunc);
    }

    if (cfg.ADD_URI_SAFE_ATTR) {
      addToSet(URI_SAFE_ATTRIBUTES, cfg.ADD_URI_SAFE_ATTR, transformCaseFunc);
    }

    if (cfg.FORBID_CONTENTS) {
      if (FORBID_CONTENTS === DEFAULT_FORBID_CONTENTS) {
        FORBID_CONTENTS = clone(FORBID_CONTENTS);
      }

      addToSet(FORBID_CONTENTS, cfg.FORBID_CONTENTS, transformCaseFunc);
    }
    /* Add #text in case KEEP_CONTENT is set to true */


    if (KEEP_CONTENT) {
      ALLOWED_TAGS['#text'] = true;
    }
    /* Add html, head and body to ALLOWED_TAGS in case WHOLE_DOCUMENT is true */


    if (WHOLE_DOCUMENT) {
      addToSet(ALLOWED_TAGS, ['html', 'head', 'body']);
    }
    /* Add tbody to ALLOWED_TAGS in case tables are permitted, see #286, #365 */


    if (ALLOWED_TAGS.table) {
      addToSet(ALLOWED_TAGS, ['tbody']);
      delete FORBID_TAGS.tbody;
    } // Prevent further manipulation of configuration.
    // Not available in IE8, Safari 5, etc.


    if (freeze) {
      freeze(cfg);
    }

    CONFIG = cfg;
  };

  var MATHML_TEXT_INTEGRATION_POINTS = addToSet({}, ['mi', 'mo', 'mn', 'ms', 'mtext']);
  var HTML_INTEGRATION_POINTS = addToSet({}, ['foreignobject', 'desc', 'title', 'annotation-xml']); // Certain elements are allowed in both SVG and HTML
  // namespace. We need to specify them explicitly
  // so that they don't get erroneously deleted from
  // HTML namespace.

  var COMMON_SVG_AND_HTML_ELEMENTS = addToSet({}, ['title', 'style', 'font', 'a', 'script']);
  /* Keep track of all possible SVG and MathML tags
   * so that we can perform the namespace checks
   * correctly. */

  var ALL_SVG_TAGS = addToSet({}, svg$1);
  addToSet(ALL_SVG_TAGS, svgFilters);
  addToSet(ALL_SVG_TAGS, svgDisallowed);
  var ALL_MATHML_TAGS = addToSet({}, mathMl$1);
  addToSet(ALL_MATHML_TAGS, mathMlDisallowed);
  /**
   *
   *
   * @param  {Element} element a DOM element whose namespace is being checked
   * @returns {boolean} Return false if the element has a
   *  namespace that a spec-compliant parser would never
   *  return. Return true otherwise.
   */

  var _checkValidNamespace = function _checkValidNamespace(element) {
    var parent = getParentNode(element); // In JSDOM, if we're inside shadow DOM, then parentNode
    // can be null. We just simulate parent in this case.

    if (!parent || !parent.tagName) {
      parent = {
        namespaceURI: NAMESPACE,
        tagName: 'template'
      };
    }

    var tagName = stringToLowerCase(element.tagName);
    var parentTagName = stringToLowerCase(parent.tagName);

    if (!ALLOWED_NAMESPACES[element.namespaceURI]) {
      return false;
    }

    if (element.namespaceURI === SVG_NAMESPACE) {
      // The only way to switch from HTML namespace to SVG
      // is via <svg>. If it happens via any other tag, then
      // it should be killed.
      if (parent.namespaceURI === HTML_NAMESPACE) {
        return tagName === 'svg';
      } // The only way to switch from MathML to SVG is via`
      // svg if parent is either <annotation-xml> or MathML
      // text integration points.


      if (parent.namespaceURI === MATHML_NAMESPACE) {
        return tagName === 'svg' && (parentTagName === 'annotation-xml' || MATHML_TEXT_INTEGRATION_POINTS[parentTagName]);
      } // We only allow elements that are defined in SVG
      // spec. All others are disallowed in SVG namespace.


      return Boolean(ALL_SVG_TAGS[tagName]);
    }

    if (element.namespaceURI === MATHML_NAMESPACE) {
      // The only way to switch from HTML namespace to MathML
      // is via <math>. If it happens via any other tag, then
      // it should be killed.
      if (parent.namespaceURI === HTML_NAMESPACE) {
        return tagName === 'math';
      } // The only way to switch from SVG to MathML is via
      // <math> and HTML integration points


      if (parent.namespaceURI === SVG_NAMESPACE) {
        return tagName === 'math' && HTML_INTEGRATION_POINTS[parentTagName];
      } // We only allow elements that are defined in MathML
      // spec. All others are disallowed in MathML namespace.


      return Boolean(ALL_MATHML_TAGS[tagName]);
    }

    if (element.namespaceURI === HTML_NAMESPACE) {
      // The only way to switch from SVG to HTML is via
      // HTML integration points, and from MathML to HTML
      // is via MathML text integration points
      if (parent.namespaceURI === SVG_NAMESPACE && !HTML_INTEGRATION_POINTS[parentTagName]) {
        return false;
      }

      if (parent.namespaceURI === MATHML_NAMESPACE && !MATHML_TEXT_INTEGRATION_POINTS[parentTagName]) {
        return false;
      } // We disallow tags that are specific for MathML
      // or SVG and should never appear in HTML namespace


      return !ALL_MATHML_TAGS[tagName] && (COMMON_SVG_AND_HTML_ELEMENTS[tagName] || !ALL_SVG_TAGS[tagName]);
    } // For XHTML and XML documents that support custom namespaces


    if (PARSER_MEDIA_TYPE === 'application/xhtml+xml' && ALLOWED_NAMESPACES[element.namespaceURI]) {
      return true;
    } // The code should never reach this place (this means
    // that the element somehow got namespace that is not
    // HTML, SVG, MathML or allowed via ALLOWED_NAMESPACES).
    // Return false just in case.


    return false;
  };
  /**
   * _forceRemove
   *
   * @param  {Node} node a DOM node
   */


  var _forceRemove = function _forceRemove(node) {
    arrayPush(DOMPurify.removed, {
      element: node
    });

    try {
      // eslint-disable-next-line unicorn/prefer-dom-node-remove
      node.parentNode.removeChild(node);
    } catch (_) {
      try {
        node.outerHTML = emptyHTML;
      } catch (_) {
        node.remove();
      }
    }
  };
  /**
   * _removeAttribute
   *
   * @param  {String} name an Attribute name
   * @param  {Node} node a DOM node
   */


  var _removeAttribute = function _removeAttribute(name, node) {
    try {
      arrayPush(DOMPurify.removed, {
        attribute: node.getAttributeNode(name),
        from: node
      });
    } catch (_) {
      arrayPush(DOMPurify.removed, {
        attribute: null,
        from: node
      });
    }

    node.removeAttribute(name); // We void attribute values for unremovable "is"" attributes

    if (name === 'is' && !ALLOWED_ATTR[name]) {
      if (RETURN_DOM || RETURN_DOM_FRAGMENT) {
        try {
          _forceRemove(node);
        } catch (_) {}
      } else {
        try {
          node.setAttribute(name, '');
        } catch (_) {}
      }
    }
  };
  /**
   * _initDocument
   *
   * @param  {String} dirty a string of dirty markup
   * @return {Document} a DOM, filled with the dirty markup
   */


  var _initDocument = function _initDocument(dirty) {
    /* Create a HTML document */
    var doc;
    var leadingWhitespace;

    if (FORCE_BODY) {
      dirty = '<remove></remove>' + dirty;
    } else {
      /* If FORCE_BODY isn't used, leading whitespace needs to be preserved manually */
      var matches = stringMatch(dirty, /^[\r\n\t ]+/);
      leadingWhitespace = matches && matches[0];
    }

    if (PARSER_MEDIA_TYPE === 'application/xhtml+xml' && NAMESPACE === HTML_NAMESPACE) {
      // Root of XHTML doc must contain xmlns declaration (see https://www.w3.org/TR/xhtml1/normative.html#strict)
      dirty = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + dirty + '</body></html>';
    }

    var dirtyPayload = trustedTypesPolicy ? trustedTypesPolicy.createHTML(dirty) : dirty;
    /*
     * Use the DOMParser API by default, fallback later if needs be
     * DOMParser not work for svg when has multiple root element.
     */

    if (NAMESPACE === HTML_NAMESPACE) {
      try {
        doc = new DOMParser().parseFromString(dirtyPayload, PARSER_MEDIA_TYPE);
      } catch (_) {}
    }
    /* Use createHTMLDocument in case DOMParser is not available */


    if (!doc || !doc.documentElement) {
      doc = implementation.createDocument(NAMESPACE, 'template', null);

      try {
        doc.documentElement.innerHTML = IS_EMPTY_INPUT ? '' : dirtyPayload;
      } catch (_) {// Syntax error if dirtyPayload is invalid xml
      }
    }

    var body = doc.body || doc.documentElement;

    if (dirty && leadingWhitespace) {
      body.insertBefore(document.createTextNode(leadingWhitespace), body.childNodes[0] || null);
    }
    /* Work on whole document or just its body */


    if (NAMESPACE === HTML_NAMESPACE) {
      return getElementsByTagName.call(doc, WHOLE_DOCUMENT ? 'html' : 'body')[0];
    }

    return WHOLE_DOCUMENT ? doc.documentElement : body;
  };
  /**
   * _createIterator
   *
   * @param  {Document} root document/fragment to create iterator for
   * @return {Iterator} iterator instance
   */


  var _createIterator = function _createIterator(root) {
    return createNodeIterator.call(root.ownerDocument || root, root, // eslint-disable-next-line no-bitwise
    NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_COMMENT | NodeFilter.SHOW_TEXT, null, false);
  };
  /**
   * _isClobbered
   *
   * @param  {Node} elm element to check for clobbering attacks
   * @return {Boolean} true if clobbered, false if safe
   */


  var _isClobbered = function _isClobbered(elm) {
    return elm instanceof HTMLFormElement && (typeof elm.nodeName !== 'string' || typeof elm.textContent !== 'string' || typeof elm.removeChild !== 'function' || !(elm.attributes instanceof NamedNodeMap) || typeof elm.removeAttribute !== 'function' || typeof elm.setAttribute !== 'function' || typeof elm.namespaceURI !== 'string' || typeof elm.insertBefore !== 'function' || typeof elm.hasChildNodes !== 'function');
  };
  /**
   * _isNode
   *
   * @param  {Node} obj object to check whether it's a DOM node
   * @return {Boolean} true is object is a DOM node
   */


  var _isNode = function _isNode(object) {
    return _typeof(Node) === 'object' ? object instanceof Node : object && _typeof(object) === 'object' && typeof object.nodeType === 'number' && typeof object.nodeName === 'string';
  };
  /**
   * _executeHook
   * Execute user configurable hooks
   *
   * @param  {String} entryPoint  Name of the hook's entry point
   * @param  {Node} currentNode node to work on with the hook
   * @param  {Object} data additional hook parameters
   */


  var _executeHook = function _executeHook(entryPoint, currentNode, data) {
    if (!hooks[entryPoint]) {
      return;
    }

    arrayForEach(hooks[entryPoint], function (hook) {
      hook.call(DOMPurify, currentNode, data, CONFIG);
    });
  };
  /**
   * _sanitizeElements
   *
   * @protect nodeName
   * @protect textContent
   * @protect removeChild
   *
   * @param   {Node} currentNode to check for permission to exist
   * @return  {Boolean} true if node was killed, false if left alive
   */


  var _sanitizeElements = function _sanitizeElements(currentNode) {
    var content;
    /* Execute a hook if present */

    _executeHook('beforeSanitizeElements', currentNode, null);
    /* Check if element is clobbered or can clobber */


    if (_isClobbered(currentNode)) {
      _forceRemove(currentNode);

      return true;
    }
    /* Check if tagname contains Unicode */


    if (regExpTest(/[\u0080-\uFFFF]/, currentNode.nodeName)) {
      _forceRemove(currentNode);

      return true;
    }
    /* Now let's check the element's type and name */


    var tagName = transformCaseFunc(currentNode.nodeName);
    /* Execute a hook if present */

    _executeHook('uponSanitizeElement', currentNode, {
      tagName: tagName,
      allowedTags: ALLOWED_TAGS
    });
    /* Detect mXSS attempts abusing namespace confusion */


    if (currentNode.hasChildNodes() && !_isNode(currentNode.firstElementChild) && (!_isNode(currentNode.content) || !_isNode(currentNode.content.firstElementChild)) && regExpTest(/<[/\w]/g, currentNode.innerHTML) && regExpTest(/<[/\w]/g, currentNode.textContent)) {
      _forceRemove(currentNode);

      return true;
    }
    /* Mitigate a problem with templates inside select */


    if (tagName === 'select' && regExpTest(/<template/i, currentNode.innerHTML)) {
      _forceRemove(currentNode);

      return true;
    }
    /* Remove element if anything forbids its presence */


    if (!ALLOWED_TAGS[tagName] || FORBID_TAGS[tagName]) {
      /* Check if we have a custom element to handle */
      if (!FORBID_TAGS[tagName] && _basicCustomElementTest(tagName)) {
        if (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.tagNameCheck, tagName)) return false;
        if (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.tagNameCheck(tagName)) return false;
      }
      /* Keep content except for bad-listed elements */


      if (KEEP_CONTENT && !FORBID_CONTENTS[tagName]) {
        var parentNode = getParentNode(currentNode) || currentNode.parentNode;
        var childNodes = getChildNodes(currentNode) || currentNode.childNodes;

        if (childNodes && parentNode) {
          var childCount = childNodes.length;

          for (var i = childCount - 1; i >= 0; --i) {
            parentNode.insertBefore(cloneNode(childNodes[i], true), getNextSibling(currentNode));
          }
        }
      }

      _forceRemove(currentNode);

      return true;
    }
    /* Check whether element has a valid namespace */


    if (currentNode instanceof Element && !_checkValidNamespace(currentNode)) {
      _forceRemove(currentNode);

      return true;
    }

    if ((tagName === 'noscript' || tagName === 'noembed') && regExpTest(/<\/no(script|embed)/i, currentNode.innerHTML)) {
      _forceRemove(currentNode);

      return true;
    }
    /* Sanitize element content to be template-safe */


    if (SAFE_FOR_TEMPLATES && currentNode.nodeType === 3) {
      /* Get the element's text content */
      content = currentNode.textContent;
      content = stringReplace(content, MUSTACHE_EXPR$1, ' ');
      content = stringReplace(content, ERB_EXPR$1, ' ');
      content = stringReplace(content, TMPLIT_EXPR$1, ' ');

      if (currentNode.textContent !== content) {
        arrayPush(DOMPurify.removed, {
          element: currentNode.cloneNode()
        });
        currentNode.textContent = content;
      }
    }
    /* Execute a hook if present */


    _executeHook('afterSanitizeElements', currentNode, null);

    return false;
  };
  /**
   * _isValidAttribute
   *
   * @param  {string} lcTag Lowercase tag name of containing element.
   * @param  {string} lcName Lowercase attribute name.
   * @param  {string} value Attribute value.
   * @return {Boolean} Returns true if `value` is valid, otherwise false.
   */
  // eslint-disable-next-line complexity


  var _isValidAttribute = function _isValidAttribute(lcTag, lcName, value) {
    /* Make sure attribute cannot clobber */
    if (SANITIZE_DOM && (lcName === 'id' || lcName === 'name') && (value in document || value in formElement)) {
      return false;
    }
    /* Allow valid data-* attributes: At least one character after "-"
        (https://html.spec.whatwg.org/multipage/dom.html#embedding-custom-non-visible-data-with-the-data-*-attributes)
        XML-compatible (https://html.spec.whatwg.org/multipage/infrastructure.html#xml-compatible and http://www.w3.org/TR/xml/#d0e804)
        We don't need to check the value; it's always URI safe. */


    if (ALLOW_DATA_ATTR && !FORBID_ATTR[lcName] && regExpTest(DATA_ATTR$1, lcName)) ; else if (ALLOW_ARIA_ATTR && regExpTest(ARIA_ATTR$1, lcName)) ; else if (!ALLOWED_ATTR[lcName] || FORBID_ATTR[lcName]) {
      if ( // First condition does a very basic check if a) it's basically a valid custom element tagname AND
      // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
      // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
      _basicCustomElementTest(lcTag) && (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.tagNameCheck, lcTag) || CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.tagNameCheck(lcTag)) && (CUSTOM_ELEMENT_HANDLING.attributeNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.attributeNameCheck, lcName) || CUSTOM_ELEMENT_HANDLING.attributeNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.attributeNameCheck(lcName)) || // Alternative, second condition checks if it's an `is`-attribute, AND
      // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
      lcName === 'is' && CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements && (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.tagNameCheck, value) || CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.tagNameCheck(value))) ; else {
        return false;
      }
      /* Check value is safe. First, is attr inert? If so, is safe */

    } else if (URI_SAFE_ATTRIBUTES[lcName]) ; else if (regExpTest(IS_ALLOWED_URI$1, stringReplace(value, ATTR_WHITESPACE$1, ''))) ; else if ((lcName === 'src' || lcName === 'xlink:href' || lcName === 'href') && lcTag !== 'script' && stringIndexOf(value, 'data:') === 0 && DATA_URI_TAGS[lcTag]) ; else if (ALLOW_UNKNOWN_PROTOCOLS && !regExpTest(IS_SCRIPT_OR_DATA$1, stringReplace(value, ATTR_WHITESPACE$1, ''))) ; else if (!value) ; else {
      return false;
    }

    return true;
  };
  /**
   * _basicCustomElementCheck
   * checks if at least one dash is included in tagName, and it's not the first char
   * for more sophisticated checking see https://github.com/sindresorhus/validate-element-name
   * @param {string} tagName name of the tag of the node to sanitize
   */


  var _basicCustomElementTest = function _basicCustomElementTest(tagName) {
    return tagName.indexOf('-') > 0;
  };
  /**
   * _sanitizeAttributes
   *
   * @protect attributes
   * @protect nodeName
   * @protect removeAttribute
   * @protect setAttribute
   *
   * @param  {Node} currentNode to sanitize
   */


  var _sanitizeAttributes = function _sanitizeAttributes(currentNode) {
    var attr;
    var value;
    var lcName;
    var l;
    /* Execute a hook if present */

    _executeHook('beforeSanitizeAttributes', currentNode, null);

    var attributes = currentNode.attributes;
    /* Check if we have attributes; if not we might have a text node */

    if (!attributes) {
      return;
    }

    var hookEvent = {
      attrName: '',
      attrValue: '',
      keepAttr: true,
      allowedAttributes: ALLOWED_ATTR
    };
    l = attributes.length;
    /* Go backwards over all attributes; safely remove bad ones */

    while (l--) {
      attr = attributes[l];
      var _attr = attr,
          name = _attr.name,
          namespaceURI = _attr.namespaceURI;
      value = name === 'value' ? attr.value : stringTrim(attr.value);
      lcName = transformCaseFunc(name);
      /* Execute a hook if present */

      hookEvent.attrName = lcName;
      hookEvent.attrValue = value;
      hookEvent.keepAttr = true;
      hookEvent.forceKeepAttr = undefined; // Allows developers to see this is a property they can set

      _executeHook('uponSanitizeAttribute', currentNode, hookEvent);

      value = hookEvent.attrValue;
      /* Did the hooks approve of the attribute? */

      if (hookEvent.forceKeepAttr) {
        continue;
      }
      /* Remove attribute */


      _removeAttribute(name, currentNode);
      /* Did the hooks approve of the attribute? */


      if (!hookEvent.keepAttr) {
        continue;
      }
      /* Work around a security issue in jQuery 3.0 */


      if (regExpTest(/\/>/i, value)) {
        _removeAttribute(name, currentNode);

        continue;
      }
      /* Sanitize attribute content to be template-safe */


      if (SAFE_FOR_TEMPLATES) {
        value = stringReplace(value, MUSTACHE_EXPR$1, ' ');
        value = stringReplace(value, ERB_EXPR$1, ' ');
        value = stringReplace(value, TMPLIT_EXPR$1, ' ');
      }
      /* Is `value` valid for this attribute? */


      var lcTag = transformCaseFunc(currentNode.nodeName);

      if (!_isValidAttribute(lcTag, lcName, value)) {
        continue;
      }
      /* Full DOM Clobbering protection via namespace isolation,
       * Prefix id and name attributes with `user-content-`
       */


      if (SANITIZE_NAMED_PROPS && (lcName === 'id' || lcName === 'name')) {
        // Remove the attribute with this value
        _removeAttribute(name, currentNode); // Prefix the value and later re-create the attribute with the sanitized value


        value = SANITIZE_NAMED_PROPS_PREFIX + value;
      }
      /* Handle attributes that require Trusted Types */


      if (trustedTypesPolicy && _typeof(trustedTypes) === 'object' && typeof trustedTypes.getAttributeType === 'function') {
        if (namespaceURI) ; else {
          switch (trustedTypes.getAttributeType(lcTag, lcName)) {
            case 'TrustedHTML':
              value = trustedTypesPolicy.createHTML(value);
              break;

            case 'TrustedScriptURL':
              value = trustedTypesPolicy.createScriptURL(value);
              break;
          }
        }
      }
      /* Handle invalid data-* attribute set by try-catching it */


      try {
        if (namespaceURI) {
          currentNode.setAttributeNS(namespaceURI, name, value);
        } else {
          /* Fallback to setAttribute() for browser-unrecognized namespaces e.g. "x-schema". */
          currentNode.setAttribute(name, value);
        }

        arrayPop(DOMPurify.removed);
      } catch (_) {}
    }
    /* Execute a hook if present */


    _executeHook('afterSanitizeAttributes', currentNode, null);
  };
  /**
   * _sanitizeShadowDOM
   *
   * @param  {DocumentFragment} fragment to iterate over recursively
   */


  var _sanitizeShadowDOM = function _sanitizeShadowDOM(fragment) {
    var shadowNode;

    var shadowIterator = _createIterator(fragment);
    /* Execute a hook if present */


    _executeHook('beforeSanitizeShadowDOM', fragment, null);

    while (shadowNode = shadowIterator.nextNode()) {
      /* Execute a hook if present */
      _executeHook('uponSanitizeShadowNode', shadowNode, null);
      /* Sanitize tags and elements */


      if (_sanitizeElements(shadowNode)) {
        continue;
      }
      /* Deep shadow DOM detected */


      if (shadowNode.content instanceof DocumentFragment) {
        _sanitizeShadowDOM(shadowNode.content);
      }
      /* Check attributes, sanitize if necessary */


      _sanitizeAttributes(shadowNode);
    }
    /* Execute a hook if present */


    _executeHook('afterSanitizeShadowDOM', fragment, null);
  };
  /**
   * Sanitize
   * Public method providing core sanitation functionality
   *
   * @param {String|Node} dirty string or DOM node
   * @param {Object} configuration object
   */
  // eslint-disable-next-line complexity


  DOMPurify.sanitize = function (dirty) {
    var cfg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var body;
    var importedNode;
    var currentNode;
    var oldNode;
    var returnNode;
    /* Make sure we have a string to sanitize.
      DO NOT return early, as this will return the wrong type if
      the user has requested a DOM object rather than a string */

    IS_EMPTY_INPUT = !dirty;

    if (IS_EMPTY_INPUT) {
      dirty = '<!-->';
    }
    /* Stringify, in case dirty is an object */


    if (typeof dirty !== 'string' && !_isNode(dirty)) {
      // eslint-disable-next-line no-negated-condition
      if (typeof dirty.toString !== 'function') {
        throw typeErrorCreate('toString is not a function');
      } else {
        dirty = dirty.toString();

        if (typeof dirty !== 'string') {
          throw typeErrorCreate('dirty is not a string, aborting');
        }
      }
    }
    /* Check we can run. Otherwise fall back or ignore */


    if (!DOMPurify.isSupported) {
      if (_typeof(window.toStaticHTML) === 'object' || typeof window.toStaticHTML === 'function') {
        if (typeof dirty === 'string') {
          return window.toStaticHTML(dirty);
        }

        if (_isNode(dirty)) {
          return window.toStaticHTML(dirty.outerHTML);
        }
      }

      return dirty;
    }
    /* Assign config vars */


    if (!SET_CONFIG) {
      _parseConfig(cfg);
    }
    /* Clean up removed elements */


    DOMPurify.removed = [];
    /* Check if dirty is correctly typed for IN_PLACE */

    if (typeof dirty === 'string') {
      IN_PLACE = false;
    }

    if (IN_PLACE) {
      /* Do some early pre-sanitization to avoid unsafe root nodes */
      if (dirty.nodeName) {
        var tagName = transformCaseFunc(dirty.nodeName);

        if (!ALLOWED_TAGS[tagName] || FORBID_TAGS[tagName]) {
          throw typeErrorCreate('root node is forbidden and cannot be sanitized in-place');
        }
      }
    } else if (dirty instanceof Node) {
      /* If dirty is a DOM element, append to an empty document to avoid
         elements being stripped by the parser */
      body = _initDocument('<!---->');
      importedNode = body.ownerDocument.importNode(dirty, true);

      if (importedNode.nodeType === 1 && importedNode.nodeName === 'BODY') {
        /* Node is already a body, use as is */
        body = importedNode;
      } else if (importedNode.nodeName === 'HTML') {
        body = importedNode;
      } else {
        // eslint-disable-next-line unicorn/prefer-dom-node-append
        body.appendChild(importedNode);
      }
    } else {
      /* Exit directly if we have nothing to do */
      if (!RETURN_DOM && !SAFE_FOR_TEMPLATES && !WHOLE_DOCUMENT && // eslint-disable-next-line unicorn/prefer-includes
      dirty.indexOf('<') === -1) {
        return trustedTypesPolicy && RETURN_TRUSTED_TYPE ? trustedTypesPolicy.createHTML(dirty) : dirty;
      }
      /* Initialize the document to work on */


      body = _initDocument(dirty);
      /* Check we have a DOM node from the data */

      if (!body) {
        return RETURN_DOM ? null : RETURN_TRUSTED_TYPE ? emptyHTML : '';
      }
    }
    /* Remove first element node (ours) if FORCE_BODY is set */


    if (body && FORCE_BODY) {
      _forceRemove(body.firstChild);
    }
    /* Get node iterator */


    var nodeIterator = _createIterator(IN_PLACE ? dirty : body);
    /* Now start iterating over the created document */


    while (currentNode = nodeIterator.nextNode()) {
      /* Fix IE's strange behavior with manipulated textNodes #89 */
      if (currentNode.nodeType === 3 && currentNode === oldNode) {
        continue;
      }
      /* Sanitize tags and elements */


      if (_sanitizeElements(currentNode)) {
        continue;
      }
      /* Shadow DOM detected, sanitize it */


      if (currentNode.content instanceof DocumentFragment) {
        _sanitizeShadowDOM(currentNode.content);
      }
      /* Check attributes, sanitize if necessary */


      _sanitizeAttributes(currentNode);

      oldNode = currentNode;
    }

    oldNode = null;
    /* If we sanitized `dirty` in-place, return it. */

    if (IN_PLACE) {
      return dirty;
    }
    /* Return sanitized string or DOM */


    if (RETURN_DOM) {
      if (RETURN_DOM_FRAGMENT) {
        returnNode = createDocumentFragment.call(body.ownerDocument);

        while (body.firstChild) {
          // eslint-disable-next-line unicorn/prefer-dom-node-append
          returnNode.appendChild(body.firstChild);
        }
      } else {
        returnNode = body;
      }

      if (ALLOWED_ATTR.shadowroot) {
        /*
          AdoptNode() is not used because internal state is not reset
          (e.g. the past names map of a HTMLFormElement), this is safe
          in theory but we would rather not risk another attack vector.
          The state that is cloned by importNode() is explicitly defined
          by the specs.
        */
        returnNode = importNode.call(originalDocument, returnNode, true);
      }

      return returnNode;
    }

    var serializedHTML = WHOLE_DOCUMENT ? body.outerHTML : body.innerHTML;
    /* Serialize doctype if allowed */

    if (WHOLE_DOCUMENT && ALLOWED_TAGS['!doctype'] && body.ownerDocument && body.ownerDocument.doctype && body.ownerDocument.doctype.name && regExpTest(DOCTYPE_NAME, body.ownerDocument.doctype.name)) {
      serializedHTML = '<!DOCTYPE ' + body.ownerDocument.doctype.name + '>\n' + serializedHTML;
    }
    /* Sanitize final string template-safe */


    if (SAFE_FOR_TEMPLATES) {
      serializedHTML = stringReplace(serializedHTML, MUSTACHE_EXPR$1, ' ');
      serializedHTML = stringReplace(serializedHTML, ERB_EXPR$1, ' ');
      serializedHTML = stringReplace(serializedHTML, TMPLIT_EXPR$1, ' ');
    }

    return trustedTypesPolicy && RETURN_TRUSTED_TYPE ? trustedTypesPolicy.createHTML(serializedHTML) : serializedHTML;
  };
  /**
   * Public method to set the configuration once
   * setConfig
   *
   * @param {Object} cfg configuration object
   */


  DOMPurify.setConfig = function (cfg) {
    _parseConfig(cfg);

    SET_CONFIG = true;
  };
  /**
   * Public method to remove the configuration
   * clearConfig
   *
   */


  DOMPurify.clearConfig = function () {
    CONFIG = null;
    SET_CONFIG = false;
  };
  /**
   * Public method to check if an attribute value is valid.
   * Uses last set config, if any. Otherwise, uses config defaults.
   * isValidAttribute
   *
   * @param  {string} tag Tag name of containing element.
   * @param  {string} attr Attribute name.
   * @param  {string} value Attribute value.
   * @return {Boolean} Returns true if `value` is valid. Otherwise, returns false.
   */


  DOMPurify.isValidAttribute = function (tag, attr, value) {
    /* Initialize shared config vars if necessary. */
    if (!CONFIG) {
      _parseConfig({});
    }

    var lcTag = transformCaseFunc(tag);
    var lcName = transformCaseFunc(attr);
    return _isValidAttribute(lcTag, lcName, value);
  };
  /**
   * AddHook
   * Public method to add DOMPurify hooks
   *
   * @param {String} entryPoint entry point for the hook to add
   * @param {Function} hookFunction function to execute
   */


  DOMPurify.addHook = function (entryPoint, hookFunction) {
    if (typeof hookFunction !== 'function') {
      return;
    }

    hooks[entryPoint] = hooks[entryPoint] || [];
    arrayPush(hooks[entryPoint], hookFunction);
  };
  /**
   * RemoveHook
   * Public method to remove a DOMPurify hook at a given entryPoint
   * (pops it from the stack of hooks if more are present)
   *
   * @param {String} entryPoint entry point for the hook to remove
   * @return {Function} removed(popped) hook
   */


  DOMPurify.removeHook = function (entryPoint) {
    if (hooks[entryPoint]) {
      return arrayPop(hooks[entryPoint]);
    }
  };
  /**
   * RemoveHooks
   * Public method to remove all DOMPurify hooks at a given entryPoint
   *
   * @param  {String} entryPoint entry point for the hooks to remove
   */


  DOMPurify.removeHooks = function (entryPoint) {
    if (hooks[entryPoint]) {
      hooks[entryPoint] = [];
    }
  };
  /**
   * RemoveAllHooks
   * Public method to remove all DOMPurify hooks
   *
   */


  DOMPurify.removeAllHooks = function () {
    hooks = {};
  };

  return DOMPurify;
}

var purify = createDOMPurify();

const html$1 = (raw, ...keys) => keys.length === 0 ? raw[0] : String.raw({ raw }, ...keys);
const escape = (s) => {
  const innerS = "" + s;
  return innerS ? purify.sanitize(innerS) : innerS;
};
const noBreaks = (s) => {
  return s?.replace(/\s/g, "&nbsp");
};

var __defProp$s = Object.defineProperty;
var __getOwnPropDesc$s = Object.getOwnPropertyDescriptor;
var __decorateClass$s = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$s(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp$s(target, key, result);
  return result;
};
let BaseCon = class extends HTMLElement {
  get topOffset() {
    let y = 0;
    let element = this;
    while (true) {
      y += element.offsetTop;
      if (element.offsetParent === null) {
        break;
      }
      element = element.offsetParent;
    }
    return y;
  }
  static get elementName() {
    return this.name.replace(/(.)([A-Z]+)/g, (match) => {
      return match[0] + "-" + match[1].toLowerCase();
    }).toLowerCase().replace(/-element$/g, "");
  }
  get elementName() {
    return this.constructor.elementName;
  }
  _template;
  get template() {
    if (!this._template) {
      throw new Error("You need to override me me");
    }
    return this._template;
  }
  set template(v) {
    this._template = v;
  }
  connectedCallback() {
    this.innerHTML = this.template(this);
  }
  htmlForSlot(_slotName) {
    return "";
  }
};
BaseCon = __decorateClass$s([
  controller
], BaseCon);
const BaseCon$1 = BaseCon;

var __defProp$r = Object.defineProperty;
var __getOwnPropDesc$r = Object.getOwnPropertyDescriptor;
var __decorateClass$r = (decorators, target2, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$r(target2, key) : target2;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target2, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp$r(target2, key, result);
  return result;
};
let PageButtonElement = class extends BaseCon$1 {
  span;
  set pageNumber(v) {
    if (this)
      this.innerHTML = escape("" + v);
  }
  get template() {
    return (_element) => {
      return html$1``;
    };
  }
  connectedCallback() {
    super.connectedCallback();
  }
};
__decorateClass$r([
  target
], PageButtonElement.prototype, "span", 2);
__decorateClass$r([
  attr
], PageButtonElement.prototype, "pageNumber", 1);
PageButtonElement = __decorateClass$r([
  controller
], PageButtonElement);

const pageControlTemplate = (element) => {
  const elementName = element.elementName;
  return html$1`
<div class='page-control'>
    <span data-target='${elementName}.previous' id='page-control-previous'>←</span>
    <span data-target='${elementName}.next' id='page-control-next'>→</span>
</div>
`;
};

var __defProp$q = Object.defineProperty;
var __getOwnPropDesc$q = Object.getOwnPropertyDescriptor;
var __decorateClass$q = (decorators, target2, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$q(target2, key) : target2;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target2, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp$q(target2, key, result);
  return result;
};
let PageControlElement = class extends BaseCon$1 {
  previous;
  pages;
  next;
  maxPageButtons = 7;
  onPageControlClicked = (_pageControl) => {
  };
  _pageControlClicked() {
    this.onPageControlClicked(this);
  }
  get template() {
    return pageControlTemplate;
  }
  connectedCallback() {
    super.connectedCallback();
    this.next.onclick = (_evt) => {
      if (this.next.classList.contains("disabled")) {
        return;
      }
      this.currentPage++;
      this._pageControlClicked();
    };
    this.previous.onclick = (_evt) => {
      if (this.previous.classList.contains("disabled")) {
        return;
      }
      this.currentPage--;
      this._pageControlClicked();
    };
  }
  _pageCount = 1;
  get pageCount() {
    return this._pageCount;
  }
  set pageCount(count) {
    count = Number(count);
    if (isNaN(count)) {
      return;
    }
    this._pageCount = count;
    this.createPages(count, this.currentPage);
  }
  _currentPage = 0;
  get currentPage() {
    return this._currentPage;
  }
  set currentPage(pageNo) {
    if (pageNo < 0) {
      return;
    }
    pageNo = Math.min(pageNo, this.pageCount);
    this._currentPage = pageNo;
    this.createPages(this.pageCount, pageNo);
    this.previous.classList.remove("disabled");
    this.next.classList.remove("disabled");
    this.pages.forEach((page) => page.classList.remove("page-control-current"));
    if (pageNo + 1 === this.pageCount) {
      this.next.classList.add("disabled");
    }
    if (pageNo === 0) {
      this.previous.classList.add("disabled");
    }
    for (const pageObj of this.pages) {
      if (pageObj.pageNumber === pageNo + 1) {
        pageObj.classList.add("page-control-current");
      }
    }
  }
  createPages(_count, currentPage) {
    this.removeAllPages();
    const pages = this.visiblePageNumbers(currentPage);
    for (const pageNumber of pages) {
      const node = document.createElement("page-button");
      node.setAttribute("data-targets", "page-control.pages");
      node.addEventListener("click", this.pageClicked.bind(this));
      node.classList.add("page-control-page");
      this.next.parentNode.insertBefore(node, this.next);
      node.pageNumber = pageNumber;
    }
  }
  pageClicked(evt) {
    if (this.currentPage == evt.target.pageNumber - 1) {
      return;
    }
    this.currentPage = evt.target.pageNumber - 1;
    this._pageControlClicked();
  }
  removeAllPages() {
    this.pages.forEach((page) => page.remove());
  }
  visiblePageNumbers(currentPage) {
    currentPage = Number(currentPage);
    const diffModifier = Math.floor(this.maxPageButtons / 2);
    let min = Math.max(currentPage - diffModifier, 0);
    let max = Math.min(Math.max(currentPage + diffModifier, this.maxPageButtons + 1), this.pageCount + 1);
    if (max - min < this.maxPageButtons) {
      min = max - this.maxPageButtons;
    }
    if (isNaN(min) || isNaN(max)) {
      max = 0;
      min = 0;
    }
    currentPage = 0;
    min = Math.max(1, min);
    const arr = [...Array(max + 1).keys()].slice(min, max);
    return arr;
  }
};
__decorateClass$q([
  target
], PageControlElement.prototype, "previous", 2);
__decorateClass$q([
  targets
], PageControlElement.prototype, "pages", 2);
__decorateClass$q([
  target
], PageControlElement.prototype, "next", 2);
PageControlElement = __decorateClass$q([
  controller
], PageControlElement);

function apiOrigin() {
  const origin = window.location.origin;
  if (origin.match(/www2/gi)) {
    return "https://staging.api.rockfax.app";
  }
  if (origin.match(/localhost|local\./gi)) {
    return "http://127.0.0.1:3002";
  }
  if (origin.match(/dev\.|ryecroft.github.io/gi)) {
    return "https://dev.api.rockfax.app";
  }
  if (origin.match(/route-viewer-dkk8m\.ondigitalocean\.app/gi)) {
    return "https://dev.api.rockfax.app";
  }
  return "https://api.rockfax.app";
}
const generateApiUrl$8 = () => {
  const targetOrigin = apiOrigin();
  return `${targetOrigin}/v1/rockfax/search/routedb_search_ukc`;
};
const stars = [
  "",
  "*",
  "**",
  "***"
];
let queryExamples = [
  "stanage hvs&#8288;-&#8288;e2 ***",
  "damp scary crack",
  "nevis winter ***",
  "pat littlejohn devon e4",
  "fontainebleau f7a |soft|",
  '"lake district" trad vd-hvs ***',
  "kalymnos sport |soft|",
  "granite sport scotland **",
  "peak e4&#8288;-&#8288;e5 |overgraded| **",
  "wide crack peak grit",
  "e5&#8288;-&#8288;e7 1970&#8288;-&#8288;1975",
  "el&nbsp;cap 5.8&#8288;-&#8288;5.10",
  "e4&#8288;-&#8288;e6 fawcett yorkshire *** 1980&#8288;-&#8288;1994"
];

const searchResultsTemplate = (element) => {
  const elementName = element.elementName;
  return html$1`
        <div class='rfd-search'>
            <div data-target='${element.elementName}.header_container' id='search-results-header-container'>
                <div class='routes-viewer-header'>
                    <h1 data-target='${element.elementName}.routes_viewer_title' class='mb-4 mt-4 pt-3' style='font-size: 1.1rem;color:var(--title-color)'></h1>
                    <div class='routes-viewer-controls'>
                        <select data-target='${element.elementName}.sort_order_picker' class='routes-viewer-sort-order'>
                            ${element.htmlForSlot("routes-viewer-sort-order-options")}
                        </select>
                        <button class='fa-button' data-target='${element.elementName}.sort_button' data-action='click:${element.elementName}#toggleSortDirection'><i class='fas fa-arrow-down' data-target='${element.elementName}.sort_arrow'></i></button>
                        <button class='fa-button ml-auto mr-2' data-target='${element.elementName}.filters_button' data-action='click:${element.elementName}#showFilters'><i class='fas fa-filter' data-target='${element.elementName}.filter_icon'></i></button>
                    </div>
                </div>
                <div id='filter-bar-container'>
                    <span id='filter-icon' class='icon icon-magnifying-glass' alt='icon'></span>
                    <input data-target='${elementName}.input' id='filter-bar' spellcheck='false' autocorrect='off' autocomplete='off' autocapitalize='off' type='search' placeholder='Filter results...' />
                    <span data-target='${elementName}.delete_text_button' id='filter-delete-text-button' tabindex='-1' class='icon icon-circle-times hidden' alt='icon'></span>
                </div>
                <div data-target='${elementName}.progress_bar' id='search-results-progress' class='loader-stopped'></div>
                <div data-target='${elementName}.filter_query_description' class='search-results-search-query-description' style='border-bottom: solid var(--background-color-page-semi) 1px;'></div>
                <div class="position-absolute w-100">
                    <section-header data-target='${element.elementName}.fixed_section_header' hidden><span>Thursday, 4 June 2015</span><span>10 routes</span></section-header>
                    <section-header data-target='${element.elementName}.fixed_section_header_2' style='font-size:0.75em;padding-top:2px' hidden><span>Thursday, 4 June 2015</span><span>10 routes</span></section-header>
                </div>
            </div>
            <div id='search-results-widget'>
                <div data-target='${elementName}.routes_viewer_container' id='search-results-container-search-results'></div>
            </div>
            ${element.htmlForSlot("routes-viewer-page-control-slot")}
        </div>
    `;
};

function isMobile() {
  return !window.matchMedia("only screen and (min-width: 768px)").matches;
}
function performIfMobile(func) {
  if (isMobile()) {
    func();
  }
}
function appendDivider(target, _idx) {
  const divider = document.createElement("hr");
  divider.classList.add("divider-no-height-set");
  target.routes_viewer_container.appendChild(divider);
}
function appendRoute({ target, route, tagName }) {
  tagName ||= "search-result";
  const el = document.createElement(tagName);
  el.classList.remove("hidden");
  el.classList.add("route-entry");
  el.itemName = escape(route.item_name);
  el.cragName = escape(route.crag_name);
  let techGrade = escape(route.tech_grade ? " " + route.tech_grade : "");
  if (route.tech_grade && route.tech_grade.match(/^S\d$/)) {
    techGrade = html$1`<span style="color:#93AFEC">${techGrade}</span>`;
  }
  el.routeGrade = `${route.route_grade}${techGrade}`;
  el.starCount = route.star_count;
  el.cragName = escape(route.crag_name);
  el.countyName = escape(route.county_name);
  el.countryName = escape(route.country_name);
  el.routeIdUkc = route.id_ukc;
  el.colorId = route.grade_color_id;
  el.slugFull = route.slug_full;
  target.routes_viewer_container.appendChild(el);
  el.resultType = "route";
  return el;
}
function appendCrag({ target, crag }) {
  const el = document.createElement("search-result");
  el.classList.remove("hidden");
  el.classList.add("crag-entry");
  el.itemName = escape(crag.item_name);
  const routeTypes = crag.route_type_names_string.replace(/\|\|/g, "/").replace(/\|/g, "");
  el.routeGrade = routeTypes;
  el.cragName = crag.rock_type_names_string.replace("UNKNOWN", "Unknown");
  el.countyName = escape(crag.county_name);
  el.countryName = escape(crag.country_name);
  el.slugFull = crag.slug;
  el.logStatus = "unclimbed";
  el.wishlistStatus = false;
  target.routes_viewer_container.appendChild(el);
  el.resultType = "crag";
  return el;
}
function appendButtress({ target, buttress }) {
  const el = document.createElement("search-result");
  el.classList.remove("hidden");
  el.classList.add("crag-entry");
  el.itemName = escape(`${buttress.item_name} (${buttress.crag_name})`);
  const routeTypes = buttress.route_type_names_string.replace(/\|\|/g, "/").replace(/\|/g, "");
  el.routeGrade = routeTypes;
  el.cragName = buttress.rock_type_names_string.replace("UNKNOWN", "Unknown");
  el.countyName = escape(buttress.county_name);
  el.countryName = escape(buttress.country_name);
  el.slugFull = buttress.slug;
  el.logStatus = "unclimbed";
  el.wishlistStatus = false;
  target.routes_viewer_container.appendChild(el);
  el.resultType = "buttress";
  return el;
}
function appendNoResults(target, message) {
  const el = document.createElement("search-result");
  el.classList.remove("hidden");
  el.classList.add("no-results-entry");
  el.itemName = message || `No matching results ='[`;
  target.routes_viewer_container.appendChild(el);
  el.resultType = "no-result";
}

function onKeyPressedEvent(e) {
  e.stopPropagation();
  if (e.key == "Escape") {
    this.resignFocus();
    return;
  }
  if (this.routes_viewer_container.children.length == 0) {
    return;
  }
  switch (e.key) {
    case "ArrowDown":
      e.preventDefault();
      this.onArrowDownKey();
      break;
    case "ArrowUp":
      e.preventDefault();
      this.onArrowUpKey();
      break;
    case "Enter":
      e.preventDefault();
      this.onEnterKey(e);
      break;
  }
}
function onArrowDownKey() {
  for (let i = 0; i < this.routes_viewer_container.children.length; i++) {
    if (this.routes_viewer_container.children[i].classList.contains("selected")) {
      if (i < this.routes_viewer_container.children.length - 1) {
        this.routes_viewer_container.children[i].classList.remove("selected");
        let resultEntryElement = this.routes_viewer_container.children[i + 1];
        if (resultEntryElement.tagName === "HR") {
          resultEntryElement = this.routes_viewer_container.children[i + 2];
        }
        resultEntryElement.classList.add("selected");
        if (this.isElementVisible(resultEntryElement) === false) {
          resultEntryElement.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }
      return;
    }
  }
  this.routes_viewer_container.children[0].classList.add("selected");
}
function onArrowUpKey() {
  for (let i = 0; i < this.routes_viewer_container.children.length; i++) {
    if (this.routes_viewer_container.children[i].classList.contains("selected")) {
      this.routes_viewer_container.children[i].classList.remove("selected");
      if (i > 0) {
        let resultEntryElement = this.routes_viewer_container.children[i - 1];
        if (resultEntryElement.tagName === "HR") {
          resultEntryElement = this.routes_viewer_container.children[i - 2];
        }
        resultEntryElement.classList.add("selected");
        if (this.isElementVisible(resultEntryElement) === false) {
          resultEntryElement.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      } else {
        return;
      }
      return;
    }
  }
}
function onEnterKey(e) {
  if (e.getModifierState("Shift")) {
    this.submitSearch();
    return;
  }
  for (let i = 0; i < this.routes_viewer_container.children.length; i++) {
    if (this.routes_viewer_container.children[i].classList.contains("selected")) {
      this.routes_viewer_container.children[i].href.click();
      return;
    }
  }
  this.submitSearch();
}

class Cookies {
  constructor(cookie) {
    this.cookie = cookie;
    if (!cookie) {
      return;
    }
    const cookiesArr = cookie.split("; ");
    for (const component of cookiesArr) {
      const [key, value] = component.split("=");
      this._lookup[key] = value;
    }
    this._ukcSid = new UkcSid(this);
  }
  _lookup = {};
  _ukcSid;
  static default() {
    return new Cookies(document.cookie);
  }
  get userIdUkc() {
    return this._ukcSid?.ukcId;
  }
  get ukcCookiesSid() {
    return this._ukcSid?.cookieSid;
  }
  get(key) {
    return this._lookup[key];
  }
}
class UkcSid {
  constructor(cookies) {
    this.cookies = cookies;
    const cookiesArr = cookies.get("ukcsid")?.split("#");
    if (!cookiesArr) {
      return;
    }
    this.cookieSid = cookiesArr.shift();
    this.ukcId = Number(cookiesArr.shift());
  }
  cookieSid;
  ukcId = 0;
}

var __defProp$p = Object.defineProperty;
var __getOwnPropDesc$p = Object.getOwnPropertyDescriptor;
var __decorateClass$p = (decorators, target2, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$p(target2, key) : target2;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target2, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp$p(target2, key, result);
  return result;
};
let BaseRoutesViewer = class extends BaseCon$1 {
  get apiUrl() {
    return generateApiUrl$8();
  }
  get localStorageKey() {
    return this.elementName;
  }
  get isOnline() {
    return window.navigator.onLine;
  }
  lastSearch;
  get searchDelay() {
    if (!this.isOnline)
      return 50;
    return isMobile() ? 500 : 300;
  }
  lastHeaderString = "";
  routes_viewer_container;
  searchbar;
  input;
  progress_bar;
  delete_text_button;
  filter_query_description;
  header_container;
  routes_viewer_title;
  sort_order_picker;
  sort_arrow;
  sort_button;
  filters_button;
  filter_icon;
  fixed_section_header;
  fixed_section_header_2;
  get query() {
    return this.input.value;
  }
  set query(query) {
    if (document.activeElement !== this.input) {
      this.input.focus();
    }
    this.input.value = query || "";
    this.setVisibilityOfDeleteButton(query);
    this.input.dispatchEvent(new Event("input", { bubbles: true }));
  }
  searchBarPlaceholderString = "Search all routes/crags...";
  timeout;
  searchId = 0;
  fixedHeaderFillingStrategy = "closest";
  preventLayoutShift = false;
  get template() {
    return searchResultsTemplate;
  }
  get sortOrderKey() {
    return `${this.elementName}-sort-order`;
  }
  get sortDirectionKey() {
    return `${this.sortOrderKey}-direction`;
  }
  get defaultSortOrder() {
    return "score";
  }
  get savedSortOrder() {
    const saved = localStorage.getItem(this.sortOrderKey);
    return saved || this.defaultSortOrder;
  }
  get savedSortDirection() {
    const saved = localStorage.getItem(this.sortDirectionKey);
    return this.convertStringToSortDirection(saved);
  }
  get urlQuery() {
    let urlParams = new URLSearchParams(window.location.search);
    return urlParams.get("query") || urlParams.get("q");
  }
  get urlSortDirection() {
    let urlParams = new URLSearchParams(window.location.search);
    return this.convertStringToSortDirection(urlParams.get("direction"));
  }
  convertStringToSortDirection(str) {
    switch (str) {
      case "asc":
        return "asc";
      case "desc":
        return "desc";
      default:
        return void 0;
    }
  }
  set urlSortDirection(newVal) {
    let urlParams = new URLSearchParams(window.location.search);
    urlParams.set("direction", newVal);
    window.history.replaceState({}, "", "?" + urlParams.toString());
  }
  get urlFilter() {
    let urlParams = new URLSearchParams(window.location.search);
    return urlParams.get("filter");
  }
  set urlFilter(newVal) {
    let urlParams = new URLSearchParams(window.location.search);
    urlParams.set("filter", newVal);
    window.history.replaceState({}, "", "?" + urlParams.toString());
  }
  get urlPage() {
    let urlParams = new URLSearchParams(window.location.search);
    const page = urlParams.get("page") || "1";
    return Number(page) - 1;
  }
  set urlPage(newVal) {
    newVal ||= 0;
    newVal += 1;
    let urlParams = new URLSearchParams(window.location.search);
    urlParams.set("page", newVal.toString());
    window.history.replaceState({}, "", "?" + urlParams.toString());
  }
  get urlSortOrder() {
    let urlParams = new URLSearchParams(window.location.search);
    return urlParams.get("sort");
  }
  set urlSortOrder(newVal) {
    let urlParams = new URLSearchParams(window.location.search);
    urlParams.set("sort", newVal);
    window.history.replaceState({}, "", "?" + urlParams.toString());
  }
  get searchbarTag() {
    return "ukc-searchbar";
  }
  responseMessage = "";
  connectedCallback() {
    super.connectedCallback();
    this.maybeSetCookieFromUrl();
    this.sort_button.style.display = "none";
    this.sort_order_picker.style.display = "none";
    this.fixed_section_header.hidden = false;
    this.sort_order_picker.value = this.urlSortOrder || this.savedSortOrder;
    this.sortDirectionFromButton = this.urlSortDirection || this.savedSortDirection;
    this.sort_order_picker.addEventListener("change", (evt) => {
      this.sortOrderChanged(evt);
    });
    this.query = this.urlFilter;
    Object.defineProperty(this, "onKeyPressedEvent", { value: onKeyPressedEvent });
    Object.defineProperty(this, "onEnterKey", { value: this.onEnterKey });
    Object.defineProperty(this, "onArrowUpKey", { value: onArrowUpKey });
    Object.defineProperty(this, "onArrowDownKey", { value: onArrowDownKey });
    document.addEventListener("DOMContentLoaded", () => {
      this.onDomContentLoaded();
    });
    document.addEventListener("scroll", this._handleScrollListeners.bind(this), { passive: true });
    this.filter_query_description.addEventListener("click", (_evt) => {
      this.header_container.style.top = "-55px";
    });
    this.input.addEventListener("focus", () => this.onInputFocus());
    this.input.addEventListener("input", () => this.onInputUpdated());
    this.delete_text_button.addEventListener("mousedown", (evt) => evt.preventDefault());
    this.delete_text_button.addEventListener("click", (_evt) => {
      this.query = "";
    });
    this.input.addEventListener("keydown", (e) => this.onKeyPressedEvent(e));
    this._init();
    const filterBar = this.input;
    document.ontouchstart = function(_e) {
      if (document.activeElement === filterBar) {
        filterBar.blur();
      }
    };
    this.input.focus();
  }
  maybeSetCookieFromUrl() {
    if (window.location.host !== "route-viewer-dkk8m.ondigitalocean.app")
      return;
    let urlParams = new URLSearchParams(window.location.search);
    const cookie = urlParams.get("ukcsid");
    if (cookie) {
      document.cookie = `ukcsid=${cookie}`;
    }
  }
  resignFocus() {
    this.input.blur();
  }
  get menuHeight() {
    return this.routes_viewer_container.getBoundingClientRect().height;
  }
  maxScroll() {
    return Math.max(document.documentElement.scrollHeight, document.body.scrollHeight) - window.innerHeight;
  }
  lastScroll = 0;
  lastTimeScrollCalculated = 0;
  get areWeInANewFrame() {
    return Date.now() - this.lastTimeScrollCalculated > 15;
  }
  _handleScrollListeners(evt) {
    if (!this.areWeInANewFrame)
      return false;
    this.onScrollMaxEvery16ms(evt);
    this.lastTimeScrollCalculated = Date.now();
    return true;
  }
  onScrollMaxEvery16ms(evt) {
    this.positionHeaderForScroll(evt);
    this.setTextOfFixedHeaderBasedOnScroll(evt);
  }
  previousHeaderTop;
  positionHeaderForScroll(_evt) {
    if (this.preventLayoutShift)
      return;
    const scroll = this.routes_viewer_container.getBoundingClientRect().top;
    let diff = scroll - this.lastScroll;
    this.lastScroll = scroll;
    if (diff > 40) {
      const newTop2 = "-55px";
      if (this.previousHeaderTop === newTop2)
        return;
      this.header_container.style.top = newTop2;
      this.previousHeaderTop = newTop2;
      return;
    }
    if (diff > 0 || diff > -20)
      return;
    const height = this.filter_query_description.getBoundingClientRect().top - this.header_container.getBoundingClientRect().top;
    const newTop = -height + "px";
    if (this.previousHeaderTop === newTop)
      return;
    this.header_container.style.top = newTop;
  }
  currentHeader = null;
  setTextOfFixedHeaderBasedOnScroll(_evt) {
    const deets = this.getClosestHeaderToFixedHeader(this.fixed_section_header, ".main-header");
    if (deets.current && this.currentHeader !== deets.current) {
      this.currentHeader = deets.current;
      this.fixed_section_header.left_label.innerHTML = deets.current.left_label.innerHTML;
      this.fixed_section_header.right_label.innerHTML = deets.current.right_label.innerHTML;
      this.fixed_section_header.flag_element.hidden = deets.current.flag_element.hidden;
      this.fixed_section_header.flag_element.className = deets.current.flag_element.className;
    }
    if (this.fixedHeaderFillingStrategy === "closestTwo") {
      const deets2 = this.getClosestHeaderToFixedHeader(this.fixed_section_header_2, ".sub-header");
      if (!deets2.current)
        return;
      this.fixed_section_header_2.left_label.innerHTML = deets2.current.left_label.innerHTML;
      this.fixed_section_header_2.right_label.innerHTML = deets2.current.right_label.innerHTML;
      this.fixed_section_header_2.flag_element.hidden = deets2.current.flag_element.hidden;
      this.fixed_section_header_2.flag_element.className = deets2.current.flag_element.className;
    }
  }
  getClosestHeaderToFixedHeader(fixedHeader, classNames) {
    const headers = this.querySelectorAll(`section-header${classNames}`);
    const heads = {
      previous: null,
      current: null,
      next: null
    };
    const fixedTop = fixedHeader.getBoundingClientRect().top;
    for (let idx = headers.length - 1; idx > 0; idx--) {
      const element = headers[idx];
      if (element === fixedHeader)
        continue;
      const elementTop = element.getBoundingClientRect().top;
      if (elementTop > fixedTop) {
        heads.next = element;
        heads.current = headers[idx - 1];
        heads.previous = headers[idx - 2];
      }
    }
    if (!heads.current)
      heads.current = headers[headers.length - 1];
    return heads;
  }
  headerTopIsLowerThanScroll(header, scroll) {
    return header.getBoundingClientRect().top < scroll;
  }
  onDomContentLoaded() {
    this.searchbar = document.getElementsByTagName(this.searchbarTag)[0];
    this.searchbar.search_widget.style.opacity = "0";
    this.searchbar.input.addEventListener("focus", () => {
      this.searchbar.search_widget.style.opacity = "1";
    });
    this.searchbar.gray_view.addEventListener("click", () => {
      this.searchbar.search_widget.style.opacity = "0";
    });
    this.searchbar.placeholder = this.searchBarPlaceholderString;
    this.searchbar.delete_text_button.classList.remove("hidden");
  }
  sortOrderChanged(_evt) {
    this.lastSearch = void 0;
    this.onInputUpdated();
    this.urlSortOrder = this.sort_order_picker.value;
    localStorage.setItem(this.sortOrderKey, this.sort_order_picker.value);
  }
  onInputFocus() {
  }
  get allowEmptyQuery() {
    return false;
  }
  async _init() {
  }
  async fetchResults(_query, _pageNo) {
    throw new Error("Not implemented");
  }
  bodyForRequest(query, _pageNo) {
    const cookie = Cookies.default().cookie;
    return {
      cookie,
      search_query: query,
      sort_by: this.sort_order_picker.value,
      direction: this.sortDirectionFromButton,
      return_type: "full"
    };
  }
  get sortDirectionFromButton() {
    const c = this.sort_arrow;
    const isOn = c.style.rotate === "180deg";
    return isOn ? "asc" : "desc";
  }
  set sortDirectionFromButton(newVal) {
    const c = this.sort_arrow;
    const isOn = newVal === "asc";
    c.style.rotate = isOn ? "180deg" : "0deg";
  }
  toggleSortDirection() {
    this.toggleArrowInSortButton();
    this.lastSearch = void 0;
    this.onInputUpdated();
    localStorage.setItem(this.sortDirectionKey, this.sortDirectionFromButton);
  }
  showFilters() {
    const el = document.createElement("filters-controller");
    document.body.appendChild(el);
    setTimeout(() => {
      el.show();
    });
  }
  toggleArrowInSortButton() {
    this.sort_arrow.style.rotate = this.sortDirectionFromButton === "desc" ? "180deg" : "0deg";
  }
  htmlForSlot(slotName) {
    if (slotName === "routes-viewer-sort-order-options") {
      return html$1`
      <option value="score"      >Order by search score</option>
      <option value="crag_name" >Order by crag name</option>
      <option value="grade"     >Order by route grade</option>
      <!--<option value="voted_grade">Order by voted grade</option>-->
      `;
    }
    const sup = super.htmlForSlot(slotName);
    if (sup) {
      return sup;
    }
    return "";
  }
  clearResultsDropdown() {
    this.routes_viewer_container.innerHTML = "";
    this.headerDeets = [];
    if (this.fixed_section_header.left_label) {
      this.fixed_section_header.left_label.innerHTML = "";
      this.fixed_section_header.right_label.innerHTML = "";
    }
  }
  queue = [];
  buildResults(_data) {
    throw new Error("not implemented");
  }
  processQueue() {
    if (this.queue.length) {
      this.preventLayoutShift = true;
      let i = 0;
      const max = this.routes_viewer_container.children.length > 4 ? 2 : 15;
      while (i < max && this.queue.length) {
        this.queue.shift()();
        i++;
      }
      setTimeout(() => {
        this.processQueue();
      }, 0);
    } else {
      this.preventLayoutShift = false;
    }
  }
  appendCrag(target2, crag) {
    return appendCrag({ target: target2, crag });
  }
  appendRoute(target2, route, tagName) {
    return appendRoute({ target: target2, route, tagName });
  }
  headerDeets = [];
  appendHeader(leftText, ascentCount, target2, objectDescriptor) {
    const header = document.createElement("section-header");
    header.classList.add("main-header");
    target2.routes_viewer_container.appendChild(header);
    const word = objectDescriptor[ascentCount === 1 ? "singular" : "plural"];
    const rightText = `${ascentCount} ${word}`;
    header.left_label && (header.left_label.innerText = leftText);
    header.right_label && (header.right_label.innerText = rightText);
    this.headerDeets.push({ leftText, rightText });
    if (this.fixed_section_header.left_label && this.fixed_section_header.left_label.innerText === "") {
      this.fixed_section_header.left_label.innerText = this.headerDeets[0].leftText;
      this.fixed_section_header.right_label.innerText = this.headerDeets[0].rightText;
    }
    return header;
  }
  submitSearch() {
  }
  startProgressBar() {
    this.progress_bar.classList.add("loader-spinning");
    this.routes_viewer_container.style.opacity = "0.4";
  }
  stopProgressBar() {
    this.progress_bar.classList.remove("loader-spinning");
    this.routes_viewer_container.style.opacity = "1";
  }
  showHelp() {
    alert("help text");
  }
  onInputUpdated() {
    throw new Error("not implemented");
  }
  get fullQuery() {
    let query = this.urlQuery;
    const res = ((query || "") + " " + (this.input.value || this.urlFilter || "")).trim();
    return res;
  }
  get fullQueryWithoutUrlFilter() {
    let query = this.urlQuery;
    const res = ((query || "") + " " + this.input.value).trim();
    return res;
  }
  onKeyPressedEvent(_e) {
  }
  onArrowDownKey() {
  }
  onArrowUpKey() {
  }
  onEnterKey(_e) {
    this.input.blur();
  }
  isElementVisible(el) {
    const rect = el.getBoundingClientRect();
    const elemTop = rect.top;
    const elemBottom = rect.bottom;
    let isVisible = elemBottom < (window.visualViewport?.height || 0);
    isVisible = isVisible && elemTop > 0;
    return isVisible;
  }
  privateDivString() {
    return html$1`
    <div class='d-flex w-75 mx-auto justify-content-center pt-5 pb-5' style='opacity:0.5;'><i class="fas fa-do-not-enter pr-2 mt-1"></i>${this.responseMessage}</div>
    `;
  }
  setVisibilityOfDeleteButton(str) {
    this.delete_text_button.classList[str ? "remove" : "add"]("hidden");
  }
  willAppendRoute(_route) {
  }
};
__decorateClass$p([
  target
], BaseRoutesViewer.prototype, "routes_viewer_container", 2);
__decorateClass$p([
  target
], BaseRoutesViewer.prototype, "input", 2);
__decorateClass$p([
  target
], BaseRoutesViewer.prototype, "progress_bar", 2);
__decorateClass$p([
  target
], BaseRoutesViewer.prototype, "delete_text_button", 2);
__decorateClass$p([
  target
], BaseRoutesViewer.prototype, "filter_query_description", 2);
__decorateClass$p([
  target
], BaseRoutesViewer.prototype, "header_container", 2);
__decorateClass$p([
  target
], BaseRoutesViewer.prototype, "routes_viewer_title", 2);
__decorateClass$p([
  target
], BaseRoutesViewer.prototype, "sort_order_picker", 2);
__decorateClass$p([
  target
], BaseRoutesViewer.prototype, "sort_arrow", 2);
__decorateClass$p([
  target
], BaseRoutesViewer.prototype, "sort_button", 2);
__decorateClass$p([
  target
], BaseRoutesViewer.prototype, "filters_button", 2);
__decorateClass$p([
  target
], BaseRoutesViewer.prototype, "filter_icon", 2);
__decorateClass$p([
  target
], BaseRoutesViewer.prototype, "fixed_section_header", 2);
__decorateClass$p([
  target
], BaseRoutesViewer.prototype, "fixed_section_header_2", 2);
BaseRoutesViewer = __decorateClass$p([
  controller
], BaseRoutesViewer);
const BaseRoutesViewer$1 = BaseRoutesViewer;

const searchbarTemplate = (element) => {
  const elementName = element.elementName;
  return html$1`
        <div class='rfd-search'>
            <div data-target='${elementName}.gray_view' id='gray-view' class='hidden'></div>
            <div data-target='${elementName}.search_container' id='search-container'>
                <input data-target='${elementName}.input_hidden' id='input-hidden' spellcheck='false' autocorrect='off' autocomplete='off' autocapitalize='off' type='search' placeholder='' />
                <div data-target='${elementName}.search_absolute' id='search-absolute'>
                    <div data-target='${elementName}.searchbar_short_display_container' id='searchbar-short-display-container'>
                        <span id='search-icon-short-display' class='icon icon-magnifying-glass' alt='icon'></span>
                        <span data-target='${elementName}.searchbar_short_display' id='placeholder-short-display'>Search all routes/crags...</span>
                    </div>
                    <div data-target='${elementName}.search_widget' id='search-widget'>
                        <div data-target='${elementName}.searchbar_inner_container' id='searchbar-inner-container'>
                            <span id='search-icon' class='icon icon-magnifying-glass' alt='icon'></span>
                            <input data-target='${elementName}.input' id='searchbar' spellcheck='false' autocorrect='off' autocomplete='off' autocapitalize='off' type='search' placeholder='Search all routes/crags...' data-results-url='/frontend/views/route_search/example.html' />
                            <span data-target='${elementName}.delete_text_button' id='delete-search-text-button' tabindex='-1' class='icon icon-circle-times hidden' alt='icon'></span>
                        </div>
                        <div>
                            <div data-target='${elementName}.progress_bar' id='progess' class='loader-stopped hidden'></div>
                            <div data-target='${elementName}.filter_query_description' id='search-query-description' class='hidden'></div>
                            <div data-target='${elementName}.query_suggestion_container' id='searchbar-help-text-container' class='hidden'>
                                <div id='searchbar-query-suggestion-flex'>
                                    <div data-target='${elementName}.searchbar_query_suggestion' id='searchbar-help-text'>
                                        <a data-target='${elementName}.searchbar_query_suggestion_href' data-action='click:#updateRandomQuery' href="javascript:void(0);"></a>
                                    </div>
                                    <div data-target='${elementName}.help_button' tabindex='-1' id='help-button' class='icon icon-question-mark' alt='icon'></div>
                                </div>
                            </div>
                        </div>
                        <div data-target='${elementName}.help_text_container' class='hidden'>
                        </div>
                        <div data-target='${elementName}.routes_viewer_container' id='search-results-container' class='hidden'></div>
                        <div data-target='${elementName}.searchbar_footer' id='searchbar-footer' class='hidden'>
                            <div id='searchbar-footer-content'>
                                <div class='divider'></div>
                                <div class='footer-content'>
                                    <div style='align-items:center; display:flex; flex-direction:row-reverse; min-height:2rem'>
                                        <span data-target='${elementName}.return_key_action' class='mouse-over'>
                                            <span data-target='${elementName}.show_all_results_span' id='return-key-action' style='padding-right:4px;padding-left:8px;'>show all results</span>
                                            <span class='keycode'>⇧</span>
                                            <span class='keycode'>⏎</span>
                                        </span>
                                        <span id='focus-searchbar-group'>
                                            <span id='focus-searchbar' style='padding-right:2px;'>focus searchbar</span>
                                            <span class='keycode' style='font-weight:900;'>／</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
};

var __defProp$o = Object.defineProperty;
var __getOwnPropDesc$o = Object.getOwnPropertyDescriptor;
var __decorateClass$o = (decorators, target2, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$o(target2, key) : target2;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target2, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp$o(target2, key, result);
  return result;
};
let BaseSearchbarElement = class extends BaseCon$1 {
  searchId = new Date();
  maxWindowHeightRatio = 0.4;
  lastSearch;
  currentSearchDelay = 100;
  minSearchDelay = 100;
  maxSearchDelay = 500;
  debounceTimeout;
  hideAllExtrasTimeout;
  minQueryLength = 4;
  localStorageKey = "search-results";
  baseData;
  search_container;
  input;
  return_key_action;
  search_absolute;
  help_button;
  delete_text_button;
  search_widget;
  progress_bar;
  routes_viewer_container;
  searchbar_inner_container;
  searchbar_query_suggestion;
  searchbar_query_suggestion_href;
  query_suggestion_container;
  help_text_container;
  filter_query_description;
  searchbar_footer;
  show_all_results_span;
  gray_view;
  searchbar_short_display;
  get resultsUrlString() {
    throw new Error("must override");
  }
  get isSearchbarFocussed() {
    return document.activeElement === this.input;
  }
  get isSearchbarEmpty() {
    return !this.input.value;
  }
  get isDropdownVisible() {
    return !this.routes_viewer_container.classList.contains("hidden");
  }
  get query() {
    return this.input.value;
  }
  setQueryWithoutDispatchingEvent(query, alsoFocusInput = true) {
    if (document.activeElement !== this.input && alsoFocusInput) {
      this.input.focus();
    }
    this.input.value = query || "";
    this.setVisibilityOfDeleteButton(query);
    this.searchbar_short_display.innerText = query || "";
    if (!this.input.value) {
      this.baseData = void 0;
      this.showQuerySuggestion();
      this.stopProgressBar();
    }
  }
  set query(query) {
    if (document.activeElement !== this.input) {
      this.input.focus();
    }
    this.input.value = query || "";
    this.input.dispatchEvent(new Event("input", { bubbles: true }));
    this.setVisibilityOfDeleteButton(query);
    if (!this.input.value) {
      this.baseData = void 0;
      this.showQuerySuggestion();
      this.stopProgressBar();
    }
  }
  get jsSelectString() {
    if (this.id)
      return `document.querySelector('#${this.id}')`;
    return html$1`document.querySelector('${this.elementName}')`;
  }
  get isHelpVisible() {
    return !this.help_text_container.classList.contains("hidden");
  }
  set placeholderString(newVal) {
    this.placeholder = newVal;
  }
  get placeholderString() {
    return this.placeholder;
  }
  set placeholder(newVal) {
    this.input && (this.input.placeholder = newVal);
    this.searchbar_short_display && (this.searchbar_short_display.innerText = newVal);
  }
  get placeholder() {
    return this.input?.placeholder;
  }
  baseZIndex = 1e3;
  get template() {
    return searchbarTemplate;
  }
  isAndroid = getMobileOS() === "android";
  connectedCallback() {
    super.connectedCallback();
    this.search_container.style.zIndex = "0";
    this.style.zIndex = "0";
    this.searchbar_query_suggestion.innerHTML = `Here's some hint about the search bar`;
    if (isMobile()) {
      this.minSearchDelay = 500;
      this.maxSearchDelay = 1e3;
      this.input.addEventListener("input", this.debounceFunction(this._onSearchbarUpdated));
    } else {
      this.input.addEventListener("input", this.throttleFunction(this._onSearchbarUpdated));
    }
    this.input.addEventListener("focus", () => this.onSearchbarFocus());
    this.input.addEventListener("focusout", () => this.onSearchbarFocusout());
    this.gray_view.addEventListener("click", () => this.hideAllExtras);
    this.help_button.addEventListener("click", () => this.showHelp());
    this.help_button.addEventListener("mousedown", (evt) => evt.preventDefault());
    document.addEventListener("keydown", (e) => this.maybeFocusSearchbar(e));
    this.input.addEventListener("keydown", (e) => this.onKeyPressedEvent(e));
    document.addEventListener("click", (e) => this.maybeHideDropdown(e));
    this.delete_text_button.addEventListener("click", (evt) => {
      this.query = "";
      evt.preventDefault();
    });
    this.delete_text_button.addEventListener("mousedown", (evt) => evt.preventDefault());
    this.return_key_action.addEventListener("click", () => this.submitSearch());
    Object.defineProperty(this, "onKeyPressedEvent", { value: onKeyPressedEvent });
    Object.defineProperty(this, "onEnterKey", { value: onEnterKey });
    Object.defineProperty(this, "onArrowUpKey", { value: onArrowUpKey });
    Object.defineProperty(this, "onArrowDownKey", { value: onArrowDownKey });
    document.addEventListener("DOMContentLoaded", () => {
      this.baseZIndex = Number(window.getComputedStyle(this).zIndex?.replace("px", "") || "0");
    });
    const sb = this.input;
    this.routes_viewer_container.ontouchstart = function(_e) {
      if (document.activeElement === sb) {
        sb.blur();
      }
    };
    this.help_text_container.ontouchstart = function(_e) {
      if (document.activeElement === sb) {
        sb.blur();
      }
    };
    this.routes_viewer_container.style.maxHeight = `${window.innerHeight - 260}px`;
  }
  focus() {
    this.input.focus();
  }
  buildResults(_data) {
    throw new Error("You need to override this");
  }
  resignFocus() {
    this.input.blur();
    this.hideAllExtras();
  }
  showQuerySuggestion() {
    this.query_suggestion_container.classList.remove("hidden");
    this.filter_query_description.classList.add("hidden");
    this.searchbar_footer.classList.remove("display-if-necessary");
    this.routes_viewer_container.classList.add("hidden");
    this.setVisibilityOfDeleteButton(this.input.value);
  }
  throttleFunction(func) {
    let prev = 0;
    return (...args) => {
      clearTimeout(this.debounceTimeout);
      let now = new Date().getTime();
      if (now - prev > this.currentSearchDelay) {
        prev = now;
        return func(...args);
      }
      this.debounceTimeout = setTimeout(async () => {
        func(...args);
      }, this.minSearchDelay * 2);
    };
  }
  debounceFunction(func) {
    return (...args) => {
      clearTimeout(this.debounceTimeout);
      this.debounceTimeout = setTimeout(async () => {
        func(...args);
      }, this.minSearchDelay);
    };
  }
  createResultsDropdown() {
    let routes_viewer_container = this.querySelector("#search-results-container");
    routes_viewer_container.classList.add("results-dropdown");
    return routes_viewer_container;
  }
  maybeHideDropdown(e) {
    if (!this.search_widget.contains(e.target)) {
      this.hideAllExtras();
    }
  }
  _onSearchbarUpdated = () => {
    if (this.isSearchbarEmpty) {
      this.baseData = void 0;
      this.stopProgressBar();
    }
    this.searchbar_short_display.innerText = this.input.value || this.placeholderString;
    this.setVisibilityOfDeleteButton(this.input.value);
    let delay = Math.max(4e3 / this.input.value.length, this.minSearchDelay);
    delay = Math.min(delay, this.maxSearchDelay);
    this.currentSearchDelay = delay;
    this.onSearchbarUpdated();
    if (this.input.value.trim().length > this.minQueryLength) {
      clearTimeout(this.debounceTimeout);
    } else {
      this.stopProgressBar();
    }
  };
  onSearchbarUpdated() {
    throw new Error("must override");
  }
  onKeyPressedEvent(_e) {
  }
  onArrowDownKey() {
  }
  onArrowUpKey() {
  }
  onEnterKey(_e) {
  }
  moveSearchbarHighIfMobile() {
    if (this.search_absolute.style.position === "fixed") {
      return;
    }
    performIfMobile(() => {
      const rect = this.search_absolute.getBoundingClientRect();
      this.input.style.caretColor = "transparent";
      this.input.style.paddingTop = "12pt";
      this.input.style.paddingBottom = "12pt";
      this.search_absolute.style.position = "fixed";
      this.search_absolute.style.top = rect.top + "px";
      this.search_absolute.style.left = rect.left + "px";
      this.search_absolute.style.width = rect.width + "px";
      this.search_absolute.style.transform = `translateY( -${Math.abs(rect.top) - 22}px)`;
      setTimeout(() => {
        this.input.style.caretColor = null;
      }, this.animateDuration);
    });
  }
  animateDuration = 300;
  resetSearchbarposition() {
    if (this.search_absolute.style.position !== "fixed") {
      return;
    }
    setTimeout(() => {
      if (this.isSearchbarFocussed) {
        return;
      }
      this._resetSearchbarposition();
    }, 10);
  }
  _resetSearchbarposition() {
    this.input.style.paddingTop = null;
    this.input.style.paddingBottom = null;
    this.search_absolute.style.transform = `translateY(0px)`;
    setTimeout(() => {
      this.search_absolute.style.position = null;
      this.search_absolute.style.top = null;
      this.search_absolute.style.left = null;
      this.search_absolute.style.width = null;
    }, this.animateDuration + 1);
  }
  onSearchbarFocus() {
    if (isAppleSafari() && !this.isSearchbarEmpty && window.scrollY > 0) {
      const theHtml = document.querySelector("html");
      theHtml.style.overflowY = "hidden";
      theHtml.style.touchAction = "none";
      window.scroll({
        top: 0,
        behavior: "smooth"
      });
      setTimeout(() => {
        this._onSearchbarFocus();
      }, 300);
      return;
    }
    this._onSearchbarFocus();
  }
  _onSearchbarFocus() {
    this.search_widget.classList.add("focussed");
    this.moveSearchbarHighIfMobile();
    clearTimeout(this.hideAllExtrasTimeout);
    this.setGrayViewDisplayState("visible");
    this.style.zIndex = this.baseZIndex + 10 + "";
    this.search_container.style.zIndex = "var(--search-container-z-index)";
    this.query_suggestion_container.classList.add("hidden");
    this.progress_bar.classList.add("hidden");
    if (this.isSearchbarFocussed) {
      this.progress_bar.classList.remove("hidden");
      if (this.isSearchbarEmpty && !this.isHelpVisible) {
        this.query_suggestion_container.classList.remove("hidden");
      }
    }
    if (!this.isSearchbarEmpty) {
      if (this.baseData) {
        this.showResultsDropdown();
      } else {
        this._onSearchbarUpdated();
      }
    }
    setTimeout(() => {
      if (this.isSearchbarFocussed === false) {
        return;
      }
      this.setGrayViewDisplayState("visible");
    }, 250);
  }
  onSearchbarFocusout() {
    this.search_widget.classList.remove("focussed");
  }
  maybeFocusSearchbar(e) {
    if (this.isSearchbarFocussed) {
      return;
    }
    switch (e.key) {
      case "/":
        this.input.focus();
        e.preventDefault();
        break;
    }
  }
  setGrayViewDisplayState(state) {
    switch (state) {
      case "hidden":
        this.gray_view.classList.remove("fade-in");
        this.gray_view.classList.add("fade-out");
        setTimeout(() => {
          this.gray_view.classList.add("hidden");
        }, 200);
        break;
      case "visible":
        this.gray_view.classList.remove("hidden");
        this.gray_view.classList.remove("fade-out");
        this.gray_view.classList.add("fade-in");
        break;
    }
  }
  showResultsDropdown() {
    this.routes_viewer_container.classList.remove("hidden");
    this.search_widget.classList.add("normal-background");
    this.searchbar_footer.classList.add("display-if-necessary");
    this.filter_query_description.classList.remove("hidden");
    this.query_suggestion_container.classList.add("hidden");
    if (isMobile()) {
      if (!this.isAndroid) {
        this.routes_viewer_container.style.maxHeight = `${window.innerHeight - 260}px`;
      }
    } else {
      this.routes_viewer_container.style.maxHeight = String(window.innerHeight * this.maxWindowHeightRatio) + "px";
    }
  }
  hideResultsDropdown() {
    this.hideHelp();
    this.resetSearchbarposition();
    this.routes_viewer_container.classList.add("hidden");
    this.search_widget.classList.remove("normal-background");
    this.searchbar_footer.classList.remove("display-if-necessary");
    this.filter_query_description.classList.add("hidden");
    this.query_suggestion_container.classList.add("hidden");
    if (this.isSearchbarFocussed) {
      this.query_suggestion_container.classList.remove("hidden");
    }
    setTimeout(() => {
      if (this.isSearchbarFocussed) {
        return;
      }
      this.setGrayViewDisplayState("hidden");
    }, 150);
  }
  clearResultsDropdown() {
    this.routes_viewer_container.innerHTML = "";
  }
  hiding = false;
  hideAllExtras() {
    if (this.hiding === true) {
      return;
    }
    const theHtml = document.querySelector("html");
    theHtml.style.overflow = null;
    theHtml.style.touchAction = null;
    this.hiding = true;
    this.hideResultsDropdown();
    this.progress_bar.classList.add("hidden");
    this.query_suggestion_container.classList.add("hidden");
    setTimeout(() => {
      this.search_container.style.zIndex = "0";
      this.style.zIndex = "0";
      this.hiding = false;
    }, 320);
  }
  selectResultEntry(index) {
    const entries = this.routes_viewer_container.querySelectorAll("search-result");
    const resultEntryElement = entries[index];
    resultEntryElement.classList.add("selected");
    if (this.isElementVisible(resultEntryElement) === false) {
      resultEntryElement.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }
  startProgressBar() {
    this.progress_bar.classList.add("loader-spinning");
  }
  stopProgressBar() {
    this.progress_bar.classList.remove("loader-spinning");
  }
  showHelp() {
    alert("help text");
  }
  hideHelp() {
    this.help_text_container.classList.add("hidden");
  }
  submitSearch() {
    localStorage.setItem(this.localStorageKey, JSON.stringify(this.baseData));
    this.submitSearchHandler(this.fullResultsUrl);
  }
  submitSearchHandler = (resultsUrl) => {
    window.location.href = resultsUrl;
  };
  get fullResultsUrl() {
    let searchQuery = this.input.value;
    return this.resultsUrlString + "?query=" + searchQuery;
  }
  isElementVisible(el) {
    const rect = el.getBoundingClientRect();
    const elemTop = rect.top;
    const elemBottom = rect.bottom;
    let isVisible = elemBottom < this.routes_viewer_container.getBoundingClientRect().bottom;
    isVisible = isVisible && elemTop > this.routes_viewer_container.getBoundingClientRect().top;
    return isVisible;
  }
  setVisibilityOfDeleteButton(str) {
    this.delete_text_button.classList[str ? "remove" : "add"]("hidden");
  }
};
__decorateClass$o([
  target
], BaseSearchbarElement.prototype, "search_container", 2);
__decorateClass$o([
  target
], BaseSearchbarElement.prototype, "input", 2);
__decorateClass$o([
  target
], BaseSearchbarElement.prototype, "return_key_action", 2);
__decorateClass$o([
  target
], BaseSearchbarElement.prototype, "search_absolute", 2);
__decorateClass$o([
  target
], BaseSearchbarElement.prototype, "help_button", 2);
__decorateClass$o([
  target
], BaseSearchbarElement.prototype, "delete_text_button", 2);
__decorateClass$o([
  target
], BaseSearchbarElement.prototype, "search_widget", 2);
__decorateClass$o([
  target
], BaseSearchbarElement.prototype, "progress_bar", 2);
__decorateClass$o([
  target
], BaseSearchbarElement.prototype, "routes_viewer_container", 2);
__decorateClass$o([
  target
], BaseSearchbarElement.prototype, "searchbar_inner_container", 2);
__decorateClass$o([
  target
], BaseSearchbarElement.prototype, "searchbar_query_suggestion", 2);
__decorateClass$o([
  target
], BaseSearchbarElement.prototype, "searchbar_query_suggestion_href", 2);
__decorateClass$o([
  target
], BaseSearchbarElement.prototype, "query_suggestion_container", 2);
__decorateClass$o([
  target
], BaseSearchbarElement.prototype, "help_text_container", 2);
__decorateClass$o([
  target
], BaseSearchbarElement.prototype, "filter_query_description", 2);
__decorateClass$o([
  target
], BaseSearchbarElement.prototype, "searchbar_footer", 2);
__decorateClass$o([
  target
], BaseSearchbarElement.prototype, "show_all_results_span", 2);
__decorateClass$o([
  target
], BaseSearchbarElement.prototype, "gray_view", 2);
__decorateClass$o([
  target
], BaseSearchbarElement.prototype, "searchbar_short_display", 2);
__decorateClass$o([
  attr
], BaseSearchbarElement.prototype, "placeholderString", 1);
BaseSearchbarElement = __decorateClass$o([
  controller
], BaseSearchbarElement);
const BaseSearchbarElement$1 = BaseSearchbarElement;
const getMobileOS = () => {
  const ua = navigator.userAgent.toLowerCase();
  if (/android/i.test(ua)) {
    return "android";
  } else if (/ipad|iphone|ipod/.test(ua) || navigator.platform === "macintel" && navigator.maxTouchPoints > 1) {
    return "ios";
  }
  return "other";
};
const isAppleSafari = () => {
  return getMobileOS() === "ios";
};

const html = "<h6>🛟 Route &amp; Crag Search Help</h6>\n<p>You should probably try out the suggestions to get an feel of the stuff you can do before you waste time reading all this…</p>\n<p>…but if you really want to know everything about the search, here you go:</p>\n<p>Searches are checked against the following properties of a route (and the equivalents for a crag):</p>\n<ul>\n<li><code>name</code></li>\n<li><code>crag name</code></li>\n<li><code>buttress name</code></li>\n<li><code>area name</code></li>\n<li><code>country name</code></li>\n<li><code>first ascent</code> potentially including dates and names, but could be one or the other or neither</li>\n<li><code>rock type name</code> one of eg [ granite, gritstone, sandstone, limestone, schist, rhylite, ... ] (there are loads)</li>\n<li><code>route type name</code> one of [ sport, trad, winter, bouldering, aid ] (this list is complete)</li>\n<li><code>description</code></li>\n<li><code>route grade</code></li>\n<li><code>tech grade</code></li>\n</ul>\n<p>A match is found if all of the tokens of the search query match one or more of the fields (more on tokens later, but think &quot;words&quot; for now). This means you can very quickly write a query that returns very few results by typing a combination of fragments of the various fields, like <code>mal wom</code> returns <code>Wombat E2</code> at Malham as the first result because token1 (<code>mal</code>) matches the crag name (<code>Malham</code>) and token2 (<code>wom</code>) matches the route's name. You could be even more precise and search <code>mal wom e2</code> but for this instance it's not needed. (Note that this stuff is true at the time of writing but could change if more routes are added).</p>\n<p>The scoring of results is done by applying multipliers depending on where a match is found. The higher the field is on the list above, the more valuble a match against it is considered, so if a query matches against one route's <code>name</code> and another's <code>description</code>, the one against the <code>name</code> will be considered a better match and appear nearer the top. The popularity of the route is taken into account so a route with loads of ascents will be given a higher search score than one with none.</p>\n<p>For the most part this is all anyone really needs, but there are also a few advanced options you can use if you want:</p>\n<ul>\n<li>exact-phrase matches, eg <code>&quot;captain nemo&quot;</code></li>\n<li>route-star ranges, eg <code>*-**</code></li>\n<li>grade ranges, eg <code>vs-e3</code></li>\n<li>date ranges, eg <code>1984-1986</code> (for first ascents - note that not all routes have fa details so these will be excluded from a search with a date range!)</li>\n<li>difficulty for grade / grade quality, eg <code>|soft|</code></li>\n<li>regular expressions, eg <code>/chris (?!craggs)/</code></li>\n<li>negations, eg <code>-crack</code></li>\n</ul>\n<h6>Exact phrase matches</h6>\n<p>Surround multiple words with double quotes to require a match on that phrase, eg <code>&quot;bat route&quot; malham</code> creates the tokens <code>bat route</code> and <code>malham</code>. Another example is <code>roof crack stanage</code> currently returns 45 routes, where as <code>&quot;roof crack&quot; stanage</code> returns only 9.</p>\n<h6>Route-star ranges</h6>\n<p>Asterisks get special treatment in search queries now. A sequence of them is considered to be a star rating for a route, so <code>*</code> is treated as 1-star, <code>**</code> treated as 2-stars and <code>***</code> treated as 3-stars. Typing just one sequence creates a search where the route is required to have at least that many stars, eg <code>bat route **</code> will only return routes with 2 or more stars that also match the other search tokens <code>bat</code> and <code>route</code>.</p>\n<p>Adding a dash and a second star sequence will create a range, eg <code>*-**</code> means &quot;match routes with at least one and at most two stars&quot;.</p>\n<h6>Grade ranges</h6>\n<p>As above with stars, but with grades. Eg <code>vs-e1</code> will match routes with a grade of either <code>VS</code>, <code>HVS</code> or <code>E1</code>.</p>\n<h6>Date ranges (only years)</h6>\n<p>Date ranges will check against the first-ascent date field and require the route to have been put up between the start date and the end date (inclusive). Eg <code>1970-1974</code> will match routes put up between 01-01-1970 and 31-12-1974. You should note that not all routes have had the first ascent date filled in, and these routes will be excluded from any search that includes date ranges, so you might not get the results you expect.</p>\n<h6>Difficulty for grade</h6>\n<p>Not sure what to call this so we'll use &quot;difficulty for grade&quot;. We've calculated a value based on the grade voting system that assigns a route a value from one of:</p>\n<ul>\n<li><code>soft</code></li>\n<li><code>benchmark</code></li>\n<li><code>hard</code></li>\n</ul>\n<p>You can search for routes with these charateristics by using the special pipe-syntax, eg <code>|soft|</code>. If you don't wrap the token in pipes, you'll just be searching the other text fields, so <code>soft</code>, with no pipes, would get you a match if the token appeard in the description for example and <code>|soft|</code> will <em>only</em> match against routes that have been marked as soft, and not check the other fields for the token.</p>\n<p>A continuation of this system which uses the same syntax allows you to search for routes that are voted to be a completely different grade using the following tokens:</p>\n<ul>\n<li><code>undergraded</code></li>\n<li><code>overgraded</code></li>\n</ul>\n<p>eg <code>|overgraded|</code>. Note that this is based on votes, so if there are no votes for a route and you include one of these tokens it won't appear, regardless of whether it is in reality over or undergraded. Note also that whilst you can combine these with soft/benchmark/hard, doing so doesn't really make sense.</p>\n<h6>Shorthands</h6>\n<p>The grade quality stuff all have shorthand variants:</p>\n<ul>\n<li><code>|s</code> = <code>|soft|</code></li>\n<li><code>|b</code> = <code>|benchmark|</code></li>\n<li><code>|h</code> = <code>|hard|</code></li>\n<li><code>|u</code> = <code>|undergraded|</code></li>\n<li><code>|o</code> = <code>|overgraded|</code></li>\n</ul>\n<h6>Regular expressions</h6>\n<p>Finally we reach the most pointless feature, regular expressions - we need only add an email function and this search bar will be complete.</p>\n<p>Regular expressions, for those that don't know, are a way of describing patterns in strings. They are a very powerful tool for searching and manipulating text, and completely unnecessary in this search bar. However, if you do want to use them, they are possible by surrounding the expression with forward slashes, eg <code>/chris (?!craggs)/</code> will match any routes that mention <code>'chris'</code> but not those that mention <code>'chris craggs'</code>. Or <code>e2-e3 /crap|damp|horrible/</code> will return you a list of probably not classic routes.</p>\n<p>Note that pure-regex queries are not allowed due to the cost of the queries against the database. You should always add any of the other query types mentioned above if you're using a regex.</p>\n<h6>Negation</h6>\n<p>Extra finally, if you precede any token with a minus character you will negate it and require that it is not matched, eg <code>-&quot;mark leach&quot; bat malham</code>.</p>\n";

var __defProp$n = Object.defineProperty;
var __getOwnPropDesc$n = Object.getOwnPropertyDescriptor;
var __decorateClass$n = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$n(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp$n(target, key, result);
  return result;
};
let myQueryExamples = new Set(queryExamples);
let RouteSearchbarElement = class extends BaseSearchbarElement$1 {
  searchType;
  get resultsUrlString() {
    return window.location.origin + "/results/";
  }
  set query(query) {
    super.query = query;
    if (!this.input.value) {
      this.showQuerySuggestion();
    }
  }
  get query() {
    return super.query;
  }
  connectedCallback() {
    super.connectedCallback();
    this.setRandomQueryExample();
  }
  showQuerySuggestion() {
    const wasHidden = this.searchbar_query_suggestion.classList.contains("hidden");
    super.showQuerySuggestion();
    if (wasHidden) {
      this.setRandomQueryExample();
    }
  }
  showHelp() {
    this.help_text_container.innerHTML = html;
    this.help_text_container.style.overflowY = "auto";
    this.help_text_container.style.padding = "8pt";
    this.help_text_container.style.fontSize = "10pt";
    this.help_text_container.style.color = "var(--subtitle-color)";
    this.help_text_container.style.paddingBottom = "0px";
    this.help_text_container.classList.remove("hidden");
    this.help_text_container.style.maxHeight = String(window.innerHeight * this.maxWindowHeightRatio) + "px";
    isMobile() && (this.help_text_container.style.maxHeight = `${window.innerHeight - 122}px`);
    this.showResultsDropdown();
    this.query_suggestion_container.classList.add("hidden");
    this.filter_query_description.classList.add("hidden");
    this.searchbar_footer.classList.remove("display-if-necessary");
    this.routes_viewer_container.classList.add("hidden");
    this.input.focus();
  }
  randomQueryString = "";
  updateRandomQuery() {
    this.query = this.randomQueryString;
  }
  setRandomQueryExample() {
    if (myQueryExamples.size === 0) {
      myQueryExamples = new Set(queryExamples);
    }
    const idx = Math.floor(Math.random() * myQueryExamples.size);
    const random = Array(...myQueryExamples.values())[idx];
    myQueryExamples.delete(random);
    const cleaned = random.replace(/&#8288;/g, "").replace(/&nbsp;/g, " ");
    this.randomQueryString = cleaned;
    this.searchbar_query_suggestion.innerHTML = html$1`Need inspiration? How about: <a href="javascript:${this.jsSelectString}.updateRandomQuery();void(0);">${random}</a>`;
  }
  _selectHandler;
  set selectHandler(handler) {
    console.log(handler);
    this._selectHandler = handler;
  }
  get selectHandler() {
    return this._selectHandler;
  }
  fetchResults() {
    const currentSearchId = new Date();
    const currentQuery = this.query.trim();
    (async () => {
      this.routes_viewer_container.style.opacity = "0.4";
      const response = await fetch(generateApiUrl$8(), {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(
          {
            search_query: currentQuery,
            search_type: this.searchType || "all",
            page: 0
          }
        )
      });
      const results = await response.json();
      if (this.searchId.getTime() > currentSearchId.getTime()) {
        return;
      }
      const data = { data: results, status: response.status };
      this.stopProgressBar();
      this.searchId = currentSearchId;
      this.lastSearch = currentQuery;
      this.buildResults(data);
      this.routes_viewer_container.style.opacity = "1";
    })();
  }
  onSearchbarUpdated() {
    this.hideHelp();
    this.startProgressBar();
    if (this.query.trim().length === 0) {
      this.showQuerySuggestion();
      this.hideResultsDropdown();
      this.clearResultsDropdown();
      return;
    }
    if (this.query.trim().length < 3) {
      this.searchbar_query_suggestion.innerHTML = "Keep typing...";
      this.hideResultsDropdown();
      this.clearResultsDropdown();
      return;
    }
    this.fetchResults();
  }
  showResultsDropdown() {
    super.showResultsDropdown();
    this.setRandomQueryExample();
  }
  selectResultEntry(index) {
    super.selectResultEntry(index);
    if (!this.baseData) {
      return;
    }
  }
  queue = [];
  buildResults(_data) {
    if (!_data)
      return;
    const data = _data.data;
    this.queue = [];
    this.clearResultsDropdown();
    console.debug(data);
    if (this.isSearchbarFocussed) {
      this.showResultsDropdown();
    }
    this.baseData = _data;
    if (data.objects?.length === 0) {
      appendNoResults(this);
    }
    if (data.meta.parsed_query) {
      this.filter_query_description.innerHTML = data.meta.parsed_query.queryDescription;
    } else {
      this.filter_query_description.innerHTML = "";
    }
    let routeCount = 0;
    let cragCount = 0;
    let buttressCount = 0;
    data.objects[0]?.routes.forEach((element, idx) => {
      switch (element.type) {
        case "route_ukc": {
          if (routeCount === 0 && buttressCount + cragCount) {
            this.queue.push(() => {
              appendDivider(this);
            });
          }
          routeCount++;
          this.queue.push(() => {
            this.appendRoute(this, element);
          });
          break;
        }
        case "crag_ukc": {
          cragCount++;
          this.queue.push(() => {
            this.appendCrag(this, element);
          });
          break;
        }
        case "buttress_ukc": {
          if (buttressCount === 0 && cragCount) {
            this.queue.push(() => {
              appendDivider(this);
            });
          }
          buttressCount++;
          this.queue.push(() => {
            this.appendButtress(this, element);
          });
          break;
        }
      }
    });
    this.show_all_results_span.classList.remove("hidden");
    this.show_all_results_span.innerHTML = `Show all ${escape(data.meta?.total_matches)} results`;
    this.processQueue();
  }
  processQueue() {
    if (this.queue.length) {
      this.queue.shift()();
      Promise.resolve().then(() => this.processQueue());
    }
  }
  appendButtress(target, buttress) {
    const element = appendButtress({ target, buttress });
    if (this.selectHandler) {
      setTimeout(() => {
        const href = element.querySelector("a");
        href.href = "javascript: void(0)";
        href.addEventListener("click", () => {
          this.selectHandler(buttress);
        });
      });
    }
    return element;
  }
  appendCrag(target, crag) {
    const element = appendCrag({ target, crag });
    if (this.selectHandler) {
      setTimeout(() => {
        const href = element.querySelector("a");
        href.href = "javascript: void(0)";
        href.addEventListener("click", () => {
          this.selectHandler(crag);
        });
      });
    }
    return element;
  }
  appendRoute(target, route) {
    const element = appendRoute({ target, route });
    if (this.selectHandler) {
      setTimeout(() => {
        const href = element.querySelector("a");
        href.href = "javascript: void(0)";
        href.addEventListener("click", () => {
          this.selectHandler(route);
        });
      });
    }
    return element;
  }
};
__decorateClass$n([
  attr
], RouteSearchbarElement.prototype, "searchType", 2);
RouteSearchbarElement = __decorateClass$n([
  controller
], RouteSearchbarElement);
const RouteSearchbarElement$1 = RouteSearchbarElement;

var UkcLocalStorage;
((UkcLocalStorage2) => {
  class BaseRouteDataForCrag {
    static identifier(cragId) {
      return `base_routedata_for_crag_${cragId}`;
    }
    static fetch(cragId) {
      const data = localStorage.getItem(this.identifier(cragId));
      if (data)
        return JSON.parse(data);
      return void 0;
    }
    static store(routes, cragId) {
      if (!routes) {
        return;
      }
      localStorage.setItem(this.identifier(cragId), JSON.stringify(routes));
    }
  }
  UkcLocalStorage2.BaseRouteDataForCrag = BaseRouteDataForCrag;
  class LogbookDetails {
    #lookup;
    get lookup() {
      if (!this.#lookup) {
        let diskLogbookString = localStorage.getItem(this.identifier);
        const diskLogbook = JSON.parse(diskLogbookString);
        this.#lookup = new LogbookDetailsBacker(diskLogbook);
      }
      return this.#lookup;
    }
    set lookup(v) {
      this.#lookup = v;
    }
    fetching = false;
    identifier = "user_logbook";
    get apiUrl() {
      const origin = apiOrigin();
      return `${origin}/v1/ukc/user/logbook`;
    }
    get editDateKey() {
      return `${this.identifier}_edit_date`;
    }
    set editDate(t) {
      localStorage.setItem(this.editDateKey, t.getTime().toString());
    }
    get editDate() {
      let t = new Date(parseInt(localStorage.getItem(this.editDateKey)));
      return t;
    }
    constructor() {
    }
    isFetching = false;
    async fetch() {
      this.isFetching = true;
      const cookie = "ukcsid=" + Cookies.default().get("ukcsid");
      const response = await fetch(this.apiUrl, {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(
          {
            cookie,
            edit_date: this.editDate
          }
        )
      });
      const status = response.status;
      const res = await response.json();
      this.isFetching = false;
      while (this.queue.length > 0) {
        const callback = this.queue.shift();
        callback(res);
      }
      return { data: res, status };
    }
    queue = [];
    async fetchLogbookLookup(callback) {
      this.queue.push(callback);
      if (this.isFetching)
        return Promise.resolve(void 0);
      return this._fetchLookup();
    }
    async _fetchLookup() {
      if (!Cookies.default().get("ukcsid")) {
        return void 0;
      }
      if (localStorage.getItem(this.identifier)) {
        this.fetch().then((remoteDeets) => {
          this.loadFromRemoteDetails(remoteDeets);
        });
      } else {
        const remoteDeets = await this.fetch();
        if (remoteDeets.status !== 200) {
          console.debug(remoteDeets);
        } else {
          this.loadFromRemoteDetails(remoteDeets);
        }
      }
      return this.lookup;
    }
    loadFromRemoteDetails(remoteDeets) {
      const date = new Date(remoteDeets.last_updated);
      this.editDate = date;
      this.lookup.merge(remoteDeets);
      localStorage.setItem(this.identifier, JSON.stringify(this.lookup));
    }
    bestAscent(routeIdUkc) {
      return this.lookup?.bestAscent(routeIdUkc);
    }
    logbookStatus(routeIdUkc) {
      if (!this.lookup)
        return "unclimbed";
      return this.lookup?.bestAscent(routeIdUkc)?.simple_style_name || "unclimbed";
    }
    wishlistStatus(routeIdUkc) {
      if (!this.lookup)
        return false;
      return this.lookup?.hasWishlist(routeIdUkc);
    }
    ascentsForRouteUkcId(routeIdUkc) {
      return this.lookup?.logbook[routeIdUkc] || [];
    }
    get ascentEntries() {
      return Object.values(this.lookup?.logbook || {}).flat().sort((a, b) => a.ascent_date.getTime() - b.ascent_date.getTime());
    }
    get wishlistEntries() {
      return Object.values(this.lookup?.wishlist || {}).flat();
    }
  }
  UkcLocalStorage2.LogbookDetails = LogbookDetails;
  class LogbookDetailsBacker {
    logbook = {};
    wishlist = {};
    static styleQualities = {
      clean: 2,
      followed: 1,
      dogged: 0
    };
    constructor(diskLogbook = null) {
      if (diskLogbook) {
        Object.values(diskLogbook.logbook).forEach((ascents) => ascents.forEach((ascent) => this.addAscent(ascent)));
        this.wishlist = diskLogbook.wishlist;
      }
    }
    merge(remoteDeets) {
      const data = remoteDeets.data;
      data.logbook.forEach((ascent) => this.addAscent(ascent));
      data.wishlist.forEach((wish) => this.addWishlistItem(wish));
      data.logbook_deletes.forEach((deets) => this.deleteAscent(deets));
      data.wishlist_deletes.forEach((deets) => this.deleteWishlistItem(deets));
    }
    addAscent(ascent) {
      this.logbook[ascent.route_id_ukc] = this.logbook[ascent.route_id_ukc] || [];
      if (typeof ascent.ascent_date === "string") {
        ascent = new AscentInfo(ascent);
      }
      ascent.ascent_date = new Date(ascent.ascent_date);
      this.logbook[ascent.route_id_ukc] = this.logbook[ascent.route_id_ukc].filter((el) => el.id !== ascent.id);
      this.logbook[ascent.route_id_ukc].push(ascent);
    }
    addWishlistItem(wishlistItem) {
      this.wishlist[wishlistItem.route_id_ukc] = this.wishlist[wishlistItem.route_id_ukc] || [];
      this.wishlist[wishlistItem.route_id_ukc] = this.wishlist[wishlistItem.route_id_ukc].filter((el) => el.id !== wishlistItem.id);
      this.wishlist[wishlistItem.route_id_ukc].push(wishlistItem);
    }
    deleteAscent(deets) {
      if (!this.logbook[deets.route_id_ukc]) {
        return;
      }
      this.logbook[deets.route_id_ukc] = this.logbook[deets.route_id_ukc].filter((el) => el.id !== deets.ascent_id);
    }
    deleteWishlistItem(deets) {
      if (!this.wishlist[deets.route_id_ukc]) {
        return;
      }
      this.wishlist[deets.route_id_ukc] = this.wishlist[deets.route_id_ukc].filter((el) => el.id !== deets.wishlist_id);
    }
    bestAscent(routeIdUkc) {
      const ascents = this.logbook[routeIdUkc];
      if (!ascents)
        return null;
      const asc = ascents.sort((a, b) => {
        return LogbookDetailsBacker.styleQualities[b.simple_style_name] - LogbookDetailsBacker.styleQualities[a.simple_style_name];
      })[0];
      return asc;
    }
    hasWishlist(routeIdUkc) {
      return !!this.wishlist[routeIdUkc];
    }
  }
  class AscentInfo {
    ascent_date_ignore_day;
    ascent_date_ignore_month;
    id;
    ascent_date;
    edit_date;
    route_id_ukc;
    style_id;
    simple_style_name;
    notes;
    user_id_ukc;
    user_name;
    country_code;
    partners;
    ascent_style;
    #submit_date;
    set submit_date(v) {
      if (v instanceof Date) {
        this.#submit_date = v;
      } else {
        this.#submit_date = new Date(v);
      }
    }
    get submit_date() {
      return this.#submit_date;
    }
    get dateString() {
      if (this.ascent_date_ignore_month) {
        return this.ascent_date.getFullYear().toString();
      }
      if (this.ascent_date_ignore_day) {
        const month = this.ascent_date.toLocaleString("default", { month: "long" });
        return month + " " + this.ascent_date.getFullYear().toString();
      }
      return this.ascent_date.toLocaleString("default", { weekday: "long", year: "numeric", month: "long", day: "numeric" });
    }
    get editDateString() {
      return this.edit_date.toLocaleString("default", { weekday: "long", year: "numeric", month: "long", day: "numeric" });
    }
    get shortDateString() {
      if (this.ascent_date_ignore_month) {
        return this.ascent_date.getFullYear().toString();
      }
      if (this.ascent_date_ignore_day) {
        const month = this.ascent_date.toLocaleString("default", { month: "long" });
        return month + " " + this.ascent_date.getFullYear().toString();
      }
      return this.ascent_date.toLocaleString("default", { year: "numeric", month: "short", day: "numeric" });
    }
    get lastClimbedDescription() {
      if (this.ascent_date_ignore_month) {
        return `you last climbed this sometime in ${this.dateString}`;
      }
      if (this.ascent_date_ignore_day) {
        return `you last climbed this in ${this.dateString}`;
      }
      return `you last climbed this on ${this.dateString}`;
    }
    constructor(parameters) {
      Object.assign(this, parameters);
      this.ascent_date = new Date(this.ascent_date);
      this.edit_date = new Date(this.edit_date);
    }
  }
  UkcLocalStorage2.AscentInfo = AscentInfo;
  class WishlistInfo extends AscentInfo {
    get dateString() {
      return this.edit_date.toLocaleString("default", { weekday: "long", year: "numeric", month: "long", day: "numeric" });
    }
  }
  UkcLocalStorage2.WishlistInfo = WishlistInfo;
  UkcLocalStorage2.sharedLogbook = new UkcLocalStorage2.LogbookDetails();
})(UkcLocalStorage || (UkcLocalStorage = {}));
globalThis.logbook = new UkcLocalStorage.LogbookDetails();

var __defProp$m = Object.defineProperty;
var __getOwnPropDesc$m = Object.getOwnPropertyDescriptor;
var __decorateClass$m = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$m(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp$m(target, key, result);
  return result;
};
const sharedStorage$5 = UkcLocalStorage.sharedLogbook;
let UkcSearchbarElement = class extends RouteSearchbarElement$1 {
  localStorageKey = "routes-viewer";
  connectedCallback() {
    super.connectedCallback();
    sharedStorage$5.fetchLogbookLookup((_res) => this.updateLogbookAndWishlistStatusOfCells());
  }
  get resultsUrlString() {
    if (window.location.origin.includes("localhost")) {
      return window.location.origin + "/results/";
    }
    return window.location.origin + "/logbook/search/";
  }
  appendCrag(target, crag) {
    const el = super.appendCrag(target, crag);
    return el;
  }
  appendRoute(target, route) {
    const el = super.appendRoute(target, route);
    el.logStatus = sharedStorage$5.logbookStatus(route.id_ukc);
    el.wishlistStatus = sharedStorage$5.wishlistStatus(route.id_ukc);
    return el;
  }
  updateLogbookAndWishlistStatusOfCells() {
    const cells = this.getElementsByClassName("search-result");
    for (let i = 0; i < cells.length; i++) {
      const cell = cells[i];
      cell.logStatus = sharedStorage$5.logbookStatus(cell.routeIdUkc);
      cell.wishlistStatus = sharedStorage$5.wishlistStatus(cell.routeIdUkc);
    }
  }
};
UkcSearchbarElement = __decorateClass$m([
  controller
], UkcSearchbarElement);

const topoDotTemplate = (_el) => {
  return html$1`
<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path data-target='topo-dot.stroke' fill-rule="evenodd" clip-rule="evenodd" d="M31.84 3.00003C47.9499 3.00003 61 16.0501 61 32.16C61 48.27 47.9499 61.32 31.84 61.32C15.7301 61.32 2.68 48.27 2.68 32.16C2.68 16.0501 15.7301 3.00003 31.84 3.00003Z"'/>
    <path data-target='topo-dot.fill' d="M51.6076 29.7698C50.7032 28.8654 49.3466 28.284 47.6024 28.284C45.1476 28.284 43.791 29.9636 43.791 32.4184C43.791 34.9378 45.3414 36.5528 47.7316 36.5528C49.5404 36.5528 50.6386 36.036 51.9306 35.067V38.6846C50.4448 39.5244 49.0882 39.7182 47.6024 39.7182C42.8866 39.7182 39.915 36.682 39.915 32.4184C39.915 28.0902 43.0158 25.054 47.6024 25.054C49.0882 25.054 50.4448 25.3124 51.6076 25.9584V29.7698ZM35.4576 25.3124H39.7212L35.0054 32.16L40.0442 39.5244H35.716L30.9356 32.483L35.4576 25.3124ZM27.1242 25.3124H30.871V39.5244H27.1242V25.3124ZM11.814 25.3124H15.5608V33.6458C15.5608 35.9714 16.5298 36.7466 18.2094 36.7466C19.243 36.7466 19.889 36.682 20.535 36.5528V25.3124H24.2818V39.0076C22.9898 39.3952 20.0828 39.7182 18.2094 39.7182C14.8502 39.7182 11.814 38.4262 11.814 34.421V25.3124ZM57.68 32.16C57.68 17.8834 46.1166 6.32001 31.84 6.32001C17.5634 6.32001 6.00001 17.8834 6.00001 32.16C6.00001 46.4366 17.5634 58 31.84 58C46.1166 58 57.68 46.4366 57.68 32.16Z"' />
</svg>    
`;
};

var __defProp$l = Object.defineProperty;
var __getOwnPropDesc$l = Object.getOwnPropertyDescriptor;
var __decorateClass$l = (decorators, target2, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$l(target2, key) : target2;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target2, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp$l(target2, key, result);
  return result;
};
let TopoDotElement = class extends BaseCon$1 {
  set colorName(v) {
    if (v === "white") {
      this.stroke.setAttribute("fill", TopoDotElement.colors.black);
    } else {
      this.stroke.setAttribute("fill", TopoDotElement.colors.white);
    }
    this.fill.setAttribute("fill", TopoDotElement.colors[v]);
  }
  static colors = {
    green: "#007C57",
    orange: "#F39200",
    red: "#BE2730",
    black: "black",
    white: "white"
  };
  stroke;
  fill;
  get template() {
    return topoDotTemplate;
  }
};
__decorateClass$l([
  attr
], TopoDotElement.prototype, "colorName", 1);
__decorateClass$l([
  target
], TopoDotElement.prototype, "stroke", 2);
__decorateClass$l([
  target
], TopoDotElement.prototype, "fill", 2);
TopoDotElement = __decorateClass$l([
  controller
], TopoDotElement);
const TopoDotElement$1 = TopoDotElement;

const routeTemplate = (element) => {
  const el = element;
  return html$1`
        <!--<li class='result-entry-container'>-->
            <a class='result-entry-container' data-target='${el.elementName}.href' href='${el.url}' style="position:relative;display:block;">
                <wishlist-indicator data-target='${el.elementName}.wishlist_indicator' alt='wishlist-indicator'></wishlist-indicator>
                <logbook-indicator data-target='${el.elementName}.logbook_indicator' color-name='green' alt='logbook-indicator'></logbook-indicator>
                <div class='result-entry'>
                    <div class="result-icon-area">
                        <topo-dot data-target='${el.elementName}.topo_dot' color-name='${el.colorName}' class='result-icon' alt='icon'></topo-dot>
                        <crag-icon data-target='${el.elementName}.crag_icon' class='result-icon' alt='icon'></crag-icon>
                        <buttress-icon data-target='${el.elementName}.buttress_icon' class='result-icon' alt='icon'></buttress-icon>
                    </div>
                    <div class="result-text-area">
                        <!--<div class='result-entry-start'>-->
                            <div id="name-and-grade" class='result-entry-start'>
                                <span data-target='${el.elementName}.item_name' class='result-title'></span>
                                <div id="star-count-and-route-grade">
                                    <span data-target='${el.elementName}.star_count' class='result-star-count'></span>
                                    <span data-target='${el.elementName}.route_grade' class='result-grade'></span>
                                </div>
                            </div>
                        <!--</div>-->
                        <!--<div>-->
                            <div class='result-entry-end'>
                                <span data-target='${el.elementName}.crag_name' class='result-crag-name'></span>
                                <div style="margin-left:4px;">
                                    <span data-target='${el.elementName}.county_name' class='result-context'></span>
                                    <span data-target='${el.elementName}.country_name' class='result-sub-context'></span>
                                </div>
                            </div>
                            ${el.htmlForSlot("result-entry-extras")}
                        <!--</div>-->
                    </div>
                </div>
            </a>
        <!--</li>-->
    `;
};

var __defProp$k = Object.defineProperty;
var __getOwnPropDesc$k = Object.getOwnPropertyDescriptor;
var __decorateClass$k = (decorators, target2, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$k(target2, key) : target2;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target2, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp$k(target2, key, result);
  return result;
};
let SearchResultElement = class extends BaseCon$1 {
  href;
  topo_dot;
  item_name;
  route_grade;
  star_count;
  crag_name;
  county_name;
  country_name;
  logbook_indicator;
  wishlist_indicator;
  crag_icon;
  buttress_icon;
  extras_slot;
  set slugFull(_v) {
    if (this.href)
      this.href.href = this.url;
  }
  set itemName(v) {
    const ev = escape(v);
    if (this.item_name)
      this.item_name.innerHTML = ev ? ev + '<span id="name-dash" style="opacity:0.7;"> - </span>' : "";
  }
  set routeGrade(v) {
    if (this.route_grade)
      this.route_grade.innerHTML = escape(v);
  }
  set starCount(v) {
    if (this.star_count)
      this.star_count.innerHTML = stars[v];
  }
  set cragName(v) {
    if (this.crag_name)
      this.crag_name.innerHTML = escape(v);
  }
  set countyName(v) {
    if (this.county_name)
      this.county_name.innerHTML = escape(v + ", ");
  }
  set countryName(v) {
    if (this.country_name)
      this.country_name.innerHTML = escape(v);
  }
  set colorId(_v) {
    if (this.topo_dot)
      this.topo_dot.colorName = this.colorName;
  }
  set routeIdUkc(_v) {
  }
  get logStatus() {
    return "unclimbed";
  }
  get wishlistStatus() {
    return false;
  }
  set wishlistStatus(_v) {
    switch (_v) {
      case true:
        this.classList.add("on-wishlist");
        break;
      case false:
        this.classList.remove("on-wishlist");
        break;
    }
  }
  set logStatus(_v) {
    switch (_v) {
      case "unclimbed":
        this.classList.remove("logged-clean");
        this.classList.remove("logged-followed");
        this.classList.remove("logged-dogged");
        break;
      case "clean":
        this.classList.add("logged-clean");
        this.logbook_indicator.colorName = "green";
        break;
      case "followed":
        this.classList.add("logged-followed");
        this.logbook_indicator.colorName = "blue";
        break;
      case "dogged":
        this.classList.add("logged-dogged");
        this.logbook_indicator.colorName = "orange";
        break;
    }
  }
  get colorName() {
    return Object.keys(TopoDotElement$1.colors)[this.colorId];
  }
  _resultType = "route";
  get resultType() {
    return this._resultType;
  }
  set resultType(v) {
    this._resultType = v;
    this.hideAll();
    switch (v) {
      case "route":
        this.item_name?.classList.remove("hidden");
        this.topo_dot?.classList.remove("hidden");
        this.route_grade?.classList.remove("hidden");
        this.star_count?.classList.remove("hidden");
        this.crag_name?.classList.remove("hidden");
        this.county_name?.classList.remove("hidden");
        this.country_name?.classList.remove("hidden");
        break;
      case "crag":
        this.crag_name?.classList.remove("hidden");
        this.item_name?.classList.remove("hidden");
        this.crag_icon?.classList.remove("hidden");
        this.route_grade?.classList.remove("hidden");
        this.county_name?.classList.remove("hidden");
        this.country_name?.classList.remove("hidden");
        break;
      case "buttress":
        this.crag_name?.classList.remove("hidden");
        this.item_name?.classList.remove("hidden");
        this.buttress_icon?.classList.remove("hidden");
        this.route_grade?.classList.remove("hidden");
        this.county_name?.classList.remove("hidden");
        this.country_name?.classList.remove("hidden");
        break;
      case "no-result":
        this.item_name?.classList.remove("hidden");
        break;
    }
  }
  hideAll() {
    this.topo_dot?.classList.add("hidden");
    this.item_name?.classList.add("hidden");
    this.route_grade?.classList.add("hidden");
    this.star_count?.classList.add("hidden");
    this.crag_name?.classList.add("hidden");
    this.county_name?.classList.add("hidden");
    this.country_name?.classList.add("hidden");
    this.crag_icon?.classList.add("hidden");
    this.buttress_icon?.classList.add("hidden");
  }
  get url() {
    let origin = window.location.origin;
    if (!origin.match(/ukclimbing/gi)) {
      origin = "https://dev.ukclimbing.com";
    }
    return `${origin}/logbook/crags/${this.slugFull}`;
  }
  get template() {
    return routeTemplate;
  }
  connectedCallback() {
    super.connectedCallback();
    this.logbook_indicator.colorName = "green";
  }
  openObject() {
    window.open(this.url, "_self");
  }
};
__decorateClass$k([
  target
], SearchResultElement.prototype, "href", 2);
__decorateClass$k([
  target
], SearchResultElement.prototype, "topo_dot", 2);
__decorateClass$k([
  target
], SearchResultElement.prototype, "item_name", 2);
__decorateClass$k([
  target
], SearchResultElement.prototype, "route_grade", 2);
__decorateClass$k([
  target
], SearchResultElement.prototype, "star_count", 2);
__decorateClass$k([
  target
], SearchResultElement.prototype, "crag_name", 2);
__decorateClass$k([
  target
], SearchResultElement.prototype, "county_name", 2);
__decorateClass$k([
  target
], SearchResultElement.prototype, "country_name", 2);
__decorateClass$k([
  target
], SearchResultElement.prototype, "logbook_indicator", 2);
__decorateClass$k([
  target
], SearchResultElement.prototype, "wishlist_indicator", 2);
__decorateClass$k([
  target
], SearchResultElement.prototype, "crag_icon", 2);
__decorateClass$k([
  target
], SearchResultElement.prototype, "buttress_icon", 2);
__decorateClass$k([
  target
], SearchResultElement.prototype, "extras_slot", 2);
__decorateClass$k([
  attr
], SearchResultElement.prototype, "slugFull", 1);
__decorateClass$k([
  attr
], SearchResultElement.prototype, "itemName", 1);
__decorateClass$k([
  attr
], SearchResultElement.prototype, "routeGrade", 1);
__decorateClass$k([
  attr
], SearchResultElement.prototype, "starCount", 1);
__decorateClass$k([
  attr
], SearchResultElement.prototype, "cragName", 1);
__decorateClass$k([
  attr
], SearchResultElement.prototype, "countyName", 1);
__decorateClass$k([
  attr
], SearchResultElement.prototype, "countryName", 1);
__decorateClass$k([
  attr
], SearchResultElement.prototype, "colorId", 1);
__decorateClass$k([
  attr
], SearchResultElement.prototype, "routeIdUkc", 1);
__decorateClass$k([
  attr
], SearchResultElement.prototype, "logStatus", 1);
__decorateClass$k([
  attr
], SearchResultElement.prototype, "wishlistStatus", 1);
SearchResultElement = __decorateClass$k([
  controller
], SearchResultElement);
const SearchResultElement$1 = SearchResultElement;

const logbookIndicatorTemplate = (_el) => {
  return html$1`
<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path id="routeTickedIndicator-bezier2" stroke="none" fill="rgba(255, 255, 255, 1)" d="M 50,0 C 50,-0 50,50 50,50 L 0,-0 50,-0 50,0 Z M 50,0" />
    <path data-target='logbook-indicator.fill' d="M 50,0 C 50,-0 50,0.73 50,2.02 49.46,2.56 48.74,3.27 47.93,4.09 44.06,7.94 37.97,14.01 37.97,14.01 L 32.12,8.16 C 31.76,7.81 31.26,7.61 30.76,7.61 30.26,7.61 29.77,7.81 29.41,8.16 L 26.7,10.86 C 26.34,11.22 26.14,11.71 26.14,12.21 26.14,12.7 26.34,13.2 26.7,13.56 L 33.91,20.74 36.62,23.44 C 36.98,23.79 37.47,23.99 37.97,23.99 38.47,23.99 38.97,23.79 39.33,23.44 L 42.04,20.74 C 42.04,20.74 46.16,16.64 50,12.82 50,27.63 50,50 50,50 L 0,-0 50,-0 50,0 Z M 50,0"/>
</svg>
`;
};

var __defProp$j = Object.defineProperty;
var __getOwnPropDesc$j = Object.getOwnPropertyDescriptor;
var __decorateClass$j = (decorators, target2, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$j(target2, key) : target2;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target2, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp$j(target2, key, result);
  return result;
};
let LogbookIndicatorElement = class extends BaseCon$1 {
  set colorName(v) {
    this.fill.setAttribute("fill", LogbookIndicatorElement.colors[v]);
  }
  static colors = {
    green: "#007C57",
    orange: "#FF8C22",
    blue: "#2A66B5"
  };
  stroke;
  fill;
  get template() {
    return logbookIndicatorTemplate;
  }
};
__decorateClass$j([
  attr
], LogbookIndicatorElement.prototype, "colorName", 1);
__decorateClass$j([
  target
], LogbookIndicatorElement.prototype, "stroke", 2);
__decorateClass$j([
  target
], LogbookIndicatorElement.prototype, "fill", 2);
LogbookIndicatorElement = __decorateClass$j([
  controller
], LogbookIndicatorElement);
const LogbookIndicatorElement$1 = LogbookIndicatorElement;

const logentryTemplate = (element) => {
  const el = element;
  return html$1`
        <!--<li class='result-entry-container'>-->
            <a class='result-entry-container' data-target='${el.elementName}.href' href='${el.url}' style="position:relative;display:block;">
                <wishlist-indicator data-target='${el.elementName}.wishlist_indicator' alt='wishlist-indicator'></wishlist-indicator>
                <logbook-indicator data-target='${el.elementName}.logbook_indicator' color-name='green' alt='logbook-indicator'></logbook-indicator>
                <div class='result-entry d-flex flex-column align-items-start'>
                    <div class='d-flex flex-row w-100 w-md-0'>
                        <div class="result-icon-area">
                            <topo-dot data-target='${el.elementName}.topo_dot' color-name='${el.colorName}' class='result-icon' alt='icon'></topo-dot>
                            <crag-icon data-target='${el.elementName}.crag_icon' class='result-icon' alt='icon'></crag-icon>
                        </div>
                        <div class='result-entry-start w-100 w-md-0 pl-1 pl-md-0'>
                            <div id="name-and-grade">
                                <span data-target='${el.elementName}.item_name' class='result-title'></span>
                                <div id="star-count-and-route-grade">
                                    <span data-target='${el.elementName}.star_count' class='result-star-count pl-2 pl-md-0'></span>
                                    <span data-target='${el.elementName}.route_grade' class='result-grade'></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="result-text-area">
                        <div class='w-100'>
                            <div class='ascent-area'>
                                <div class='result-entry-end align-items-baseline justify-content-start d-flex d-md-none flex-row pl-0'>
                                    <span data-targets='${el.elementName}.crag_names' class='result-crag-name'></span>
                                    <div class='' style="margin-left:4px;">
                                        <span data-targets='${el.elementName}.county_names' class='result-context'></span>
                                        <span data-targets='${el.elementName}.country_names' class='result-sub-context'></span>
                                    </div>
                                </div>
                                <div data-target='${el.elementName}.ascent_notes' class='ascent-notes' hidden>
                                </div>
                                <div class='ascent-details justify-content-space-between align-items-baseline'>
                                    <div class='ascent-details-start'>
                                        <span data-target='${el.elementName}.ascent_style_indicator' class='ascent-style-indicator'>●</span>
                                        <span data-target='${el.elementName}.ascensionist'></span>
                                        <span data-target='${el.elementName}.ascent_style'></span>
                                        <span data-target='${el.elementName}.partner_names_with'>with</span>
                                        <span data-target='${el.elementName}.partner_names'></span>
                                        <span data-target='${el.elementName}.ascent_date'></span>
                                    </div>
                                    <div class='result-entry-end align-items-baseline justify-content-end d-none d-md-flex flex-row'>
                                        <span data-targets='${el.elementName}.crag_names' class='result-crag-name'></span>
                                        <div class='' style="margin-left:4px;">
                                            <span data-targets='${el.elementName}.county_names' class='result-context'></span>
                                            <span data-targets='${el.elementName}.country_names' class='result-sub-context'></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </a>
        <!--</li>-->
    `;
};

var __defProp$i = Object.defineProperty;
var __getOwnPropDesc$i = Object.getOwnPropertyDescriptor;
var __decorateClass$i = (decorators, target2, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$i(target2, key) : target2;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target2, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp$i(target2, key, result);
  return result;
};
let LogbookResultElement = class extends SearchResultElement$1 {
  ascensionist;
  partner_names;
  partner_names_with;
  ascent_style_indicator;
  ascent_style;
  ascent_notes;
  ascent_date;
  crag_names;
  county_names;
  country_names;
  set cragName(v) {
    if (this.crag_names)
      this.crag_names.forEach((el) => el.innerHTML = escape(v));
  }
  set countyName(v) {
    if (this.county_names)
      this.county_names.forEach((el) => el.innerHTML = escape(v) + ", ");
  }
  set countryName(v) {
    if (this.country_names)
      this.country_names.forEach((el) => el.innerHTML = escape(v));
  }
  showCragName = true;
  set ascentNotes(v) {
    if (this.ascent_notes) {
      this.ascent_notes.hidden = !v;
      this.ascent_notes.innerHTML = `&ldquo;${escape(v?.trim())}&rdquo;`;
    }
  }
  set ascentStyle(_v) {
    if (this.ascent_style)
      this.ascent_style.innerText = _v;
  }
  set ascentStyleSimple(_v) {
    let color = "";
    switch (_v) {
      case "clean":
        color = "green";
        break;
      case "followed":
        color = "blue";
        break;
      case "dogged":
        color = "orange";
        break;
      default:
        color = "green";
        break;
    }
    this.ascent_style_indicator.style.color = LogbookIndicatorElement$1.colors[color];
  }
  set itemName(v) {
    const ev = escape(v);
    if (this.item_name)
      this.item_name.innerHTML = ev;
  }
  set ascensionistDetails(ascensionist) {
    this.ascensionist.innerHTML = this.linkForUserId(ascensionist.id, ascensionist.name);
  }
  set partners(partners) {
    if (this.partner_names_with)
      this.partner_names_with.hidden = !partners || partners.length === 0;
    const frags = partners?.map((p) => {
      if (p.id) {
        return this.linkForUserId(p.id, p.name);
      } else {
        return escape(noBreaks(p?.name.trim()));
      }
    });
    if (frags) {
      this.partner_names.style.display = null;
      this.partner_names.innerHTML = escape(frags?.join(", "));
    } else {
      this.partner_names.style.display = "none";
    }
  }
  linkForUserId(userId, userName) {
    const trimmed = userName?.trim() || "hidden";
    if (!userId) {
      return escape(noBreaks(trimmed));
    }
    if (window.location.host.match(/localhost/g)) {
      return `<a href='/pages/logbook/?user_id=${userId}'>${escape(noBreaks(trimmed))}</a>`;
    }
    if (window.location.host.match(/dkk8m.ondigitalocean.app/g)) {
      return `<a href='/logbook/?user_id=${userId}'>${escape(noBreaks(trimmed))}</a>`;
    }
    return `<a href='/logbook/logbook/?user_id=${userId}'>${escape(noBreaks(trimmed))}</a>`;
  }
  get template() {
    return logentryTemplate;
  }
  connectedCallback() {
    super.connectedCallback();
    if (this.showCragName) {
      this.crag_names.forEach((el) => el.style.display = "none");
      this.county_names.forEach((el) => el.style.display = "none");
      this.country_names.forEach((el) => el.style.display = "none");
    } else {
      this.crag_names.forEach((el) => el.style.display = "block");
      this.county_names.forEach((el) => el.style.display = "block");
      this.country_names.forEach((el) => el.style.display = "block");
    }
  }
};
__decorateClass$i([
  target
], LogbookResultElement.prototype, "ascensionist", 2);
__decorateClass$i([
  target
], LogbookResultElement.prototype, "partner_names", 2);
__decorateClass$i([
  target
], LogbookResultElement.prototype, "partner_names_with", 2);
__decorateClass$i([
  target
], LogbookResultElement.prototype, "ascent_style_indicator", 2);
__decorateClass$i([
  target
], LogbookResultElement.prototype, "ascent_style", 2);
__decorateClass$i([
  target
], LogbookResultElement.prototype, "ascent_notes", 2);
__decorateClass$i([
  target
], LogbookResultElement.prototype, "ascent_date", 2);
__decorateClass$i([
  targets
], LogbookResultElement.prototype, "crag_names", 2);
__decorateClass$i([
  targets
], LogbookResultElement.prototype, "county_names", 2);
__decorateClass$i([
  targets
], LogbookResultElement.prototype, "country_names", 2);
__decorateClass$i([
  attr
], LogbookResultElement.prototype, "cragName", 1);
__decorateClass$i([
  attr
], LogbookResultElement.prototype, "countyName", 1);
__decorateClass$i([
  attr
], LogbookResultElement.prototype, "countryName", 1);
__decorateClass$i([
  attr
], LogbookResultElement.prototype, "showCragName", 2);
__decorateClass$i([
  attr
], LogbookResultElement.prototype, "ascentNotes", 1);
__decorateClass$i([
  attr
], LogbookResultElement.prototype, "ascentStyle", 1);
__decorateClass$i([
  attr
], LogbookResultElement.prototype, "ascentStyleSimple", 1);
LogbookResultElement = __decorateClass$i([
  controller
], LogbookResultElement);

const routeResultTemplate = (element) => {
  const el = element;
  return html$1`
        <!--<li class='result-entry-container'>-->
            <a class='result-entry-container' data-target='${el.elementName}.href' href='${el.url}' style="position:relative;display:block;">
                <wishlist-indicator data-target='${el.elementName}.wishlist_indicator' alt='wishlist-indicator'></wishlist-indicator>
                <logbook-indicator data-target='${el.elementName}.logbook_indicator' color-name='green' alt='logbook-indicator'></logbook-indicator>
                <div class='result-entry d-flex flex-column align-items-start'>
                    <div class='d-flex flex-row w-100 w-md-0'>
                        <div class="result-icon-area">
                            <topo-dot data-target='${el.elementName}.topo_dot' color-name='${el.colorName}' class='result-icon' alt='icon'></topo-dot>
                        </div>
                        <div class='result-entry-start w-100 w-md-0 pl-1 pl-md-0'>
                            <div id="name-and-grade">
                                <span data-target='${el.elementName}.item_name' class='result-title'></span>
                                <div id="star-count-and-route-grade">
                                    <span data-target='${el.elementName}.star_count' class='result-star-count pl-2 pl-md-0'></span>
                                    <span data-target='${el.elementName}.route_grade' class='result-grade'></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="result-text-area">
                        <!--<div class='w-100'>-->
                            <div class=' w-100 ascent-area'>
                                <div data-target='${el.elementName}.route_description' class='ascent-notes' hidden></div>
                                <div class='ascent-details justify-content-space-between align-items-baseline ascent-details-start'>
                                    <div class='ascent-details-start'>
                                        <span data-target='${el.elementName}.fa_details' class="font-italic"></span>
                                    </div>
                                </div>
                            </div>
                        <!--</div>-->
                    </div>
                </div>
            </a>
        <!--</li>-->
    `;
};

var __defProp$h = Object.defineProperty;
var __getOwnPropDesc$h = Object.getOwnPropertyDescriptor;
var __decorateClass$h = (decorators, target2, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$h(target2, key) : target2;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target2, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp$h(target2, key, result);
  return result;
};
let RouteResultElement = class extends SearchResultElement$1 {
  ascensionist;
  route_description;
  fa_details;
  set itemName(v) {
    const ev = escape(v);
    if (this.item_name)
      this.item_name.innerHTML = ev;
  }
  set routeDescription(v) {
    if (this.route_description) {
      this.route_description.hidden = !v;
      this.route_description.innerHTML = escape(v?.trim() || "");
    }
  }
  set faDetails(v) {
    if (this.fa_details) {
      const deets = v?.trim();
      this.fa_details.innerHTML = escape(deets) || "FA. Unknown";
    }
  }
  get template() {
    return routeResultTemplate;
  }
};
__decorateClass$h([
  target
], RouteResultElement.prototype, "ascensionist", 2);
__decorateClass$h([
  target
], RouteResultElement.prototype, "route_description", 2);
__decorateClass$h([
  target
], RouteResultElement.prototype, "fa_details", 2);
RouteResultElement = __decorateClass$h([
  controller
], RouteResultElement);

var __defProp$g = Object.defineProperty;
var __getOwnPropDesc$g = Object.getOwnPropertyDescriptor;
var __decorateClass$g = (decorators, target2, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$g(target2, key) : target2;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target2, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp$g(target2, key, result);
  return result;
};
let PagedRoutesViewer = class extends BaseRoutesViewer$1 {
  page_control;
  currentPage = 1;
  _baseData;
  set baseData(newVal) {
    this._baseData = newVal;
  }
  get baseData() {
    return this._baseData;
  }
  connectedCallback() {
    super.connectedCallback();
  }
  sortOrderChanged(evt) {
    super.sortOrderChanged(evt);
  }
  get allowEmptyQuery() {
    return false;
  }
  async _init() {
    this.page_control.onPageControlClicked = async (_pageControl) => {
      this.startProgressBar();
      const results2 = await this.fetchResults(this.fullQuery, _pageControl.currentPage);
      if (results2.status !== 200) {
        console.debug(results2);
        return;
      }
      this.urlPage = _pageControl.currentPage;
      this.stopProgressBar();
      this.buildResults(results2);
    };
    this.startProgressBar();
    const results = localStorage.getItem(this.localStorageKey);
    const hasNoFilter = !this.urlFilter;
    if (results) {
      try {
        this.buildResults(JSON.parse(results));
        this.stopProgressBar();
        localStorage.setItem(this.localStorageKey, "");
        return;
      } catch (e) {
      }
    }
    let query = this.queryToUseDuringInit();
    if (query !== null || this.allowEmptyQuery) {
      let results2 = await this.fetchResults(query, this.urlPage);
      if (results2.status !== 200) {
        console.debug(results2);
        return;
      }
      this.buildResults(results2);
      hasNoFilter && (this.baseData = results2);
      this.stopProgressBar();
    }
  }
  queryToUseDuringInit() {
    return this.fullQuery || "";
  }
  bodyForRequestAndPage(query, pageNo) {
    const body = super.bodyForRequest(query);
    body.page = pageNo;
    body.page_size = 100;
    return body;
  }
  toggleSortDirection() {
    this.toggleArrowInSortButton();
    this.baseData = void 0;
    this.lastSearch = void 0;
    this.onInputUpdated();
    localStorage.setItem(this.sortDirectionKey, this.sortDirectionFromButton);
  }
  htmlForSlot(slotName) {
    if (slotName === "routes-viewer-sort-order-options") {
      return html$1`
        <option value="score"     >Order by search score</option>
        <option value="crag_name" >Order by crag name</option>
        <option value="grade"     >Order by route grade</option>
      `;
    }
    if (slotName === "routes-viewer-page-control-slot") {
      return html$1`
        <page-control data-target='${this.elementName}.page_control'></page-control>
      `;
    }
    const sup = super.htmlForSlot(slotName);
    if (sup) {
      return sup;
    }
    return "";
  }
  buildResults(_data) {
    if (!_data)
      return;
    const data = _data.data;
    console.debug(data);
    this.queue = [];
    this.clearResultsDropdown();
    this.page_control.pageCount = data.meta?.total_pages;
    this.page_control.currentPage = data.meta?.page;
    if (data.objects?.length === 0) {
      appendNoResults(this);
    }
    if (this.filter_query_description) {
      if (data.meta?.parsed_query) {
        const c = data.meta?.total_matches;
        this.filter_query_description.innerHTML = data.meta.parsed_query.queryDescription + ` (${c}&nbsp;match${c === 1 ? "" : "es"})`;
      } else {
        this.filter_query_description.innerHTML = "";
      }
    }
    data.objects.forEach((section) => {
      this.queue.push(() => {
        this.appendHeader(section.title, section.ids.length || section.routes.length, this, data.meta.object_return_type.name);
      });
      section.routes.forEach((element) => {
        switch (element.type) {
          case "route_ukc": {
            this.willAppendRoute(element);
            this.queue.push(() => {
              this.appendRoute(this, element);
            });
            break;
          }
          case "crag_ukc": {
            this.queue.push(() => {
              this.appendCrag(this, element);
            });
            break;
          }
          case "buttress_ukc": {
            this.queue.push(() => {
              this.appendButtress(this, element);
            });
            break;
          }
        }
      });
    });
    this.processQueue();
  }
  appendButtress(target2, buttress) {
    return appendButtress({ target: target2, buttress });
  }
  async fetchResults(query, pageNo) {
    const response = await await this.fetchResponseForPage(query, pageNo);
    const status = response?.status;
    const data = await response.json();
    return { data, status };
  }
  response;
  async fetchResponseForPage(query, pageNo) {
    try {
      query = query?.trim() || "";
      const response = await fetch(
        this.apiUrl,
        {
          method: "POST",
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify(
            this.bodyForRequestAndPage(query, pageNo)
          )
        }
      );
      this.response = response.clone();
      return response;
    } catch (e) {
      console.error("failed to fetch results");
      console.error(e);
      return void 0;
    }
  }
  onInputUpdated() {
    const newValue = this.input.value;
    const postTrim = newValue.trim();
    this.setVisibilityOfDeleteButton(newValue);
    clearTimeout(this.timeout);
    const sortDirection = this.sortDirectionFromButton;
    this.startProgressBar();
    this.searchId++;
    const currentSearchId = this.searchId;
    this.timeout = setTimeout(async () => {
      const query = this.fullQueryWithoutUrlFilter;
      let results = await this.fetchResults(query, 0);
      if (this.searchId > currentSearchId) {
        return;
      }
      this.stopProgressBar();
      this.searchId = currentSearchId;
      if (results.status !== 200) {
        console.debug(results);
        return;
      }
      this.lastSearch = query;
      this.buildResults(results);
      this.urlFilter = postTrim;
      this.urlSortDirection = sortDirection;
      this.urlPage = 0;
    }, this.searchDelay);
  }
};
__decorateClass$g([
  target
], PagedRoutesViewer.prototype, "page_control", 2);
PagedRoutesViewer = __decorateClass$g([
  controller
], PagedRoutesViewer);
const PagedRoutesViewer$1 = PagedRoutesViewer;

var __defProp$f = Object.defineProperty;
var __getOwnPropDesc$f = Object.getOwnPropertyDescriptor;
var __decorateClass$f = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$f(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp$f(target, key, result);
  return result;
};
const sharedStorage$4 = UkcLocalStorage.sharedLogbook;
let SearchResultsViewerElement = class extends PagedRoutesViewer$1 {
  searchBarPlaceholderString = "Perform a new search...";
  get searchbarTag() {
    return "ukc-searchbar";
  }
  connectedCallback() {
    super.connectedCallback();
    sharedStorage$4.fetchLogbookLookup((_res) => this.updateLogbookAndWishlistStatusOfCells());
    this.fixed_section_header.style.display = "none";
    this.filters_button.style.display = "none";
  }
  onDomContentLoaded() {
    super.onDomContentLoaded();
    this.searchbar.setQueryWithoutDispatchingEvent(this.urlQuery || "", false);
    this.searchbar.submitSearchHandler = (resultsUrl) => {
      this.startProgressBar();
      this.searchbar.resignFocus();
      window.history.pushState({}, "", resultsUrl);
      setTimeout(() => {
        this._init();
      }, 300);
    };
  }
  appendRoute(target, route) {
    const el = super.appendRoute(target, route);
    el.logStatus = sharedStorage$4.logbookStatus(route.id_ukc);
    const ascent = sharedStorage$4.bestAscent(route.id_ukc);
    if (ascent) {
      el.setAttribute("title", ascent.lastClimbedDescription);
    } else {
      el.setAttribute("title", "not in your logbook");
    }
    el.wishlistStatus = sharedStorage$4.wishlistStatus(route.id_ukc);
    return el;
  }
  appendHeader(_leftText, _ascentCount, _target, _objectDescriptor) {
    return {};
  }
  updateLogbookAndWishlistStatusOfCells() {
    const cells = this.getElementsByClassName("search-result");
    for (let i = 0; i < cells.length; i++) {
      const cell = cells[i];
      cell.logStatus = sharedStorage$4.logbookStatus(cell.routeIdUkc);
      cell.wishlistStatus = sharedStorage$4.wishlistStatus(cell.routeIdUkc);
    }
  }
  async fetchResults(query, pageNo) {
    const res = await super.fetchResults(query, pageNo);
    this.searchbar.buildResults(res);
    return res;
  }
  bodyForRequestAndPage(query, pageNo) {
    const body = super.bodyForRequestAndPage(query, pageNo);
    body.search_type = "all";
    return body;
  }
};
SearchResultsViewerElement = __decorateClass$f([
  controller
], SearchResultsViewerElement);

nGram(2);
const trigram = nGram(3);

/**
 * Factory returning a function that converts a value string to n-grams.
 *
 * @param {number} n
 */
function nGram(n) {
  if (
    typeof n !== 'number' ||
    Number.isNaN(n) ||
    n < 1 ||
    n === Number.POSITIVE_INFINITY
  ) {
    throw new Error('`' + n + '` is not a valid argument for `n-gram`')
  }

  return grams

  /**
   * Create n-grams from a given value.
   *
   * @template {string|Array<unknown>} T
   * @param {T} [value]
   * @returns {T extends any[] ? T : Array<string>}
   */
  function grams(value) {
    /** @type {T extends any[] ? T : Array<string>} */
    // @ts-expect-error: pretty sure this is fine.
    const nGrams = [];

    if (value === null || value === undefined) {
      return nGrams
    }

    const source = typeof value.slice === 'function' ? value : String(value);
    let index = source.length - n + 1;

    if (index < 1) {
      return nGrams
    }

    while (index--) {
      nGrams[index] = source.slice(index, index + n);
    }

    return nGrams
  }
}

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

/**
 * Obliterator Iterator Class
 * ===========================
 *
 * Simple class representing the library's iterators.
 */

/**
 * Iterator class.
 *
 * @constructor
 * @param {function} next - Next function.
 */
function Iterator$1(next) {
  if (typeof next !== 'function')
    throw new Error('obliterator/iterator: expecting a function!');

  this.next = next;
}

/**
 * If symbols are supported, we add `next` to `Symbol.iterator`.
 */
if (typeof Symbol !== 'undefined')
  Iterator$1.prototype[Symbol.iterator] = function () {
    return this;
  };

/**
 * Returning an iterator of the given values.
 *
 * @param  {any...} values - Values.
 * @return {Iterator}
 */
Iterator$1.of = function () {
  var args = arguments,
    l = args.length,
    i = 0;

  return new Iterator$1(function () {
    if (i >= l) return {done: true};

    return {done: false, value: args[i++]};
  });
};

/**
 * Returning an empty iterator.
 *
 * @return {Iterator}
 */
Iterator$1.empty = function () {
  var iterator = new Iterator$1(function () {
    return {done: true};
  });

  return iterator;
};

/**
 * Returning an iterator over the given indexed sequence.
 *
 * @param  {string|Array} sequence - Target sequence.
 * @return {Iterator}
 */
Iterator$1.fromSequence = function (sequence) {
  var i = 0,
    l = sequence.length;

  return new Iterator$1(function () {
    if (i >= l) return {done: true};

    return {done: false, value: sequence[i++]};
  });
};

/**
 * Returning whether the given value is an iterator.
 *
 * @param  {any} value - Value.
 * @return {boolean}
 */
Iterator$1.is = function (value) {
  if (value instanceof Iterator$1) return true;

  return (
    typeof value === 'object' &&
    value !== null &&
    typeof value.next === 'function'
  );
};

/**
 * Exporting.
 */
var iterator = Iterator$1;

var support$1 = {};

support$1.ARRAY_BUFFER_SUPPORT = typeof ArrayBuffer !== 'undefined';
support$1.SYMBOL_SUPPORT = typeof Symbol !== 'undefined';

/**
 * Obliterator ForEach Function
 * =============================
 *
 * Helper function used to easily iterate over mixed values.
 */

var support = support$1;

var ARRAY_BUFFER_SUPPORT = support.ARRAY_BUFFER_SUPPORT;
var SYMBOL_SUPPORT = support.SYMBOL_SUPPORT;

/**
 * Function able to iterate over almost any iterable JS value.
 *
 * @param  {any}      iterable - Iterable value.
 * @param  {function} callback - Callback function.
 */
var foreach = function forEach(iterable, callback) {
  var iterator, k, i, l, s;

  if (!iterable) throw new Error('obliterator/forEach: invalid iterable.');

  if (typeof callback !== 'function')
    throw new Error('obliterator/forEach: expecting a callback.');

  // The target is an array or a string or function arguments
  if (
    Array.isArray(iterable) ||
    (ARRAY_BUFFER_SUPPORT && ArrayBuffer.isView(iterable)) ||
    typeof iterable === 'string' ||
    iterable.toString() === '[object Arguments]'
  ) {
    for (i = 0, l = iterable.length; i < l; i++) callback(iterable[i], i);
    return;
  }

  // The target has a #.forEach method
  if (typeof iterable.forEach === 'function') {
    iterable.forEach(callback);
    return;
  }

  // The target is iterable
  if (
    SYMBOL_SUPPORT &&
    Symbol.iterator in iterable &&
    typeof iterable.next !== 'function'
  ) {
    iterable = iterable[Symbol.iterator]();
  }

  // The target is an iterator
  if (typeof iterable.next === 'function') {
    iterator = iterable;
    i = 0;

    while (((s = iterator.next()), s.done !== true)) {
      callback(s.value, i);
      i++;
    }

    return;
  }

  // The target is a plain object
  for (k in iterable) {
    if (iterable.hasOwnProperty(k)) {
      callback(iterable[k], k);
    }
  }

  return;
};

var merge = {};

var typedArrays = {};

/**
 * Mnemonist Typed Array Helpers
 * ==============================
 *
 * Miscellaneous helpers related to typed arrays.
 */

(function (exports) {
	/**
	 * When using an unsigned integer array to store pointers, one might want to
	 * choose the optimal word size in regards to the actual numbers of pointers
	 * to store.
	 *
	 * This helpers does just that.
	 *
	 * @param  {number} size - Expected size of the array to map.
	 * @return {TypedArray}
	 */
	var MAX_8BIT_INTEGER = Math.pow(2, 8) - 1,
	    MAX_16BIT_INTEGER = Math.pow(2, 16) - 1,
	    MAX_32BIT_INTEGER = Math.pow(2, 32) - 1;

	var MAX_SIGNED_8BIT_INTEGER = Math.pow(2, 7) - 1,
	    MAX_SIGNED_16BIT_INTEGER = Math.pow(2, 15) - 1,
	    MAX_SIGNED_32BIT_INTEGER = Math.pow(2, 31) - 1;

	exports.getPointerArray = function(size) {
	  var maxIndex = size - 1;

	  if (maxIndex <= MAX_8BIT_INTEGER)
	    return Uint8Array;

	  if (maxIndex <= MAX_16BIT_INTEGER)
	    return Uint16Array;

	  if (maxIndex <= MAX_32BIT_INTEGER)
	    return Uint32Array;

	  throw new Error('mnemonist: Pointer Array of size > 4294967295 is not supported.');
	};

	exports.getSignedPointerArray = function(size) {
	  var maxIndex = size - 1;

	  if (maxIndex <= MAX_SIGNED_8BIT_INTEGER)
	    return Int8Array;

	  if (maxIndex <= MAX_SIGNED_16BIT_INTEGER)
	    return Int16Array;

	  if (maxIndex <= MAX_SIGNED_32BIT_INTEGER)
	    return Int32Array;

	  return Float64Array;
	};

	/**
	 * Function returning the minimal type able to represent the given number.
	 *
	 * @param  {number} value - Value to test.
	 * @return {TypedArrayClass}
	 */
	exports.getNumberType = function(value) {

	  // <= 32 bits itnteger?
	  if (value === (value | 0)) {

	    // Negative
	    if (Math.sign(value) === -1) {
	      if (value <= 127 && value >= -128)
	        return Int8Array;

	      if (value <= 32767 && value >= -32768)
	        return Int16Array;

	      return Int32Array;
	    }
	    else {

	      if (value <= 255)
	        return Uint8Array;

	      if (value <= 65535)
	        return Uint16Array;

	      return Uint32Array;
	    }
	  }

	  // 53 bits integer & floats
	  // NOTE: it's kinda hard to tell whether we could use 32bits or not...
	  return Float64Array;
	};

	/**
	 * Function returning the minimal type able to represent the given array
	 * of JavaScript numbers.
	 *
	 * @param  {array}    array  - Array to represent.
	 * @param  {function} getter - Optional getter.
	 * @return {TypedArrayClass}
	 */
	var TYPE_PRIORITY = {
	  Uint8Array: 1,
	  Int8Array: 2,
	  Uint16Array: 3,
	  Int16Array: 4,
	  Uint32Array: 5,
	  Int32Array: 6,
	  Float32Array: 7,
	  Float64Array: 8
	};

	// TODO: make this a one-shot for one value
	exports.getMinimalRepresentation = function(array, getter) {
	  var maxType = null,
	      maxPriority = 0,
	      p,
	      t,
	      v,
	      i,
	      l;

	  for (i = 0, l = array.length; i < l; i++) {
	    v = getter ? getter(array[i]) : array[i];
	    t = exports.getNumberType(v);
	    p = TYPE_PRIORITY[t.name];

	    if (p > maxPriority) {
	      maxPriority = p;
	      maxType = t;
	    }
	  }

	  return maxType;
	};

	/**
	 * Function returning whether the given value is a typed array.
	 *
	 * @param  {any} value - Value to test.
	 * @return {boolean}
	 */
	exports.isTypedArray = function(value) {
	  return typeof ArrayBuffer !== 'undefined' && ArrayBuffer.isView(value);
	};

	/**
	 * Function used to concat byte arrays.
	 *
	 * @param  {...ByteArray}
	 * @return {ByteArray}
	 */
	exports.concat = function() {
	  var length = 0,
	      i,
	      o,
	      l;

	  for (i = 0, l = arguments.length; i < l; i++)
	    length += arguments[i].length;

	  var array = new (arguments[0].constructor)(length);

	  for (i = 0, o = 0; i < l; i++) {
	    array.set(arguments[i], o);
	    o += arguments[i].length;
	  }

	  return array;
	};

	/**
	 * Function used to initialize a byte array of indices.
	 *
	 * @param  {number}    length - Length of target.
	 * @return {ByteArray}
	 */
	exports.indices = function(length) {
	  var PointerArray = exports.getPointerArray(length);

	  var array = new PointerArray(length);

	  for (var i = 0; i < length; i++)
	    array[i] = i;

	  return array;
	};
} (typedArrays));

var iterables = {};

/**
 * Mnemonist Iterable Function
 * ============================
 *
 * Harmonized iteration helpers over mixed iterable targets.
 */

var forEach$2 = foreach;

var typed = typedArrays;

/**
 * Function used to determine whether the given object supports array-like
 * random access.
 *
 * @param  {any} target - Target object.
 * @return {boolean}
 */
function isArrayLike$1(target) {
  return Array.isArray(target) || typed.isTypedArray(target);
}

/**
 * Function used to guess the length of the structure over which we are going
 * to iterate.
 *
 * @param  {any} target - Target object.
 * @return {number|undefined}
 */
function guessLength(target) {
  if (typeof target.length === 'number')
    return target.length;

  if (typeof target.size === 'number')
    return target.size;

  return;
}

/**
 * Function used to convert an iterable to an array.
 *
 * @param  {any}   target - Iteration target.
 * @return {array}
 */
function toArray(target) {
  var l = guessLength(target);

  var array = typeof l === 'number' ? new Array(l) : [];

  var i = 0;

  // TODO: we could optimize when given target is array like
  forEach$2(target, function(value) {
    array[i++] = value;
  });

  return array;
}

/**
 * Same as above but returns a supplementary indices array.
 *
 * @param  {any}   target - Iteration target.
 * @return {array}
 */
function toArrayWithIndices(target) {
  var l = guessLength(target);

  var IndexArray = typeof l === 'number' ?
    typed.getPointerArray(l) :
    Array;

  var array = typeof l === 'number' ? new Array(l) : [];
  var indices = typeof l === 'number' ? new IndexArray(l) : [];

  var i = 0;

  // TODO: we could optimize when given target is array like
  forEach$2(target, function(value) {
    array[i] = value;
    indices[i] = i++;
  });

  return [array, indices];
}

/**
 * Exporting.
 */
iterables.isArrayLike = isArrayLike$1;
iterables.guessLength = guessLength;
iterables.toArray = toArray;
iterables.toArrayWithIndices = toArrayWithIndices;

var binarySearch = {};

/**
 * Mnemonist Binary Search Helpers
 * ================================
 *
 * Typical binary search functions.
 */

/**
 * Function returning the index of the search value in the array or `-1` if
 * not found.
 *
 * @param  {array} array - Haystack.
 * @param  {any}   value - Needle.
 * @return {number}
 */
binarySearch.search = function(array, value, lo, hi) {
  var mid = 0;

  lo = typeof lo !== 'undefined' ? lo : 0;
  hi = typeof hi !== 'undefined' ? hi : array.length;

  hi--;

  var current;

  while (lo <= hi) {
    mid = (lo + hi) >>> 1;

    current = array[mid];

    if (current > value) {
      hi = ~-mid;
    }
    else if (current < value) {
      lo = -~mid;
    }
    else {
      return mid;
    }
  }

  return -1;
};

/**
 * Same as above, but can use a custom comparator function.
 *
 * @param  {function} comparator - Custom comparator function.
 * @param  {array}    array      - Haystack.
 * @param  {any}      value      - Needle.
 * @return {number}
 */
binarySearch.searchWithComparator = function(comparator, array, value) {
  var mid = 0,
      lo = 0,
      hi = ~-array.length,
      comparison;

  while (lo <= hi) {
    mid = (lo + hi) >>> 1;

    comparison = comparator(array[mid], value);

    if (comparison > 0) {
      hi = ~-mid;
    }
    else if (comparison < 0) {
      lo = -~mid;
    }
    else {
      return mid;
    }
  }

  return -1;
};

/**
 * Function returning the lower bound of the given value in the array.
 *
 * @param  {array}  array - Haystack.
 * @param  {any}    value - Needle.
 * @param  {number} [lo] - Start index.
 * @param  {numner} [hi] - End index.
 * @return {number}
 */
binarySearch.lowerBound = function(array, value, lo, hi) {
  var mid = 0;

  lo = typeof lo !== 'undefined' ? lo : 0;
  hi = typeof hi !== 'undefined' ? hi : array.length;

  while (lo < hi) {
    mid = (lo + hi) >>> 1;

    if (value <= array[mid]) {
      hi = mid;
    }
    else {
      lo = -~mid;
    }
  }

  return lo;
};

/**
 * Same as above, but can use a custom comparator function.
 *
 * @param  {function} comparator - Custom comparator function.
 * @param  {array}    array      - Haystack.
 * @param  {any}      value      - Needle.
 * @return {number}
 */
binarySearch.lowerBoundWithComparator = function(comparator, array, value) {
  var mid = 0,
      lo = 0,
      hi = array.length;

  while (lo < hi) {
    mid = (lo + hi) >>> 1;

    if (comparator(value, array[mid]) <= 0) {
      hi = mid;
    }
    else {
      lo = -~mid;
    }
  }

  return lo;
};

/**
 * Same as above, but can work on sorted indices.
 *
 * @param  {array}    array - Haystack.
 * @param  {array}    array - Indices.
 * @param  {any}      value - Needle.
 * @return {number}
 */
binarySearch.lowerBoundIndices = function(array, indices, value, lo, hi) {
  var mid = 0;

  lo = typeof lo !== 'undefined' ? lo : 0;
  hi = typeof hi !== 'undefined' ? hi : array.length;

  while (lo < hi) {
    mid = (lo + hi) >>> 1;

    if (value <= array[indices[mid]]) {
      hi = mid;
    }
    else {
      lo = -~mid;
    }
  }

  return lo;
};

/**
 * Function returning the upper bound of the given value in the array.
 *
 * @param  {array}  array - Haystack.
 * @param  {any}    value - Needle.
 * @param  {number} [lo] - Start index.
 * @param  {numner} [hi] - End index.
 * @return {number}
 */
binarySearch.upperBound = function(array, value, lo, hi) {
  var mid = 0;

  lo = typeof lo !== 'undefined' ? lo : 0;
  hi = typeof hi !== 'undefined' ? hi : array.length;

  while (lo < hi) {
    mid = (lo + hi) >>> 1;

    if (value >= array[mid]) {
      lo = -~mid;
    }
    else {
      hi = mid;
    }
  }

  return lo;
};

/**
 * Same as above, but can use a custom comparator function.
 *
 * @param  {function} comparator - Custom comparator function.
 * @param  {array}    array      - Haystack.
 * @param  {any}      value      - Needle.
 * @return {number}
 */
binarySearch.upperBoundWithComparator = function(comparator, array, value) {
  var mid = 0,
      lo = 0,
      hi = array.length;

  while (lo < hi) {
    mid = (lo + hi) >>> 1;

    if (comparator(value, array[mid]) >= 0) {
      lo = -~mid;
    }
    else {
      hi = mid;
    }
  }

  return lo;
};

var comparators$1 = {};

/**
 * Mnemonist Heap Comparators
 * ===========================
 *
 * Default comparators & functions dealing with comparators reversing etc.
 */

var DEFAULT_COMPARATOR$1 = function(a, b) {
  if (a < b)
    return -1;
  if (a > b)
    return 1;

  return 0;
};

var DEFAULT_REVERSE_COMPARATOR = function(a, b) {
  if (a < b)
    return 1;
  if (a > b)
    return -1;

  return 0;
};

/**
 * Function used to reverse a comparator.
 */
function reverseComparator$1(comparator) {
  return function(a, b) {
    return comparator(b, a);
  };
}

/**
 * Function returning a tuple comparator.
 */
function createTupleComparator(size) {
  if (size === 2) {
    return function(a, b) {
      if (a[0] < b[0])
        return -1;

      if (a[0] > b[0])
        return 1;

      if (a[1] < b[1])
        return -1;

      if (a[1] > b[1])
        return 1;

      return 0;
    };
  }

  return function(a, b) {
    var i = 0;

    while (i < size) {
      if (a[i] < b[i])
        return -1;

      if (a[i] > b[i])
        return 1;

      i++;
    }

    return 0;
  };
}

/**
 * Exporting.
 */
comparators$1.DEFAULT_COMPARATOR = DEFAULT_COMPARATOR$1;
comparators$1.DEFAULT_REVERSE_COMPARATOR = DEFAULT_REVERSE_COMPARATOR;
comparators$1.reverseComparator = reverseComparator$1;
comparators$1.createTupleComparator = createTupleComparator;

/* eslint no-constant-condition: 0 */

/**
 * Mnemonist Fibonacci Heap
 * =========================
 *
 * Fibonacci heap implementation.
 */
var comparators = comparators$1,
    forEach$1 = foreach;

var DEFAULT_COMPARATOR = comparators.DEFAULT_COMPARATOR,
    reverseComparator = comparators.reverseComparator;

/**
 * Fibonacci Heap.
 *
 * @constructor
 */
function FibonacciHeap(comparator) {
  this.clear();
  this.comparator = comparator || DEFAULT_COMPARATOR;

  if (typeof this.comparator !== 'function')
    throw new Error('mnemonist/FibonacciHeap.constructor: given comparator should be a function.');
}

/**
 * Method used to clear the heap.
 *
 * @return {undefined}
 */
FibonacciHeap.prototype.clear = function() {

  // Properties
  this.root = null;
  this.min = null;
  this.size = 0;
};

/**
 * Function used to create a node.
 *
 * @param  {any}    item - Target item.
 * @return {object}
 */
function createNode(item) {
  return {
    item: item,
    degree: 0
  };
}

/**
 * Function used to merge the given node with the root list.
 *
 * @param {FibonacciHeap} heap - Target heap.
 * @param {Node}          node - Target node.
 */
function mergeWithRoot(heap, node) {
  if (!heap.root) {
    heap.root = node;
  }
  else {
    node.right = heap.root.right;
    node.left = heap.root;
    heap.root.right.left = node;
    heap.root.right = node;
  }
}

/**
 * Method used to push an item into the heap.
 *
 * @param  {any}    item - Item to push.
 * @return {number}
 */
FibonacciHeap.prototype.push = function(item) {
  var node = createNode(item);
  node.left = node;
  node.right = node;
  mergeWithRoot(this, node);

  if (!this.min || this.comparator(node.item, this.min.item) <= 0)
    this.min = node;

  return ++this.size;
};

/**
 * Method used to get the "first" item of the heap.
 *
 * @return {any}
 */
FibonacciHeap.prototype.peek = function() {
  return this.min ? this.min.item : undefined;
};

/**
 * Function used to consume the given linked list.
 *
 * @param {Node} head - Head node.
 * @param {array}
 */
function consumeLinkedList(head) {
  var nodes = [],
      node = head,
      flag = false;

  while (true) {
    if (node === head && flag)
      break;
    else if (node === head)
      flag = true;

    nodes.push(node);
    node = node.right;
  }

  return nodes;
}

/**
 * Function used to remove the target node from the root list.
 *
 * @param {FibonacciHeap} heap - Target heap.
 * @param {Node}          node - Target node.
 */
function removeFromRoot(heap, node) {
  if (heap.root === node)
    heap.root = node.right;
  node.left.right = node.right;
  node.right.left = node.left;
}

/**
 * Function used to merge the given node with the child list of a root node.
 *
 * @param {Node} parent - Parent node.
 * @param {Node} node   - Target node.
 */
function mergeWithChild(parent, node) {
  if (!parent.child) {
    parent.child = node;
  }
  else {
    node.right = parent.child.right;
    node.left = parent.child;
    parent.child.right.left = node;
    parent.child.right = node;
  }
}

/**
 * Function used to link one node to another in the root list.
 *
 * @param {FibonacciHeap} heap - Target heap.
 * @param {Node}          y - Y node.
 * @param {Node}          x - X node.
 */
function link(heap, y, x) {
  removeFromRoot(heap, y);
  y.left = y;
  y.right = y;
  mergeWithChild(x, y);
  x.degree++;
  y.parent = x;
}

/**
 * Function used to consolidate the heap.
 *
 * @param {FibonacciHeap} heap - Target heap.
 */
function consolidate(heap) {
  var A = new Array(heap.size),
      nodes = consumeLinkedList(heap.root),
      i, l, x, y, d, t;

  for (i = 0, l = nodes.length; i < l; i++) {
    x = nodes[i];
    d = x.degree;

    while (A[d]) {
      y = A[d];

      if (heap.comparator(x.item, y.item) > 0) {
        t = x;
        x = y;
        y = t;
      }

      link(heap, y, x);
      A[d] = null;
      d++;
    }

    A[d] = x;
  }

  for (i = 0; i < heap.size; i++) {
    if (A[i] && heap.comparator(A[i].item, heap.min.item) <= 0)
      heap.min = A[i];
  }
}

/**
 * Method used to retrieve & remove the "first" item of the heap.
 *
 * @return {any}
 */
FibonacciHeap.prototype.pop = function() {
  if (!this.size)
    return undefined;

  var z = this.min;

  if (z.child) {
    var nodes = consumeLinkedList(z.child),
        node,
        i,
        l;

    for (i = 0, l = nodes.length; i < l; i++) {
      node = nodes[i];

      mergeWithRoot(this, node);
      delete node.parent;
    }
  }

  removeFromRoot(this, z);

  if (z === z.right) {
    this.min = null;
    this.root = null;
  }
  else {
    this.min = z.right;
    consolidate(this);
  }

  this.size--;

  return z.item;
};

/**
 * Convenience known methods.
 */
FibonacciHeap.prototype.inspect = function() {
  var proxy = {
    size: this.size
  };

  if (this.min && 'item' in this.min)
    proxy.top = this.min.item;

  // Trick so that node displays the name of the constructor
  Object.defineProperty(proxy, 'constructor', {
    value: FibonacciHeap,
    enumerable: false
  });

  return proxy;
};

if (typeof Symbol !== 'undefined')
  FibonacciHeap.prototype[Symbol.for('nodejs.util.inspect.custom')] = FibonacciHeap.prototype.inspect;

/**
 * Fibonacci Maximum Heap.
 *
 * @constructor
 */
function MaxFibonacciHeap(comparator) {
  this.clear();
  this.comparator = comparator || DEFAULT_COMPARATOR;

  if (typeof this.comparator !== 'function')
    throw new Error('mnemonist/FibonacciHeap.constructor: given comparator should be a function.');

  this.comparator = reverseComparator(this.comparator);
}

MaxFibonacciHeap.prototype = FibonacciHeap.prototype;

/**
 * Static @.from function taking an arbitrary iterable & converting it into
 * a heap.
 *
 * @param  {Iterable} iterable   - Target iterable.
 * @param  {function} comparator - Custom comparator function.
 * @return {FibonacciHeap}
 */
FibonacciHeap.from = function(iterable, comparator) {
  var heap = new FibonacciHeap(comparator);

  forEach$1(iterable, function(value) {
    heap.push(value);
  });

  return heap;
};

MaxFibonacciHeap.from = function(iterable, comparator) {
  var heap = new MaxFibonacciHeap(comparator);

  forEach$1(iterable, function(value) {
    heap.push(value);
  });

  return heap;
};

/**
 * Exporting.
 */
FibonacciHeap.MinFibonacciHeap = FibonacciHeap;
FibonacciHeap.MaxFibonacciHeap = MaxFibonacciHeap;
var fibonacciHeap = FibonacciHeap;

/* eslint no-constant-condition: 0 */

(function (exports) {
	/**
	 * Mnemonist Merge Helpers
	 * ========================
	 *
	 * Various merge algorithms used to handle sorted lists. Note that the given
	 * functions are optimized and won't accept mixed arguments.
	 *
	 * Note: maybe this piece of code belong to sortilege, along with binary-search.
	 */
	var typed = typedArrays,
	    isArrayLike = iterables.isArrayLike,
	    binarySearch$1 = binarySearch,
	    FibonacciHeap = fibonacciHeap;

	// TODO: update to use exponential search
	// TODO: when not knowing final length => should use plain arrays rather than
	// same type as input

	/**
	 * Merge two sorted array-like structures into one.
	 *
	 * @param  {array} a - First array.
	 * @param  {array} b - Second array.
	 * @return {array}
	 */
	function mergeArrays(a, b) {

	  // One of the arrays is empty
	  if (a.length === 0)
	    return b.slice();
	  if (b.length === 0)
	    return a.slice();

	  // Finding min array
	  var tmp;

	  if (a[0] > b[0]) {
	    tmp = a;
	    a = b;
	    b = tmp;
	  }

	  // If array have non overlapping ranges, we can just concatenate them
	  var aEnd = a[a.length - 1],
	      bStart = b[0];

	  if (aEnd <= bStart) {
	    if (typed.isTypedArray(a))
	      return typed.concat(a, b);
	    return a.concat(b);
	  }

	  // Initializing target
	  var array = new a.constructor(a.length + b.length);

	  // Iterating until we overlap
	  var i, l, v;

	  for (i = 0, l = a.length; i < l; i++) {
	    v = a[i];

	    if (v <= bStart)
	      array[i] = v;
	    else
	      break;
	  }

	  // Handling overlap
	  var aPointer = i,
	      aLength = a.length,
	      bPointer = 0,
	      bLength = b.length,
	      aHead,
	      bHead;

	  while (aPointer < aLength && bPointer < bLength) {
	    aHead = a[aPointer];
	    bHead = b[bPointer];

	    if (aHead <= bHead) {
	      array[i++] = aHead;
	      aPointer++;
	    }
	    else {
	      array[i++] = bHead;
	      bPointer++;
	    }
	  }

	  // Filling
	  while (aPointer < aLength)
	    array[i++] = a[aPointer++];
	  while (bPointer < bLength)
	    array[i++] = b[bPointer++];

	  return array;
	}

	/**
	 * Perform the union of two already unique sorted array-like structures into one.
	 *
	 * @param  {array} a - First array.
	 * @param  {array} b - Second array.
	 * @return {array}
	 */
	function unionUniqueArrays(a, b) {

	  // One of the arrays is empty
	  if (a.length === 0)
	    return b.slice();
	  if (b.length === 0)
	    return a.slice();

	  // Finding min array
	  var tmp;

	  if (a[0] > b[0]) {
	    tmp = a;
	    a = b;
	    b = tmp;
	  }

	  // If array have non overlapping ranges, we can just concatenate them
	  var aEnd = a[a.length - 1],
	      bStart = b[0];

	  if (aEnd < bStart) {
	    if (typed.isTypedArray(a))
	      return typed.concat(a, b);
	    return a.concat(b);
	  }

	  // Initializing target
	  var array = new a.constructor();

	  // Iterating until we overlap
	  var i, l, v;

	  for (i = 0, l = a.length; i < l; i++) {
	    v = a[i];

	    if (v < bStart)
	      array.push(v);
	    else
	      break;
	  }

	  // Handling overlap
	  var aPointer = i,
	      aLength = a.length,
	      bPointer = 0,
	      bLength = b.length,
	      aHead,
	      bHead;

	  while (aPointer < aLength && bPointer < bLength) {
	    aHead = a[aPointer];
	    bHead = b[bPointer];

	    if (aHead <= bHead) {

	      if (array.length === 0 || array[array.length - 1] !== aHead)
	        array.push(aHead);

	      aPointer++;
	    }
	    else {
	      if (array.length === 0 || array[array.length - 1] !== bHead)
	        array.push(bHead);

	      bPointer++;
	    }
	  }

	  // Filling
	  // TODO: it's possible to optimize a bit here, since the condition is only
	  // relevant the first time
	  while (aPointer < aLength) {
	    aHead = a[aPointer++];

	    if (array.length === 0 || array[array.length - 1] !== aHead)
	      array.push(aHead);
	  }
	  while (bPointer < bLength) {
	    bHead = b[bPointer++];

	    if (array.length === 0 || array[array.length - 1] !== bHead)
	      array.push(bHead);
	  }

	  return array;
	}

	/**
	 * Perform the intersection of two already unique sorted array-like structures into one.
	 *
	 * @param  {array} a - First array.
	 * @param  {array} b - Second array.
	 * @return {array}
	 */
	exports.intersectionUniqueArrays = function(a, b) {

	  // One of the arrays is empty
	  if (a.length === 0 || b.length === 0)
	    return new a.constructor(0);

	  // Finding min array
	  var tmp;

	  if (a[0] > b[0]) {
	    tmp = a;
	    a = b;
	    b = tmp;
	  }

	  // If array have non overlapping ranges, there is no intersection
	  var aEnd = a[a.length - 1],
	      bStart = b[0];

	  if (aEnd < bStart)
	    return new a.constructor(0);

	  // Initializing target
	  var array = new a.constructor();

	  // Handling overlap
	  var aPointer = binarySearch$1.lowerBound(a, bStart),
	      aLength = a.length,
	      bPointer = 0,
	      bLength = binarySearch$1.upperBound(b, aEnd),
	      aHead,
	      bHead;

	  while (aPointer < aLength && bPointer < bLength) {
	    aHead = a[aPointer];
	    bHead = b[bPointer];

	    if (aHead < bHead) {
	      aPointer = binarySearch$1.lowerBound(a, bHead, aPointer + 1);
	    }
	    else if (aHead > bHead) {
	      bPointer = binarySearch$1.lowerBound(b, aHead, bPointer + 1);
	    }
	    else {
	      array.push(aHead);
	      aPointer++;
	      bPointer++;
	    }
	  }

	  return array;
	};

	/**
	 * Merge k sorted array-like structures into one.
	 *
	 * @param  {array<array>} arrays - Arrays to merge.
	 * @return {array}
	 */
	function kWayMergeArrays(arrays) {
	  var length = 0,
	      max = -Infinity,
	      al,
	      i,
	      l;

	  var filtered = [];

	  for (i = 0, l = arrays.length; i < l; i++) {
	    al = arrays[i].length;

	    if (al === 0)
	      continue;

	    filtered.push(arrays[i]);

	    length += al;

	    if (al > max)
	      max = al;
	  }

	  if (filtered.length === 0)
	    return new arrays[0].constructor(0);

	  if (filtered.length === 1)
	    return filtered[0].slice();

	  if (filtered.length === 2)
	    return mergeArrays(filtered[0], filtered[1]);

	  arrays = filtered;

	  var array = new arrays[0].constructor(length);

	  var PointerArray = typed.getPointerArray(max);

	  var pointers = new PointerArray(arrays.length);

	  // TODO: benchmark vs. a binomial heap
	  var heap = new FibonacciHeap(function(a, b) {
	    a = arrays[a][pointers[a]];
	    b = arrays[b][pointers[b]];

	    if (a < b)
	      return -1;

	    if (a > b)
	      return 1;

	    return 0;
	  });

	  for (i = 0; i < l; i++)
	    heap.push(i);

	  i = 0;

	  var p,
	      v;

	  while (heap.size) {
	    p = heap.pop();
	    v = arrays[p][pointers[p]++];
	    array[i++] = v;

	    if (pointers[p] < arrays[p].length)
	      heap.push(p);
	  }

	  return array;
	}

	/**
	 * Perform the union of k sorted unique array-like structures into one.
	 *
	 * @param  {array<array>} arrays - Arrays to merge.
	 * @return {array}
	 */
	function kWayUnionUniqueArrays(arrays) {
	  var max = -Infinity,
	      al,
	      i,
	      l;

	  var filtered = [];

	  for (i = 0, l = arrays.length; i < l; i++) {
	    al = arrays[i].length;

	    if (al === 0)
	      continue;

	    filtered.push(arrays[i]);

	    if (al > max)
	      max = al;
	  }

	  if (filtered.length === 0)
	    return new arrays[0].constructor(0);

	  if (filtered.length === 1)
	    return filtered[0].slice();

	  if (filtered.length === 2)
	    return unionUniqueArrays(filtered[0], filtered[1]);

	  arrays = filtered;

	  var array = new arrays[0].constructor();

	  var PointerArray = typed.getPointerArray(max);

	  var pointers = new PointerArray(arrays.length);

	  // TODO: benchmark vs. a binomial heap
	  var heap = new FibonacciHeap(function(a, b) {
	    a = arrays[a][pointers[a]];
	    b = arrays[b][pointers[b]];

	    if (a < b)
	      return -1;

	    if (a > b)
	      return 1;

	    return 0;
	  });

	  for (i = 0; i < l; i++)
	    heap.push(i);

	  var p,
	      v;

	  while (heap.size) {
	    p = heap.pop();
	    v = arrays[p][pointers[p]++];

	    if (array.length === 0 || array[array.length - 1] !== v)
	      array.push(v);

	    if (pointers[p] < arrays[p].length)
	      heap.push(p);
	  }

	  return array;
	}

	/**
	 * Perform the intersection of k sorted array-like structures into one.
	 *
	 * @param  {array<array>} arrays - Arrays to merge.
	 * @return {array}
	 */
	exports.kWayIntersectionUniqueArrays = function(arrays) {
	  var maxStart = -Infinity,
	      minEnd = Infinity,
	      first,
	      last,
	      al,
	      i,
	      l;

	  for (i = 0, l = arrays.length; i < l; i++) {
	    al = arrays[i].length;

	    // If one of the arrays is empty, so is the intersection
	    if (al === 0)
	      return [];

	    first = arrays[i][0];
	    last = arrays[i][al - 1];

	    if (first > maxStart)
	      maxStart = first;

	    if (last < minEnd)
	      minEnd = last;
	  }

	  // Full overlap is impossible
	  if (maxStart > minEnd)
	    return [];

	  // Only one value
	  if (maxStart === minEnd)
	    return [maxStart];

	  // NOTE: trying to outsmart I(D,I(C,I(A,B))) is pointless unfortunately...
	  // NOTE: I tried to be very clever about bounds but it does not seem
	  // to improve the performance of the algorithm.
	  var a, b,
	      array = arrays[0],
	      aPointer,
	      bPointer,
	      aLimit,
	      bLimit,
	      aHead,
	      bHead,
	      start = maxStart;

	  for (i = 1; i < l; i++) {
	    a = array;
	    b = arrays[i];

	    // Change that to `[]` and observe some perf drops on V8...
	    array = new Array();

	    aPointer = 0;
	    bPointer = binarySearch$1.lowerBound(b, start);

	    aLimit = a.length;
	    bLimit = b.length;

	    while (aPointer < aLimit && bPointer < bLimit) {
	      aHead = a[aPointer];
	      bHead = b[bPointer];

	      if (aHead < bHead) {
	        aPointer = binarySearch$1.lowerBound(a, bHead, aPointer + 1);
	      }
	      else if (aHead > bHead) {
	        bPointer = binarySearch$1.lowerBound(b, aHead, bPointer + 1);
	      }
	      else {
	        array.push(aHead);
	        aPointer++;
	        bPointer++;
	      }
	    }

	    if (array.length === 0)
	      return array;

	    start = array[0];
	  }

	  return array;
	};

	/**
	 * Variadic merging all of the given arrays.
	 *
	 * @param  {...array}
	 * @return {array}
	 */
	exports.merge = function() {
	  if (arguments.length === 2) {
	    if (isArrayLike(arguments[0]))
	      return mergeArrays(arguments[0], arguments[1]);
	  }
	  else {
	    if (isArrayLike(arguments[0]))
	      return kWayMergeArrays(arguments);
	  }

	  return null;
	};

	/**
	 * Variadic function performing the union of all the given unique arrays.
	 *
	 * @param  {...array}
	 * @return {array}
	 */
	exports.unionUnique = function() {
	  if (arguments.length === 2) {
	    if (isArrayLike(arguments[0]))
	      return unionUniqueArrays(arguments[0], arguments[1]);
	  }
	  else {
	    if (isArrayLike(arguments[0]))
	      return kWayUnionUniqueArrays(arguments);
	  }

	  return null;
	};

	/**
	 * Variadic function performing the intersection of all the given unique arrays.
	 *
	 * @param  {...array}
	 * @return {array}
	 */
	exports.intersectionUnique = function() {
	  if (arguments.length === 2) {
	    if (isArrayLike(arguments[0]))
	      return exports.intersectionUniqueArrays(arguments[0], arguments[1]);
	  }
	  else {
	    if (isArrayLike(arguments[0]))
	      return exports.kWayIntersectionUniqueArrays(arguments);
	  }

	  return null;
	};
} (merge));

/**
 * Mnemonist Inverted Index
 * =========================
 *
 * JavaScript implementation of an inverted index.
 */

var Iterator = iterator,
    forEach = foreach,
    helpers = merge;

function identity(x) {
  return x;
}

/**
 * InvertedIndex.
 *
 * @constructor
 * @param {function} tokenizer - Tokenizer function.
 */
function InvertedIndex(descriptor) {
  this.clear();

  if (Array.isArray(descriptor)) {
    this.documentTokenizer = descriptor[0];
    this.queryTokenizer = descriptor[1];
  }
  else {
    this.documentTokenizer = descriptor;
    this.queryTokenizer = descriptor;
  }

  if (!this.documentTokenizer)
    this.documentTokenizer = identity;
  if (!this.queryTokenizer)
    this.queryTokenizer = identity;

  if (typeof this.documentTokenizer !== 'function')
    throw new Error('mnemonist/InvertedIndex.constructor: document tokenizer is not a function.');

  if (typeof this.queryTokenizer !== 'function')
    throw new Error('mnemonist/InvertedIndex.constructor: query tokenizer is not a function.');
}

/**
 * Method used to clear the InvertedIndex.
 *
 * @return {undefined}
 */
InvertedIndex.prototype.clear = function() {

  // Properties
  this.items = [];
  this.mapping = new Map();
  this.size = 0;
  this.dimension = 0;
};

/**
 * Method used to add a document to the index.
 *
 * @param  {any} doc - Item to add.
 * @return {InvertedIndex}
 */
InvertedIndex.prototype.add = function(doc) {

  // Increasing size
  this.size++;

  // Storing document
  var key = this.items.length;
  this.items.push(doc);

  // Tokenizing the document
  var tokens = this.documentTokenizer(doc);

  if (!Array.isArray(tokens))
    throw new Error('mnemonist/InvertedIndex.add: tokenizer function should return an array of tokens.');

  // Indexing
  var done = new Set(),
      token,
      container;

  for (var i = 0, l = tokens.length; i < l; i++) {
    token = tokens[i];

    if (done.has(token))
      continue;

    done.add(token);

    container = this.mapping.get(token);

    if (!container) {
      container = [];
      this.mapping.set(token, container);
    }

    container.push(key);
  }

  this.dimension = this.mapping.size;

  return this;
};

/**
 * Method used to query the index in a AND fashion.
 *
 * @param  {any} query - Query
 * @return {Set}       - Intersection of documents matching the query.
 */
InvertedIndex.prototype.get = function(query) {

  // Early termination
  if (!this.size)
    return [];

  // First we need to tokenize the query
  var tokens = this.queryTokenizer(query);

  if (!Array.isArray(tokens))
    throw new Error('mnemonist/InvertedIndex.query: tokenizer function should return an array of tokens.');

  if (!tokens.length)
    return [];

  var results = this.mapping.get(tokens[0]),
      c,
      i,
      l;

  if (typeof results === 'undefined' || results.length === 0)
    return [];

  if (tokens.length > 1) {
    for (i = 1, l = tokens.length; i < l; i++) {
      c = this.mapping.get(tokens[i]);

      if (typeof c === 'undefined' || c.length === 0)
        return [];

      results = helpers.intersectionUniqueArrays(results, c);
    }
  }

  var docs = new Array(results.length);

  for (i = 0, l = docs.length; i < l; i++)
    docs[i] = this.items[results[i]];

  return docs;
};

/**
 * Method used to iterate over each of the documents.
 *
 * @param  {function}  callback - Function to call for each item.
 * @param  {object}    scope    - Optional scope.
 * @return {undefined}
 */
InvertedIndex.prototype.forEach = function(callback, scope) {
  scope = arguments.length > 1 ? scope : this;

  for (var i = 0, l = this.documents.length; i < l; i++)
    callback.call(scope, this.documents[i], i, this);
};

/**
 * Method returning an iterator over the index's documents.
 *
 * @return {Iterator}
 */
InvertedIndex.prototype.documents = function() {
  var documents = this.items,
      l = documents.length,
      i = 0;

  return new Iterator(function() {
    if (i >= l)
      return {
        done: true
      };

      var value = documents[i++];

      return {
        value: value,
        done: false
      };
  });
};

/**
 * Method returning an iterator over the index's tokens.
 *
 * @return {Iterator}
 */
InvertedIndex.prototype.tokens = function() {
  return this.mapping.keys();
};

/**
 * Attaching the #.values method to Symbol.iterator if possible.
 */
if (typeof Symbol !== 'undefined')
  InvertedIndex.prototype[Symbol.iterator] = InvertedIndex.prototype.documents;

/**
 * Convenience known methods.
 */
InvertedIndex.prototype.inspect = function() {
  var array = this.items.slice();

  // Trick so that node displays the name of the constructor
  Object.defineProperty(array, 'constructor', {
    value: InvertedIndex,
    enumerable: false
  });

  return array;
};

if (typeof Symbol !== 'undefined')
  InvertedIndex.prototype[Symbol.for('nodejs.util.inspect.custom')] = InvertedIndex.prototype.inspect;

/**
 * Static @.from function taking an arbitrary iterable & converting it into
 * a InvertedIndex.
 *
 * @param  {Iterable} iterable - Target iterable.
 * @param  {function} tokenizer - Tokenizer function.
 * @return {InvertedIndex}
 */
InvertedIndex.from = function(iterable, descriptor) {
  var index = new InvertedIndex(descriptor);

  forEach(iterable, function(doc) {
    index.add(doc);
  });

  return index;
};

/**
 * Exporting.
 */
var invertedIndex = InvertedIndex;

var __defProp$e = Object.defineProperty;
var __getOwnPropDesc$e = Object.getOwnPropertyDescriptor;
var __decorateClass$e = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$e(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp$e(target, key, result);
  return result;
};
let InfiniteScrollRoutesViewer = class extends BaseRoutesViewer$1 {
  _apiData;
  _apiDataEntireList;
  set apiDataDescribingCurrentList(newVal) {
    localStorage.setItem(this.localStorageKey + "-api-data", JSON.stringify(newVal));
    this._apiData = newVal;
  }
  get apiDataDescribingCurrentList() {
    if (!this._apiData) {
      const str = localStorage.getItem(this.localStorageKey + "-api-data");
      str && (this._apiData = JSON.parse(str));
    }
    return this._apiData;
  }
  set apiDataDescribingEntireList(newVal) {
    localStorage.setItem(this.localStorageKey + "-api-data-entire-list", JSON.stringify(newVal));
    this._apiDataEntireList = newVal;
  }
  get apiDataDescribingEntireList() {
    if (!this._apiDataEntireList) {
      const str = localStorage.getItem(this.localStorageKey + "-api-data-entire-list");
      str && (this._apiDataEntireList = JSON.parse(str));
    }
    return this._apiDataEntireList;
  }
  lastCell = null;
  isInitialFetchComplete = false;
  loadedCellCount = 0;
  cellsToLoadAtATime = 50;
  cellsLastLoadedAt = new Date().getTime();
  loadedIds = /* @__PURE__ */ new Set();
  _routeLookup;
  set routeLookup(newVal) {
    localStorage.setItem(this.localStorageKey, JSON.stringify(newVal));
    this._routeLookup = newVal;
  }
  get routeLookup() {
    this._routeLookup ||= JSON.parse(localStorage.getItem(this.localStorageKey) || '{ "routes" : {} }');
    return this._routeLookup;
  }
  onScrollMaxEvery16ms(evt) {
    super.onScrollMaxEvery16ms(evt);
    this.maybeLoadMoreCells(evt);
  }
  maybeLoadMoreCells(_evt) {
    const scroll = this.lastCell?.getBoundingClientRect().top;
    const time = new Date().getTime();
    if (time - this.cellsLastLoadedAt > 500 && scroll && scroll < window.innerHeight + 400) {
      this.cellsLastLoadedAt = time;
      this.loadCellsForScroll();
    }
  }
  loadCellsForScroll() {
    this.loadCellsForObjectsWithIdsReturn(this.apiDataDescribingCurrentList);
  }
  sortOrderChanged(evt) {
    super.sortOrderChanged(evt);
  }
  get allowEmptyQuery() {
    return false;
  }
  resultsSignature(data) {
    return data?.data.objects.map((sec) => sec.title + sec.ids.join(",")).join();
  }
  async _init() {
    this.startProgressBar();
    const currentQuery = this.query;
    this.fetchUpdateForRouteLookup().then(async (res) => {
      this.updateForRouteLookupFetched(res);
      if (!this.routeLookup) {
        if (currentQuery) {
          void this.fetchDataForQuery("").then((data) => {
            this.apiDataDescribingEntireList = data;
          });
        }
        this.fetchDataForQuery(currentQuery).then(async (data) => {
          this.handleFetchedData(data);
          this.apiDataDescribingCurrentList = data;
        });
      }
    });
    if (this.routeLookup) {
      this.fetchDataForQuery().then(async (data) => {
        this.handleFetchedData(data);
        this.apiDataDescribingCurrentList = data;
      });
      if (!this.query) {
        if (this.apiDataDescribingEntireList) {
          this.buildResults(this.apiDataDescribingEntireList);
          this.stopProgressBar();
        }
      }
    }
  }
  handleFetchedData(data) {
    if (this.resultsSignature(this.apiDataDescribingCurrentList) == this.resultsSignature(data)) {
      return;
    }
    if (data.status !== 200) {
      console.debug(data);
      return;
    }
    this.buildResults(data);
  }
  async updateForRouteLookupFetched(res) {
    this.routeLookup = this.buildRoutesLookup(res);
    this.buildRoutesLookup(res);
    this.buildResults(this.apiDataDescribingCurrentList);
    this.stopProgressBar();
  }
  buildRoutesLookup(_data) {
    const data = _data.data;
    const lookup = {};
    const res = {
      meta: {},
      routes: lookup
    };
    if (!data)
      return res;
    const keyFun = this.keyFunctionForPuttingRouteInIndex();
    data.objects.forEach((section) => {
      section.routes.forEach((route) => {
        lookup[keyFun(route)] = route;
      });
    });
    return res;
  }
  async fetchUpdateForRouteLookup() {
    return await this.fetchDataParams("full", "");
  }
  async fetchDataForQuery(query = this.query) {
    const res = await this.fetchDataParams("ids", query);
    if (!query) {
      this.apiDataDescribingEntireList = res;
    }
    return res;
  }
  async fetchDataParams(returnType, query) {
    const body = this.bodyForRequestAndPage(query);
    body.return_type = returnType;
    const response = await fetch(
      this.apiUrl,
      {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(
          body
        )
      }
    );
    const status = response.status;
    const data = await response.json();
    return { data, status };
  }
  bodyForRequestAndPage(query, _pageNo) {
    const body = this.bodyForRequest(query);
    return body;
  }
  toggleSortDirection() {
    this.toggleArrowInSortButton();
    this.lastSearch = void 0;
    this.onInputUpdated();
    localStorage.setItem(this.sortDirectionKey, this.sortDirectionFromButton);
  }
  htmlForSlot(slotName) {
    if (slotName === "routes-viewer-sort-order-options") {
      return html$1`
        <option value="score"      >Order by search score</option>
        <option value="crag_name" >Order by crag name</option>
        <option value="grade"     >Order by route grade</option>
        <!--<option value="voted_grade">Order by voted grade</option>-->
      `;
    }
    const sup = super.htmlForSlot(slotName);
    if (sup) {
      return sup;
    }
    return "";
  }
  buildResults(_data) {
    if (!_data) {
      return;
    }
    this.loadedIds = /* @__PURE__ */ new Set();
    const data = _data.data;
    this.loadedCellCount = 0;
    console.debug(data, { depth: null });
    this.queue = [];
    this.clearResultsDropdown();
    if (data.objects?.length === 0) {
      appendNoResults(this);
    }
    if (this.filter_query_description) {
      if (data.meta?.parsed_query) {
        const c = data.meta?.total_matches;
        this.filter_query_description.innerHTML = data.meta.parsed_query.queryDescription + ` (${c}&nbsp;match${c === 1 ? "" : "es"})`;
      } else {
        this.filter_query_description.innerHTML = "";
      }
    }
    if (this.response?.status === 401) {
      this.routes_viewer_container.innerHTML = this.privateDivString();
      return;
    }
    this.loadCellsForObjectsWithIdsReturn(_data);
  }
  loadCellsForObjectsWithIdsReturn(data) {
    if (!data)
      return;
    const objects = data.data.objects;
    let count = 0;
    objects.forEach((section) => {
      if (count > this.cellsToLoadAtATime) {
        return;
      }
      if (!this.loadedIds.has(section.ids[0])) {
        this.queue.push(() => {
          let title = section.title;
          this.appendHeader(title, section.ids.length, this, data.data.meta.object_return_type.name);
        });
      }
      section.ids.forEach((idOfElement) => {
        if (count > this.cellsToLoadAtATime) {
          return;
        }
        if (!this.loadedIds.has(idOfElement)) {
          this.loadedIds.add(idOfElement);
          count++;
          this.queue.push(() => {
            const rte = this.routeLookup.routes[idOfElement];
            if (rte) {
              const el = this.appendRoute(this, rte);
              if (!this.queue.length) {
                this.lastCell = el;
              }
            } else {
              console.debug("missing route", idOfElement);
            }
          });
        }
      });
    });
    this.processQueue();
  }
  keyFunctionForPuttingRouteInIndex() {
    throw new Error("not implemented");
  }
  response;
  onInputUpdated() {
    const newValue = this.input.value;
    const postTrim = newValue.trim();
    this.setVisibilityOfDeleteButton(newValue);
    clearTimeout(this.timeout);
    const sortDirection = this.sortDirectionFromButton;
    this.startProgressBar();
    this.searchId++;
    const currentSearchId = this.searchId;
    this.timeout = setTimeout(async () => {
      const query = this.fullQueryWithoutUrlFilter;
      let results = await this.fetchDataForQuery(query);
      if (this.searchId > currentSearchId) {
        return;
      }
      this.stopProgressBar();
      if (results.status !== 200) {
        console.debug(results);
        return;
      }
      this.searchId = currentSearchId;
      this.lastSearch = query;
      this.apiDataDescribingCurrentList = results;
      this.buildResults(results);
      this.urlFilter = postTrim;
      this.urlSortDirection = sortDirection;
      this.urlPage = 0;
    }, this.searchDelay);
  }
};
InfiniteScrollRoutesViewer = __decorateClass$e([
  controller
], InfiniteScrollRoutesViewer);
const InfiniteScrollRoutesViewer$1 = InfiniteScrollRoutesViewer;

/**
 * @name codsen-utils
 * @fileoverview Various utility functions
 * @version 1.2.0
 * @author Roy Revelt, Codsen Ltd
 * @license MIT
 * {@link https://codsen.com/os/codsen-utils/}
 */
function U(t){if(t==null||typeof t!="object")return !1;let e=Object.getPrototypeOf(t);return e!==null&&e!==Object.prototype&&Object.getPrototypeOf(e)!==null?!1:!(Symbol.iterator in t)&&!(Symbol.toStringTag in t)}

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to compose unicode character classes. */
var rsAstralRange = '\\ud800-\\udfff',
    rsComboMarksRange = '\\u0300-\\u036f\\ufe20-\\ufe23',
    rsComboSymbolsRange = '\\u20d0-\\u20f0',
    rsVarRange = '\\ufe0e\\ufe0f';

/** Used to compose unicode capture groups. */
var rsAstral = '[' + rsAstralRange + ']',
    rsCombo = '[' + rsComboMarksRange + rsComboSymbolsRange + ']',
    rsFitz = '\\ud83c[\\udffb-\\udfff]',
    rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
    rsNonAstral = '[^' + rsAstralRange + ']',
    rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
    rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
    rsZWJ = '\\u200d';

/** Used to compose unicode regexes. */
var reOptMod = rsModifier + '?',
    rsOptVar = '[' + rsVarRange + ']?',
    rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
    rsSeq = rsOptVar + reOptMod + rsOptJoin,
    rsSymbol = '(?:' + [rsNonAstral + rsCombo + '?', rsCombo, rsRegional, rsSurrPair, rsAstral].join('|') + ')';

/** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */
var reUnicode = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');

/** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */
var reHasUnicode = RegExp('[' + rsZWJ + rsAstralRange  + rsComboMarksRange + rsComboSymbolsRange + rsVarRange + ']');

/** Detect free variable `global` from Node.js. */
var freeGlobal$1 = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

/** Detect free variable `self`. */
var freeSelf$1 = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root$1 = freeGlobal$1 || freeSelf$1 || Function('return this')();

/**
 * Converts an ASCII `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function asciiToArray(string) {
  return string.split('');
}

/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseFindIndex$1(array, predicate, fromIndex, fromRight) {
  var length = array.length,
      index = fromIndex + (fromRight ? 1 : -1);

  while ((fromRight ? index-- : ++index < length)) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseIndexOf$1(array, value, fromIndex) {
  if (value !== value) {
    return baseFindIndex$1(array, baseIsNaN$1, fromIndex);
  }
  var index = fromIndex - 1,
      length = array.length;

  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.isNaN` without support for number objects.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 */
function baseIsNaN$1(value) {
  return value !== value;
}

/**
 * Used by `_.trim` and `_.trimStart` to get the index of the first string symbol
 * that is not found in the character symbols.
 *
 * @private
 * @param {Array} strSymbols The string symbols to inspect.
 * @param {Array} chrSymbols The character symbols to find.
 * @returns {number} Returns the index of the first unmatched string symbol.
 */
function charsStartIndex(strSymbols, chrSymbols) {
  var index = -1,
      length = strSymbols.length;

  while (++index < length && baseIndexOf$1(chrSymbols, strSymbols[index], 0) > -1) {}
  return index;
}

/**
 * Used by `_.trim` and `_.trimEnd` to get the index of the last string symbol
 * that is not found in the character symbols.
 *
 * @private
 * @param {Array} strSymbols The string symbols to inspect.
 * @param {Array} chrSymbols The character symbols to find.
 * @returns {number} Returns the index of the last unmatched string symbol.
 */
function charsEndIndex(strSymbols, chrSymbols) {
  var index = strSymbols.length;

  while (index-- && baseIndexOf$1(chrSymbols, strSymbols[index], 0) > -1) {}
  return index;
}

/**
 * Checks if `string` contains Unicode symbols.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {boolean} Returns `true` if a symbol is found, else `false`.
 */
function hasUnicode(string) {
  return reHasUnicode.test(string);
}

/**
 * Converts `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function stringToArray(string) {
  return hasUnicode(string)
    ? unicodeToArray(string)
    : asciiToArray(string);
}

/**
 * Converts a Unicode `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function unicodeToArray(string) {
  return string.match(reUnicode) || [];
}

/** Used for built-in method references. */
var objectProto$1 = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString$1 = objectProto$1.toString;

/** Built-in value references. */
var Symbol$1 = root$1.Symbol;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol$1 ? Symbol$1.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.slice` without an iteratee call guard.
 *
 * @private
 * @param {Array} array The array to slice.
 * @param {number} [start=0] The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the slice of `array`.
 */
function baseSlice(array, start, end) {
  var index = -1,
      length = array.length;

  if (start < 0) {
    start = -start > length ? 0 : (length + start);
  }
  end = end > length ? length : end;
  if (end < 0) {
    end += length;
  }
  length = start > end ? 0 : ((end - start) >>> 0);
  start >>>= 0;

  var result = Array(length);
  while (++index < length) {
    result[index] = array[index + start];
  }
  return result;
}

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/**
 * Casts `array` to a slice if it's needed.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {number} start The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the cast slice.
 */
function castSlice(array, start, end) {
  var length = array.length;
  end = end === undefined ? length : end;
  return (!start && end >= length) ? array : baseSlice(array, start, end);
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike$1(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike$1(value) && objectToString$1.call(value) == symbolTag);
}

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

/**
 * Removes leading and trailing whitespace or specified characters from `string`.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to trim.
 * @param {string} [chars=whitespace] The characters to trim.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {string} Returns the trimmed string.
 * @example
 *
 * _.trim('  abc  ');
 * // => 'abc'
 *
 * _.trim('-_-abc-_-', '_-');
 * // => 'abc'
 *
 * _.map(['  foo  ', '  bar  '], _.trim);
 * // => ['foo', 'bar']
 */
function trim(string, chars, guard) {
  string = toString(string);
  if (string && (guard || chars === undefined)) {
    return string.replace(reTrim, '');
  }
  if (!string || !(chars = baseToString(chars))) {
    return string;
  }
  var strSymbols = stringToArray(string),
      chrSymbols = stringToArray(chars),
      start = charsStartIndex(strSymbols, chrSymbols),
      end = charsEndIndex(strSymbols, chrSymbols) + 1;

  return castSlice(strSymbols, start, end).join('');
}

var lodash_trim = trim;

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** `Object#toString` result references. */
var funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]';

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

/**
 * A specialized version of `_.includes` for arrays without support for
 * specifying an index to search from.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludes(array, value) {
  var length = array ? array.length : 0;
  return !!length && baseIndexOf(array, value, 0) > -1;
}

/**
 * This function is like `arrayIncludes` except that it accepts a comparator.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @param {Function} comparator The comparator invoked per element.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludesWith(array, value, comparator) {
  var index = -1,
      length = array ? array.length : 0;

  while (++index < length) {
    if (comparator(value, array[index])) {
      return true;
    }
  }
  return false;
}

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array ? array.length : 0,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  var length = array.length,
      index = fromIndex + (fromRight ? 1 : -1);

  while ((fromRight ? index-- : ++index < length)) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseIndexOf(array, value, fromIndex) {
  if (value !== value) {
    return baseFindIndex(array, baseIsNaN, fromIndex);
  }
  var index = fromIndex - 1,
      length = array.length;

  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.isNaN` without support for number objects.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 */
function baseIsNaN(value) {
  return value !== value;
}

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

/**
 * Checks if a cache value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */
function isHostObject(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false;
  if (value != null && typeof value.toString != 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }
  return result;
}

/** Used for built-in method references. */
var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/** Built-in value references. */
var splice = arrayProto.splice;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/* Built-in method references that are verified to be native. */
var Map$1 = getNative(root, 'Map'),
    nativeCreate = getNative(Object, 'create');

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  return this.has(key) && delete this.__data__[key];
}

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
}

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map$1 || ListCache),
    'string': new Hash
  };
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  return getMapData(this, key)['delete'](key);
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  getMapData(this, key).set(key, value);
  return this;
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values ? values.length : 0;

  this.__data__ = new MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/**
 * The base implementation of methods like `_.difference` without support
 * for excluding multiple arrays or iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Array} values The values to exclude.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new array of filtered values.
 */
function baseDifference(array, values, iteratee, comparator) {
  var index = -1,
      includes = arrayIncludes,
      isCommon = true,
      length = array.length,
      result = [],
      valuesLength = values.length;

  if (!length) {
    return result;
  }
  if (iteratee) {
    values = arrayMap(values, baseUnary(iteratee));
  }
  if (comparator) {
    includes = arrayIncludesWith;
    isCommon = false;
  }
  else if (values.length >= LARGE_ARRAY_SIZE) {
    includes = cacheHas;
    isCommon = false;
    values = new SetCache(values);
  }
  outer:
  while (++index < length) {
    var value = array[index],
        computed = iteratee ? iteratee(value) : value;

    value = (comparator || value !== 0) ? value : 0;
    if (isCommon && computed === computed) {
      var valuesIndex = valuesLength;
      while (valuesIndex--) {
        if (values[valuesIndex] === computed) {
          continue outer;
        }
      }
      result.push(value);
    }
    else if (!includes(values, computed, comparator)) {
      result.push(value);
    }
  }
  return result;
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = array;
    return apply(func, this, otherArgs);
  };
}

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/**
 * Creates an array excluding all given values using
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * **Note:** Unlike `_.pull`, this method returns a new array.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {...*} [values] The values to exclude.
 * @returns {Array} Returns the new array of filtered values.
 * @see _.difference, _.xor
 * @example
 *
 * _.without([2, 1, 2, 3], 1, 2);
 * // => [3]
 */
var without = baseRest(function(array, values) {
  return isArrayLikeObject(array)
    ? baseDifference(array, values)
    : [];
});

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

var lodash_without = without;

var lib = {};

var namedReferences = {};

Object.defineProperty(namedReferences,"__esModule",{value:true});namedReferences.bodyRegExps={xml:/&(?:#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+);?/g,html4:/&(?:nbsp|iexcl|cent|pound|curren|yen|brvbar|sect|uml|copy|ordf|laquo|not|shy|reg|macr|deg|plusmn|sup2|sup3|acute|micro|para|middot|cedil|sup1|ordm|raquo|frac14|frac12|frac34|iquest|Agrave|Aacute|Acirc|Atilde|Auml|Aring|AElig|Ccedil|Egrave|Eacute|Ecirc|Euml|Igrave|Iacute|Icirc|Iuml|ETH|Ntilde|Ograve|Oacute|Ocirc|Otilde|Ouml|times|Oslash|Ugrave|Uacute|Ucirc|Uuml|Yacute|THORN|szlig|agrave|aacute|acirc|atilde|auml|aring|aelig|ccedil|egrave|eacute|ecirc|euml|igrave|iacute|icirc|iuml|eth|ntilde|ograve|oacute|ocirc|otilde|ouml|divide|oslash|ugrave|uacute|ucirc|uuml|yacute|thorn|yuml|quot|amp|lt|gt|#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+);?/g,html5:/&(?:AElig|AMP|Aacute|Acirc|Agrave|Aring|Atilde|Auml|COPY|Ccedil|ETH|Eacute|Ecirc|Egrave|Euml|GT|Iacute|Icirc|Igrave|Iuml|LT|Ntilde|Oacute|Ocirc|Ograve|Oslash|Otilde|Ouml|QUOT|REG|THORN|Uacute|Ucirc|Ugrave|Uuml|Yacute|aacute|acirc|acute|aelig|agrave|amp|aring|atilde|auml|brvbar|ccedil|cedil|cent|copy|curren|deg|divide|eacute|ecirc|egrave|eth|euml|frac12|frac14|frac34|gt|iacute|icirc|iexcl|igrave|iquest|iuml|laquo|lt|macr|micro|middot|nbsp|not|ntilde|oacute|ocirc|ograve|ordf|ordm|oslash|otilde|ouml|para|plusmn|pound|quot|raquo|reg|sect|shy|sup1|sup2|sup3|szlig|thorn|times|uacute|ucirc|ugrave|uml|uuml|yacute|yen|yuml|#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+);?/g};namedReferences.namedReferences={xml:{entities:{"&lt;":"<","&gt;":">","&quot;":'"',"&apos;":"'","&amp;":"&"},characters:{"<":"&lt;",">":"&gt;",'"':"&quot;","'":"&apos;","&":"&amp;"}},html4:{entities:{"&apos;":"'","&nbsp":" ","&nbsp;":" ","&iexcl":"¡","&iexcl;":"¡","&cent":"¢","&cent;":"¢","&pound":"£","&pound;":"£","&curren":"¤","&curren;":"¤","&yen":"¥","&yen;":"¥","&brvbar":"¦","&brvbar;":"¦","&sect":"§","&sect;":"§","&uml":"¨","&uml;":"¨","&copy":"©","&copy;":"©","&ordf":"ª","&ordf;":"ª","&laquo":"«","&laquo;":"«","&not":"¬","&not;":"¬","&shy":"­","&shy;":"­","&reg":"®","&reg;":"®","&macr":"¯","&macr;":"¯","&deg":"°","&deg;":"°","&plusmn":"±","&plusmn;":"±","&sup2":"²","&sup2;":"²","&sup3":"³","&sup3;":"³","&acute":"´","&acute;":"´","&micro":"µ","&micro;":"µ","&para":"¶","&para;":"¶","&middot":"·","&middot;":"·","&cedil":"¸","&cedil;":"¸","&sup1":"¹","&sup1;":"¹","&ordm":"º","&ordm;":"º","&raquo":"»","&raquo;":"»","&frac14":"¼","&frac14;":"¼","&frac12":"½","&frac12;":"½","&frac34":"¾","&frac34;":"¾","&iquest":"¿","&iquest;":"¿","&Agrave":"À","&Agrave;":"À","&Aacute":"Á","&Aacute;":"Á","&Acirc":"Â","&Acirc;":"Â","&Atilde":"Ã","&Atilde;":"Ã","&Auml":"Ä","&Auml;":"Ä","&Aring":"Å","&Aring;":"Å","&AElig":"Æ","&AElig;":"Æ","&Ccedil":"Ç","&Ccedil;":"Ç","&Egrave":"È","&Egrave;":"È","&Eacute":"É","&Eacute;":"É","&Ecirc":"Ê","&Ecirc;":"Ê","&Euml":"Ë","&Euml;":"Ë","&Igrave":"Ì","&Igrave;":"Ì","&Iacute":"Í","&Iacute;":"Í","&Icirc":"Î","&Icirc;":"Î","&Iuml":"Ï","&Iuml;":"Ï","&ETH":"Ð","&ETH;":"Ð","&Ntilde":"Ñ","&Ntilde;":"Ñ","&Ograve":"Ò","&Ograve;":"Ò","&Oacute":"Ó","&Oacute;":"Ó","&Ocirc":"Ô","&Ocirc;":"Ô","&Otilde":"Õ","&Otilde;":"Õ","&Ouml":"Ö","&Ouml;":"Ö","&times":"×","&times;":"×","&Oslash":"Ø","&Oslash;":"Ø","&Ugrave":"Ù","&Ugrave;":"Ù","&Uacute":"Ú","&Uacute;":"Ú","&Ucirc":"Û","&Ucirc;":"Û","&Uuml":"Ü","&Uuml;":"Ü","&Yacute":"Ý","&Yacute;":"Ý","&THORN":"Þ","&THORN;":"Þ","&szlig":"ß","&szlig;":"ß","&agrave":"à","&agrave;":"à","&aacute":"á","&aacute;":"á","&acirc":"â","&acirc;":"â","&atilde":"ã","&atilde;":"ã","&auml":"ä","&auml;":"ä","&aring":"å","&aring;":"å","&aelig":"æ","&aelig;":"æ","&ccedil":"ç","&ccedil;":"ç","&egrave":"è","&egrave;":"è","&eacute":"é","&eacute;":"é","&ecirc":"ê","&ecirc;":"ê","&euml":"ë","&euml;":"ë","&igrave":"ì","&igrave;":"ì","&iacute":"í","&iacute;":"í","&icirc":"î","&icirc;":"î","&iuml":"ï","&iuml;":"ï","&eth":"ð","&eth;":"ð","&ntilde":"ñ","&ntilde;":"ñ","&ograve":"ò","&ograve;":"ò","&oacute":"ó","&oacute;":"ó","&ocirc":"ô","&ocirc;":"ô","&otilde":"õ","&otilde;":"õ","&ouml":"ö","&ouml;":"ö","&divide":"÷","&divide;":"÷","&oslash":"ø","&oslash;":"ø","&ugrave":"ù","&ugrave;":"ù","&uacute":"ú","&uacute;":"ú","&ucirc":"û","&ucirc;":"û","&uuml":"ü","&uuml;":"ü","&yacute":"ý","&yacute;":"ý","&thorn":"þ","&thorn;":"þ","&yuml":"ÿ","&yuml;":"ÿ","&quot":'"',"&quot;":'"',"&amp":"&","&amp;":"&","&lt":"<","&lt;":"<","&gt":">","&gt;":">","&OElig;":"Œ","&oelig;":"œ","&Scaron;":"Š","&scaron;":"š","&Yuml;":"Ÿ","&circ;":"ˆ","&tilde;":"˜","&ensp;":" ","&emsp;":" ","&thinsp;":" ","&zwnj;":"‌","&zwj;":"‍","&lrm;":"‎","&rlm;":"‏","&ndash;":"–","&mdash;":"—","&lsquo;":"‘","&rsquo;":"’","&sbquo;":"‚","&ldquo;":"“","&rdquo;":"”","&bdquo;":"„","&dagger;":"†","&Dagger;":"‡","&permil;":"‰","&lsaquo;":"‹","&rsaquo;":"›","&euro;":"€","&fnof;":"ƒ","&Alpha;":"Α","&Beta;":"Β","&Gamma;":"Γ","&Delta;":"Δ","&Epsilon;":"Ε","&Zeta;":"Ζ","&Eta;":"Η","&Theta;":"Θ","&Iota;":"Ι","&Kappa;":"Κ","&Lambda;":"Λ","&Mu;":"Μ","&Nu;":"Ν","&Xi;":"Ξ","&Omicron;":"Ο","&Pi;":"Π","&Rho;":"Ρ","&Sigma;":"Σ","&Tau;":"Τ","&Upsilon;":"Υ","&Phi;":"Φ","&Chi;":"Χ","&Psi;":"Ψ","&Omega;":"Ω","&alpha;":"α","&beta;":"β","&gamma;":"γ","&delta;":"δ","&epsilon;":"ε","&zeta;":"ζ","&eta;":"η","&theta;":"θ","&iota;":"ι","&kappa;":"κ","&lambda;":"λ","&mu;":"μ","&nu;":"ν","&xi;":"ξ","&omicron;":"ο","&pi;":"π","&rho;":"ρ","&sigmaf;":"ς","&sigma;":"σ","&tau;":"τ","&upsilon;":"υ","&phi;":"φ","&chi;":"χ","&psi;":"ψ","&omega;":"ω","&thetasym;":"ϑ","&upsih;":"ϒ","&piv;":"ϖ","&bull;":"•","&hellip;":"…","&prime;":"′","&Prime;":"″","&oline;":"‾","&frasl;":"⁄","&weierp;":"℘","&image;":"ℑ","&real;":"ℜ","&trade;":"™","&alefsym;":"ℵ","&larr;":"←","&uarr;":"↑","&rarr;":"→","&darr;":"↓","&harr;":"↔","&crarr;":"↵","&lArr;":"⇐","&uArr;":"⇑","&rArr;":"⇒","&dArr;":"⇓","&hArr;":"⇔","&forall;":"∀","&part;":"∂","&exist;":"∃","&empty;":"∅","&nabla;":"∇","&isin;":"∈","&notin;":"∉","&ni;":"∋","&prod;":"∏","&sum;":"∑","&minus;":"−","&lowast;":"∗","&radic;":"√","&prop;":"∝","&infin;":"∞","&ang;":"∠","&and;":"∧","&or;":"∨","&cap;":"∩","&cup;":"∪","&int;":"∫","&there4;":"∴","&sim;":"∼","&cong;":"≅","&asymp;":"≈","&ne;":"≠","&equiv;":"≡","&le;":"≤","&ge;":"≥","&sub;":"⊂","&sup;":"⊃","&nsub;":"⊄","&sube;":"⊆","&supe;":"⊇","&oplus;":"⊕","&otimes;":"⊗","&perp;":"⊥","&sdot;":"⋅","&lceil;":"⌈","&rceil;":"⌉","&lfloor;":"⌊","&rfloor;":"⌋","&lang;":"〈","&rang;":"〉","&loz;":"◊","&spades;":"♠","&clubs;":"♣","&hearts;":"♥","&diams;":"♦"},characters:{"'":"&apos;"," ":"&nbsp;","¡":"&iexcl;","¢":"&cent;","£":"&pound;","¤":"&curren;","¥":"&yen;","¦":"&brvbar;","§":"&sect;","¨":"&uml;","©":"&copy;","ª":"&ordf;","«":"&laquo;","¬":"&not;","­":"&shy;","®":"&reg;","¯":"&macr;","°":"&deg;","±":"&plusmn;","²":"&sup2;","³":"&sup3;","´":"&acute;","µ":"&micro;","¶":"&para;","·":"&middot;","¸":"&cedil;","¹":"&sup1;","º":"&ordm;","»":"&raquo;","¼":"&frac14;","½":"&frac12;","¾":"&frac34;","¿":"&iquest;","À":"&Agrave;","Á":"&Aacute;","Â":"&Acirc;","Ã":"&Atilde;","Ä":"&Auml;","Å":"&Aring;","Æ":"&AElig;","Ç":"&Ccedil;","È":"&Egrave;","É":"&Eacute;","Ê":"&Ecirc;","Ë":"&Euml;","Ì":"&Igrave;","Í":"&Iacute;","Î":"&Icirc;","Ï":"&Iuml;","Ð":"&ETH;","Ñ":"&Ntilde;","Ò":"&Ograve;","Ó":"&Oacute;","Ô":"&Ocirc;","Õ":"&Otilde;","Ö":"&Ouml;","×":"&times;","Ø":"&Oslash;","Ù":"&Ugrave;","Ú":"&Uacute;","Û":"&Ucirc;","Ü":"&Uuml;","Ý":"&Yacute;","Þ":"&THORN;","ß":"&szlig;","à":"&agrave;","á":"&aacute;","â":"&acirc;","ã":"&atilde;","ä":"&auml;","å":"&aring;","æ":"&aelig;","ç":"&ccedil;","è":"&egrave;","é":"&eacute;","ê":"&ecirc;","ë":"&euml;","ì":"&igrave;","í":"&iacute;","î":"&icirc;","ï":"&iuml;","ð":"&eth;","ñ":"&ntilde;","ò":"&ograve;","ó":"&oacute;","ô":"&ocirc;","õ":"&otilde;","ö":"&ouml;","÷":"&divide;","ø":"&oslash;","ù":"&ugrave;","ú":"&uacute;","û":"&ucirc;","ü":"&uuml;","ý":"&yacute;","þ":"&thorn;","ÿ":"&yuml;",'"':"&quot;","&":"&amp;","<":"&lt;",">":"&gt;","Œ":"&OElig;","œ":"&oelig;","Š":"&Scaron;","š":"&scaron;","Ÿ":"&Yuml;","ˆ":"&circ;","˜":"&tilde;"," ":"&ensp;"," ":"&emsp;"," ":"&thinsp;","‌":"&zwnj;","‍":"&zwj;","‎":"&lrm;","‏":"&rlm;","–":"&ndash;","—":"&mdash;","‘":"&lsquo;","’":"&rsquo;","‚":"&sbquo;","“":"&ldquo;","”":"&rdquo;","„":"&bdquo;","†":"&dagger;","‡":"&Dagger;","‰":"&permil;","‹":"&lsaquo;","›":"&rsaquo;","€":"&euro;","ƒ":"&fnof;","Α":"&Alpha;","Β":"&Beta;","Γ":"&Gamma;","Δ":"&Delta;","Ε":"&Epsilon;","Ζ":"&Zeta;","Η":"&Eta;","Θ":"&Theta;","Ι":"&Iota;","Κ":"&Kappa;","Λ":"&Lambda;","Μ":"&Mu;","Ν":"&Nu;","Ξ":"&Xi;","Ο":"&Omicron;","Π":"&Pi;","Ρ":"&Rho;","Σ":"&Sigma;","Τ":"&Tau;","Υ":"&Upsilon;","Φ":"&Phi;","Χ":"&Chi;","Ψ":"&Psi;","Ω":"&Omega;","α":"&alpha;","β":"&beta;","γ":"&gamma;","δ":"&delta;","ε":"&epsilon;","ζ":"&zeta;","η":"&eta;","θ":"&theta;","ι":"&iota;","κ":"&kappa;","λ":"&lambda;","μ":"&mu;","ν":"&nu;","ξ":"&xi;","ο":"&omicron;","π":"&pi;","ρ":"&rho;","ς":"&sigmaf;","σ":"&sigma;","τ":"&tau;","υ":"&upsilon;","φ":"&phi;","χ":"&chi;","ψ":"&psi;","ω":"&omega;","ϑ":"&thetasym;","ϒ":"&upsih;","ϖ":"&piv;","•":"&bull;","…":"&hellip;","′":"&prime;","″":"&Prime;","‾":"&oline;","⁄":"&frasl;","℘":"&weierp;","ℑ":"&image;","ℜ":"&real;","™":"&trade;","ℵ":"&alefsym;","←":"&larr;","↑":"&uarr;","→":"&rarr;","↓":"&darr;","↔":"&harr;","↵":"&crarr;","⇐":"&lArr;","⇑":"&uArr;","⇒":"&rArr;","⇓":"&dArr;","⇔":"&hArr;","∀":"&forall;","∂":"&part;","∃":"&exist;","∅":"&empty;","∇":"&nabla;","∈":"&isin;","∉":"&notin;","∋":"&ni;","∏":"&prod;","∑":"&sum;","−":"&minus;","∗":"&lowast;","√":"&radic;","∝":"&prop;","∞":"&infin;","∠":"&ang;","∧":"&and;","∨":"&or;","∩":"&cap;","∪":"&cup;","∫":"&int;","∴":"&there4;","∼":"&sim;","≅":"&cong;","≈":"&asymp;","≠":"&ne;","≡":"&equiv;","≤":"&le;","≥":"&ge;","⊂":"&sub;","⊃":"&sup;","⊄":"&nsub;","⊆":"&sube;","⊇":"&supe;","⊕":"&oplus;","⊗":"&otimes;","⊥":"&perp;","⋅":"&sdot;","⌈":"&lceil;","⌉":"&rceil;","⌊":"&lfloor;","⌋":"&rfloor;","〈":"&lang;","〉":"&rang;","◊":"&loz;","♠":"&spades;","♣":"&clubs;","♥":"&hearts;","♦":"&diams;"}},html5:{entities:{"&AElig":"Æ","&AElig;":"Æ","&AMP":"&","&AMP;":"&","&Aacute":"Á","&Aacute;":"Á","&Abreve;":"Ă","&Acirc":"Â","&Acirc;":"Â","&Acy;":"А","&Afr;":"𝔄","&Agrave":"À","&Agrave;":"À","&Alpha;":"Α","&Amacr;":"Ā","&And;":"⩓","&Aogon;":"Ą","&Aopf;":"𝔸","&ApplyFunction;":"⁡","&Aring":"Å","&Aring;":"Å","&Ascr;":"𝒜","&Assign;":"≔","&Atilde":"Ã","&Atilde;":"Ã","&Auml":"Ä","&Auml;":"Ä","&Backslash;":"∖","&Barv;":"⫧","&Barwed;":"⌆","&Bcy;":"Б","&Because;":"∵","&Bernoullis;":"ℬ","&Beta;":"Β","&Bfr;":"𝔅","&Bopf;":"𝔹","&Breve;":"˘","&Bscr;":"ℬ","&Bumpeq;":"≎","&CHcy;":"Ч","&COPY":"©","&COPY;":"©","&Cacute;":"Ć","&Cap;":"⋒","&CapitalDifferentialD;":"ⅅ","&Cayleys;":"ℭ","&Ccaron;":"Č","&Ccedil":"Ç","&Ccedil;":"Ç","&Ccirc;":"Ĉ","&Cconint;":"∰","&Cdot;":"Ċ","&Cedilla;":"¸","&CenterDot;":"·","&Cfr;":"ℭ","&Chi;":"Χ","&CircleDot;":"⊙","&CircleMinus;":"⊖","&CirclePlus;":"⊕","&CircleTimes;":"⊗","&ClockwiseContourIntegral;":"∲","&CloseCurlyDoubleQuote;":"”","&CloseCurlyQuote;":"’","&Colon;":"∷","&Colone;":"⩴","&Congruent;":"≡","&Conint;":"∯","&ContourIntegral;":"∮","&Copf;":"ℂ","&Coproduct;":"∐","&CounterClockwiseContourIntegral;":"∳","&Cross;":"⨯","&Cscr;":"𝒞","&Cup;":"⋓","&CupCap;":"≍","&DD;":"ⅅ","&DDotrahd;":"⤑","&DJcy;":"Ђ","&DScy;":"Ѕ","&DZcy;":"Џ","&Dagger;":"‡","&Darr;":"↡","&Dashv;":"⫤","&Dcaron;":"Ď","&Dcy;":"Д","&Del;":"∇","&Delta;":"Δ","&Dfr;":"𝔇","&DiacriticalAcute;":"´","&DiacriticalDot;":"˙","&DiacriticalDoubleAcute;":"˝","&DiacriticalGrave;":"`","&DiacriticalTilde;":"˜","&Diamond;":"⋄","&DifferentialD;":"ⅆ","&Dopf;":"𝔻","&Dot;":"¨","&DotDot;":"⃜","&DotEqual;":"≐","&DoubleContourIntegral;":"∯","&DoubleDot;":"¨","&DoubleDownArrow;":"⇓","&DoubleLeftArrow;":"⇐","&DoubleLeftRightArrow;":"⇔","&DoubleLeftTee;":"⫤","&DoubleLongLeftArrow;":"⟸","&DoubleLongLeftRightArrow;":"⟺","&DoubleLongRightArrow;":"⟹","&DoubleRightArrow;":"⇒","&DoubleRightTee;":"⊨","&DoubleUpArrow;":"⇑","&DoubleUpDownArrow;":"⇕","&DoubleVerticalBar;":"∥","&DownArrow;":"↓","&DownArrowBar;":"⤓","&DownArrowUpArrow;":"⇵","&DownBreve;":"̑","&DownLeftRightVector;":"⥐","&DownLeftTeeVector;":"⥞","&DownLeftVector;":"↽","&DownLeftVectorBar;":"⥖","&DownRightTeeVector;":"⥟","&DownRightVector;":"⇁","&DownRightVectorBar;":"⥗","&DownTee;":"⊤","&DownTeeArrow;":"↧","&Downarrow;":"⇓","&Dscr;":"𝒟","&Dstrok;":"Đ","&ENG;":"Ŋ","&ETH":"Ð","&ETH;":"Ð","&Eacute":"É","&Eacute;":"É","&Ecaron;":"Ě","&Ecirc":"Ê","&Ecirc;":"Ê","&Ecy;":"Э","&Edot;":"Ė","&Efr;":"𝔈","&Egrave":"È","&Egrave;":"È","&Element;":"∈","&Emacr;":"Ē","&EmptySmallSquare;":"◻","&EmptyVerySmallSquare;":"▫","&Eogon;":"Ę","&Eopf;":"𝔼","&Epsilon;":"Ε","&Equal;":"⩵","&EqualTilde;":"≂","&Equilibrium;":"⇌","&Escr;":"ℰ","&Esim;":"⩳","&Eta;":"Η","&Euml":"Ë","&Euml;":"Ë","&Exists;":"∃","&ExponentialE;":"ⅇ","&Fcy;":"Ф","&Ffr;":"𝔉","&FilledSmallSquare;":"◼","&FilledVerySmallSquare;":"▪","&Fopf;":"𝔽","&ForAll;":"∀","&Fouriertrf;":"ℱ","&Fscr;":"ℱ","&GJcy;":"Ѓ","&GT":">","&GT;":">","&Gamma;":"Γ","&Gammad;":"Ϝ","&Gbreve;":"Ğ","&Gcedil;":"Ģ","&Gcirc;":"Ĝ","&Gcy;":"Г","&Gdot;":"Ġ","&Gfr;":"𝔊","&Gg;":"⋙","&Gopf;":"𝔾","&GreaterEqual;":"≥","&GreaterEqualLess;":"⋛","&GreaterFullEqual;":"≧","&GreaterGreater;":"⪢","&GreaterLess;":"≷","&GreaterSlantEqual;":"⩾","&GreaterTilde;":"≳","&Gscr;":"𝒢","&Gt;":"≫","&HARDcy;":"Ъ","&Hacek;":"ˇ","&Hat;":"^","&Hcirc;":"Ĥ","&Hfr;":"ℌ","&HilbertSpace;":"ℋ","&Hopf;":"ℍ","&HorizontalLine;":"─","&Hscr;":"ℋ","&Hstrok;":"Ħ","&HumpDownHump;":"≎","&HumpEqual;":"≏","&IEcy;":"Е","&IJlig;":"Ĳ","&IOcy;":"Ё","&Iacute":"Í","&Iacute;":"Í","&Icirc":"Î","&Icirc;":"Î","&Icy;":"И","&Idot;":"İ","&Ifr;":"ℑ","&Igrave":"Ì","&Igrave;":"Ì","&Im;":"ℑ","&Imacr;":"Ī","&ImaginaryI;":"ⅈ","&Implies;":"⇒","&Int;":"∬","&Integral;":"∫","&Intersection;":"⋂","&InvisibleComma;":"⁣","&InvisibleTimes;":"⁢","&Iogon;":"Į","&Iopf;":"𝕀","&Iota;":"Ι","&Iscr;":"ℐ","&Itilde;":"Ĩ","&Iukcy;":"І","&Iuml":"Ï","&Iuml;":"Ï","&Jcirc;":"Ĵ","&Jcy;":"Й","&Jfr;":"𝔍","&Jopf;":"𝕁","&Jscr;":"𝒥","&Jsercy;":"Ј","&Jukcy;":"Є","&KHcy;":"Х","&KJcy;":"Ќ","&Kappa;":"Κ","&Kcedil;":"Ķ","&Kcy;":"К","&Kfr;":"𝔎","&Kopf;":"𝕂","&Kscr;":"𝒦","&LJcy;":"Љ","&LT":"<","&LT;":"<","&Lacute;":"Ĺ","&Lambda;":"Λ","&Lang;":"⟪","&Laplacetrf;":"ℒ","&Larr;":"↞","&Lcaron;":"Ľ","&Lcedil;":"Ļ","&Lcy;":"Л","&LeftAngleBracket;":"⟨","&LeftArrow;":"←","&LeftArrowBar;":"⇤","&LeftArrowRightArrow;":"⇆","&LeftCeiling;":"⌈","&LeftDoubleBracket;":"⟦","&LeftDownTeeVector;":"⥡","&LeftDownVector;":"⇃","&LeftDownVectorBar;":"⥙","&LeftFloor;":"⌊","&LeftRightArrow;":"↔","&LeftRightVector;":"⥎","&LeftTee;":"⊣","&LeftTeeArrow;":"↤","&LeftTeeVector;":"⥚","&LeftTriangle;":"⊲","&LeftTriangleBar;":"⧏","&LeftTriangleEqual;":"⊴","&LeftUpDownVector;":"⥑","&LeftUpTeeVector;":"⥠","&LeftUpVector;":"↿","&LeftUpVectorBar;":"⥘","&LeftVector;":"↼","&LeftVectorBar;":"⥒","&Leftarrow;":"⇐","&Leftrightarrow;":"⇔","&LessEqualGreater;":"⋚","&LessFullEqual;":"≦","&LessGreater;":"≶","&LessLess;":"⪡","&LessSlantEqual;":"⩽","&LessTilde;":"≲","&Lfr;":"𝔏","&Ll;":"⋘","&Lleftarrow;":"⇚","&Lmidot;":"Ŀ","&LongLeftArrow;":"⟵","&LongLeftRightArrow;":"⟷","&LongRightArrow;":"⟶","&Longleftarrow;":"⟸","&Longleftrightarrow;":"⟺","&Longrightarrow;":"⟹","&Lopf;":"𝕃","&LowerLeftArrow;":"↙","&LowerRightArrow;":"↘","&Lscr;":"ℒ","&Lsh;":"↰","&Lstrok;":"Ł","&Lt;":"≪","&Map;":"⤅","&Mcy;":"М","&MediumSpace;":" ","&Mellintrf;":"ℳ","&Mfr;":"𝔐","&MinusPlus;":"∓","&Mopf;":"𝕄","&Mscr;":"ℳ","&Mu;":"Μ","&NJcy;":"Њ","&Nacute;":"Ń","&Ncaron;":"Ň","&Ncedil;":"Ņ","&Ncy;":"Н","&NegativeMediumSpace;":"​","&NegativeThickSpace;":"​","&NegativeThinSpace;":"​","&NegativeVeryThinSpace;":"​","&NestedGreaterGreater;":"≫","&NestedLessLess;":"≪","&NewLine;":"\n","&Nfr;":"𝔑","&NoBreak;":"⁠","&NonBreakingSpace;":" ","&Nopf;":"ℕ","&Not;":"⫬","&NotCongruent;":"≢","&NotCupCap;":"≭","&NotDoubleVerticalBar;":"∦","&NotElement;":"∉","&NotEqual;":"≠","&NotEqualTilde;":"≂̸","&NotExists;":"∄","&NotGreater;":"≯","&NotGreaterEqual;":"≱","&NotGreaterFullEqual;":"≧̸","&NotGreaterGreater;":"≫̸","&NotGreaterLess;":"≹","&NotGreaterSlantEqual;":"⩾̸","&NotGreaterTilde;":"≵","&NotHumpDownHump;":"≎̸","&NotHumpEqual;":"≏̸","&NotLeftTriangle;":"⋪","&NotLeftTriangleBar;":"⧏̸","&NotLeftTriangleEqual;":"⋬","&NotLess;":"≮","&NotLessEqual;":"≰","&NotLessGreater;":"≸","&NotLessLess;":"≪̸","&NotLessSlantEqual;":"⩽̸","&NotLessTilde;":"≴","&NotNestedGreaterGreater;":"⪢̸","&NotNestedLessLess;":"⪡̸","&NotPrecedes;":"⊀","&NotPrecedesEqual;":"⪯̸","&NotPrecedesSlantEqual;":"⋠","&NotReverseElement;":"∌","&NotRightTriangle;":"⋫","&NotRightTriangleBar;":"⧐̸","&NotRightTriangleEqual;":"⋭","&NotSquareSubset;":"⊏̸","&NotSquareSubsetEqual;":"⋢","&NotSquareSuperset;":"⊐̸","&NotSquareSupersetEqual;":"⋣","&NotSubset;":"⊂⃒","&NotSubsetEqual;":"⊈","&NotSucceeds;":"⊁","&NotSucceedsEqual;":"⪰̸","&NotSucceedsSlantEqual;":"⋡","&NotSucceedsTilde;":"≿̸","&NotSuperset;":"⊃⃒","&NotSupersetEqual;":"⊉","&NotTilde;":"≁","&NotTildeEqual;":"≄","&NotTildeFullEqual;":"≇","&NotTildeTilde;":"≉","&NotVerticalBar;":"∤","&Nscr;":"𝒩","&Ntilde":"Ñ","&Ntilde;":"Ñ","&Nu;":"Ν","&OElig;":"Œ","&Oacute":"Ó","&Oacute;":"Ó","&Ocirc":"Ô","&Ocirc;":"Ô","&Ocy;":"О","&Odblac;":"Ő","&Ofr;":"𝔒","&Ograve":"Ò","&Ograve;":"Ò","&Omacr;":"Ō","&Omega;":"Ω","&Omicron;":"Ο","&Oopf;":"𝕆","&OpenCurlyDoubleQuote;":"“","&OpenCurlyQuote;":"‘","&Or;":"⩔","&Oscr;":"𝒪","&Oslash":"Ø","&Oslash;":"Ø","&Otilde":"Õ","&Otilde;":"Õ","&Otimes;":"⨷","&Ouml":"Ö","&Ouml;":"Ö","&OverBar;":"‾","&OverBrace;":"⏞","&OverBracket;":"⎴","&OverParenthesis;":"⏜","&PartialD;":"∂","&Pcy;":"П","&Pfr;":"𝔓","&Phi;":"Φ","&Pi;":"Π","&PlusMinus;":"±","&Poincareplane;":"ℌ","&Popf;":"ℙ","&Pr;":"⪻","&Precedes;":"≺","&PrecedesEqual;":"⪯","&PrecedesSlantEqual;":"≼","&PrecedesTilde;":"≾","&Prime;":"″","&Product;":"∏","&Proportion;":"∷","&Proportional;":"∝","&Pscr;":"𝒫","&Psi;":"Ψ","&QUOT":'"',"&QUOT;":'"',"&Qfr;":"𝔔","&Qopf;":"ℚ","&Qscr;":"𝒬","&RBarr;":"⤐","&REG":"®","&REG;":"®","&Racute;":"Ŕ","&Rang;":"⟫","&Rarr;":"↠","&Rarrtl;":"⤖","&Rcaron;":"Ř","&Rcedil;":"Ŗ","&Rcy;":"Р","&Re;":"ℜ","&ReverseElement;":"∋","&ReverseEquilibrium;":"⇋","&ReverseUpEquilibrium;":"⥯","&Rfr;":"ℜ","&Rho;":"Ρ","&RightAngleBracket;":"⟩","&RightArrow;":"→","&RightArrowBar;":"⇥","&RightArrowLeftArrow;":"⇄","&RightCeiling;":"⌉","&RightDoubleBracket;":"⟧","&RightDownTeeVector;":"⥝","&RightDownVector;":"⇂","&RightDownVectorBar;":"⥕","&RightFloor;":"⌋","&RightTee;":"⊢","&RightTeeArrow;":"↦","&RightTeeVector;":"⥛","&RightTriangle;":"⊳","&RightTriangleBar;":"⧐","&RightTriangleEqual;":"⊵","&RightUpDownVector;":"⥏","&RightUpTeeVector;":"⥜","&RightUpVector;":"↾","&RightUpVectorBar;":"⥔","&RightVector;":"⇀","&RightVectorBar;":"⥓","&Rightarrow;":"⇒","&Ropf;":"ℝ","&RoundImplies;":"⥰","&Rrightarrow;":"⇛","&Rscr;":"ℛ","&Rsh;":"↱","&RuleDelayed;":"⧴","&SHCHcy;":"Щ","&SHcy;":"Ш","&SOFTcy;":"Ь","&Sacute;":"Ś","&Sc;":"⪼","&Scaron;":"Š","&Scedil;":"Ş","&Scirc;":"Ŝ","&Scy;":"С","&Sfr;":"𝔖","&ShortDownArrow;":"↓","&ShortLeftArrow;":"←","&ShortRightArrow;":"→","&ShortUpArrow;":"↑","&Sigma;":"Σ","&SmallCircle;":"∘","&Sopf;":"𝕊","&Sqrt;":"√","&Square;":"□","&SquareIntersection;":"⊓","&SquareSubset;":"⊏","&SquareSubsetEqual;":"⊑","&SquareSuperset;":"⊐","&SquareSupersetEqual;":"⊒","&SquareUnion;":"⊔","&Sscr;":"𝒮","&Star;":"⋆","&Sub;":"⋐","&Subset;":"⋐","&SubsetEqual;":"⊆","&Succeeds;":"≻","&SucceedsEqual;":"⪰","&SucceedsSlantEqual;":"≽","&SucceedsTilde;":"≿","&SuchThat;":"∋","&Sum;":"∑","&Sup;":"⋑","&Superset;":"⊃","&SupersetEqual;":"⊇","&Supset;":"⋑","&THORN":"Þ","&THORN;":"Þ","&TRADE;":"™","&TSHcy;":"Ћ","&TScy;":"Ц","&Tab;":"\t","&Tau;":"Τ","&Tcaron;":"Ť","&Tcedil;":"Ţ","&Tcy;":"Т","&Tfr;":"𝔗","&Therefore;":"∴","&Theta;":"Θ","&ThickSpace;":"  ","&ThinSpace;":" ","&Tilde;":"∼","&TildeEqual;":"≃","&TildeFullEqual;":"≅","&TildeTilde;":"≈","&Topf;":"𝕋","&TripleDot;":"⃛","&Tscr;":"𝒯","&Tstrok;":"Ŧ","&Uacute":"Ú","&Uacute;":"Ú","&Uarr;":"↟","&Uarrocir;":"⥉","&Ubrcy;":"Ў","&Ubreve;":"Ŭ","&Ucirc":"Û","&Ucirc;":"Û","&Ucy;":"У","&Udblac;":"Ű","&Ufr;":"𝔘","&Ugrave":"Ù","&Ugrave;":"Ù","&Umacr;":"Ū","&UnderBar;":"_","&UnderBrace;":"⏟","&UnderBracket;":"⎵","&UnderParenthesis;":"⏝","&Union;":"⋃","&UnionPlus;":"⊎","&Uogon;":"Ų","&Uopf;":"𝕌","&UpArrow;":"↑","&UpArrowBar;":"⤒","&UpArrowDownArrow;":"⇅","&UpDownArrow;":"↕","&UpEquilibrium;":"⥮","&UpTee;":"⊥","&UpTeeArrow;":"↥","&Uparrow;":"⇑","&Updownarrow;":"⇕","&UpperLeftArrow;":"↖","&UpperRightArrow;":"↗","&Upsi;":"ϒ","&Upsilon;":"Υ","&Uring;":"Ů","&Uscr;":"𝒰","&Utilde;":"Ũ","&Uuml":"Ü","&Uuml;":"Ü","&VDash;":"⊫","&Vbar;":"⫫","&Vcy;":"В","&Vdash;":"⊩","&Vdashl;":"⫦","&Vee;":"⋁","&Verbar;":"‖","&Vert;":"‖","&VerticalBar;":"∣","&VerticalLine;":"|","&VerticalSeparator;":"❘","&VerticalTilde;":"≀","&VeryThinSpace;":" ","&Vfr;":"𝔙","&Vopf;":"𝕍","&Vscr;":"𝒱","&Vvdash;":"⊪","&Wcirc;":"Ŵ","&Wedge;":"⋀","&Wfr;":"𝔚","&Wopf;":"𝕎","&Wscr;":"𝒲","&Xfr;":"𝔛","&Xi;":"Ξ","&Xopf;":"𝕏","&Xscr;":"𝒳","&YAcy;":"Я","&YIcy;":"Ї","&YUcy;":"Ю","&Yacute":"Ý","&Yacute;":"Ý","&Ycirc;":"Ŷ","&Ycy;":"Ы","&Yfr;":"𝔜","&Yopf;":"𝕐","&Yscr;":"𝒴","&Yuml;":"Ÿ","&ZHcy;":"Ж","&Zacute;":"Ź","&Zcaron;":"Ž","&Zcy;":"З","&Zdot;":"Ż","&ZeroWidthSpace;":"​","&Zeta;":"Ζ","&Zfr;":"ℨ","&Zopf;":"ℤ","&Zscr;":"𝒵","&aacute":"á","&aacute;":"á","&abreve;":"ă","&ac;":"∾","&acE;":"∾̳","&acd;":"∿","&acirc":"â","&acirc;":"â","&acute":"´","&acute;":"´","&acy;":"а","&aelig":"æ","&aelig;":"æ","&af;":"⁡","&afr;":"𝔞","&agrave":"à","&agrave;":"à","&alefsym;":"ℵ","&aleph;":"ℵ","&alpha;":"α","&amacr;":"ā","&amalg;":"⨿","&amp":"&","&amp;":"&","&and;":"∧","&andand;":"⩕","&andd;":"⩜","&andslope;":"⩘","&andv;":"⩚","&ang;":"∠","&ange;":"⦤","&angle;":"∠","&angmsd;":"∡","&angmsdaa;":"⦨","&angmsdab;":"⦩","&angmsdac;":"⦪","&angmsdad;":"⦫","&angmsdae;":"⦬","&angmsdaf;":"⦭","&angmsdag;":"⦮","&angmsdah;":"⦯","&angrt;":"∟","&angrtvb;":"⊾","&angrtvbd;":"⦝","&angsph;":"∢","&angst;":"Å","&angzarr;":"⍼","&aogon;":"ą","&aopf;":"𝕒","&ap;":"≈","&apE;":"⩰","&apacir;":"⩯","&ape;":"≊","&apid;":"≋","&apos;":"'","&approx;":"≈","&approxeq;":"≊","&aring":"å","&aring;":"å","&ascr;":"𝒶","&ast;":"*","&asymp;":"≈","&asympeq;":"≍","&atilde":"ã","&atilde;":"ã","&auml":"ä","&auml;":"ä","&awconint;":"∳","&awint;":"⨑","&bNot;":"⫭","&backcong;":"≌","&backepsilon;":"϶","&backprime;":"‵","&backsim;":"∽","&backsimeq;":"⋍","&barvee;":"⊽","&barwed;":"⌅","&barwedge;":"⌅","&bbrk;":"⎵","&bbrktbrk;":"⎶","&bcong;":"≌","&bcy;":"б","&bdquo;":"„","&becaus;":"∵","&because;":"∵","&bemptyv;":"⦰","&bepsi;":"϶","&bernou;":"ℬ","&beta;":"β","&beth;":"ℶ","&between;":"≬","&bfr;":"𝔟","&bigcap;":"⋂","&bigcirc;":"◯","&bigcup;":"⋃","&bigodot;":"⨀","&bigoplus;":"⨁","&bigotimes;":"⨂","&bigsqcup;":"⨆","&bigstar;":"★","&bigtriangledown;":"▽","&bigtriangleup;":"△","&biguplus;":"⨄","&bigvee;":"⋁","&bigwedge;":"⋀","&bkarow;":"⤍","&blacklozenge;":"⧫","&blacksquare;":"▪","&blacktriangle;":"▴","&blacktriangledown;":"▾","&blacktriangleleft;":"◂","&blacktriangleright;":"▸","&blank;":"␣","&blk12;":"▒","&blk14;":"░","&blk34;":"▓","&block;":"█","&bne;":"=⃥","&bnequiv;":"≡⃥","&bnot;":"⌐","&bopf;":"𝕓","&bot;":"⊥","&bottom;":"⊥","&bowtie;":"⋈","&boxDL;":"╗","&boxDR;":"╔","&boxDl;":"╖","&boxDr;":"╓","&boxH;":"═","&boxHD;":"╦","&boxHU;":"╩","&boxHd;":"╤","&boxHu;":"╧","&boxUL;":"╝","&boxUR;":"╚","&boxUl;":"╜","&boxUr;":"╙","&boxV;":"║","&boxVH;":"╬","&boxVL;":"╣","&boxVR;":"╠","&boxVh;":"╫","&boxVl;":"╢","&boxVr;":"╟","&boxbox;":"⧉","&boxdL;":"╕","&boxdR;":"╒","&boxdl;":"┐","&boxdr;":"┌","&boxh;":"─","&boxhD;":"╥","&boxhU;":"╨","&boxhd;":"┬","&boxhu;":"┴","&boxminus;":"⊟","&boxplus;":"⊞","&boxtimes;":"⊠","&boxuL;":"╛","&boxuR;":"╘","&boxul;":"┘","&boxur;":"└","&boxv;":"│","&boxvH;":"╪","&boxvL;":"╡","&boxvR;":"╞","&boxvh;":"┼","&boxvl;":"┤","&boxvr;":"├","&bprime;":"‵","&breve;":"˘","&brvbar":"¦","&brvbar;":"¦","&bscr;":"𝒷","&bsemi;":"⁏","&bsim;":"∽","&bsime;":"⋍","&bsol;":"\\","&bsolb;":"⧅","&bsolhsub;":"⟈","&bull;":"•","&bullet;":"•","&bump;":"≎","&bumpE;":"⪮","&bumpe;":"≏","&bumpeq;":"≏","&cacute;":"ć","&cap;":"∩","&capand;":"⩄","&capbrcup;":"⩉","&capcap;":"⩋","&capcup;":"⩇","&capdot;":"⩀","&caps;":"∩︀","&caret;":"⁁","&caron;":"ˇ","&ccaps;":"⩍","&ccaron;":"č","&ccedil":"ç","&ccedil;":"ç","&ccirc;":"ĉ","&ccups;":"⩌","&ccupssm;":"⩐","&cdot;":"ċ","&cedil":"¸","&cedil;":"¸","&cemptyv;":"⦲","&cent":"¢","&cent;":"¢","&centerdot;":"·","&cfr;":"𝔠","&chcy;":"ч","&check;":"✓","&checkmark;":"✓","&chi;":"χ","&cir;":"○","&cirE;":"⧃","&circ;":"ˆ","&circeq;":"≗","&circlearrowleft;":"↺","&circlearrowright;":"↻","&circledR;":"®","&circledS;":"Ⓢ","&circledast;":"⊛","&circledcirc;":"⊚","&circleddash;":"⊝","&cire;":"≗","&cirfnint;":"⨐","&cirmid;":"⫯","&cirscir;":"⧂","&clubs;":"♣","&clubsuit;":"♣","&colon;":":","&colone;":"≔","&coloneq;":"≔","&comma;":",","&commat;":"@","&comp;":"∁","&compfn;":"∘","&complement;":"∁","&complexes;":"ℂ","&cong;":"≅","&congdot;":"⩭","&conint;":"∮","&copf;":"𝕔","&coprod;":"∐","&copy":"©","&copy;":"©","&copysr;":"℗","&crarr;":"↵","&cross;":"✗","&cscr;":"𝒸","&csub;":"⫏","&csube;":"⫑","&csup;":"⫐","&csupe;":"⫒","&ctdot;":"⋯","&cudarrl;":"⤸","&cudarrr;":"⤵","&cuepr;":"⋞","&cuesc;":"⋟","&cularr;":"↶","&cularrp;":"⤽","&cup;":"∪","&cupbrcap;":"⩈","&cupcap;":"⩆","&cupcup;":"⩊","&cupdot;":"⊍","&cupor;":"⩅","&cups;":"∪︀","&curarr;":"↷","&curarrm;":"⤼","&curlyeqprec;":"⋞","&curlyeqsucc;":"⋟","&curlyvee;":"⋎","&curlywedge;":"⋏","&curren":"¤","&curren;":"¤","&curvearrowleft;":"↶","&curvearrowright;":"↷","&cuvee;":"⋎","&cuwed;":"⋏","&cwconint;":"∲","&cwint;":"∱","&cylcty;":"⌭","&dArr;":"⇓","&dHar;":"⥥","&dagger;":"†","&daleth;":"ℸ","&darr;":"↓","&dash;":"‐","&dashv;":"⊣","&dbkarow;":"⤏","&dblac;":"˝","&dcaron;":"ď","&dcy;":"д","&dd;":"ⅆ","&ddagger;":"‡","&ddarr;":"⇊","&ddotseq;":"⩷","&deg":"°","&deg;":"°","&delta;":"δ","&demptyv;":"⦱","&dfisht;":"⥿","&dfr;":"𝔡","&dharl;":"⇃","&dharr;":"⇂","&diam;":"⋄","&diamond;":"⋄","&diamondsuit;":"♦","&diams;":"♦","&die;":"¨","&digamma;":"ϝ","&disin;":"⋲","&div;":"÷","&divide":"÷","&divide;":"÷","&divideontimes;":"⋇","&divonx;":"⋇","&djcy;":"ђ","&dlcorn;":"⌞","&dlcrop;":"⌍","&dollar;":"$","&dopf;":"𝕕","&dot;":"˙","&doteq;":"≐","&doteqdot;":"≑","&dotminus;":"∸","&dotplus;":"∔","&dotsquare;":"⊡","&doublebarwedge;":"⌆","&downarrow;":"↓","&downdownarrows;":"⇊","&downharpoonleft;":"⇃","&downharpoonright;":"⇂","&drbkarow;":"⤐","&drcorn;":"⌟","&drcrop;":"⌌","&dscr;":"𝒹","&dscy;":"ѕ","&dsol;":"⧶","&dstrok;":"đ","&dtdot;":"⋱","&dtri;":"▿","&dtrif;":"▾","&duarr;":"⇵","&duhar;":"⥯","&dwangle;":"⦦","&dzcy;":"џ","&dzigrarr;":"⟿","&eDDot;":"⩷","&eDot;":"≑","&eacute":"é","&eacute;":"é","&easter;":"⩮","&ecaron;":"ě","&ecir;":"≖","&ecirc":"ê","&ecirc;":"ê","&ecolon;":"≕","&ecy;":"э","&edot;":"ė","&ee;":"ⅇ","&efDot;":"≒","&efr;":"𝔢","&eg;":"⪚","&egrave":"è","&egrave;":"è","&egs;":"⪖","&egsdot;":"⪘","&el;":"⪙","&elinters;":"⏧","&ell;":"ℓ","&els;":"⪕","&elsdot;":"⪗","&emacr;":"ē","&empty;":"∅","&emptyset;":"∅","&emptyv;":"∅","&emsp13;":" ","&emsp14;":" ","&emsp;":" ","&eng;":"ŋ","&ensp;":" ","&eogon;":"ę","&eopf;":"𝕖","&epar;":"⋕","&eparsl;":"⧣","&eplus;":"⩱","&epsi;":"ε","&epsilon;":"ε","&epsiv;":"ϵ","&eqcirc;":"≖","&eqcolon;":"≕","&eqsim;":"≂","&eqslantgtr;":"⪖","&eqslantless;":"⪕","&equals;":"=","&equest;":"≟","&equiv;":"≡","&equivDD;":"⩸","&eqvparsl;":"⧥","&erDot;":"≓","&erarr;":"⥱","&escr;":"ℯ","&esdot;":"≐","&esim;":"≂","&eta;":"η","&eth":"ð","&eth;":"ð","&euml":"ë","&euml;":"ë","&euro;":"€","&excl;":"!","&exist;":"∃","&expectation;":"ℰ","&exponentiale;":"ⅇ","&fallingdotseq;":"≒","&fcy;":"ф","&female;":"♀","&ffilig;":"ﬃ","&fflig;":"ﬀ","&ffllig;":"ﬄ","&ffr;":"𝔣","&filig;":"ﬁ","&fjlig;":"fj","&flat;":"♭","&fllig;":"ﬂ","&fltns;":"▱","&fnof;":"ƒ","&fopf;":"𝕗","&forall;":"∀","&fork;":"⋔","&forkv;":"⫙","&fpartint;":"⨍","&frac12":"½","&frac12;":"½","&frac13;":"⅓","&frac14":"¼","&frac14;":"¼","&frac15;":"⅕","&frac16;":"⅙","&frac18;":"⅛","&frac23;":"⅔","&frac25;":"⅖","&frac34":"¾","&frac34;":"¾","&frac35;":"⅗","&frac38;":"⅜","&frac45;":"⅘","&frac56;":"⅚","&frac58;":"⅝","&frac78;":"⅞","&frasl;":"⁄","&frown;":"⌢","&fscr;":"𝒻","&gE;":"≧","&gEl;":"⪌","&gacute;":"ǵ","&gamma;":"γ","&gammad;":"ϝ","&gap;":"⪆","&gbreve;":"ğ","&gcirc;":"ĝ","&gcy;":"г","&gdot;":"ġ","&ge;":"≥","&gel;":"⋛","&geq;":"≥","&geqq;":"≧","&geqslant;":"⩾","&ges;":"⩾","&gescc;":"⪩","&gesdot;":"⪀","&gesdoto;":"⪂","&gesdotol;":"⪄","&gesl;":"⋛︀","&gesles;":"⪔","&gfr;":"𝔤","&gg;":"≫","&ggg;":"⋙","&gimel;":"ℷ","&gjcy;":"ѓ","&gl;":"≷","&glE;":"⪒","&gla;":"⪥","&glj;":"⪤","&gnE;":"≩","&gnap;":"⪊","&gnapprox;":"⪊","&gne;":"⪈","&gneq;":"⪈","&gneqq;":"≩","&gnsim;":"⋧","&gopf;":"𝕘","&grave;":"`","&gscr;":"ℊ","&gsim;":"≳","&gsime;":"⪎","&gsiml;":"⪐","&gt":">","&gt;":">","&gtcc;":"⪧","&gtcir;":"⩺","&gtdot;":"⋗","&gtlPar;":"⦕","&gtquest;":"⩼","&gtrapprox;":"⪆","&gtrarr;":"⥸","&gtrdot;":"⋗","&gtreqless;":"⋛","&gtreqqless;":"⪌","&gtrless;":"≷","&gtrsim;":"≳","&gvertneqq;":"≩︀","&gvnE;":"≩︀","&hArr;":"⇔","&hairsp;":" ","&half;":"½","&hamilt;":"ℋ","&hardcy;":"ъ","&harr;":"↔","&harrcir;":"⥈","&harrw;":"↭","&hbar;":"ℏ","&hcirc;":"ĥ","&hearts;":"♥","&heartsuit;":"♥","&hellip;":"…","&hercon;":"⊹","&hfr;":"𝔥","&hksearow;":"⤥","&hkswarow;":"⤦","&hoarr;":"⇿","&homtht;":"∻","&hookleftarrow;":"↩","&hookrightarrow;":"↪","&hopf;":"𝕙","&horbar;":"―","&hscr;":"𝒽","&hslash;":"ℏ","&hstrok;":"ħ","&hybull;":"⁃","&hyphen;":"‐","&iacute":"í","&iacute;":"í","&ic;":"⁣","&icirc":"î","&icirc;":"î","&icy;":"и","&iecy;":"е","&iexcl":"¡","&iexcl;":"¡","&iff;":"⇔","&ifr;":"𝔦","&igrave":"ì","&igrave;":"ì","&ii;":"ⅈ","&iiiint;":"⨌","&iiint;":"∭","&iinfin;":"⧜","&iiota;":"℩","&ijlig;":"ĳ","&imacr;":"ī","&image;":"ℑ","&imagline;":"ℐ","&imagpart;":"ℑ","&imath;":"ı","&imof;":"⊷","&imped;":"Ƶ","&in;":"∈","&incare;":"℅","&infin;":"∞","&infintie;":"⧝","&inodot;":"ı","&int;":"∫","&intcal;":"⊺","&integers;":"ℤ","&intercal;":"⊺","&intlarhk;":"⨗","&intprod;":"⨼","&iocy;":"ё","&iogon;":"į","&iopf;":"𝕚","&iota;":"ι","&iprod;":"⨼","&iquest":"¿","&iquest;":"¿","&iscr;":"𝒾","&isin;":"∈","&isinE;":"⋹","&isindot;":"⋵","&isins;":"⋴","&isinsv;":"⋳","&isinv;":"∈","&it;":"⁢","&itilde;":"ĩ","&iukcy;":"і","&iuml":"ï","&iuml;":"ï","&jcirc;":"ĵ","&jcy;":"й","&jfr;":"𝔧","&jmath;":"ȷ","&jopf;":"𝕛","&jscr;":"𝒿","&jsercy;":"ј","&jukcy;":"є","&kappa;":"κ","&kappav;":"ϰ","&kcedil;":"ķ","&kcy;":"к","&kfr;":"𝔨","&kgreen;":"ĸ","&khcy;":"х","&kjcy;":"ќ","&kopf;":"𝕜","&kscr;":"𝓀","&lAarr;":"⇚","&lArr;":"⇐","&lAtail;":"⤛","&lBarr;":"⤎","&lE;":"≦","&lEg;":"⪋","&lHar;":"⥢","&lacute;":"ĺ","&laemptyv;":"⦴","&lagran;":"ℒ","&lambda;":"λ","&lang;":"⟨","&langd;":"⦑","&langle;":"⟨","&lap;":"⪅","&laquo":"«","&laquo;":"«","&larr;":"←","&larrb;":"⇤","&larrbfs;":"⤟","&larrfs;":"⤝","&larrhk;":"↩","&larrlp;":"↫","&larrpl;":"⤹","&larrsim;":"⥳","&larrtl;":"↢","&lat;":"⪫","&latail;":"⤙","&late;":"⪭","&lates;":"⪭︀","&lbarr;":"⤌","&lbbrk;":"❲","&lbrace;":"{","&lbrack;":"[","&lbrke;":"⦋","&lbrksld;":"⦏","&lbrkslu;":"⦍","&lcaron;":"ľ","&lcedil;":"ļ","&lceil;":"⌈","&lcub;":"{","&lcy;":"л","&ldca;":"⤶","&ldquo;":"“","&ldquor;":"„","&ldrdhar;":"⥧","&ldrushar;":"⥋","&ldsh;":"↲","&le;":"≤","&leftarrow;":"←","&leftarrowtail;":"↢","&leftharpoondown;":"↽","&leftharpoonup;":"↼","&leftleftarrows;":"⇇","&leftrightarrow;":"↔","&leftrightarrows;":"⇆","&leftrightharpoons;":"⇋","&leftrightsquigarrow;":"↭","&leftthreetimes;":"⋋","&leg;":"⋚","&leq;":"≤","&leqq;":"≦","&leqslant;":"⩽","&les;":"⩽","&lescc;":"⪨","&lesdot;":"⩿","&lesdoto;":"⪁","&lesdotor;":"⪃","&lesg;":"⋚︀","&lesges;":"⪓","&lessapprox;":"⪅","&lessdot;":"⋖","&lesseqgtr;":"⋚","&lesseqqgtr;":"⪋","&lessgtr;":"≶","&lesssim;":"≲","&lfisht;":"⥼","&lfloor;":"⌊","&lfr;":"𝔩","&lg;":"≶","&lgE;":"⪑","&lhard;":"↽","&lharu;":"↼","&lharul;":"⥪","&lhblk;":"▄","&ljcy;":"љ","&ll;":"≪","&llarr;":"⇇","&llcorner;":"⌞","&llhard;":"⥫","&lltri;":"◺","&lmidot;":"ŀ","&lmoust;":"⎰","&lmoustache;":"⎰","&lnE;":"≨","&lnap;":"⪉","&lnapprox;":"⪉","&lne;":"⪇","&lneq;":"⪇","&lneqq;":"≨","&lnsim;":"⋦","&loang;":"⟬","&loarr;":"⇽","&lobrk;":"⟦","&longleftarrow;":"⟵","&longleftrightarrow;":"⟷","&longmapsto;":"⟼","&longrightarrow;":"⟶","&looparrowleft;":"↫","&looparrowright;":"↬","&lopar;":"⦅","&lopf;":"𝕝","&loplus;":"⨭","&lotimes;":"⨴","&lowast;":"∗","&lowbar;":"_","&loz;":"◊","&lozenge;":"◊","&lozf;":"⧫","&lpar;":"(","&lparlt;":"⦓","&lrarr;":"⇆","&lrcorner;":"⌟","&lrhar;":"⇋","&lrhard;":"⥭","&lrm;":"‎","&lrtri;":"⊿","&lsaquo;":"‹","&lscr;":"𝓁","&lsh;":"↰","&lsim;":"≲","&lsime;":"⪍","&lsimg;":"⪏","&lsqb;":"[","&lsquo;":"‘","&lsquor;":"‚","&lstrok;":"ł","&lt":"<","&lt;":"<","&ltcc;":"⪦","&ltcir;":"⩹","&ltdot;":"⋖","&lthree;":"⋋","&ltimes;":"⋉","&ltlarr;":"⥶","&ltquest;":"⩻","&ltrPar;":"⦖","&ltri;":"◃","&ltrie;":"⊴","&ltrif;":"◂","&lurdshar;":"⥊","&luruhar;":"⥦","&lvertneqq;":"≨︀","&lvnE;":"≨︀","&mDDot;":"∺","&macr":"¯","&macr;":"¯","&male;":"♂","&malt;":"✠","&maltese;":"✠","&map;":"↦","&mapsto;":"↦","&mapstodown;":"↧","&mapstoleft;":"↤","&mapstoup;":"↥","&marker;":"▮","&mcomma;":"⨩","&mcy;":"м","&mdash;":"—","&measuredangle;":"∡","&mfr;":"𝔪","&mho;":"℧","&micro":"µ","&micro;":"µ","&mid;":"∣","&midast;":"*","&midcir;":"⫰","&middot":"·","&middot;":"·","&minus;":"−","&minusb;":"⊟","&minusd;":"∸","&minusdu;":"⨪","&mlcp;":"⫛","&mldr;":"…","&mnplus;":"∓","&models;":"⊧","&mopf;":"𝕞","&mp;":"∓","&mscr;":"𝓂","&mstpos;":"∾","&mu;":"μ","&multimap;":"⊸","&mumap;":"⊸","&nGg;":"⋙̸","&nGt;":"≫⃒","&nGtv;":"≫̸","&nLeftarrow;":"⇍","&nLeftrightarrow;":"⇎","&nLl;":"⋘̸","&nLt;":"≪⃒","&nLtv;":"≪̸","&nRightarrow;":"⇏","&nVDash;":"⊯","&nVdash;":"⊮","&nabla;":"∇","&nacute;":"ń","&nang;":"∠⃒","&nap;":"≉","&napE;":"⩰̸","&napid;":"≋̸","&napos;":"ŉ","&napprox;":"≉","&natur;":"♮","&natural;":"♮","&naturals;":"ℕ","&nbsp":" ","&nbsp;":" ","&nbump;":"≎̸","&nbumpe;":"≏̸","&ncap;":"⩃","&ncaron;":"ň","&ncedil;":"ņ","&ncong;":"≇","&ncongdot;":"⩭̸","&ncup;":"⩂","&ncy;":"н","&ndash;":"–","&ne;":"≠","&neArr;":"⇗","&nearhk;":"⤤","&nearr;":"↗","&nearrow;":"↗","&nedot;":"≐̸","&nequiv;":"≢","&nesear;":"⤨","&nesim;":"≂̸","&nexist;":"∄","&nexists;":"∄","&nfr;":"𝔫","&ngE;":"≧̸","&nge;":"≱","&ngeq;":"≱","&ngeqq;":"≧̸","&ngeqslant;":"⩾̸","&nges;":"⩾̸","&ngsim;":"≵","&ngt;":"≯","&ngtr;":"≯","&nhArr;":"⇎","&nharr;":"↮","&nhpar;":"⫲","&ni;":"∋","&nis;":"⋼","&nisd;":"⋺","&niv;":"∋","&njcy;":"њ","&nlArr;":"⇍","&nlE;":"≦̸","&nlarr;":"↚","&nldr;":"‥","&nle;":"≰","&nleftarrow;":"↚","&nleftrightarrow;":"↮","&nleq;":"≰","&nleqq;":"≦̸","&nleqslant;":"⩽̸","&nles;":"⩽̸","&nless;":"≮","&nlsim;":"≴","&nlt;":"≮","&nltri;":"⋪","&nltrie;":"⋬","&nmid;":"∤","&nopf;":"𝕟","&not":"¬","&not;":"¬","&notin;":"∉","&notinE;":"⋹̸","&notindot;":"⋵̸","&notinva;":"∉","&notinvb;":"⋷","&notinvc;":"⋶","&notni;":"∌","&notniva;":"∌","&notnivb;":"⋾","&notnivc;":"⋽","&npar;":"∦","&nparallel;":"∦","&nparsl;":"⫽⃥","&npart;":"∂̸","&npolint;":"⨔","&npr;":"⊀","&nprcue;":"⋠","&npre;":"⪯̸","&nprec;":"⊀","&npreceq;":"⪯̸","&nrArr;":"⇏","&nrarr;":"↛","&nrarrc;":"⤳̸","&nrarrw;":"↝̸","&nrightarrow;":"↛","&nrtri;":"⋫","&nrtrie;":"⋭","&nsc;":"⊁","&nsccue;":"⋡","&nsce;":"⪰̸","&nscr;":"𝓃","&nshortmid;":"∤","&nshortparallel;":"∦","&nsim;":"≁","&nsime;":"≄","&nsimeq;":"≄","&nsmid;":"∤","&nspar;":"∦","&nsqsube;":"⋢","&nsqsupe;":"⋣","&nsub;":"⊄","&nsubE;":"⫅̸","&nsube;":"⊈","&nsubset;":"⊂⃒","&nsubseteq;":"⊈","&nsubseteqq;":"⫅̸","&nsucc;":"⊁","&nsucceq;":"⪰̸","&nsup;":"⊅","&nsupE;":"⫆̸","&nsupe;":"⊉","&nsupset;":"⊃⃒","&nsupseteq;":"⊉","&nsupseteqq;":"⫆̸","&ntgl;":"≹","&ntilde":"ñ","&ntilde;":"ñ","&ntlg;":"≸","&ntriangleleft;":"⋪","&ntrianglelefteq;":"⋬","&ntriangleright;":"⋫","&ntrianglerighteq;":"⋭","&nu;":"ν","&num;":"#","&numero;":"№","&numsp;":" ","&nvDash;":"⊭","&nvHarr;":"⤄","&nvap;":"≍⃒","&nvdash;":"⊬","&nvge;":"≥⃒","&nvgt;":">⃒","&nvinfin;":"⧞","&nvlArr;":"⤂","&nvle;":"≤⃒","&nvlt;":"<⃒","&nvltrie;":"⊴⃒","&nvrArr;":"⤃","&nvrtrie;":"⊵⃒","&nvsim;":"∼⃒","&nwArr;":"⇖","&nwarhk;":"⤣","&nwarr;":"↖","&nwarrow;":"↖","&nwnear;":"⤧","&oS;":"Ⓢ","&oacute":"ó","&oacute;":"ó","&oast;":"⊛","&ocir;":"⊚","&ocirc":"ô","&ocirc;":"ô","&ocy;":"о","&odash;":"⊝","&odblac;":"ő","&odiv;":"⨸","&odot;":"⊙","&odsold;":"⦼","&oelig;":"œ","&ofcir;":"⦿","&ofr;":"𝔬","&ogon;":"˛","&ograve":"ò","&ograve;":"ò","&ogt;":"⧁","&ohbar;":"⦵","&ohm;":"Ω","&oint;":"∮","&olarr;":"↺","&olcir;":"⦾","&olcross;":"⦻","&oline;":"‾","&olt;":"⧀","&omacr;":"ō","&omega;":"ω","&omicron;":"ο","&omid;":"⦶","&ominus;":"⊖","&oopf;":"𝕠","&opar;":"⦷","&operp;":"⦹","&oplus;":"⊕","&or;":"∨","&orarr;":"↻","&ord;":"⩝","&order;":"ℴ","&orderof;":"ℴ","&ordf":"ª","&ordf;":"ª","&ordm":"º","&ordm;":"º","&origof;":"⊶","&oror;":"⩖","&orslope;":"⩗","&orv;":"⩛","&oscr;":"ℴ","&oslash":"ø","&oslash;":"ø","&osol;":"⊘","&otilde":"õ","&otilde;":"õ","&otimes;":"⊗","&otimesas;":"⨶","&ouml":"ö","&ouml;":"ö","&ovbar;":"⌽","&par;":"∥","&para":"¶","&para;":"¶","&parallel;":"∥","&parsim;":"⫳","&parsl;":"⫽","&part;":"∂","&pcy;":"п","&percnt;":"%","&period;":".","&permil;":"‰","&perp;":"⊥","&pertenk;":"‱","&pfr;":"𝔭","&phi;":"φ","&phiv;":"ϕ","&phmmat;":"ℳ","&phone;":"☎","&pi;":"π","&pitchfork;":"⋔","&piv;":"ϖ","&planck;":"ℏ","&planckh;":"ℎ","&plankv;":"ℏ","&plus;":"+","&plusacir;":"⨣","&plusb;":"⊞","&pluscir;":"⨢","&plusdo;":"∔","&plusdu;":"⨥","&pluse;":"⩲","&plusmn":"±","&plusmn;":"±","&plussim;":"⨦","&plustwo;":"⨧","&pm;":"±","&pointint;":"⨕","&popf;":"𝕡","&pound":"£","&pound;":"£","&pr;":"≺","&prE;":"⪳","&prap;":"⪷","&prcue;":"≼","&pre;":"⪯","&prec;":"≺","&precapprox;":"⪷","&preccurlyeq;":"≼","&preceq;":"⪯","&precnapprox;":"⪹","&precneqq;":"⪵","&precnsim;":"⋨","&precsim;":"≾","&prime;":"′","&primes;":"ℙ","&prnE;":"⪵","&prnap;":"⪹","&prnsim;":"⋨","&prod;":"∏","&profalar;":"⌮","&profline;":"⌒","&profsurf;":"⌓","&prop;":"∝","&propto;":"∝","&prsim;":"≾","&prurel;":"⊰","&pscr;":"𝓅","&psi;":"ψ","&puncsp;":" ","&qfr;":"𝔮","&qint;":"⨌","&qopf;":"𝕢","&qprime;":"⁗","&qscr;":"𝓆","&quaternions;":"ℍ","&quatint;":"⨖","&quest;":"?","&questeq;":"≟","&quot":'"',"&quot;":'"',"&rAarr;":"⇛","&rArr;":"⇒","&rAtail;":"⤜","&rBarr;":"⤏","&rHar;":"⥤","&race;":"∽̱","&racute;":"ŕ","&radic;":"√","&raemptyv;":"⦳","&rang;":"⟩","&rangd;":"⦒","&range;":"⦥","&rangle;":"⟩","&raquo":"»","&raquo;":"»","&rarr;":"→","&rarrap;":"⥵","&rarrb;":"⇥","&rarrbfs;":"⤠","&rarrc;":"⤳","&rarrfs;":"⤞","&rarrhk;":"↪","&rarrlp;":"↬","&rarrpl;":"⥅","&rarrsim;":"⥴","&rarrtl;":"↣","&rarrw;":"↝","&ratail;":"⤚","&ratio;":"∶","&rationals;":"ℚ","&rbarr;":"⤍","&rbbrk;":"❳","&rbrace;":"}","&rbrack;":"]","&rbrke;":"⦌","&rbrksld;":"⦎","&rbrkslu;":"⦐","&rcaron;":"ř","&rcedil;":"ŗ","&rceil;":"⌉","&rcub;":"}","&rcy;":"р","&rdca;":"⤷","&rdldhar;":"⥩","&rdquo;":"”","&rdquor;":"”","&rdsh;":"↳","&real;":"ℜ","&realine;":"ℛ","&realpart;":"ℜ","&reals;":"ℝ","&rect;":"▭","&reg":"®","&reg;":"®","&rfisht;":"⥽","&rfloor;":"⌋","&rfr;":"𝔯","&rhard;":"⇁","&rharu;":"⇀","&rharul;":"⥬","&rho;":"ρ","&rhov;":"ϱ","&rightarrow;":"→","&rightarrowtail;":"↣","&rightharpoondown;":"⇁","&rightharpoonup;":"⇀","&rightleftarrows;":"⇄","&rightleftharpoons;":"⇌","&rightrightarrows;":"⇉","&rightsquigarrow;":"↝","&rightthreetimes;":"⋌","&ring;":"˚","&risingdotseq;":"≓","&rlarr;":"⇄","&rlhar;":"⇌","&rlm;":"‏","&rmoust;":"⎱","&rmoustache;":"⎱","&rnmid;":"⫮","&roang;":"⟭","&roarr;":"⇾","&robrk;":"⟧","&ropar;":"⦆","&ropf;":"𝕣","&roplus;":"⨮","&rotimes;":"⨵","&rpar;":")","&rpargt;":"⦔","&rppolint;":"⨒","&rrarr;":"⇉","&rsaquo;":"›","&rscr;":"𝓇","&rsh;":"↱","&rsqb;":"]","&rsquo;":"’","&rsquor;":"’","&rthree;":"⋌","&rtimes;":"⋊","&rtri;":"▹","&rtrie;":"⊵","&rtrif;":"▸","&rtriltri;":"⧎","&ruluhar;":"⥨","&rx;":"℞","&sacute;":"ś","&sbquo;":"‚","&sc;":"≻","&scE;":"⪴","&scap;":"⪸","&scaron;":"š","&sccue;":"≽","&sce;":"⪰","&scedil;":"ş","&scirc;":"ŝ","&scnE;":"⪶","&scnap;":"⪺","&scnsim;":"⋩","&scpolint;":"⨓","&scsim;":"≿","&scy;":"с","&sdot;":"⋅","&sdotb;":"⊡","&sdote;":"⩦","&seArr;":"⇘","&searhk;":"⤥","&searr;":"↘","&searrow;":"↘","&sect":"§","&sect;":"§","&semi;":";","&seswar;":"⤩","&setminus;":"∖","&setmn;":"∖","&sext;":"✶","&sfr;":"𝔰","&sfrown;":"⌢","&sharp;":"♯","&shchcy;":"щ","&shcy;":"ш","&shortmid;":"∣","&shortparallel;":"∥","&shy":"­","&shy;":"­","&sigma;":"σ","&sigmaf;":"ς","&sigmav;":"ς","&sim;":"∼","&simdot;":"⩪","&sime;":"≃","&simeq;":"≃","&simg;":"⪞","&simgE;":"⪠","&siml;":"⪝","&simlE;":"⪟","&simne;":"≆","&simplus;":"⨤","&simrarr;":"⥲","&slarr;":"←","&smallsetminus;":"∖","&smashp;":"⨳","&smeparsl;":"⧤","&smid;":"∣","&smile;":"⌣","&smt;":"⪪","&smte;":"⪬","&smtes;":"⪬︀","&softcy;":"ь","&sol;":"/","&solb;":"⧄","&solbar;":"⌿","&sopf;":"𝕤","&spades;":"♠","&spadesuit;":"♠","&spar;":"∥","&sqcap;":"⊓","&sqcaps;":"⊓︀","&sqcup;":"⊔","&sqcups;":"⊔︀","&sqsub;":"⊏","&sqsube;":"⊑","&sqsubset;":"⊏","&sqsubseteq;":"⊑","&sqsup;":"⊐","&sqsupe;":"⊒","&sqsupset;":"⊐","&sqsupseteq;":"⊒","&squ;":"□","&square;":"□","&squarf;":"▪","&squf;":"▪","&srarr;":"→","&sscr;":"𝓈","&ssetmn;":"∖","&ssmile;":"⌣","&sstarf;":"⋆","&star;":"☆","&starf;":"★","&straightepsilon;":"ϵ","&straightphi;":"ϕ","&strns;":"¯","&sub;":"⊂","&subE;":"⫅","&subdot;":"⪽","&sube;":"⊆","&subedot;":"⫃","&submult;":"⫁","&subnE;":"⫋","&subne;":"⊊","&subplus;":"⪿","&subrarr;":"⥹","&subset;":"⊂","&subseteq;":"⊆","&subseteqq;":"⫅","&subsetneq;":"⊊","&subsetneqq;":"⫋","&subsim;":"⫇","&subsub;":"⫕","&subsup;":"⫓","&succ;":"≻","&succapprox;":"⪸","&succcurlyeq;":"≽","&succeq;":"⪰","&succnapprox;":"⪺","&succneqq;":"⪶","&succnsim;":"⋩","&succsim;":"≿","&sum;":"∑","&sung;":"♪","&sup1":"¹","&sup1;":"¹","&sup2":"²","&sup2;":"²","&sup3":"³","&sup3;":"³","&sup;":"⊃","&supE;":"⫆","&supdot;":"⪾","&supdsub;":"⫘","&supe;":"⊇","&supedot;":"⫄","&suphsol;":"⟉","&suphsub;":"⫗","&suplarr;":"⥻","&supmult;":"⫂","&supnE;":"⫌","&supne;":"⊋","&supplus;":"⫀","&supset;":"⊃","&supseteq;":"⊇","&supseteqq;":"⫆","&supsetneq;":"⊋","&supsetneqq;":"⫌","&supsim;":"⫈","&supsub;":"⫔","&supsup;":"⫖","&swArr;":"⇙","&swarhk;":"⤦","&swarr;":"↙","&swarrow;":"↙","&swnwar;":"⤪","&szlig":"ß","&szlig;":"ß","&target;":"⌖","&tau;":"τ","&tbrk;":"⎴","&tcaron;":"ť","&tcedil;":"ţ","&tcy;":"т","&tdot;":"⃛","&telrec;":"⌕","&tfr;":"𝔱","&there4;":"∴","&therefore;":"∴","&theta;":"θ","&thetasym;":"ϑ","&thetav;":"ϑ","&thickapprox;":"≈","&thicksim;":"∼","&thinsp;":" ","&thkap;":"≈","&thksim;":"∼","&thorn":"þ","&thorn;":"þ","&tilde;":"˜","&times":"×","&times;":"×","&timesb;":"⊠","&timesbar;":"⨱","&timesd;":"⨰","&tint;":"∭","&toea;":"⤨","&top;":"⊤","&topbot;":"⌶","&topcir;":"⫱","&topf;":"𝕥","&topfork;":"⫚","&tosa;":"⤩","&tprime;":"‴","&trade;":"™","&triangle;":"▵","&triangledown;":"▿","&triangleleft;":"◃","&trianglelefteq;":"⊴","&triangleq;":"≜","&triangleright;":"▹","&trianglerighteq;":"⊵","&tridot;":"◬","&trie;":"≜","&triminus;":"⨺","&triplus;":"⨹","&trisb;":"⧍","&tritime;":"⨻","&trpezium;":"⏢","&tscr;":"𝓉","&tscy;":"ц","&tshcy;":"ћ","&tstrok;":"ŧ","&twixt;":"≬","&twoheadleftarrow;":"↞","&twoheadrightarrow;":"↠","&uArr;":"⇑","&uHar;":"⥣","&uacute":"ú","&uacute;":"ú","&uarr;":"↑","&ubrcy;":"ў","&ubreve;":"ŭ","&ucirc":"û","&ucirc;":"û","&ucy;":"у","&udarr;":"⇅","&udblac;":"ű","&udhar;":"⥮","&ufisht;":"⥾","&ufr;":"𝔲","&ugrave":"ù","&ugrave;":"ù","&uharl;":"↿","&uharr;":"↾","&uhblk;":"▀","&ulcorn;":"⌜","&ulcorner;":"⌜","&ulcrop;":"⌏","&ultri;":"◸","&umacr;":"ū","&uml":"¨","&uml;":"¨","&uogon;":"ų","&uopf;":"𝕦","&uparrow;":"↑","&updownarrow;":"↕","&upharpoonleft;":"↿","&upharpoonright;":"↾","&uplus;":"⊎","&upsi;":"υ","&upsih;":"ϒ","&upsilon;":"υ","&upuparrows;":"⇈","&urcorn;":"⌝","&urcorner;":"⌝","&urcrop;":"⌎","&uring;":"ů","&urtri;":"◹","&uscr;":"𝓊","&utdot;":"⋰","&utilde;":"ũ","&utri;":"▵","&utrif;":"▴","&uuarr;":"⇈","&uuml":"ü","&uuml;":"ü","&uwangle;":"⦧","&vArr;":"⇕","&vBar;":"⫨","&vBarv;":"⫩","&vDash;":"⊨","&vangrt;":"⦜","&varepsilon;":"ϵ","&varkappa;":"ϰ","&varnothing;":"∅","&varphi;":"ϕ","&varpi;":"ϖ","&varpropto;":"∝","&varr;":"↕","&varrho;":"ϱ","&varsigma;":"ς","&varsubsetneq;":"⊊︀","&varsubsetneqq;":"⫋︀","&varsupsetneq;":"⊋︀","&varsupsetneqq;":"⫌︀","&vartheta;":"ϑ","&vartriangleleft;":"⊲","&vartriangleright;":"⊳","&vcy;":"в","&vdash;":"⊢","&vee;":"∨","&veebar;":"⊻","&veeeq;":"≚","&vellip;":"⋮","&verbar;":"|","&vert;":"|","&vfr;":"𝔳","&vltri;":"⊲","&vnsub;":"⊂⃒","&vnsup;":"⊃⃒","&vopf;":"𝕧","&vprop;":"∝","&vrtri;":"⊳","&vscr;":"𝓋","&vsubnE;":"⫋︀","&vsubne;":"⊊︀","&vsupnE;":"⫌︀","&vsupne;":"⊋︀","&vzigzag;":"⦚","&wcirc;":"ŵ","&wedbar;":"⩟","&wedge;":"∧","&wedgeq;":"≙","&weierp;":"℘","&wfr;":"𝔴","&wopf;":"𝕨","&wp;":"℘","&wr;":"≀","&wreath;":"≀","&wscr;":"𝓌","&xcap;":"⋂","&xcirc;":"◯","&xcup;":"⋃","&xdtri;":"▽","&xfr;":"𝔵","&xhArr;":"⟺","&xharr;":"⟷","&xi;":"ξ","&xlArr;":"⟸","&xlarr;":"⟵","&xmap;":"⟼","&xnis;":"⋻","&xodot;":"⨀","&xopf;":"𝕩","&xoplus;":"⨁","&xotime;":"⨂","&xrArr;":"⟹","&xrarr;":"⟶","&xscr;":"𝓍","&xsqcup;":"⨆","&xuplus;":"⨄","&xutri;":"△","&xvee;":"⋁","&xwedge;":"⋀","&yacute":"ý","&yacute;":"ý","&yacy;":"я","&ycirc;":"ŷ","&ycy;":"ы","&yen":"¥","&yen;":"¥","&yfr;":"𝔶","&yicy;":"ї","&yopf;":"𝕪","&yscr;":"𝓎","&yucy;":"ю","&yuml":"ÿ","&yuml;":"ÿ","&zacute;":"ź","&zcaron;":"ž","&zcy;":"з","&zdot;":"ż","&zeetrf;":"ℨ","&zeta;":"ζ","&zfr;":"𝔷","&zhcy;":"ж","&zigrarr;":"⇝","&zopf;":"𝕫","&zscr;":"𝓏","&zwj;":"‍","&zwnj;":"‌"},characters:{"Æ":"&AElig;","&":"&amp;","Á":"&Aacute;","Ă":"&Abreve;","Â":"&Acirc;","А":"&Acy;","𝔄":"&Afr;","À":"&Agrave;","Α":"&Alpha;","Ā":"&Amacr;","⩓":"&And;","Ą":"&Aogon;","𝔸":"&Aopf;","⁡":"&af;","Å":"&angst;","𝒜":"&Ascr;","≔":"&coloneq;","Ã":"&Atilde;","Ä":"&Auml;","∖":"&ssetmn;","⫧":"&Barv;","⌆":"&doublebarwedge;","Б":"&Bcy;","∵":"&because;","ℬ":"&bernou;","Β":"&Beta;","𝔅":"&Bfr;","𝔹":"&Bopf;","˘":"&breve;","≎":"&bump;","Ч":"&CHcy;","©":"&copy;","Ć":"&Cacute;","⋒":"&Cap;","ⅅ":"&DD;","ℭ":"&Cfr;","Č":"&Ccaron;","Ç":"&Ccedil;","Ĉ":"&Ccirc;","∰":"&Cconint;","Ċ":"&Cdot;","¸":"&cedil;","·":"&middot;","Χ":"&Chi;","⊙":"&odot;","⊖":"&ominus;","⊕":"&oplus;","⊗":"&otimes;","∲":"&cwconint;","”":"&rdquor;","’":"&rsquor;","∷":"&Proportion;","⩴":"&Colone;","≡":"&equiv;","∯":"&DoubleContourIntegral;","∮":"&oint;","ℂ":"&complexes;","∐":"&coprod;","∳":"&awconint;","⨯":"&Cross;","𝒞":"&Cscr;","⋓":"&Cup;","≍":"&asympeq;","⤑":"&DDotrahd;","Ђ":"&DJcy;","Ѕ":"&DScy;","Џ":"&DZcy;","‡":"&ddagger;","↡":"&Darr;","⫤":"&DoubleLeftTee;","Ď":"&Dcaron;","Д":"&Dcy;","∇":"&nabla;","Δ":"&Delta;","𝔇":"&Dfr;","´":"&acute;","˙":"&dot;","˝":"&dblac;","`":"&grave;","˜":"&tilde;","⋄":"&diamond;","ⅆ":"&dd;","𝔻":"&Dopf;","¨":"&uml;","⃜":"&DotDot;","≐":"&esdot;","⇓":"&dArr;","⇐":"&lArr;","⇔":"&iff;","⟸":"&xlArr;","⟺":"&xhArr;","⟹":"&xrArr;","⇒":"&rArr;","⊨":"&vDash;","⇑":"&uArr;","⇕":"&vArr;","∥":"&spar;","↓":"&downarrow;","⤓":"&DownArrowBar;","⇵":"&duarr;","̑":"&DownBreve;","⥐":"&DownLeftRightVector;","⥞":"&DownLeftTeeVector;","↽":"&lhard;","⥖":"&DownLeftVectorBar;","⥟":"&DownRightTeeVector;","⇁":"&rightharpoondown;","⥗":"&DownRightVectorBar;","⊤":"&top;","↧":"&mapstodown;","𝒟":"&Dscr;","Đ":"&Dstrok;","Ŋ":"&ENG;","Ð":"&ETH;","É":"&Eacute;","Ě":"&Ecaron;","Ê":"&Ecirc;","Э":"&Ecy;","Ė":"&Edot;","𝔈":"&Efr;","È":"&Egrave;","∈":"&isinv;","Ē":"&Emacr;","◻":"&EmptySmallSquare;","▫":"&EmptyVerySmallSquare;","Ę":"&Eogon;","𝔼":"&Eopf;","Ε":"&Epsilon;","⩵":"&Equal;","≂":"&esim;","⇌":"&rlhar;","ℰ":"&expectation;","⩳":"&Esim;","Η":"&Eta;","Ë":"&Euml;","∃":"&exist;","ⅇ":"&exponentiale;","Ф":"&Fcy;","𝔉":"&Ffr;","◼":"&FilledSmallSquare;","▪":"&squf;","𝔽":"&Fopf;","∀":"&forall;","ℱ":"&Fscr;","Ѓ":"&GJcy;",">":"&gt;","Γ":"&Gamma;","Ϝ":"&Gammad;","Ğ":"&Gbreve;","Ģ":"&Gcedil;","Ĝ":"&Gcirc;","Г":"&Gcy;","Ġ":"&Gdot;","𝔊":"&Gfr;","⋙":"&ggg;","𝔾":"&Gopf;","≥":"&geq;","⋛":"&gtreqless;","≧":"&geqq;","⪢":"&GreaterGreater;","≷":"&gtrless;","⩾":"&ges;","≳":"&gtrsim;","𝒢":"&Gscr;","≫":"&gg;","Ъ":"&HARDcy;","ˇ":"&caron;","^":"&Hat;","Ĥ":"&Hcirc;","ℌ":"&Poincareplane;","ℋ":"&hamilt;","ℍ":"&quaternions;","─":"&boxh;","Ħ":"&Hstrok;","≏":"&bumpeq;","Е":"&IEcy;","Ĳ":"&IJlig;","Ё":"&IOcy;","Í":"&Iacute;","Î":"&Icirc;","И":"&Icy;","İ":"&Idot;","ℑ":"&imagpart;","Ì":"&Igrave;","Ī":"&Imacr;","ⅈ":"&ii;","∬":"&Int;","∫":"&int;","⋂":"&xcap;","⁣":"&ic;","⁢":"&it;","Į":"&Iogon;","𝕀":"&Iopf;","Ι":"&Iota;","ℐ":"&imagline;","Ĩ":"&Itilde;","І":"&Iukcy;","Ï":"&Iuml;","Ĵ":"&Jcirc;","Й":"&Jcy;","𝔍":"&Jfr;","𝕁":"&Jopf;","𝒥":"&Jscr;","Ј":"&Jsercy;","Є":"&Jukcy;","Х":"&KHcy;","Ќ":"&KJcy;","Κ":"&Kappa;","Ķ":"&Kcedil;","К":"&Kcy;","𝔎":"&Kfr;","𝕂":"&Kopf;","𝒦":"&Kscr;","Љ":"&LJcy;","<":"&lt;","Ĺ":"&Lacute;","Λ":"&Lambda;","⟪":"&Lang;","ℒ":"&lagran;","↞":"&twoheadleftarrow;","Ľ":"&Lcaron;","Ļ":"&Lcedil;","Л":"&Lcy;","⟨":"&langle;","←":"&slarr;","⇤":"&larrb;","⇆":"&lrarr;","⌈":"&lceil;","⟦":"&lobrk;","⥡":"&LeftDownTeeVector;","⇃":"&downharpoonleft;","⥙":"&LeftDownVectorBar;","⌊":"&lfloor;","↔":"&leftrightarrow;","⥎":"&LeftRightVector;","⊣":"&dashv;","↤":"&mapstoleft;","⥚":"&LeftTeeVector;","⊲":"&vltri;","⧏":"&LeftTriangleBar;","⊴":"&trianglelefteq;","⥑":"&LeftUpDownVector;","⥠":"&LeftUpTeeVector;","↿":"&upharpoonleft;","⥘":"&LeftUpVectorBar;","↼":"&lharu;","⥒":"&LeftVectorBar;","⋚":"&lesseqgtr;","≦":"&leqq;","≶":"&lg;","⪡":"&LessLess;","⩽":"&les;","≲":"&lsim;","𝔏":"&Lfr;","⋘":"&Ll;","⇚":"&lAarr;","Ŀ":"&Lmidot;","⟵":"&xlarr;","⟷":"&xharr;","⟶":"&xrarr;","𝕃":"&Lopf;","↙":"&swarrow;","↘":"&searrow;","↰":"&lsh;","Ł":"&Lstrok;","≪":"&ll;","⤅":"&Map;","М":"&Mcy;"," ":"&MediumSpace;","ℳ":"&phmmat;","𝔐":"&Mfr;","∓":"&mp;","𝕄":"&Mopf;","Μ":"&Mu;","Њ":"&NJcy;","Ń":"&Nacute;","Ň":"&Ncaron;","Ņ":"&Ncedil;","Н":"&Ncy;","​":"&ZeroWidthSpace;","\n":"&NewLine;","𝔑":"&Nfr;","⁠":"&NoBreak;"," ":"&nbsp;","ℕ":"&naturals;","⫬":"&Not;","≢":"&nequiv;","≭":"&NotCupCap;","∦":"&nspar;","∉":"&notinva;","≠":"&ne;","≂̸":"&nesim;","∄":"&nexists;","≯":"&ngtr;","≱":"&ngeq;","≧̸":"&ngeqq;","≫̸":"&nGtv;","≹":"&ntgl;","⩾̸":"&nges;","≵":"&ngsim;","≎̸":"&nbump;","≏̸":"&nbumpe;","⋪":"&ntriangleleft;","⧏̸":"&NotLeftTriangleBar;","⋬":"&ntrianglelefteq;","≮":"&nlt;","≰":"&nleq;","≸":"&ntlg;","≪̸":"&nLtv;","⩽̸":"&nles;","≴":"&nlsim;","⪢̸":"&NotNestedGreaterGreater;","⪡̸":"&NotNestedLessLess;","⊀":"&nprec;","⪯̸":"&npreceq;","⋠":"&nprcue;","∌":"&notniva;","⋫":"&ntriangleright;","⧐̸":"&NotRightTriangleBar;","⋭":"&ntrianglerighteq;","⊏̸":"&NotSquareSubset;","⋢":"&nsqsube;","⊐̸":"&NotSquareSuperset;","⋣":"&nsqsupe;","⊂⃒":"&vnsub;","⊈":"&nsubseteq;","⊁":"&nsucc;","⪰̸":"&nsucceq;","⋡":"&nsccue;","≿̸":"&NotSucceedsTilde;","⊃⃒":"&vnsup;","⊉":"&nsupseteq;","≁":"&nsim;","≄":"&nsimeq;","≇":"&ncong;","≉":"&napprox;","∤":"&nsmid;","𝒩":"&Nscr;","Ñ":"&Ntilde;","Ν":"&Nu;","Œ":"&OElig;","Ó":"&Oacute;","Ô":"&Ocirc;","О":"&Ocy;","Ő":"&Odblac;","𝔒":"&Ofr;","Ò":"&Ograve;","Ō":"&Omacr;","Ω":"&ohm;","Ο":"&Omicron;","𝕆":"&Oopf;","“":"&ldquo;","‘":"&lsquo;","⩔":"&Or;","𝒪":"&Oscr;","Ø":"&Oslash;","Õ":"&Otilde;","⨷":"&Otimes;","Ö":"&Ouml;","‾":"&oline;","⏞":"&OverBrace;","⎴":"&tbrk;","⏜":"&OverParenthesis;","∂":"&part;","П":"&Pcy;","𝔓":"&Pfr;","Φ":"&Phi;","Π":"&Pi;","±":"&pm;","ℙ":"&primes;","⪻":"&Pr;","≺":"&prec;","⪯":"&preceq;","≼":"&preccurlyeq;","≾":"&prsim;","″":"&Prime;","∏":"&prod;","∝":"&vprop;","𝒫":"&Pscr;","Ψ":"&Psi;",'"':"&quot;","𝔔":"&Qfr;","ℚ":"&rationals;","𝒬":"&Qscr;","⤐":"&drbkarow;","®":"&reg;","Ŕ":"&Racute;","⟫":"&Rang;","↠":"&twoheadrightarrow;","⤖":"&Rarrtl;","Ř":"&Rcaron;","Ŗ":"&Rcedil;","Р":"&Rcy;","ℜ":"&realpart;","∋":"&niv;","⇋":"&lrhar;","⥯":"&duhar;","Ρ":"&Rho;","⟩":"&rangle;","→":"&srarr;","⇥":"&rarrb;","⇄":"&rlarr;","⌉":"&rceil;","⟧":"&robrk;","⥝":"&RightDownTeeVector;","⇂":"&downharpoonright;","⥕":"&RightDownVectorBar;","⌋":"&rfloor;","⊢":"&vdash;","↦":"&mapsto;","⥛":"&RightTeeVector;","⊳":"&vrtri;","⧐":"&RightTriangleBar;","⊵":"&trianglerighteq;","⥏":"&RightUpDownVector;","⥜":"&RightUpTeeVector;","↾":"&upharpoonright;","⥔":"&RightUpVectorBar;","⇀":"&rightharpoonup;","⥓":"&RightVectorBar;","ℝ":"&reals;","⥰":"&RoundImplies;","⇛":"&rAarr;","ℛ":"&realine;","↱":"&rsh;","⧴":"&RuleDelayed;","Щ":"&SHCHcy;","Ш":"&SHcy;","Ь":"&SOFTcy;","Ś":"&Sacute;","⪼":"&Sc;","Š":"&Scaron;","Ş":"&Scedil;","Ŝ":"&Scirc;","С":"&Scy;","𝔖":"&Sfr;","↑":"&uparrow;","Σ":"&Sigma;","∘":"&compfn;","𝕊":"&Sopf;","√":"&radic;","□":"&square;","⊓":"&sqcap;","⊏":"&sqsubset;","⊑":"&sqsubseteq;","⊐":"&sqsupset;","⊒":"&sqsupseteq;","⊔":"&sqcup;","𝒮":"&Sscr;","⋆":"&sstarf;","⋐":"&Subset;","⊆":"&subseteq;","≻":"&succ;","⪰":"&succeq;","≽":"&succcurlyeq;","≿":"&succsim;","∑":"&sum;","⋑":"&Supset;","⊃":"&supset;","⊇":"&supseteq;","Þ":"&THORN;","™":"&trade;","Ћ":"&TSHcy;","Ц":"&TScy;","\t":"&Tab;","Τ":"&Tau;","Ť":"&Tcaron;","Ţ":"&Tcedil;","Т":"&Tcy;","𝔗":"&Tfr;","∴":"&therefore;","Θ":"&Theta;","  ":"&ThickSpace;"," ":"&thinsp;","∼":"&thksim;","≃":"&simeq;","≅":"&cong;","≈":"&thkap;","𝕋":"&Topf;","⃛":"&tdot;","𝒯":"&Tscr;","Ŧ":"&Tstrok;","Ú":"&Uacute;","↟":"&Uarr;","⥉":"&Uarrocir;","Ў":"&Ubrcy;","Ŭ":"&Ubreve;","Û":"&Ucirc;","У":"&Ucy;","Ű":"&Udblac;","𝔘":"&Ufr;","Ù":"&Ugrave;","Ū":"&Umacr;",_:"&lowbar;","⏟":"&UnderBrace;","⎵":"&bbrk;","⏝":"&UnderParenthesis;","⋃":"&xcup;","⊎":"&uplus;","Ų":"&Uogon;","𝕌":"&Uopf;","⤒":"&UpArrowBar;","⇅":"&udarr;","↕":"&varr;","⥮":"&udhar;","⊥":"&perp;","↥":"&mapstoup;","↖":"&nwarrow;","↗":"&nearrow;","ϒ":"&upsih;","Υ":"&Upsilon;","Ů":"&Uring;","𝒰":"&Uscr;","Ũ":"&Utilde;","Ü":"&Uuml;","⊫":"&VDash;","⫫":"&Vbar;","В":"&Vcy;","⊩":"&Vdash;","⫦":"&Vdashl;","⋁":"&xvee;","‖":"&Vert;","∣":"&smid;","|":"&vert;","❘":"&VerticalSeparator;","≀":"&wreath;"," ":"&hairsp;","𝔙":"&Vfr;","𝕍":"&Vopf;","𝒱":"&Vscr;","⊪":"&Vvdash;","Ŵ":"&Wcirc;","⋀":"&xwedge;","𝔚":"&Wfr;","𝕎":"&Wopf;","𝒲":"&Wscr;","𝔛":"&Xfr;","Ξ":"&Xi;","𝕏":"&Xopf;","𝒳":"&Xscr;","Я":"&YAcy;","Ї":"&YIcy;","Ю":"&YUcy;","Ý":"&Yacute;","Ŷ":"&Ycirc;","Ы":"&Ycy;","𝔜":"&Yfr;","𝕐":"&Yopf;","𝒴":"&Yscr;","Ÿ":"&Yuml;","Ж":"&ZHcy;","Ź":"&Zacute;","Ž":"&Zcaron;","З":"&Zcy;","Ż":"&Zdot;","Ζ":"&Zeta;","ℨ":"&zeetrf;","ℤ":"&integers;","𝒵":"&Zscr;","á":"&aacute;","ă":"&abreve;","∾":"&mstpos;","∾̳":"&acE;","∿":"&acd;","â":"&acirc;","а":"&acy;","æ":"&aelig;","𝔞":"&afr;","à":"&agrave;","ℵ":"&aleph;","α":"&alpha;","ā":"&amacr;","⨿":"&amalg;","∧":"&wedge;","⩕":"&andand;","⩜":"&andd;","⩘":"&andslope;","⩚":"&andv;","∠":"&angle;","⦤":"&ange;","∡":"&measuredangle;","⦨":"&angmsdaa;","⦩":"&angmsdab;","⦪":"&angmsdac;","⦫":"&angmsdad;","⦬":"&angmsdae;","⦭":"&angmsdaf;","⦮":"&angmsdag;","⦯":"&angmsdah;","∟":"&angrt;","⊾":"&angrtvb;","⦝":"&angrtvbd;","∢":"&angsph;","⍼":"&angzarr;","ą":"&aogon;","𝕒":"&aopf;","⩰":"&apE;","⩯":"&apacir;","≊":"&approxeq;","≋":"&apid;","'":"&apos;","å":"&aring;","𝒶":"&ascr;","*":"&midast;","ã":"&atilde;","ä":"&auml;","⨑":"&awint;","⫭":"&bNot;","≌":"&bcong;","϶":"&bepsi;","‵":"&bprime;","∽":"&bsim;","⋍":"&bsime;","⊽":"&barvee;","⌅":"&barwedge;","⎶":"&bbrktbrk;","б":"&bcy;","„":"&ldquor;","⦰":"&bemptyv;","β":"&beta;","ℶ":"&beth;","≬":"&twixt;","𝔟":"&bfr;","◯":"&xcirc;","⨀":"&xodot;","⨁":"&xoplus;","⨂":"&xotime;","⨆":"&xsqcup;","★":"&starf;","▽":"&xdtri;","△":"&xutri;","⨄":"&xuplus;","⤍":"&rbarr;","⧫":"&lozf;","▴":"&utrif;","▾":"&dtrif;","◂":"&ltrif;","▸":"&rtrif;","␣":"&blank;","▒":"&blk12;","░":"&blk14;","▓":"&blk34;","█":"&block;","=⃥":"&bne;","≡⃥":"&bnequiv;","⌐":"&bnot;","𝕓":"&bopf;","⋈":"&bowtie;","╗":"&boxDL;","╔":"&boxDR;","╖":"&boxDl;","╓":"&boxDr;","═":"&boxH;","╦":"&boxHD;","╩":"&boxHU;","╤":"&boxHd;","╧":"&boxHu;","╝":"&boxUL;","╚":"&boxUR;","╜":"&boxUl;","╙":"&boxUr;","║":"&boxV;","╬":"&boxVH;","╣":"&boxVL;","╠":"&boxVR;","╫":"&boxVh;","╢":"&boxVl;","╟":"&boxVr;","⧉":"&boxbox;","╕":"&boxdL;","╒":"&boxdR;","┐":"&boxdl;","┌":"&boxdr;","╥":"&boxhD;","╨":"&boxhU;","┬":"&boxhd;","┴":"&boxhu;","⊟":"&minusb;","⊞":"&plusb;","⊠":"&timesb;","╛":"&boxuL;","╘":"&boxuR;","┘":"&boxul;","└":"&boxur;","│":"&boxv;","╪":"&boxvH;","╡":"&boxvL;","╞":"&boxvR;","┼":"&boxvh;","┤":"&boxvl;","├":"&boxvr;","¦":"&brvbar;","𝒷":"&bscr;","⁏":"&bsemi;","\\":"&bsol;","⧅":"&bsolb;","⟈":"&bsolhsub;","•":"&bullet;","⪮":"&bumpE;","ć":"&cacute;","∩":"&cap;","⩄":"&capand;","⩉":"&capbrcup;","⩋":"&capcap;","⩇":"&capcup;","⩀":"&capdot;","∩︀":"&caps;","⁁":"&caret;","⩍":"&ccaps;","č":"&ccaron;","ç":"&ccedil;","ĉ":"&ccirc;","⩌":"&ccups;","⩐":"&ccupssm;","ċ":"&cdot;","⦲":"&cemptyv;","¢":"&cent;","𝔠":"&cfr;","ч":"&chcy;","✓":"&checkmark;","χ":"&chi;","○":"&cir;","⧃":"&cirE;","ˆ":"&circ;","≗":"&cire;","↺":"&olarr;","↻":"&orarr;","Ⓢ":"&oS;","⊛":"&oast;","⊚":"&ocir;","⊝":"&odash;","⨐":"&cirfnint;","⫯":"&cirmid;","⧂":"&cirscir;","♣":"&clubsuit;",":":"&colon;",",":"&comma;","@":"&commat;","∁":"&complement;","⩭":"&congdot;","𝕔":"&copf;","℗":"&copysr;","↵":"&crarr;","✗":"&cross;","𝒸":"&cscr;","⫏":"&csub;","⫑":"&csube;","⫐":"&csup;","⫒":"&csupe;","⋯":"&ctdot;","⤸":"&cudarrl;","⤵":"&cudarrr;","⋞":"&curlyeqprec;","⋟":"&curlyeqsucc;","↶":"&curvearrowleft;","⤽":"&cularrp;","∪":"&cup;","⩈":"&cupbrcap;","⩆":"&cupcap;","⩊":"&cupcup;","⊍":"&cupdot;","⩅":"&cupor;","∪︀":"&cups;","↷":"&curvearrowright;","⤼":"&curarrm;","⋎":"&cuvee;","⋏":"&cuwed;","¤":"&curren;","∱":"&cwint;","⌭":"&cylcty;","⥥":"&dHar;","†":"&dagger;","ℸ":"&daleth;","‐":"&hyphen;","⤏":"&rBarr;","ď":"&dcaron;","д":"&dcy;","⇊":"&downdownarrows;","⩷":"&eDDot;","°":"&deg;","δ":"&delta;","⦱":"&demptyv;","⥿":"&dfisht;","𝔡":"&dfr;","♦":"&diams;","ϝ":"&gammad;","⋲":"&disin;","÷":"&divide;","⋇":"&divonx;","ђ":"&djcy;","⌞":"&llcorner;","⌍":"&dlcrop;",$:"&dollar;","𝕕":"&dopf;","≑":"&eDot;","∸":"&minusd;","∔":"&plusdo;","⊡":"&sdotb;","⌟":"&lrcorner;","⌌":"&drcrop;","𝒹":"&dscr;","ѕ":"&dscy;","⧶":"&dsol;","đ":"&dstrok;","⋱":"&dtdot;","▿":"&triangledown;","⦦":"&dwangle;","џ":"&dzcy;","⟿":"&dzigrarr;","é":"&eacute;","⩮":"&easter;","ě":"&ecaron;","≖":"&eqcirc;","ê":"&ecirc;","≕":"&eqcolon;","э":"&ecy;","ė":"&edot;","≒":"&fallingdotseq;","𝔢":"&efr;","⪚":"&eg;","è":"&egrave;","⪖":"&eqslantgtr;","⪘":"&egsdot;","⪙":"&el;","⏧":"&elinters;","ℓ":"&ell;","⪕":"&eqslantless;","⪗":"&elsdot;","ē":"&emacr;","∅":"&varnothing;"," ":"&emsp13;"," ":"&emsp14;"," ":"&emsp;","ŋ":"&eng;"," ":"&ensp;","ę":"&eogon;","𝕖":"&eopf;","⋕":"&epar;","⧣":"&eparsl;","⩱":"&eplus;","ε":"&epsilon;","ϵ":"&varepsilon;","=":"&equals;","≟":"&questeq;","⩸":"&equivDD;","⧥":"&eqvparsl;","≓":"&risingdotseq;","⥱":"&erarr;","ℯ":"&escr;","η":"&eta;","ð":"&eth;","ë":"&euml;","€":"&euro;","!":"&excl;","ф":"&fcy;","♀":"&female;","ﬃ":"&ffilig;","ﬀ":"&fflig;","ﬄ":"&ffllig;","𝔣":"&ffr;","ﬁ":"&filig;",fj:"&fjlig;","♭":"&flat;","ﬂ":"&fllig;","▱":"&fltns;","ƒ":"&fnof;","𝕗":"&fopf;","⋔":"&pitchfork;","⫙":"&forkv;","⨍":"&fpartint;","½":"&half;","⅓":"&frac13;","¼":"&frac14;","⅕":"&frac15;","⅙":"&frac16;","⅛":"&frac18;","⅔":"&frac23;","⅖":"&frac25;","¾":"&frac34;","⅗":"&frac35;","⅜":"&frac38;","⅘":"&frac45;","⅚":"&frac56;","⅝":"&frac58;","⅞":"&frac78;","⁄":"&frasl;","⌢":"&sfrown;","𝒻":"&fscr;","⪌":"&gtreqqless;","ǵ":"&gacute;","γ":"&gamma;","⪆":"&gtrapprox;","ğ":"&gbreve;","ĝ":"&gcirc;","г":"&gcy;","ġ":"&gdot;","⪩":"&gescc;","⪀":"&gesdot;","⪂":"&gesdoto;","⪄":"&gesdotol;","⋛︀":"&gesl;","⪔":"&gesles;","𝔤":"&gfr;","ℷ":"&gimel;","ѓ":"&gjcy;","⪒":"&glE;","⪥":"&gla;","⪤":"&glj;","≩":"&gneqq;","⪊":"&gnapprox;","⪈":"&gneq;","⋧":"&gnsim;","𝕘":"&gopf;","ℊ":"&gscr;","⪎":"&gsime;","⪐":"&gsiml;","⪧":"&gtcc;","⩺":"&gtcir;","⋗":"&gtrdot;","⦕":"&gtlPar;","⩼":"&gtquest;","⥸":"&gtrarr;","≩︀":"&gvnE;","ъ":"&hardcy;","⥈":"&harrcir;","↭":"&leftrightsquigarrow;","ℏ":"&plankv;","ĥ":"&hcirc;","♥":"&heartsuit;","…":"&mldr;","⊹":"&hercon;","𝔥":"&hfr;","⤥":"&searhk;","⤦":"&swarhk;","⇿":"&hoarr;","∻":"&homtht;","↩":"&larrhk;","↪":"&rarrhk;","𝕙":"&hopf;","―":"&horbar;","𝒽":"&hscr;","ħ":"&hstrok;","⁃":"&hybull;","í":"&iacute;","î":"&icirc;","и":"&icy;","е":"&iecy;","¡":"&iexcl;","𝔦":"&ifr;","ì":"&igrave;","⨌":"&qint;","∭":"&tint;","⧜":"&iinfin;","℩":"&iiota;","ĳ":"&ijlig;","ī":"&imacr;","ı":"&inodot;","⊷":"&imof;","Ƶ":"&imped;","℅":"&incare;","∞":"&infin;","⧝":"&infintie;","⊺":"&intercal;","⨗":"&intlarhk;","⨼":"&iprod;","ё":"&iocy;","į":"&iogon;","𝕚":"&iopf;","ι":"&iota;","¿":"&iquest;","𝒾":"&iscr;","⋹":"&isinE;","⋵":"&isindot;","⋴":"&isins;","⋳":"&isinsv;","ĩ":"&itilde;","і":"&iukcy;","ï":"&iuml;","ĵ":"&jcirc;","й":"&jcy;","𝔧":"&jfr;","ȷ":"&jmath;","𝕛":"&jopf;","𝒿":"&jscr;","ј":"&jsercy;","є":"&jukcy;","κ":"&kappa;","ϰ":"&varkappa;","ķ":"&kcedil;","к":"&kcy;","𝔨":"&kfr;","ĸ":"&kgreen;","х":"&khcy;","ќ":"&kjcy;","𝕜":"&kopf;","𝓀":"&kscr;","⤛":"&lAtail;","⤎":"&lBarr;","⪋":"&lesseqqgtr;","⥢":"&lHar;","ĺ":"&lacute;","⦴":"&laemptyv;","λ":"&lambda;","⦑":"&langd;","⪅":"&lessapprox;","«":"&laquo;","⤟":"&larrbfs;","⤝":"&larrfs;","↫":"&looparrowleft;","⤹":"&larrpl;","⥳":"&larrsim;","↢":"&leftarrowtail;","⪫":"&lat;","⤙":"&latail;","⪭":"&late;","⪭︀":"&lates;","⤌":"&lbarr;","❲":"&lbbrk;","{":"&lcub;","[":"&lsqb;","⦋":"&lbrke;","⦏":"&lbrksld;","⦍":"&lbrkslu;","ľ":"&lcaron;","ļ":"&lcedil;","л":"&lcy;","⤶":"&ldca;","⥧":"&ldrdhar;","⥋":"&ldrushar;","↲":"&ldsh;","≤":"&leq;","⇇":"&llarr;","⋋":"&lthree;","⪨":"&lescc;","⩿":"&lesdot;","⪁":"&lesdoto;","⪃":"&lesdotor;","⋚︀":"&lesg;","⪓":"&lesges;","⋖":"&ltdot;","⥼":"&lfisht;","𝔩":"&lfr;","⪑":"&lgE;","⥪":"&lharul;","▄":"&lhblk;","љ":"&ljcy;","⥫":"&llhard;","◺":"&lltri;","ŀ":"&lmidot;","⎰":"&lmoustache;","≨":"&lneqq;","⪉":"&lnapprox;","⪇":"&lneq;","⋦":"&lnsim;","⟬":"&loang;","⇽":"&loarr;","⟼":"&xmap;","↬":"&rarrlp;","⦅":"&lopar;","𝕝":"&lopf;","⨭":"&loplus;","⨴":"&lotimes;","∗":"&lowast;","◊":"&lozenge;","(":"&lpar;","⦓":"&lparlt;","⥭":"&lrhard;","‎":"&lrm;","⊿":"&lrtri;","‹":"&lsaquo;","𝓁":"&lscr;","⪍":"&lsime;","⪏":"&lsimg;","‚":"&sbquo;","ł":"&lstrok;","⪦":"&ltcc;","⩹":"&ltcir;","⋉":"&ltimes;","⥶":"&ltlarr;","⩻":"&ltquest;","⦖":"&ltrPar;","◃":"&triangleleft;","⥊":"&lurdshar;","⥦":"&luruhar;","≨︀":"&lvnE;","∺":"&mDDot;","¯":"&strns;","♂":"&male;","✠":"&maltese;","▮":"&marker;","⨩":"&mcomma;","м":"&mcy;","—":"&mdash;","𝔪":"&mfr;","℧":"&mho;","µ":"&micro;","⫰":"&midcir;","−":"&minus;","⨪":"&minusdu;","⫛":"&mlcp;","⊧":"&models;","𝕞":"&mopf;","𝓂":"&mscr;","μ":"&mu;","⊸":"&mumap;","⋙̸":"&nGg;","≫⃒":"&nGt;","⇍":"&nlArr;","⇎":"&nhArr;","⋘̸":"&nLl;","≪⃒":"&nLt;","⇏":"&nrArr;","⊯":"&nVDash;","⊮":"&nVdash;","ń":"&nacute;","∠⃒":"&nang;","⩰̸":"&napE;","≋̸":"&napid;","ŉ":"&napos;","♮":"&natural;","⩃":"&ncap;","ň":"&ncaron;","ņ":"&ncedil;","⩭̸":"&ncongdot;","⩂":"&ncup;","н":"&ncy;","–":"&ndash;","⇗":"&neArr;","⤤":"&nearhk;","≐̸":"&nedot;","⤨":"&toea;","𝔫":"&nfr;","↮":"&nleftrightarrow;","⫲":"&nhpar;","⋼":"&nis;","⋺":"&nisd;","њ":"&njcy;","≦̸":"&nleqq;","↚":"&nleftarrow;","‥":"&nldr;","𝕟":"&nopf;","¬":"&not;","⋹̸":"&notinE;","⋵̸":"&notindot;","⋷":"&notinvb;","⋶":"&notinvc;","⋾":"&notnivb;","⋽":"&notnivc;","⫽⃥":"&nparsl;","∂̸":"&npart;","⨔":"&npolint;","↛":"&nrightarrow;","⤳̸":"&nrarrc;","↝̸":"&nrarrw;","𝓃":"&nscr;","⊄":"&nsub;","⫅̸":"&nsubseteqq;","⊅":"&nsup;","⫆̸":"&nsupseteqq;","ñ":"&ntilde;","ν":"&nu;","#":"&num;","№":"&numero;"," ":"&numsp;","⊭":"&nvDash;","⤄":"&nvHarr;","≍⃒":"&nvap;","⊬":"&nvdash;","≥⃒":"&nvge;",">⃒":"&nvgt;","⧞":"&nvinfin;","⤂":"&nvlArr;","≤⃒":"&nvle;","<⃒":"&nvlt;","⊴⃒":"&nvltrie;","⤃":"&nvrArr;","⊵⃒":"&nvrtrie;","∼⃒":"&nvsim;","⇖":"&nwArr;","⤣":"&nwarhk;","⤧":"&nwnear;","ó":"&oacute;","ô":"&ocirc;","о":"&ocy;","ő":"&odblac;","⨸":"&odiv;","⦼":"&odsold;","œ":"&oelig;","⦿":"&ofcir;","𝔬":"&ofr;","˛":"&ogon;","ò":"&ograve;","⧁":"&ogt;","⦵":"&ohbar;","⦾":"&olcir;","⦻":"&olcross;","⧀":"&olt;","ō":"&omacr;","ω":"&omega;","ο":"&omicron;","⦶":"&omid;","𝕠":"&oopf;","⦷":"&opar;","⦹":"&operp;","∨":"&vee;","⩝":"&ord;","ℴ":"&oscr;","ª":"&ordf;","º":"&ordm;","⊶":"&origof;","⩖":"&oror;","⩗":"&orslope;","⩛":"&orv;","ø":"&oslash;","⊘":"&osol;","õ":"&otilde;","⨶":"&otimesas;","ö":"&ouml;","⌽":"&ovbar;","¶":"&para;","⫳":"&parsim;","⫽":"&parsl;","п":"&pcy;","%":"&percnt;",".":"&period;","‰":"&permil;","‱":"&pertenk;","𝔭":"&pfr;","φ":"&phi;","ϕ":"&varphi;","☎":"&phone;","π":"&pi;","ϖ":"&varpi;","ℎ":"&planckh;","+":"&plus;","⨣":"&plusacir;","⨢":"&pluscir;","⨥":"&plusdu;","⩲":"&pluse;","⨦":"&plussim;","⨧":"&plustwo;","⨕":"&pointint;","𝕡":"&popf;","£":"&pound;","⪳":"&prE;","⪷":"&precapprox;","⪹":"&prnap;","⪵":"&prnE;","⋨":"&prnsim;","′":"&prime;","⌮":"&profalar;","⌒":"&profline;","⌓":"&profsurf;","⊰":"&prurel;","𝓅":"&pscr;","ψ":"&psi;"," ":"&puncsp;","𝔮":"&qfr;","𝕢":"&qopf;","⁗":"&qprime;","𝓆":"&qscr;","⨖":"&quatint;","?":"&quest;","⤜":"&rAtail;","⥤":"&rHar;","∽̱":"&race;","ŕ":"&racute;","⦳":"&raemptyv;","⦒":"&rangd;","⦥":"&range;","»":"&raquo;","⥵":"&rarrap;","⤠":"&rarrbfs;","⤳":"&rarrc;","⤞":"&rarrfs;","⥅":"&rarrpl;","⥴":"&rarrsim;","↣":"&rightarrowtail;","↝":"&rightsquigarrow;","⤚":"&ratail;","∶":"&ratio;","❳":"&rbbrk;","}":"&rcub;","]":"&rsqb;","⦌":"&rbrke;","⦎":"&rbrksld;","⦐":"&rbrkslu;","ř":"&rcaron;","ŗ":"&rcedil;","р":"&rcy;","⤷":"&rdca;","⥩":"&rdldhar;","↳":"&rdsh;","▭":"&rect;","⥽":"&rfisht;","𝔯":"&rfr;","⥬":"&rharul;","ρ":"&rho;","ϱ":"&varrho;","⇉":"&rrarr;","⋌":"&rthree;","˚":"&ring;","‏":"&rlm;","⎱":"&rmoustache;","⫮":"&rnmid;","⟭":"&roang;","⇾":"&roarr;","⦆":"&ropar;","𝕣":"&ropf;","⨮":"&roplus;","⨵":"&rotimes;",")":"&rpar;","⦔":"&rpargt;","⨒":"&rppolint;","›":"&rsaquo;","𝓇":"&rscr;","⋊":"&rtimes;","▹":"&triangleright;","⧎":"&rtriltri;","⥨":"&ruluhar;","℞":"&rx;","ś":"&sacute;","⪴":"&scE;","⪸":"&succapprox;","š":"&scaron;","ş":"&scedil;","ŝ":"&scirc;","⪶":"&succneqq;","⪺":"&succnapprox;","⋩":"&succnsim;","⨓":"&scpolint;","с":"&scy;","⋅":"&sdot;","⩦":"&sdote;","⇘":"&seArr;","§":"&sect;",";":"&semi;","⤩":"&tosa;","✶":"&sext;","𝔰":"&sfr;","♯":"&sharp;","щ":"&shchcy;","ш":"&shcy;","­":"&shy;","σ":"&sigma;","ς":"&varsigma;","⩪":"&simdot;","⪞":"&simg;","⪠":"&simgE;","⪝":"&siml;","⪟":"&simlE;","≆":"&simne;","⨤":"&simplus;","⥲":"&simrarr;","⨳":"&smashp;","⧤":"&smeparsl;","⌣":"&ssmile;","⪪":"&smt;","⪬":"&smte;","⪬︀":"&smtes;","ь":"&softcy;","/":"&sol;","⧄":"&solb;","⌿":"&solbar;","𝕤":"&sopf;","♠":"&spadesuit;","⊓︀":"&sqcaps;","⊔︀":"&sqcups;","𝓈":"&sscr;","☆":"&star;","⊂":"&subset;","⫅":"&subseteqq;","⪽":"&subdot;","⫃":"&subedot;","⫁":"&submult;","⫋":"&subsetneqq;","⊊":"&subsetneq;","⪿":"&subplus;","⥹":"&subrarr;","⫇":"&subsim;","⫕":"&subsub;","⫓":"&subsup;","♪":"&sung;","¹":"&sup1;","²":"&sup2;","³":"&sup3;","⫆":"&supseteqq;","⪾":"&supdot;","⫘":"&supdsub;","⫄":"&supedot;","⟉":"&suphsol;","⫗":"&suphsub;","⥻":"&suplarr;","⫂":"&supmult;","⫌":"&supsetneqq;","⊋":"&supsetneq;","⫀":"&supplus;","⫈":"&supsim;","⫔":"&supsub;","⫖":"&supsup;","⇙":"&swArr;","⤪":"&swnwar;","ß":"&szlig;","⌖":"&target;","τ":"&tau;","ť":"&tcaron;","ţ":"&tcedil;","т":"&tcy;","⌕":"&telrec;","𝔱":"&tfr;","θ":"&theta;","ϑ":"&vartheta;","þ":"&thorn;","×":"&times;","⨱":"&timesbar;","⨰":"&timesd;","⌶":"&topbot;","⫱":"&topcir;","𝕥":"&topf;","⫚":"&topfork;","‴":"&tprime;","▵":"&utri;","≜":"&trie;","◬":"&tridot;","⨺":"&triminus;","⨹":"&triplus;","⧍":"&trisb;","⨻":"&tritime;","⏢":"&trpezium;","𝓉":"&tscr;","ц":"&tscy;","ћ":"&tshcy;","ŧ":"&tstrok;","⥣":"&uHar;","ú":"&uacute;","ў":"&ubrcy;","ŭ":"&ubreve;","û":"&ucirc;","у":"&ucy;","ű":"&udblac;","⥾":"&ufisht;","𝔲":"&ufr;","ù":"&ugrave;","▀":"&uhblk;","⌜":"&ulcorner;","⌏":"&ulcrop;","◸":"&ultri;","ū":"&umacr;","ų":"&uogon;","𝕦":"&uopf;","υ":"&upsilon;","⇈":"&uuarr;","⌝":"&urcorner;","⌎":"&urcrop;","ů":"&uring;","◹":"&urtri;","𝓊":"&uscr;","⋰":"&utdot;","ũ":"&utilde;","ü":"&uuml;","⦧":"&uwangle;","⫨":"&vBar;","⫩":"&vBarv;","⦜":"&vangrt;","⊊︀":"&vsubne;","⫋︀":"&vsubnE;","⊋︀":"&vsupne;","⫌︀":"&vsupnE;","в":"&vcy;","⊻":"&veebar;","≚":"&veeeq;","⋮":"&vellip;","𝔳":"&vfr;","𝕧":"&vopf;","𝓋":"&vscr;","⦚":"&vzigzag;","ŵ":"&wcirc;","⩟":"&wedbar;","≙":"&wedgeq;","℘":"&wp;","𝔴":"&wfr;","𝕨":"&wopf;","𝓌":"&wscr;","𝔵":"&xfr;","ξ":"&xi;","⋻":"&xnis;","𝕩":"&xopf;","𝓍":"&xscr;","ý":"&yacute;","я":"&yacy;","ŷ":"&ycirc;","ы":"&ycy;","¥":"&yen;","𝔶":"&yfr;","ї":"&yicy;","𝕪":"&yopf;","𝓎":"&yscr;","ю":"&yucy;","ÿ":"&yuml;","ź":"&zacute;","ž":"&zcaron;","з":"&zcy;","ż":"&zdot;","ζ":"&zeta;","𝔷":"&zfr;","ж":"&zhcy;","⇝":"&zigrarr;","𝕫":"&zopf;","𝓏":"&zscr;","‍":"&zwj;","‌":"&zwnj;"}}};

var numericUnicodeMap = {};

Object.defineProperty(numericUnicodeMap,"__esModule",{value:true});numericUnicodeMap.numericUnicodeMap={0:65533,128:8364,130:8218,131:402,132:8222,133:8230,134:8224,135:8225,136:710,137:8240,138:352,139:8249,140:338,142:381,145:8216,146:8217,147:8220,148:8221,149:8226,150:8211,151:8212,152:732,153:8482,154:353,155:8250,156:339,158:382,159:376};

var surrogatePairs = {};

Object.defineProperty(surrogatePairs,"__esModule",{value:true});surrogatePairs.fromCodePoint=String.fromCodePoint||function(astralCodePoint){return String.fromCharCode(Math.floor((astralCodePoint-65536)/1024)+55296,(astralCodePoint-65536)%1024+56320)};surrogatePairs.getCodePoint=String.prototype.codePointAt?function(input,position){return input.codePointAt(position)}:function(input,position){return (input.charCodeAt(position)-55296)*1024+input.charCodeAt(position+1)-56320+65536};surrogatePairs.highSurrogateFrom=55296;surrogatePairs.highSurrogateTo=56319;

var __assign = (commonjsGlobal && commonjsGlobal.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(lib, "__esModule", { value: true });
var named_references_1 = namedReferences;
var numeric_unicode_map_1 = numericUnicodeMap;
var surrogate_pairs_1 = surrogatePairs;
var allNamedReferences = __assign(__assign({}, named_references_1.namedReferences), { all: named_references_1.namedReferences.html5 });
var encodeRegExps = {
    specialChars: /[<>'"&]/g,
    nonAscii: /(?:[<>'"&\u0080-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/g,
    nonAsciiPrintable: /(?:[<>'"&\x01-\x08\x11-\x15\x17-\x1F\x7f-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/g,
    extensive: /(?:[\x01-\x0c\x0e-\x1f\x21-\x2c\x2e-\x2f\x3a-\x40\x5b-\x60\x7b-\x7d\x7f-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/g
};
var defaultEncodeOptions = {
    mode: 'specialChars',
    level: 'all',
    numeric: 'decimal'
};
/** Encodes all the necessary (specified by `level`) characters in the text */
function encode(text, _a) {
    var _b = _a === void 0 ? defaultEncodeOptions : _a, _c = _b.mode, mode = _c === void 0 ? 'specialChars' : _c, _d = _b.numeric, numeric = _d === void 0 ? 'decimal' : _d, _e = _b.level, level = _e === void 0 ? 'all' : _e;
    if (!text) {
        return '';
    }
    var encodeRegExp = encodeRegExps[mode];
    var references = allNamedReferences[level].characters;
    var isHex = numeric === 'hexadecimal';
    encodeRegExp.lastIndex = 0;
    var _b = encodeRegExp.exec(text);
    var _c;
    if (_b) {
        _c = '';
        var _d = 0;
        do {
            if (_d !== _b.index) {
                _c += text.substring(_d, _b.index);
            }
            var _e = _b[0];
            var result_1 = references[_e];
            if (!result_1) {
                var code_1 = _e.length > 1 ? surrogate_pairs_1.getCodePoint(_e, 0) : _e.charCodeAt(0);
                result_1 = (isHex ? '&#x' + code_1.toString(16) : '&#' + code_1) + ';';
            }
            _c += result_1;
            _d = _b.index + _e.length;
        } while ((_b = encodeRegExp.exec(text)));
        if (_d !== text.length) {
            _c += text.substring(_d);
        }
    }
    else {
        _c =
            text;
    }
    return _c;
}
lib.encode = encode;
var defaultDecodeOptions = {
    scope: 'body',
    level: 'all'
};
var strict = /&(?:#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+);/g;
var attribute = /&(?:#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+)[;=]?/g;
var baseDecodeRegExps = {
    xml: {
        strict: strict,
        attribute: attribute,
        body: named_references_1.bodyRegExps.xml
    },
    html4: {
        strict: strict,
        attribute: attribute,
        body: named_references_1.bodyRegExps.html4
    },
    html5: {
        strict: strict,
        attribute: attribute,
        body: named_references_1.bodyRegExps.html5
    }
};
var decodeRegExps = __assign(__assign({}, baseDecodeRegExps), { all: baseDecodeRegExps.html5 });
var fromCharCode = String.fromCharCode;
var outOfBoundsChar = fromCharCode(65533);
var defaultDecodeEntityOptions = {
    level: 'all'
};
/** Decodes a single entity */
function decodeEntity(entity, _a) {
    var _b = (_a === void 0 ? defaultDecodeEntityOptions : _a).level, level = _b === void 0 ? 'all' : _b;
    if (!entity) {
        return '';
    }
    var _b = entity;
    entity[entity.length - 1];
    {
        var decodeResultByReference_1 = allNamedReferences[level].entities[entity];
        if (decodeResultByReference_1) {
            _b = decodeResultByReference_1;
        }
        else if (entity[0] === '&' && entity[1] === '#') {
            var decodeSecondChar_1 = entity[2];
            var decodeCode_1 = decodeSecondChar_1 == 'x' || decodeSecondChar_1 == 'X'
                ? parseInt(entity.substr(3), 16)
                : parseInt(entity.substr(2));
            _b =
                decodeCode_1 >= 0x10ffff
                    ? outOfBoundsChar
                    : decodeCode_1 > 65535
                        ? surrogate_pairs_1.fromCodePoint(decodeCode_1)
                        : fromCharCode(numeric_unicode_map_1.numericUnicodeMap[decodeCode_1] || decodeCode_1);
        }
    }
    return _b;
}
lib.decodeEntity = decodeEntity;
/** Decodes all entities in the text */
function decode(text, _a) {
    var decodeSecondChar_1 = _a === void 0 ? defaultDecodeOptions : _a, decodeCode_1 = decodeSecondChar_1.level, level = decodeCode_1 === void 0 ? 'all' : decodeCode_1, _b = decodeSecondChar_1.scope, scope = _b === void 0 ? level === 'xml' ? 'strict' : 'body' : _b;
    if (!text) {
        return '';
    }
    var decodeRegExp = decodeRegExps[level][scope];
    var references = allNamedReferences[level].entities;
    var isAttribute = scope === 'attribute';
    var isStrict = scope === 'strict';
    decodeRegExp.lastIndex = 0;
    var replaceMatch_1 = decodeRegExp.exec(text);
    var replaceResult_1;
    if (replaceMatch_1) {
        replaceResult_1 = '';
        var replaceLastIndex_1 = 0;
        do {
            if (replaceLastIndex_1 !== replaceMatch_1.index) {
                replaceResult_1 += text.substring(replaceLastIndex_1, replaceMatch_1.index);
            }
            var replaceInput_1 = replaceMatch_1[0];
            var decodeResult_1 = replaceInput_1;
            var decodeEntityLastChar_2 = replaceInput_1[replaceInput_1.length - 1];
            if (isAttribute
                && decodeEntityLastChar_2 === '=') {
                decodeResult_1 = replaceInput_1;
            }
            else if (isStrict
                && decodeEntityLastChar_2 !== ';') {
                decodeResult_1 = replaceInput_1;
            }
            else {
                var decodeResultByReference_2 = references[replaceInput_1];
                if (decodeResultByReference_2) {
                    decodeResult_1 = decodeResultByReference_2;
                }
                else if (replaceInput_1[0] === '&' && replaceInput_1[1] === '#') {
                    var decodeSecondChar_2 = replaceInput_1[2];
                    var decodeCode_2 = decodeSecondChar_2 == 'x' || decodeSecondChar_2 == 'X'
                        ? parseInt(replaceInput_1.substr(3), 16)
                        : parseInt(replaceInput_1.substr(2));
                    decodeResult_1 =
                        decodeCode_2 >= 0x10ffff
                            ? outOfBoundsChar
                            : decodeCode_2 > 65535
                                ? surrogate_pairs_1.fromCodePoint(decodeCode_2)
                                : fromCharCode(numeric_unicode_map_1.numericUnicodeMap[decodeCode_2] || decodeCode_2);
                }
            }
            replaceResult_1 += decodeResult_1;
            replaceLastIndex_1 = replaceMatch_1.index + replaceInput_1.length;
        } while ((replaceMatch_1 = decodeRegExp.exec(text)));
        if (replaceLastIndex_1 !== text.length) {
            replaceResult_1 += text.substring(replaceLastIndex_1);
        }
    }
    else {
        replaceResult_1 =
            text;
    }
    return replaceResult_1;
}
var decode_1 = lib.decode = decode;

/**
 * @name ranges-sort
 * @fileoverview Sort string index ranges
 * @version 6.0.3
 * @author Roy Revelt, Codsen Ltd
 * @license MIT
 * {@link https://codsen.com/os/ranges-sort/}
 */
var d$1={strictlyTwoElementsInRangeArrays:!1,progressFn:null};function g(t,u){if(!Array.isArray(t)||!t.length)return t;let n={...d$1,...u},s,o;if(n.strictlyTwoElementsInRangeArrays&&!t.every((e,r)=>!Array.isArray(e)||e.length!==2?(s=r,o=e.length,!1):!0))throw new TypeError(`ranges-sort: [THROW_ID_03] The first argument should be an array and must consist of arrays which are natural number indexes representing TWO string index ranges. However, ${s}th range (${JSON.stringify(t[s],null,4)}) has not two but ${o} elements!`);if(!t.every((e,r)=>!Array.isArray(e)||!Number.isInteger(e[0])||e[0]<0||!Number.isInteger(e[1])||e[1]<0?(s=r,!1):!0))throw new TypeError(`ranges-sort: [THROW_ID_04] The first argument should be an array and must consist of arrays which are natural number indexes representing string index ranges. However, ${s}th range (${JSON.stringify(t[s],null,4)}) does not consist of only natural numbers!`);let p=t.length**2,i=0;return Array.from(t).sort((e,r)=>(n.progressFn&&(i+=1,n.progressFn(Math.floor(i*100/p))),e[0]===r[0]?e[1]<r[1]?-1:e[1]>r[1]?1:0:e[0]<r[0]?-1:1))}

/**
 * @name ranges-merge
 * @fileoverview Merge and sort string index ranges
 * @version 9.0.3
 * @author Roy Revelt, Codsen Ltd
 * @license MIT
 * {@link https://codsen.com/os/ranges-merge/}
 */
var d={mergeType:1,progressFn:null,joinRangesThatTouchEdges:!0};function b$1(i,r){function l(e){return !!e&&typeof e=="object"&&!Array.isArray(e)}if(!Array.isArray(i)||!i.length)return null;let n;if(r)if(l(r)){if(n={...d,...r},n.progressFn&&l(n.progressFn)&&!Object.keys(n.progressFn).length)n.progressFn=null;else if(n.progressFn&&typeof n.progressFn!="function")throw new Error(`ranges-merge: [THROW_ID_01] opts.progressFn must be a function! It was given of a type: "${typeof n.progressFn}", equal to ${JSON.stringify(n.progressFn,null,4)}`);if(![1,2,"1","2"].includes(n.mergeType))throw new Error(`ranges-merge: [THROW_ID_02] opts.mergeType was customised to a wrong thing! It was given of a type: "${typeof n.mergeType}", equal to ${JSON.stringify(n.mergeType,null,4)}`);if(typeof n.joinRangesThatTouchEdges!="boolean")throw new Error(`ranges-merge: [THROW_ID_04] opts.joinRangesThatTouchEdges was customised to a wrong thing! It was given of a type: "${typeof n.joinRangesThatTouchEdges}", equal to ${JSON.stringify(n.joinRangesThatTouchEdges,null,4)}`)}else throw new Error(`emlint: [THROW_ID_03] the second input argument must be a plain object. It was given as:
${JSON.stringify(r,null,4)} (type ${typeof r})`);else n={...d};let g$1=i.filter(e=>Array.isArray(e)).map(e=>[...e]).filter(e=>e[2]!==void 0||e[0]!==e[1]),s,o,t;n.progressFn?s=g(g$1,{progressFn:e=>{t=Math.floor(e/5),t!==o&&(o=t,n.progressFn(t));}}):s=g(g$1);let a=s.length-1;for(let e=a;e>0;e--)n.progressFn&&(t=Math.floor((1-e/a)*78)+21,t!==o&&t>o&&(o=t,n.progressFn(t))),(s[e][0]<=s[e-1][0]||!n.joinRangesThatTouchEdges&&s[e][0]<s[e-1][1]||n.joinRangesThatTouchEdges&&s[e][0]<=s[e-1][1])&&(s[e-1][0]=Math.min(s[e][0],s[e-1][0]),s[e-1][1]=Math.max(s[e][1],s[e-1][1]),s[e][2]!==void 0&&(s[e-1][0]>=s[e][0]||s[e-1][1]<=s[e][1])&&s[e-1][2]!==null&&(s[e][2]===null&&s[e-1][2]!==null?s[e-1][2]=null:s[e-1][2]!=null?+n.mergeType==2&&s[e-1][0]===s[e][0]?s[e-1][2]=s[e][2]:s[e-1][2]+=s[e][2]:s[e-1][2]=s[e][2]),s.splice(e,1),e=s.length);return s.length?s:null}

var isProduction = "production" === 'production';
var prefix = 'Invariant failed';
function invariant(condition, message) {
    if (condition) {
        return;
    }
    if (isProduction) {
        throw new Error(prefix);
    }
    var provided = typeof message === 'function' ? message() : message;
    var value = provided ? "".concat(prefix, ": ").concat(provided) : prefix;
    throw new Error(value);
}

/**
 * @name ranges-apply
 * @fileoverview Take an array of string index ranges, delete/replace the string according to them
 * @version 7.0.3
 * @author Roy Revelt, Codsen Ltd
 * @license MIT
 * {@link https://codsen.com/os/ranges-apply/}
 */
function _$1(s,n,r){let t=0,p=0;if(arguments.length===0)throw new Error("ranges-apply: [THROW_ID_01] inputs missing!");if(typeof s!="string")throw new TypeError(`ranges-apply: [THROW_ID_02] first input argument must be a string! Currently it's: ${typeof s}, equal to: ${JSON.stringify(s,null,4)}`);if(n&&!Array.isArray(n))throw new TypeError(`ranges-apply: [THROW_ID_03] second input argument must be an array (or null)! Currently it's: ${typeof n}, equal to: ${JSON.stringify(n,null,4)}`);if(r&&typeof r!="function")throw new TypeError(`ranges-apply: [THROW_ID_04] the third input argument must be a function (or falsey)! Currently it's: ${typeof r}, equal to: ${JSON.stringify(r,null,4)}`);if(!n||!n.filter(e=>e).length)return s;let i;Array.isArray(n)&&Number.isInteger(n[0])&&Number.isInteger(n[1])?i=[Array.from(n)]:i=Array.from(n);let f=i.length,c=0;i.filter(e=>e).forEach((e,a)=>{if(r&&(t=Math.floor(c/f*10),t!==p&&(p=t,r(t))),!Array.isArray(e))throw new TypeError(`ranges-apply: [THROW_ID_05] ranges array, second input arg., has ${a}th element not an array: ${JSON.stringify(e,null,4)}, which is ${typeof e}`);if(!Number.isInteger(e[0])){if(!Number.isInteger(+e[0])||+e[0]<0)throw new TypeError(`ranges-apply: [THROW_ID_06] ranges array, second input arg. has ${a}th element, array ${JSON.stringify(e,null,0)}. Its first element is not an integer, string index, but ${typeof e[0]}, equal to: ${JSON.stringify(e[0],null,4)}.`);i[a][0]=+i[a][0];}if(!Number.isInteger(e[1])){if(!Number.isInteger(+e[1])||+e[1]<0)throw new TypeError(`ranges-apply: [THROW_ID_07] ranges array, second input arg. has ${a}th element, array ${JSON.stringify(e,null,0)}. Its second element is not an integer, string index, but ${typeof e[1]}, equal to: ${JSON.stringify(e[1],null,4)}.`);i[a][1]=+i[a][1];}c+=1;});let o=b$1(i,{progressFn:e=>{r&&(t=10+Math.floor(e/10),t!==p&&(p=t,r(t)));}});invariant(o);let u=o.length;if(u>0){let e=s.slice(o[u-1][1]);s=o.reduce((a,$,l,y)=>{r&&(t=20+Math.floor(l/u*80),t!==p&&(p=t,r(t)));let g=l===0?0:y[l-1][1],d=y[l][0];return `${a}${s.slice(g,d)}${y[l][2]||""}`},""),s+=e;}return s}

/**
 * @name string-collapse-leading-whitespace
 * @fileoverview Collapse the leading and trailing whitespace of a string
 * @version 7.0.3
 * @author Roy Revelt, Codsen Ltd
 * @license MIT
 * {@link https://codsen.com/os/string-collapse-leading-whitespace/}
 */
function D$1(n,u=1){let $="\xA0";function g(e){return Array.from(e).reverse().join("")}function p(e,s,r){let t=r?`
`:"\r",i=r?"\r":`
`;if(!e)return e;let c=0,o="";for(let l=0,f=e.length;l<f;l++)(e[l]===t||e[l]===i&&e[l-1]!==t)&&c++,`\r
`.includes(e[l])||e[l]===$?(e[l]===$?o+=e[l]:e[l]===t?c<=s&&(o+=e[l],e[l+1]===i&&(o+=e[l+1],l++)):e[l]===i&&e?.[l-1]!==t&&c<=s&&(o+=e[l])):(!e[l+1]&&!c&&(o+=" "));return o}if(typeof n=="string"&&n.length){let e=1;typeof+u=="number"&&Number.isInteger(+u)&&+u>=0&&(e=+u);let s="",r="";if(!n.trim())s=n;else if(!n[0].trim()){for(let t=0,i=n.length;t<i;t++)if(n[t].trim()){s=n.slice(0,t);break}}if(n.trim()&&(n.slice(-1).trim()===""||n.slice(-1)===$)){for(let t=n.length;t--;)if(n[t].trim()){r=n.slice(t+1);break}}return `${p(s,e,!1)}${n.trim()}${g(p(g(r),e,!0))}`}return n}

/**
 * @name ranges-push
 * @fileoverview Gather string index ranges
 * @version 7.0.3
 * @author Roy Revelt, Codsen Ltd
 * @license MIT
 * {@link https://codsen.com/os/ranges-push/}
 */
var b={strictlyTwoElementsInRangeArrays:!1,progressFn:null};function h(i,r){if(!Array.isArray(i)||!i.length)return i;let t={...b,...r},e,a;if(t.strictlyTwoElementsInRangeArrays&&!i.every((o,g)=>!Array.isArray(o)||o.length!==2?(e=g,a=o.length,!1):!0))throw new TypeError(`ranges-sort: [THROW_ID_03] The first argument should be an array and must consist of arrays which are natural number indexes representing TWO string index ranges. However, ${e}th range (${JSON.stringify(i[e],null,4)}) has not two but ${a} elements!`);if(!i.every((o,g)=>!Array.isArray(o)||!Number.isInteger(o[0])||o[0]<0||!Number.isInteger(o[1])||o[1]<0?(e=g,!1):!0))throw new TypeError(`ranges-sort: [THROW_ID_04] The first argument should be an array and must consist of arrays which are natural number indexes representing string index ranges. However, ${e}th range (${JSON.stringify(i[e],null,4)}) does not consist of only natural numbers!`);let n=i.length**2,l=0;return Array.from(i).sort((o,g)=>(t.progressFn&&(l+=1,t.progressFn(Math.floor(l*100/n))),o[0]===g[0]?o[1]<g[1]?-1:o[1]>g[1]?1:0:o[0]<g[0]?-1:1))}var f={mergeType:1,progressFn:null,joinRangesThatTouchEdges:!0};function y(i,r){function t(s){return !!s&&typeof s=="object"&&!Array.isArray(s)}if(!Array.isArray(i)||!i.length)return null;let e;if(r)if(t(r)){if(e={...f,...r},e.progressFn&&t(e.progressFn)&&!Object.keys(e.progressFn).length)e.progressFn=null;else if(e.progressFn&&typeof e.progressFn!="function")throw new Error(`ranges-merge: [THROW_ID_01] resolvedOpts.progressFn must be a function! It was given of a type: "${typeof e.progressFn}", equal to ${JSON.stringify(e.progressFn,null,4)}`);if(![1,2,"1","2"].includes(e.mergeType))throw new Error(`ranges-merge: [THROW_ID_02] resolvedOpts.mergeType was customised to a wrong thing! It was given of a type: "${typeof e.mergeType}", equal to ${JSON.stringify(e.mergeType,null,4)}`);if(typeof e.joinRangesThatTouchEdges!="boolean")throw new Error(`ranges-merge: [THROW_ID_04] resolvedOpts.joinRangesThatTouchEdges was customised to a wrong thing! It was given of a type: "${typeof e.joinRangesThatTouchEdges}", equal to ${JSON.stringify(e.joinRangesThatTouchEdges,null,4)}`)}else throw new Error(`emlint: [THROW_ID_03] the second input argument must be a plain object. It was given as:
${JSON.stringify(r,null,4)} (type ${typeof r})`);else e={...f};let a=i.filter(s=>Array.isArray(s)).map(s=>[...s]).filter(s=>s[2]!==void 0||s[0]!==s[1]),n,l,o;e.progressFn?n=h(a,{progressFn:s=>{o=Math.floor(s/5),o!==l&&(l=o,e.progressFn(o));}}):n=h(a);let g=n.length-1;for(let s=g;s>0;s--)e.progressFn&&(o=Math.floor((1-s/g)*78)+21,o!==l&&o>l&&(l=o,e.progressFn(o))),(n[s][0]<=n[s-1][0]||!e.joinRangesThatTouchEdges&&n[s][0]<n[s-1][1]||e.joinRangesThatTouchEdges&&n[s][0]<=n[s-1][1])&&(n[s-1][0]=Math.min(n[s][0],n[s-1][0]),n[s-1][1]=Math.max(n[s][1],n[s-1][1]),n[s][2]!==void 0&&(n[s-1][0]>=n[s][0]||n[s-1][1]<=n[s][1])&&n[s-1][2]!==null&&(n[s][2]===null&&n[s-1][2]!==null?n[s-1][2]=null:n[s-1][2]!=null?+e.mergeType==2&&n[s-1][0]===n[s][0]?n[s-1][2]=n[s][2]:n[s-1][2]+=n[s][2]:n[s-1][2]=n[s][2]),n.splice(s,1),s=n.length);return n.length?n:null}function u(i){return i!=null}function p(i){return Number.isInteger(i)&&i>=0}function m(i){return typeof i=="string"}var T={limitToBeAddedWhitespace:!1,limitLinebreaksCount:1,mergeType:1},$=class{constructor(r){let t={...T,...r};if(t.mergeType&&t.mergeType!==1&&t.mergeType!==2)if(m(t.mergeType)&&t.mergeType.trim()==="1")t.mergeType=1;else if(m(t.mergeType)&&t.mergeType.trim()==="2")t.mergeType=2;else throw new Error(`ranges-push: [THROW_ID_02] opts.mergeType was customised to a wrong thing! It was given of a type: "${typeof t.mergeType}", equal to ${JSON.stringify(t.mergeType,null,4)}`);this.opts=t,this.ranges=[];}ranges;opts;add(r,t,e){if(r==null&&t==null)return;if(u(r)&&!u(t)){if(Array.isArray(r)){if(r.length){if(r.some(l=>Array.isArray(l))){r.forEach(l=>{Array.isArray(l)&&this.add(...l);});return}r.length&&p(+r[0])&&p(+r[1])&&this.add(...r);}return}throw new TypeError(`ranges-push/Ranges/add(): [THROW_ID_12] the first input argument, "from" is set (${JSON.stringify(r,null,0)}) but second-one, "to" is not (${JSON.stringify(t,null,0)})`)}else if(!u(r)&&u(t))throw new TypeError(`ranges-push/Ranges/add(): [THROW_ID_13] the second input argument, "to" is set (${JSON.stringify(t,null,0)}) but first-one, "from" is not (${JSON.stringify(r,null,0)})`);let a=+r,n=+t;if(p(e)&&(e=String(e)),p(a)&&p(n)){if(u(e)&&!m(e)&&!p(e))throw new TypeError(`ranges-push/Ranges/add(): [THROW_ID_08] The third argument, the value to add, was given not as string but ${typeof e}, equal to:
${JSON.stringify(e,null,4)}`);if(u(this.ranges)&&Array.isArray(this.last())&&a===this.last()[1]){if(this.last()[1]=n,this.last()[2],this.last()[2]!==null&&u(e)){let l=this.last()[2]&&this.last()[2].length&&(!this.opts?.mergeType||this.opts.mergeType===1)?`${this.last()[2]}${e}`:e;this.opts.limitToBeAddedWhitespace&&(l=D$1(l,this.opts.limitLinebreaksCount)),m(l)&&!l.length||(this.last()[2]=l);}}else {this.ranges||(this.ranges=[]);let l=e!==void 0&&!(m(e)&&!e.length)?[a,n,e&&this.opts.limitToBeAddedWhitespace?D$1(e,this.opts.limitLinebreaksCount):e]:[a,n];this.ranges.push(l);}}else throw p(a)&&a>=0?new TypeError(`ranges-push/Ranges/add(): [THROW_ID_10] "to" value, the second input argument, must be a natural number or zero! Currently it's of a type "${typeof n}" equal to: ${JSON.stringify(n,null,4)}`):new TypeError(`ranges-push/Ranges/add(): [THROW_ID_09] "from" value, the first input argument, must be a natural number or zero! Currently it's of a type "${typeof a}" equal to: ${JSON.stringify(a,null,4)}`)}push(r,t,e){this.add(r,t,e);}current(){return Array.isArray(this.ranges)&&this.ranges.length?(this.ranges=y(this.ranges,{mergeType:this.opts.mergeType}),this.ranges&&this.opts.limitToBeAddedWhitespace?this.ranges.map(r=>u(r[2])?[r[0],r[1],D$1(r[2],this.opts.limitLinebreaksCount)]:r):this.ranges):null}wipe(){this.ranges=[];}replace(r){if(Array.isArray(r)&&r.length)if(Array.isArray(r[0])&&p(r[0][0]))this.ranges=Array.from(r);else throw new Error(`ranges-push/Ranges/replace(): [THROW_ID_11] Single range was given but we expected array of arrays! The first element, ${JSON.stringify(r[0],null,4)} should be an array and its first element should be an integer, a string index.`);else this.ranges=[];}last(){return Array.isArray(this.ranges)&&this.ranges.length?this.ranges[this.ranges.length-1]:null}};/**
 * @name ranges-sort
 * @fileoverview Sort string index ranges
 * @version 6.0.3
 * @author Roy Revelt, Codsen Ltd
 * @license MIT
 * {@link https://codsen.com/os/ranges-sort/}
 */

var lodash_clonedeep = {exports: {}};

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

(function (module, exports) {
	/** Used as the size to enable large array optimizations. */
	var LARGE_ARRAY_SIZE = 200;

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    objectTag = '[object Object]',
	    promiseTag = '[object Promise]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    symbolTag = '[object Symbol]',
	    weakMapTag = '[object WeakMap]';

	var arrayBufferTag = '[object ArrayBuffer]',
	    dataViewTag = '[object DataView]',
	    float32Tag = '[object Float32Array]',
	    float64Tag = '[object Float64Array]',
	    int8Tag = '[object Int8Array]',
	    int16Tag = '[object Int16Array]',
	    int32Tag = '[object Int32Array]',
	    uint8Tag = '[object Uint8Array]',
	    uint8ClampedTag = '[object Uint8ClampedArray]',
	    uint16Tag = '[object Uint16Array]',
	    uint32Tag = '[object Uint32Array]';

	/**
	 * Used to match `RegExp`
	 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
	 */
	var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

	/** Used to match `RegExp` flags from their coerced string values. */
	var reFlags = /\w*$/;

	/** Used to detect host constructors (Safari). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;

	/** Used to detect unsigned integer values. */
	var reIsUint = /^(?:0|[1-9]\d*)$/;

	/** Used to identify `toStringTag` values supported by `_.clone`. */
	var cloneableTags = {};
	cloneableTags[argsTag] = cloneableTags[arrayTag] =
	cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
	cloneableTags[boolTag] = cloneableTags[dateTag] =
	cloneableTags[float32Tag] = cloneableTags[float64Tag] =
	cloneableTags[int8Tag] = cloneableTags[int16Tag] =
	cloneableTags[int32Tag] = cloneableTags[mapTag] =
	cloneableTags[numberTag] = cloneableTags[objectTag] =
	cloneableTags[regexpTag] = cloneableTags[setTag] =
	cloneableTags[stringTag] = cloneableTags[symbolTag] =
	cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
	cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
	cloneableTags[errorTag] = cloneableTags[funcTag] =
	cloneableTags[weakMapTag] = false;

	/** Detect free variable `global` from Node.js. */
	var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

	/** Used as a reference to the global object. */
	var root = freeGlobal || freeSelf || Function('return this')();

	/** Detect free variable `exports`. */
	var freeExports = exports && !exports.nodeType && exports;

	/** Detect free variable `module`. */
	var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;

	/**
	 * Adds the key-value `pair` to `map`.
	 *
	 * @private
	 * @param {Object} map The map to modify.
	 * @param {Array} pair The key-value pair to add.
	 * @returns {Object} Returns `map`.
	 */
	function addMapEntry(map, pair) {
	  // Don't return `map.set` because it's not chainable in IE 11.
	  map.set(pair[0], pair[1]);
	  return map;
	}

	/**
	 * Adds `value` to `set`.
	 *
	 * @private
	 * @param {Object} set The set to modify.
	 * @param {*} value The value to add.
	 * @returns {Object} Returns `set`.
	 */
	function addSetEntry(set, value) {
	  // Don't return `set.add` because it's not chainable in IE 11.
	  set.add(value);
	  return set;
	}

	/**
	 * A specialized version of `_.forEach` for arrays without support for
	 * iteratee shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns `array`.
	 */
	function arrayEach(array, iteratee) {
	  var index = -1,
	      length = array ? array.length : 0;

	  while (++index < length) {
	    if (iteratee(array[index], index, array) === false) {
	      break;
	    }
	  }
	  return array;
	}

	/**
	 * Appends the elements of `values` to `array`.
	 *
	 * @private
	 * @param {Array} array The array to modify.
	 * @param {Array} values The values to append.
	 * @returns {Array} Returns `array`.
	 */
	function arrayPush(array, values) {
	  var index = -1,
	      length = values.length,
	      offset = array.length;

	  while (++index < length) {
	    array[offset + index] = values[index];
	  }
	  return array;
	}

	/**
	 * A specialized version of `_.reduce` for arrays without support for
	 * iteratee shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @param {*} [accumulator] The initial value.
	 * @param {boolean} [initAccum] Specify using the first element of `array` as
	 *  the initial value.
	 * @returns {*} Returns the accumulated value.
	 */
	function arrayReduce(array, iteratee, accumulator, initAccum) {
	  var index = -1,
	      length = array ? array.length : 0;

	  if (initAccum && length) {
	    accumulator = array[++index];
	  }
	  while (++index < length) {
	    accumulator = iteratee(accumulator, array[index], index, array);
	  }
	  return accumulator;
	}

	/**
	 * The base implementation of `_.times` without support for iteratee shorthands
	 * or max array length checks.
	 *
	 * @private
	 * @param {number} n The number of times to invoke `iteratee`.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the array of results.
	 */
	function baseTimes(n, iteratee) {
	  var index = -1,
	      result = Array(n);

	  while (++index < n) {
	    result[index] = iteratee(index);
	  }
	  return result;
	}

	/**
	 * Gets the value at `key` of `object`.
	 *
	 * @private
	 * @param {Object} [object] The object to query.
	 * @param {string} key The key of the property to get.
	 * @returns {*} Returns the property value.
	 */
	function getValue(object, key) {
	  return object == null ? undefined : object[key];
	}

	/**
	 * Checks if `value` is a host object in IE < 9.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
	 */
	function isHostObject(value) {
	  // Many host objects are `Object` objects that can coerce to strings
	  // despite having improperly defined `toString` methods.
	  var result = false;
	  if (value != null && typeof value.toString != 'function') {
	    try {
	      result = !!(value + '');
	    } catch (e) {}
	  }
	  return result;
	}

	/**
	 * Converts `map` to its key-value pairs.
	 *
	 * @private
	 * @param {Object} map The map to convert.
	 * @returns {Array} Returns the key-value pairs.
	 */
	function mapToArray(map) {
	  var index = -1,
	      result = Array(map.size);

	  map.forEach(function(value, key) {
	    result[++index] = [key, value];
	  });
	  return result;
	}

	/**
	 * Creates a unary function that invokes `func` with its argument transformed.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {Function} transform The argument transform.
	 * @returns {Function} Returns the new function.
	 */
	function overArg(func, transform) {
	  return function(arg) {
	    return func(transform(arg));
	  };
	}

	/**
	 * Converts `set` to an array of its values.
	 *
	 * @private
	 * @param {Object} set The set to convert.
	 * @returns {Array} Returns the values.
	 */
	function setToArray(set) {
	  var index = -1,
	      result = Array(set.size);

	  set.forEach(function(value) {
	    result[++index] = value;
	  });
	  return result;
	}

	/** Used for built-in method references. */
	var arrayProto = Array.prototype,
	    funcProto = Function.prototype,
	    objectProto = Object.prototype;

	/** Used to detect overreaching core-js shims. */
	var coreJsData = root['__core-js_shared__'];

	/** Used to detect methods masquerading as native. */
	var maskSrcKey = (function() {
	  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
	  return uid ? ('Symbol(src)_1.' + uid) : '';
	}());

	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);

	/** Built-in value references. */
	var Buffer = moduleExports ? root.Buffer : undefined,
	    Symbol = root.Symbol,
	    Uint8Array = root.Uint8Array,
	    getPrototype = overArg(Object.getPrototypeOf, Object),
	    objectCreate = Object.create,
	    propertyIsEnumerable = objectProto.propertyIsEnumerable,
	    splice = arrayProto.splice;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeGetSymbols = Object.getOwnPropertySymbols,
	    nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined,
	    nativeKeys = overArg(Object.keys, Object);

	/* Built-in method references that are verified to be native. */
	var DataView = getNative(root, 'DataView'),
	    Map = getNative(root, 'Map'),
	    Promise = getNative(root, 'Promise'),
	    Set = getNative(root, 'Set'),
	    WeakMap = getNative(root, 'WeakMap'),
	    nativeCreate = getNative(Object, 'create');

	/** Used to detect maps, sets, and weakmaps. */
	var dataViewCtorString = toSource(DataView),
	    mapCtorString = toSource(Map),
	    promiseCtorString = toSource(Promise),
	    setCtorString = toSource(Set),
	    weakMapCtorString = toSource(WeakMap);

	/** Used to convert symbols to primitives and strings. */
	var symbolProto = Symbol ? Symbol.prototype : undefined,
	    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

	/**
	 * Creates a hash object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Hash(entries) {
	  var index = -1,
	      length = entries ? entries.length : 0;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	/**
	 * Removes all key-value entries from the hash.
	 *
	 * @private
	 * @name clear
	 * @memberOf Hash
	 */
	function hashClear() {
	  this.__data__ = nativeCreate ? nativeCreate(null) : {};
	}

	/**
	 * Removes `key` and its value from the hash.
	 *
	 * @private
	 * @name delete
	 * @memberOf Hash
	 * @param {Object} hash The hash to modify.
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function hashDelete(key) {
	  return this.has(key) && delete this.__data__[key];
	}

	/**
	 * Gets the hash value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Hash
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function hashGet(key) {
	  var data = this.__data__;
	  if (nativeCreate) {
	    var result = data[key];
	    return result === HASH_UNDEFINED ? undefined : result;
	  }
	  return hasOwnProperty.call(data, key) ? data[key] : undefined;
	}

	/**
	 * Checks if a hash value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Hash
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function hashHas(key) {
	  var data = this.__data__;
	  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
	}

	/**
	 * Sets the hash `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Hash
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the hash instance.
	 */
	function hashSet(key, value) {
	  var data = this.__data__;
	  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
	  return this;
	}

	// Add methods to `Hash`.
	Hash.prototype.clear = hashClear;
	Hash.prototype['delete'] = hashDelete;
	Hash.prototype.get = hashGet;
	Hash.prototype.has = hashHas;
	Hash.prototype.set = hashSet;

	/**
	 * Creates an list cache object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function ListCache(entries) {
	  var index = -1,
	      length = entries ? entries.length : 0;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	/**
	 * Removes all key-value entries from the list cache.
	 *
	 * @private
	 * @name clear
	 * @memberOf ListCache
	 */
	function listCacheClear() {
	  this.__data__ = [];
	}

	/**
	 * Removes `key` and its value from the list cache.
	 *
	 * @private
	 * @name delete
	 * @memberOf ListCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function listCacheDelete(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  if (index < 0) {
	    return false;
	  }
	  var lastIndex = data.length - 1;
	  if (index == lastIndex) {
	    data.pop();
	  } else {
	    splice.call(data, index, 1);
	  }
	  return true;
	}

	/**
	 * Gets the list cache value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf ListCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function listCacheGet(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  return index < 0 ? undefined : data[index][1];
	}

	/**
	 * Checks if a list cache value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf ListCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function listCacheHas(key) {
	  return assocIndexOf(this.__data__, key) > -1;
	}

	/**
	 * Sets the list cache `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf ListCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the list cache instance.
	 */
	function listCacheSet(key, value) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  if (index < 0) {
	    data.push([key, value]);
	  } else {
	    data[index][1] = value;
	  }
	  return this;
	}

	// Add methods to `ListCache`.
	ListCache.prototype.clear = listCacheClear;
	ListCache.prototype['delete'] = listCacheDelete;
	ListCache.prototype.get = listCacheGet;
	ListCache.prototype.has = listCacheHas;
	ListCache.prototype.set = listCacheSet;

	/**
	 * Creates a map cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function MapCache(entries) {
	  var index = -1,
	      length = entries ? entries.length : 0;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	/**
	 * Removes all key-value entries from the map.
	 *
	 * @private
	 * @name clear
	 * @memberOf MapCache
	 */
	function mapCacheClear() {
	  this.__data__ = {
	    'hash': new Hash,
	    'map': new (Map || ListCache),
	    'string': new Hash
	  };
	}

	/**
	 * Removes `key` and its value from the map.
	 *
	 * @private
	 * @name delete
	 * @memberOf MapCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function mapCacheDelete(key) {
	  return getMapData(this, key)['delete'](key);
	}

	/**
	 * Gets the map value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf MapCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function mapCacheGet(key) {
	  return getMapData(this, key).get(key);
	}

	/**
	 * Checks if a map value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf MapCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function mapCacheHas(key) {
	  return getMapData(this, key).has(key);
	}

	/**
	 * Sets the map `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf MapCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the map cache instance.
	 */
	function mapCacheSet(key, value) {
	  getMapData(this, key).set(key, value);
	  return this;
	}

	// Add methods to `MapCache`.
	MapCache.prototype.clear = mapCacheClear;
	MapCache.prototype['delete'] = mapCacheDelete;
	MapCache.prototype.get = mapCacheGet;
	MapCache.prototype.has = mapCacheHas;
	MapCache.prototype.set = mapCacheSet;

	/**
	 * Creates a stack cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Stack(entries) {
	  this.__data__ = new ListCache(entries);
	}

	/**
	 * Removes all key-value entries from the stack.
	 *
	 * @private
	 * @name clear
	 * @memberOf Stack
	 */
	function stackClear() {
	  this.__data__ = new ListCache;
	}

	/**
	 * Removes `key` and its value from the stack.
	 *
	 * @private
	 * @name delete
	 * @memberOf Stack
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function stackDelete(key) {
	  return this.__data__['delete'](key);
	}

	/**
	 * Gets the stack value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Stack
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function stackGet(key) {
	  return this.__data__.get(key);
	}

	/**
	 * Checks if a stack value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Stack
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function stackHas(key) {
	  return this.__data__.has(key);
	}

	/**
	 * Sets the stack `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Stack
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the stack cache instance.
	 */
	function stackSet(key, value) {
	  var cache = this.__data__;
	  if (cache instanceof ListCache) {
	    var pairs = cache.__data__;
	    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
	      pairs.push([key, value]);
	      return this;
	    }
	    cache = this.__data__ = new MapCache(pairs);
	  }
	  cache.set(key, value);
	  return this;
	}

	// Add methods to `Stack`.
	Stack.prototype.clear = stackClear;
	Stack.prototype['delete'] = stackDelete;
	Stack.prototype.get = stackGet;
	Stack.prototype.has = stackHas;
	Stack.prototype.set = stackSet;

	/**
	 * Creates an array of the enumerable property names of the array-like `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @param {boolean} inherited Specify returning inherited property names.
	 * @returns {Array} Returns the array of property names.
	 */
	function arrayLikeKeys(value, inherited) {
	  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
	  // Safari 9 makes `arguments.length` enumerable in strict mode.
	  var result = (isArray(value) || isArguments(value))
	    ? baseTimes(value.length, String)
	    : [];

	  var length = result.length,
	      skipIndexes = !!length;

	  for (var key in value) {
	    if ((inherited || hasOwnProperty.call(value, key)) &&
	        !(skipIndexes && (key == 'length' || isIndex(key, length)))) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	/**
	 * Assigns `value` to `key` of `object` if the existing value is not equivalent
	 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * for equality comparisons.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {string} key The key of the property to assign.
	 * @param {*} value The value to assign.
	 */
	function assignValue(object, key, value) {
	  var objValue = object[key];
	  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
	      (value === undefined && !(key in object))) {
	    object[key] = value;
	  }
	}

	/**
	 * Gets the index at which the `key` is found in `array` of key-value pairs.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {*} key The key to search for.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function assocIndexOf(array, key) {
	  var length = array.length;
	  while (length--) {
	    if (eq(array[length][0], key)) {
	      return length;
	    }
	  }
	  return -1;
	}

	/**
	 * The base implementation of `_.assign` without support for multiple sources
	 * or `customizer` functions.
	 *
	 * @private
	 * @param {Object} object The destination object.
	 * @param {Object} source The source object.
	 * @returns {Object} Returns `object`.
	 */
	function baseAssign(object, source) {
	  return object && copyObject(source, keys(source), object);
	}

	/**
	 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
	 * traversed objects.
	 *
	 * @private
	 * @param {*} value The value to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @param {boolean} [isFull] Specify a clone including symbols.
	 * @param {Function} [customizer] The function to customize cloning.
	 * @param {string} [key] The key of `value`.
	 * @param {Object} [object] The parent object of `value`.
	 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
	 * @returns {*} Returns the cloned value.
	 */
	function baseClone(value, isDeep, isFull, customizer, key, object, stack) {
	  var result;
	  if (customizer) {
	    result = object ? customizer(value, key, object, stack) : customizer(value);
	  }
	  if (result !== undefined) {
	    return result;
	  }
	  if (!isObject(value)) {
	    return value;
	  }
	  var isArr = isArray(value);
	  if (isArr) {
	    result = initCloneArray(value);
	    if (!isDeep) {
	      return copyArray(value, result);
	    }
	  } else {
	    var tag = getTag(value),
	        isFunc = tag == funcTag || tag == genTag;

	    if (isBuffer(value)) {
	      return cloneBuffer(value, isDeep);
	    }
	    if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
	      if (isHostObject(value)) {
	        return object ? value : {};
	      }
	      result = initCloneObject(isFunc ? {} : value);
	      if (!isDeep) {
	        return copySymbols(value, baseAssign(result, value));
	      }
	    } else {
	      if (!cloneableTags[tag]) {
	        return object ? value : {};
	      }
	      result = initCloneByTag(value, tag, baseClone, isDeep);
	    }
	  }
	  // Check for circular references and return its corresponding clone.
	  stack || (stack = new Stack);
	  var stacked = stack.get(value);
	  if (stacked) {
	    return stacked;
	  }
	  stack.set(value, result);

	  if (!isArr) {
	    var props = isFull ? getAllKeys(value) : keys(value);
	  }
	  arrayEach(props || value, function(subValue, key) {
	    if (props) {
	      key = subValue;
	      subValue = value[key];
	    }
	    // Recursively populate clone (susceptible to call stack limits).
	    assignValue(result, key, baseClone(subValue, isDeep, isFull, customizer, key, value, stack));
	  });
	  return result;
	}

	/**
	 * The base implementation of `_.create` without support for assigning
	 * properties to the created object.
	 *
	 * @private
	 * @param {Object} prototype The object to inherit from.
	 * @returns {Object} Returns the new object.
	 */
	function baseCreate(proto) {
	  return isObject(proto) ? objectCreate(proto) : {};
	}

	/**
	 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
	 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
	 * symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Function} keysFunc The function to get the keys of `object`.
	 * @param {Function} symbolsFunc The function to get the symbols of `object`.
	 * @returns {Array} Returns the array of property names and symbols.
	 */
	function baseGetAllKeys(object, keysFunc, symbolsFunc) {
	  var result = keysFunc(object);
	  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
	}

	/**
	 * The base implementation of `getTag`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	function baseGetTag(value) {
	  return objectToString.call(value);
	}

	/**
	 * The base implementation of `_.isNative` without bad shim checks.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function,
	 *  else `false`.
	 */
	function baseIsNative(value) {
	  if (!isObject(value) || isMasked(value)) {
	    return false;
	  }
	  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
	  return pattern.test(toSource(value));
	}

	/**
	 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function baseKeys(object) {
	  if (!isPrototype(object)) {
	    return nativeKeys(object);
	  }
	  var result = [];
	  for (var key in Object(object)) {
	    if (hasOwnProperty.call(object, key) && key != 'constructor') {
	      result.push(key);
	    }
	  }
	  return result;
	}

	/**
	 * Creates a clone of  `buffer`.
	 *
	 * @private
	 * @param {Buffer} buffer The buffer to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Buffer} Returns the cloned buffer.
	 */
	function cloneBuffer(buffer, isDeep) {
	  if (isDeep) {
	    return buffer.slice();
	  }
	  var result = new buffer.constructor(buffer.length);
	  buffer.copy(result);
	  return result;
	}

	/**
	 * Creates a clone of `arrayBuffer`.
	 *
	 * @private
	 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
	 * @returns {ArrayBuffer} Returns the cloned array buffer.
	 */
	function cloneArrayBuffer(arrayBuffer) {
	  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
	  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
	  return result;
	}

	/**
	 * Creates a clone of `dataView`.
	 *
	 * @private
	 * @param {Object} dataView The data view to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the cloned data view.
	 */
	function cloneDataView(dataView, isDeep) {
	  var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
	  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
	}

	/**
	 * Creates a clone of `map`.
	 *
	 * @private
	 * @param {Object} map The map to clone.
	 * @param {Function} cloneFunc The function to clone values.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the cloned map.
	 */
	function cloneMap(map, isDeep, cloneFunc) {
	  var array = isDeep ? cloneFunc(mapToArray(map), true) : mapToArray(map);
	  return arrayReduce(array, addMapEntry, new map.constructor);
	}

	/**
	 * Creates a clone of `regexp`.
	 *
	 * @private
	 * @param {Object} regexp The regexp to clone.
	 * @returns {Object} Returns the cloned regexp.
	 */
	function cloneRegExp(regexp) {
	  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
	  result.lastIndex = regexp.lastIndex;
	  return result;
	}

	/**
	 * Creates a clone of `set`.
	 *
	 * @private
	 * @param {Object} set The set to clone.
	 * @param {Function} cloneFunc The function to clone values.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the cloned set.
	 */
	function cloneSet(set, isDeep, cloneFunc) {
	  var array = isDeep ? cloneFunc(setToArray(set), true) : setToArray(set);
	  return arrayReduce(array, addSetEntry, new set.constructor);
	}

	/**
	 * Creates a clone of the `symbol` object.
	 *
	 * @private
	 * @param {Object} symbol The symbol object to clone.
	 * @returns {Object} Returns the cloned symbol object.
	 */
	function cloneSymbol(symbol) {
	  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
	}

	/**
	 * Creates a clone of `typedArray`.
	 *
	 * @private
	 * @param {Object} typedArray The typed array to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the cloned typed array.
	 */
	function cloneTypedArray(typedArray, isDeep) {
	  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
	  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
	}

	/**
	 * Copies the values of `source` to `array`.
	 *
	 * @private
	 * @param {Array} source The array to copy values from.
	 * @param {Array} [array=[]] The array to copy values to.
	 * @returns {Array} Returns `array`.
	 */
	function copyArray(source, array) {
	  var index = -1,
	      length = source.length;

	  array || (array = Array(length));
	  while (++index < length) {
	    array[index] = source[index];
	  }
	  return array;
	}

	/**
	 * Copies properties of `source` to `object`.
	 *
	 * @private
	 * @param {Object} source The object to copy properties from.
	 * @param {Array} props The property identifiers to copy.
	 * @param {Object} [object={}] The object to copy properties to.
	 * @param {Function} [customizer] The function to customize copied values.
	 * @returns {Object} Returns `object`.
	 */
	function copyObject(source, props, object, customizer) {
	  object || (object = {});

	  var index = -1,
	      length = props.length;

	  while (++index < length) {
	    var key = props[index];

	    var newValue = customizer
	      ? customizer(object[key], source[key], key, object, source)
	      : undefined;

	    assignValue(object, key, newValue === undefined ? source[key] : newValue);
	  }
	  return object;
	}

	/**
	 * Copies own symbol properties of `source` to `object`.
	 *
	 * @private
	 * @param {Object} source The object to copy symbols from.
	 * @param {Object} [object={}] The object to copy symbols to.
	 * @returns {Object} Returns `object`.
	 */
	function copySymbols(source, object) {
	  return copyObject(source, getSymbols(source), object);
	}

	/**
	 * Creates an array of own enumerable property names and symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names and symbols.
	 */
	function getAllKeys(object) {
	  return baseGetAllKeys(object, keys, getSymbols);
	}

	/**
	 * Gets the data for `map`.
	 *
	 * @private
	 * @param {Object} map The map to query.
	 * @param {string} key The reference key.
	 * @returns {*} Returns the map data.
	 */
	function getMapData(map, key) {
	  var data = map.__data__;
	  return isKeyable(key)
	    ? data[typeof key == 'string' ? 'string' : 'hash']
	    : data.map;
	}

	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = getValue(object, key);
	  return baseIsNative(value) ? value : undefined;
	}

	/**
	 * Creates an array of the own enumerable symbol properties of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of symbols.
	 */
	var getSymbols = nativeGetSymbols ? overArg(nativeGetSymbols, Object) : stubArray;

	/**
	 * Gets the `toStringTag` of `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	var getTag = baseGetTag;

	// Fallback for data views, maps, sets, and weak maps in IE 11,
	// for data views in Edge < 14, and promises in Node.js.
	if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
	    (Map && getTag(new Map) != mapTag) ||
	    (Promise && getTag(Promise.resolve()) != promiseTag) ||
	    (Set && getTag(new Set) != setTag) ||
	    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
	  getTag = function(value) {
	    var result = objectToString.call(value),
	        Ctor = result == objectTag ? value.constructor : undefined,
	        ctorString = Ctor ? toSource(Ctor) : undefined;

	    if (ctorString) {
	      switch (ctorString) {
	        case dataViewCtorString: return dataViewTag;
	        case mapCtorString: return mapTag;
	        case promiseCtorString: return promiseTag;
	        case setCtorString: return setTag;
	        case weakMapCtorString: return weakMapTag;
	      }
	    }
	    return result;
	  };
	}

	/**
	 * Initializes an array clone.
	 *
	 * @private
	 * @param {Array} array The array to clone.
	 * @returns {Array} Returns the initialized clone.
	 */
	function initCloneArray(array) {
	  var length = array.length,
	      result = array.constructor(length);

	  // Add properties assigned by `RegExp#exec`.
	  if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
	    result.index = array.index;
	    result.input = array.input;
	  }
	  return result;
	}

	/**
	 * Initializes an object clone.
	 *
	 * @private
	 * @param {Object} object The object to clone.
	 * @returns {Object} Returns the initialized clone.
	 */
	function initCloneObject(object) {
	  return (typeof object.constructor == 'function' && !isPrototype(object))
	    ? baseCreate(getPrototype(object))
	    : {};
	}

	/**
	 * Initializes an object clone based on its `toStringTag`.
	 *
	 * **Note:** This function only supports cloning values with tags of
	 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
	 *
	 * @private
	 * @param {Object} object The object to clone.
	 * @param {string} tag The `toStringTag` of the object to clone.
	 * @param {Function} cloneFunc The function to clone values.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the initialized clone.
	 */
	function initCloneByTag(object, tag, cloneFunc, isDeep) {
	  var Ctor = object.constructor;
	  switch (tag) {
	    case arrayBufferTag:
	      return cloneArrayBuffer(object);

	    case boolTag:
	    case dateTag:
	      return new Ctor(+object);

	    case dataViewTag:
	      return cloneDataView(object, isDeep);

	    case float32Tag: case float64Tag:
	    case int8Tag: case int16Tag: case int32Tag:
	    case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
	      return cloneTypedArray(object, isDeep);

	    case mapTag:
	      return cloneMap(object, isDeep, cloneFunc);

	    case numberTag:
	    case stringTag:
	      return new Ctor(object);

	    case regexpTag:
	      return cloneRegExp(object);

	    case setTag:
	      return cloneSet(object, isDeep, cloneFunc);

	    case symbolTag:
	      return cloneSymbol(object);
	  }
	}

	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex(value, length) {
	  length = length == null ? MAX_SAFE_INTEGER : length;
	  return !!length &&
	    (typeof value == 'number' || reIsUint.test(value)) &&
	    (value > -1 && value % 1 == 0 && value < length);
	}

	/**
	 * Checks if `value` is suitable for use as unique object key.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
	 */
	function isKeyable(value) {
	  var type = typeof value;
	  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
	    ? (value !== '__proto__')
	    : (value === null);
	}

	/**
	 * Checks if `func` has its source masked.
	 *
	 * @private
	 * @param {Function} func The function to check.
	 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
	 */
	function isMasked(func) {
	  return !!maskSrcKey && (maskSrcKey in func);
	}

	/**
	 * Checks if `value` is likely a prototype object.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
	 */
	function isPrototype(value) {
	  var Ctor = value && value.constructor,
	      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

	  return value === proto;
	}

	/**
	 * Converts `func` to its source code.
	 *
	 * @private
	 * @param {Function} func The function to process.
	 * @returns {string} Returns the source code.
	 */
	function toSource(func) {
	  if (func != null) {
	    try {
	      return funcToString.call(func);
	    } catch (e) {}
	    try {
	      return (func + '');
	    } catch (e) {}
	  }
	  return '';
	}

	/**
	 * This method is like `_.clone` except that it recursively clones `value`.
	 *
	 * @static
	 * @memberOf _
	 * @since 1.0.0
	 * @category Lang
	 * @param {*} value The value to recursively clone.
	 * @returns {*} Returns the deep cloned value.
	 * @see _.clone
	 * @example
	 *
	 * var objects = [{ 'a': 1 }, { 'b': 2 }];
	 *
	 * var deep = _.cloneDeep(objects);
	 * console.log(deep[0] === objects[0]);
	 * // => false
	 */
	function cloneDeep(value) {
	  return baseClone(value, true, true);
	}

	/**
	 * Performs a
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * comparison between two values to determine if they are equivalent.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 * var other = { 'a': 1 };
	 *
	 * _.eq(object, object);
	 * // => true
	 *
	 * _.eq(object, other);
	 * // => false
	 *
	 * _.eq('a', 'a');
	 * // => true
	 *
	 * _.eq('a', Object('a'));
	 * // => false
	 *
	 * _.eq(NaN, NaN);
	 * // => true
	 */
	function eq(value, other) {
	  return value === other || (value !== value && other !== other);
	}

	/**
	 * Checks if `value` is likely an `arguments` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArguments(function() { return arguments; }());
	 * // => true
	 *
	 * _.isArguments([1, 2, 3]);
	 * // => false
	 */
	function isArguments(value) {
	  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
	  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
	    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
	}

	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(document.body.children);
	 * // => false
	 *
	 * _.isArray('abc');
	 * // => false
	 *
	 * _.isArray(_.noop);
	 * // => false
	 */
	var isArray = Array.isArray;

	/**
	 * Checks if `value` is array-like. A value is considered array-like if it's
	 * not a function and has a `value.length` that's an integer greater than or
	 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 * @example
	 *
	 * _.isArrayLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLike(document.body.children);
	 * // => true
	 *
	 * _.isArrayLike('abc');
	 * // => true
	 *
	 * _.isArrayLike(_.noop);
	 * // => false
	 */
	function isArrayLike(value) {
	  return value != null && isLength(value.length) && !isFunction(value);
	}

	/**
	 * This method is like `_.isArrayLike` except that it also checks if `value`
	 * is an object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array-like object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArrayLikeObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLikeObject(document.body.children);
	 * // => true
	 *
	 * _.isArrayLikeObject('abc');
	 * // => false
	 *
	 * _.isArrayLikeObject(_.noop);
	 * // => false
	 */
	function isArrayLikeObject(value) {
	  return isObjectLike(value) && isArrayLike(value);
	}

	/**
	 * Checks if `value` is a buffer.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.3.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
	 * @example
	 *
	 * _.isBuffer(new Buffer(2));
	 * // => true
	 *
	 * _.isBuffer(new Uint8Array(2));
	 * // => false
	 */
	var isBuffer = nativeIsBuffer || stubFalse;

	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 8-9 which returns 'object' for typed array and other constructors.
	  var tag = isObject(value) ? objectToString.call(value) : '';
	  return tag == funcTag || tag == genTag;
	}

	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This method is loosely based on
	 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 * @example
	 *
	 * _.isLength(3);
	 * // => true
	 *
	 * _.isLength(Number.MIN_VALUE);
	 * // => false
	 *
	 * _.isLength(Infinity);
	 * // => false
	 *
	 * _.isLength('3');
	 * // => false
	 */
	function isLength(value) {
	  return typeof value == 'number' &&
	    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}

	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}

	/**
	 * Creates an array of the own enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects. See the
	 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
	 * for more details.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keys(new Foo);
	 * // => ['a', 'b'] (iteration order is not guaranteed)
	 *
	 * _.keys('hi');
	 * // => ['0', '1']
	 */
	function keys(object) {
	  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
	}

	/**
	 * This method returns a new empty array.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.13.0
	 * @category Util
	 * @returns {Array} Returns the new empty array.
	 * @example
	 *
	 * var arrays = _.times(2, _.stubArray);
	 *
	 * console.log(arrays);
	 * // => [[], []]
	 *
	 * console.log(arrays[0] === arrays[1]);
	 * // => false
	 */
	function stubArray() {
	  return [];
	}

	/**
	 * This method returns `false`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.13.0
	 * @category Util
	 * @returns {boolean} Returns `false`.
	 * @example
	 *
	 * _.times(2, _.stubFalse);
	 * // => [false, false]
	 */
	function stubFalse() {
	  return false;
	}

	module.exports = cloneDeep;
} (lodash_clonedeep, lodash_clonedeep.exports));

/**
 * @name string-left-right
 * @fileoverview Looks up the first non-whitespace character to the left/right of a given index
 * @version 6.0.6
 * @author Roy Revelt, Codsen Ltd
 * @license MIT
 * {@link https://codsen.com/os/string-left-right/}
 */
var c="\xA0";function D({str:n,idx:e=0,stopAtNewlines:l=!1,stopAtRawNbsp:u=!1}){if(typeof n!="string"||!n.length||((!e||typeof e!="number")&&(e=0),!n[e+1]))return null;if(n[e+1]&&(n[e+1].trim()||l&&`
\r`.includes(n[e+1])||u&&n[e+1]===c))return e+1;if(n[e+2]&&(n[e+2].trim()||l&&`
\r`.includes(n[e+2])||u&&n[e+2]===c))return e+2;for(let t=e+1,m=n.length;t<m;t++)if(n[t].trim()||l&&`
\r`.includes(n[t])||u&&n[t]===c)return t;return null}function E(n,e=0){return D({str:n,idx:e,stopAtNewlines:!1,stopAtRawNbsp:!1})}

/**
 * @name string-strip-html
 * @fileoverview Strip HTML tags from strings. No parser, accepts mixed sources.
 * @version 13.0.6
 * @author Roy Revelt, Codsen Ltd
 * @license MIT
 * {@link https://codsen.com/os/string-strip-html/}
 */
function X(t){return /[-_A-Za-z0-9]/.test(t)}function _(t,m){if(!t)return [];if(Array.isArray(t))return t.filter(D=>typeof D=="string"&&D.trim());if(typeof t=="string")return t.trim()?[t]:[];throw new TypeError(`string-strip-html/stripHtml(): [THROW_ID_05] ${m} must be array containing zero or more strings or something falsey. Currently it's equal to: ${t}, that a type of ${typeof t}.`)}function ue(t,m,D,c){for(let f=m,b=t.length;f<b;f++){if(t.startsWith(D,f))return !0;if(t.startsWith(c,f))return !1}return !1}function G(t,m,D){return !t||!t.quotes||!ue(m,D+1,t.quotes.value,">")}var W=new Set(["!doctype","abbr","address","area","article","aside","audio","base","bdi","bdo","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","doctype","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","math","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","param","picture","pre","progress","rb","rp","rt","rtc","ruby","samp","script","section","select","slot","small","source","span","strong","style","sub","summary","sup","svg","table","tbody","td","template","textarea","tfoot","th","thead","time","title","tr","track","ul","var","video","wbr","xml"]),j=new Set(["a","b","i","p","q","s","u"]),x=new Set([".",",",";","!","?"]),Y=new Set([".",",","?",";",")","\u2026",'"',"\xBB"]),ee=new Set(["a","abbr","acronym","audio","b","bdi","bdo","big","button","canvas","cite","code","data","datalist","del","dfn","em","embed","i","iframe","input","ins","kbd","label","map","mark","meter","noscript","object","output","picture","progress","q","ruby","s","samp","select","slot","small","span","strong","sub","sup","svg","template","textarea","time","u","tt","var","video","wbr"]);var oe={ignoreTags:[],ignoreTagsWithTheirContents:[],onlyStripTags:[],stripTogetherWithTheirContents:["script","style","xml"],skipHtmlDecoding:!1,trimOnlySpaces:!1,stripRecognisedHTMLOnly:!1,dumpLinkHrefsNearby:{enabled:!1,putOnNewLine:!1,wrapHeads:"",wrapTails:""},cb:null,reportProgressFunc:null,reportProgressFuncFrom:0,reportProgressFuncTo:100};function be(t,m){let D=Date.now(),c=[],f=[],b=[],$$1=[],n={};function ie(){n={attributes:[]};}ie();let V=null,w=null,N=null,J=!1,o={},d={tagName:"",hrefValue:"",openingTagEnds:void 0},E$1="",R=!1,B=null,F=!0;function H(e,s,i){if(Array.isArray(s.stripTogetherWithTheirContents)&&(s.stripTogetherWithTheirContents.includes(n.name)||s.stripTogetherWithTheirContents.includes("*")))if(n.slashPresent&&Array.isArray(c)&&c.some(a=>a.name===n.name)){for(let a=c.length;a--;)if(c[a].name===n.name){$$1=$$1.filter(([u,p])=>(u<c[a].lastOpeningBracketAt||u>=e+1)&&(p<=c[a].lastOpeningBracketAt||p>e+1));let g=e+1;n.lastClosingBracketAt&&(g=n.lastClosingBracketAt+1),$$1.push([c[a].lastOpeningBracketAt,g]),Y.has(t[e])&&s.cb?s.cb({tag:n,deleteFrom:c[a].lastOpeningBracketAt,deleteTo:e+1,insert:null,rangesArr:i,proposedReturn:[c[a].lastOpeningBracketAt,e,null]}):s.cb&&s.cb({tag:n,deleteFrom:c[a].lastOpeningBracketAt,deleteTo:e,insert:"",rangesArr:i,proposedReturn:[c[a].lastOpeningBracketAt,e,""]}),c.splice(a,1);break}}else n.slashPresent||c.push(n);else Array.isArray(s.ignoreTagsWithTheirContents)&&U$1(e,s,n)&&(F=!1);}function L(e,s,i,a,g,u){if(Array.isArray(r.current())&&typeof i=="number"&&r.current()[0][0]===0&&r.current()[0][1]>=i)return "";if(t.length===a&&u&&(!l.dumpLinkHrefsNearby||!l.dumpLinkHrefsNearby?.enabled))return null;let p="";if(Number.isInteger(i)&&i<g&&(p+=e.slice(i,g)),Number.isInteger(a)&&a>u+1){let S=e.slice(u+1,a);a&&!E(t,a-1)&&(S=S.trimEnd()),S.includes(`
`)&&y(a,e)?p+=" ":p+=S;}let P=!Y.has(e[s]),Q=e[a-1]!==">"||!e[i].trim(),Z=!['"',"("].includes(e[g-1]),re=![";",".",":","!"].includes(e[s]);if((P||Q&&Z&&re)&&(Q||Z)&&e[s]!=="!"&&(!ee.has(n.name)||typeof i=="number"&&i<g||typeof a=="number"&&a>u+1)){let S=p.match(/\n/g);return Array.isArray(S)&&S.length?S.length===1?`
`:S.length===2?`

`:`


`:" "}return ""}function q(e,s){if(e.dumpLinkHrefsNearby?.enabled&&d.tagName&&d.tagName===n.name&&n.lastOpeningBracketAt&&(d.openingTagEnds&&n.lastOpeningBracketAt>d.openingTagEnds||!d.openingTagEnds)&&(R=!0),R){let i=e.dumpLinkHrefsNearby?.putOnNewLine?`

`:"";E$1=`${i}${d.hrefValue}`,(typeof s!="number"||E(t,s-1))&&(E$1+=i);}}function y(e,s){return s?s[e]==="<"&&s[e+1]!=="%":t[e]==="<"&&t[e+1]!=="%"}function A(e){return t[e]===">"&&t[e-1]!=="%"}function U$1(e,s,i){if(s.ignoreTagsWithTheirContents.includes("*"))return !0;let a=t.indexOf(`<${i.name}`,e),g=t.indexOf(`</${i.name}`,e);return !i.slashPresent&&g===-1||i.slashPresent&&!f.some(u=>u.name===i.name)||g>-1&&a>-1&&a<g?!1:s.ignoreTagsWithTheirContents.includes(i.name)}if(typeof t!="string")throw new TypeError(`string-strip-html/stripHtml(): [THROW_ID_01] Input must be string! Currently it's: ${(typeof t).toLowerCase()}, equal to:
${JSON.stringify(t,null,4)}`);if(m)if(U(m)){if(m.reportProgressFunc&&typeof m.reportProgressFunc!="function")throw new Error(`string-strip-html/stripHtml(): [THROW_ID_03] The Optional Options Object's key reportProgressFunc, callback function, should be a function but it was given as type ${typeof m.reportProgressFunc}, equal to ${JSON.stringify(m.reportProgressFunc,null,4)}`);if(typeof m.dumpLinkHrefsNearby=="boolean"&&m.dumpLinkHrefsNearby!=null)throw new Error(`string-strip-html/stripHtml(): [THROW_ID_04] The Optional Options Object's key should be a plain object but it was given as type ${typeof m.dumpLinkHrefsNearby}, equal to ${JSON.stringify(m.dumpLinkHrefsNearby,null,4)}`)}else throw new TypeError(`string-strip-html/stripHtml(): [THROW_ID_02] Optional Options Object must be a plain object! Currently it's: ${(typeof m).toLowerCase()}, equal to:
${JSON.stringify(m,null,4)}`);function M(){R&&(d={tagName:"",hrefValue:"",openingTagEnds:void 0},R=!1);}let l={...oe,...m,dumpLinkHrefsNearby:{...oe.dumpLinkHrefsNearby,...m?.dumpLinkHrefsNearby}};if(Object.prototype.hasOwnProperty.call(l,"returnRangesOnly"))throw new TypeError("string-strip-html/stripHtml(): [THROW_ID_05] The Optional Options Object's key returnRangesOnly has been removed from the API since v.5 release.");if(l.reportProgressFunc){if(typeof l.reportProgressFuncFrom!="number")throw new Error(`string-strip-html/stripHtml(): [THROW_ID_06] The Optional Options Object's key reportProgressFuncFrom, callback function's "from" range, should be a number but it was given as type ${typeof l.reportProgressFuncFrom}, equal to ${JSON.stringify(l.reportProgressFuncFrom,null,4)}`);if(typeof l.reportProgressFuncTo!="number")throw new Error(`string-strip-html/stripHtml(): [THROW_ID_07] The Optional Options Object's key reportProgressFuncTo, callback function's "to" range, should be a number but it was given as type ${typeof l.reportProgressFuncTo}, equal to ${JSON.stringify(l.reportProgressFuncTo,null,4)}`)}l.ignoreTags=_(l.ignoreTags,"resolvedOpts.ignoreTags"),l.onlyStripTags=_(l.onlyStripTags,"resolvedOpts.onlyStripTags");let z=!!l.onlyStripTags.length;l.onlyStripTags.length&&l.ignoreTags.length&&(l.onlyStripTags=lodash_without(l.onlyStripTags,...l.ignoreTags)),l.stripTogetherWithTheirContents?typeof l.stripTogetherWithTheirContents=="string"&&l.stripTogetherWithTheirContents.length&&(l.stripTogetherWithTheirContents=[l.stripTogetherWithTheirContents]):l.stripTogetherWithTheirContents=[];let I={};if(l.stripTogetherWithTheirContents&&Array.isArray(l.stripTogetherWithTheirContents)&&l.stripTogetherWithTheirContents.length&&!l.stripTogetherWithTheirContents.every((e,s)=>typeof e!="string"?(I.el=e,I.i=s,!1):!0))throw new TypeError(`string-strip-html/stripHtml(): [THROW_ID_08] Optional Options Object's key stripTogetherWithTheirContents was set to contain not just string elements! For example, element at index ${I.i} has a value ${I.el} which is not string but ${(typeof I.el).toLowerCase()}.`);l.cb||(l.cb=({rangesArr:e,proposedReturn:s})=>{s&&e.push(...s);});let r=new $({limitToBeAddedWhitespace:!0,limitLinebreaksCount:2});if(!l.skipHtmlDecoding)for(;t!==decode_1(t,{scope:"strict"});)t=decode_1(t,{scope:"strict"});let C=!1,k=!1,v=0,K=0,h=t.length,ae=Math.floor(h/2);for(let e=0;e<h;e++){if(l.reportProgressFunc&&(h>1e3&&h<2e3?e===ae&&l.reportProgressFunc(Math.floor((l.reportProgressFuncTo-l.reportProgressFuncFrom)/2)):h>=2e3&&(v=l.reportProgressFuncFrom+Math.floor(e/h*(l.reportProgressFuncTo-l.reportProgressFuncFrom)),v!==K&&(K=v,l.reportProgressFunc(v)))),Object.keys(n).length>1&&n.lastClosingBracketAt&&n.lastClosingBracketAt<e&&t[e]!==" "&&B===null&&(B=e),!C&&t[e]==="%"&&t[e-1]==="{"&&t.includes("%}",e+1)){N=null;let s=t.indexOf("%}",e)-1;if(s>e){e=s;continue}}if(!C&&A(e)&&(!n||Object.keys(n).length<2)&&e>1){for(let s=e;s--;)if(t[s-1]===void 0||A(s)){let i=t[s-1]===void 0?s:s+1,a=t.slice(i,e+1);if(t!==`<${lodash_trim(a.trim(),"/>")}>`&&[...W].some(g=>lodash_trim(a.trim().split(/\s+/).filter(u=>u.trim()).filter((u,p)=>p===0),"/>").toLowerCase()===g)&&be(`<${a.trim()}>`,l).result===""){(!b.length||b[b.length-1][0]!==n.lastOpeningBracketAt)&&b.push([i,e+1]),(!$$1.length||$$1[$$1.length-1][0]!==n.lastOpeningBracketAt)&&$$1.push([i,e+1]);let g=L(t,e,i,e+1,i,e+1),u=e+1;if(t[u]&&!t[u].trim()){for(let p=u;p<h;p++)if(t[p].trim()){u=p;break}}l.cb({tag:n,deleteFrom:i,deleteTo:u,insert:g,rangesArr:r,proposedReturn:[i,u,g]});}break}}if(!k&&t[e]==="/"&&!n.quotes?.value&&Number.isInteger(n.lastOpeningBracketAt)&&!Number.isInteger(n.lastClosingBracketAt)&&(n.slashPresent=e),t[e]==='"'||t[e]==="'")if(!k&&n.nameStarts&&n.quotes&&n.quotes.value&&n.quotes.value===t[e]){o.valueEnds=e,o.value=t.slice(o.valueStarts,e),n.attributes.push(o),o={},delete n.quotes;let s;l.dumpLinkHrefsNearby?.enabled&&!c.length&&n.attributes.some(i=>{if(typeof i.name=="string"&&i.name.toLowerCase()==="href")return s=`${l.dumpLinkHrefsNearby?.wrapHeads||""}${i.value}${l.dumpLinkHrefsNearby?.wrapTails||""}`,!0})&&(d={tagName:n.name,hrefValue:s,openingTagEnds:void 0});}else !k&&!n.quotes&&n.nameStarts&&(n.quotes={},n.quotes.value=t[e],n.quotes.start=e,o.nameStarts&&o.nameEnds&&o.nameEnds<e&&o.nameStarts<e&&!o.valueStarts&&(o.name=t.slice(o.nameStarts,o.nameEnds)));if(n.nameStarts!==void 0&&n.nameEnds===void 0&&(!t[e].trim()||!X(t[e]))){if(n.nameEnds=e,n.name=t.slice(n.nameStarts,n.nameEnds+(!A(e)&&t[e]!=="/"&&t[e+1]===void 0?1:0)),t[n.nameStarts-1]!=="!"&&!n.name.replace(/-/g,"").length||/^\d+$/.test(n.name[0])){n={};continue}if(typeof n.name=="string"&&n.name.toLowerCase()==="doctype"&&(k=!0),y(e)){q(l);let s=L(t,e,n.leftOuterWhitespace,e,n.lastOpeningBracketAt,e);(l.stripTogetherWithTheirContents.includes(n.name)||l.stripTogetherWithTheirContents.includes("*"))&&($$1=$$1.filter(([i,a])=>!(i===n.leftOuterWhitespace&&a===e))),l.cb({tag:n,deleteFrom:n.leftOuterWhitespace,deleteTo:e,insert:`${s}${E$1}${s}`,rangesArr:r,proposedReturn:[n.leftOuterWhitespace,e,`${s}${E$1}${s}`]}),M(),H(e,l,r);}}if(n.quotes?.start&&n.quotes.start<e&&!n.quotes.end&&o.nameEnds&&o.equalsAt&&!o.valueStarts&&(o.valueStarts=e),!n.quotes&&o.nameEnds&&t[e]==="="&&!o.valueStarts&&!o.equalsAt&&(o.equalsAt=e),!n.quotes&&o.nameStarts&&o.nameEnds&&!o.valueStarts&&t[e].trim()&&t[e]!=="="&&(n.attributes.push(o),o={}),!n.quotes&&o.nameStarts&&!o.nameEnds&&(k&&`'"`.includes(t[o.nameStarts])?o.nameStarts<e&&t[e]===t[o.nameStarts]&&(o.nameEnds=e+1,o.name=t.slice(o.nameStarts,o.nameEnds)):t[e].trim()?t[e]==="="?o.equalsAt||(o.nameEnds=e,o.equalsAt=e,o.name=t.slice(o.nameStarts,o.nameEnds)):t[e]==="/"||A(e)?(o.nameEnds=e,o.name=t.slice(o.nameStarts,o.nameEnds),n.attributes.push(o),o={}):y(e)&&(o.nameEnds=e,o.name=t.slice(o.nameStarts,o.nameEnds),n.attributes.push(o),o={}):(o.nameEnds=e,o.name=t.slice(o.nameStarts,o.nameEnds))),!n.quotes&&n.nameEnds<e&&!t[e-1].trim()&&t[e].trim()&&!"<>/!".includes(t[e])&&!o.nameStarts&&!n.lastClosingBracketAt&&(o.nameStarts=e),n.lastOpeningBracketAt!==null&&n.lastOpeningBracketAt<e&&t[e]==="/"&&n.onlyPlausible&&(n.onlyPlausible=!1),n.lastOpeningBracketAt!==null&&n.lastOpeningBracketAt<e&&t[e]!=="/"&&(n.onlyPlausible===void 0&&((!t[e].trim()||y(e))&&!n.slashPresent?n.onlyPlausible=!0:n.onlyPlausible=!1),t[e].trim()&&n.nameStarts===void 0&&!y(e)&&t[e]!=="/"&&!A(e)&&t[e]!=="!"&&(n.nameStarts=e,n.nameContainsLetters=!1)),n.nameStarts&&!n.quotes&&typeof t[e]=="string"&&t[e].toLowerCase()!==t[e].toUpperCase()&&(n.nameContainsLetters=!0),A(e)&&G(n,t,e)&&n.lastOpeningBracketAt!==void 0&&(n.lastClosingBracketAt=e,B=null,Object.keys(o).length&&(n.attributes.push(o),o={}),l.dumpLinkHrefsNearby?.enabled&&d.tagName&&!d.openingTagEnds&&(d.openingTagEnds=e)),(!k||t[e]===">")&&n.lastOpeningBracketAt!==void 0){if(n.lastClosingBracketAt===void 0){if(n.lastOpeningBracketAt<e&&!y(e)&&(t[e+1]===void 0||y(e+1))&&n.nameContainsLetters&&typeof n.nameStarts=="number"){if(n.name=t.slice(n.nameStarts,n.nameEnds||e+1).toLowerCase(),(!b.length||b[b.length-1][0]!==n.lastOpeningBracketAt)&&b.push([n.lastOpeningBracketAt,e+1]),l.ignoreTags.includes(n.name)||U$1(e,l,n)||!W.has(n.name)&&(n.onlyPlausible||l.stripRecognisedHTMLOnly)){n={},o={};continue}if((W.has(n.name)||j.has(n.name))&&(n.onlyPlausible===!1||n.onlyPlausible===!0&&n.attributes.length)||t[e+1]===void 0){q(l);let s=L(t,e,n.leftOuterWhitespace,e+1,n.lastOpeningBracketAt,n.lastClosingBracketAt);C&&n.name==="script"&&n.slashPresent&&(C=!1);let i;s===null||E$1===null?i=null:i=`${s}${E$1}${s}`,l.cb({tag:n,deleteFrom:n.leftOuterWhitespace,deleteTo:e+1,insert:i,rangesArr:r,proposedReturn:[n.leftOuterWhitespace,e+1,i]}),M(),H(e,l,r);}if(!$$1.length||$$1[$$1.length-1][0]!==n.lastOpeningBracketAt&&$$1[$$1.length-1][1]!==e+1)if(l.stripTogetherWithTheirContents.includes(n.name)||l.stripTogetherWithTheirContents.includes("*")){let s;for(let i=c.length;i--;)c[i].name===n.name&&(s=c[i]);s?($$1=$$1.filter(([i])=>i!==s.lastOpeningBracketAt),$$1.push([s.lastOpeningBracketAt,e+1])):$$1.push([n.lastOpeningBracketAt,e+1]);}else $$1.push([n.lastOpeningBracketAt,e+1]);}}else if(e>n.lastClosingBracketAt&&t[e].trim()||t[e+1]===void 0){let s=n.lastClosingBracketAt===e?e+1:e;l.trimOnlySpaces&&s===h-1&&B!==null&&B<e&&(s=B),(!b.length||b[b.length-1][0]!==n.lastOpeningBracketAt)&&b.push([n.lastOpeningBracketAt,n.lastClosingBracketAt+1]);let i=l.ignoreTags.includes(n.name),a=U$1(e,l,n);if(!F||l.stripRecognisedHTMLOnly&&typeof n.name=="string"&&!W.has(n.name.toLowerCase())&&!j.has(n.name.toLowerCase())||!z&&(i||a)||z&&!l.onlyStripTags.includes(n.name)){if(a)if(n.slashPresent){for(let g=f.length;g--;)if(f[g].name===n.name){f.splice(g,1);break}f.length||(F=!0);}else F&&(F=!1),f.push(n);l.cb({tag:n,deleteFrom:null,deleteTo:null,insert:null,rangesArr:r,proposedReturn:null}),n={},o={};}else if(!n.onlyPlausible||n.attributes.length===0&&n.name&&(W.has(n.name.toLowerCase())||j.has(n.name.toLowerCase()))||n.attributes?.some(g=>g.equalsAt)){(!$$1.length||$$1[$$1.length-1][0]!==n.lastOpeningBracketAt)&&$$1.push([n.lastOpeningBracketAt,n.lastClosingBracketAt+1]);let g=L(t,e,n.leftOuterWhitespace,s,n.lastOpeningBracketAt,n.lastClosingBracketAt);E$1="",R=!1,q(l,s);let u;typeof E$1=="string"&&E$1.length?(u=`${g}${E$1}${g===`

`?`
`:g}`,s===n.lastClosingBracketAt+1&&(!t[s]||!x.has(t[s]))&&(u+=" "),n.leftOuterWhitespace===n.lastOpeningBracketAt&&r.last()&&r.last()[1]<n.lastOpeningBracketAt&&(!l.dumpLinkHrefsNearby||!l.dumpLinkHrefsNearby?.putOnNewLine||!x.has(t[s]))&&(u=" "+u)):u=g,u!==null&&(n.leftOuterWhitespace===0||!E(t,s-1))&&(!l.dumpLinkHrefsNearby?.enabled||n.name!=="a")&&(u=void 0);let p=0;if(R&&x.has(t[s])){l.dumpLinkHrefsNearby?.putOnNewLine&&(u=`${t[s]}${u||""}`);let P=E(t,s);P&&u?.endsWith(`
`)?p+=P-e:(!P||P>e)&&p++;}l.cb({tag:n,deleteFrom:n.leftOuterWhitespace,deleteTo:s+p,insert:u,rangesArr:r,proposedReturn:[n.leftOuterWhitespace,s+p,u]}),M(),H(e,l,r);}else n={};A(e)||(n={});}k&&(k=!1);}if((!C||t[e]==="<"&&E(t,E(t,e))&&t[E(t,e)]==="/"&&t.startsWith("script",E(t,E(t,e))))&&y(e)&&!y(e-1)&&!`'"`.includes(t[e+1])&&(!`'"`.includes(t[e+2])||/\w/.test(t[e+1]))&&!(t[e+1]==="c"&&t[e+2]===":")&&!(t[e+1]==="f"&&t[e+2]==="m"&&t[e+3]==="t"&&t[e+4]===":")&&!(t[e+1]==="s"&&t[e+2]==="q"&&t[e+3]==="l"&&t[e+4]===":")&&!(t[e+1]==="x"&&t[e+2]===":")&&!(t[e+1]==="f"&&t[e+2]==="n"&&t[e+3]===":")&&G(n,t,e)){if(A(E(t,e)))continue;if(n.nameEnds&&n.nameEnds<e&&!n.lastClosingBracketAt&&(n.onlyPlausible===!0&&n.attributes&&n.attributes.length||n.onlyPlausible===!1)){let s=L(t,e,n.leftOuterWhitespace,e,n.lastOpeningBracketAt,e);l.cb({tag:n,deleteFrom:n.leftOuterWhitespace,deleteTo:e,insert:s,rangesArr:r,proposedReturn:[n.leftOuterWhitespace,e,s]}),H(e,l,r),n={},o={};}if(n.lastOpeningBracketAt!==void 0&&n.onlyPlausible&&n.name&&!n.quotes&&(n.lastOpeningBracketAt=void 0,n.name=void 0,n.onlyPlausible=!1),(n.lastOpeningBracketAt===void 0||!n.onlyPlausible)&&!n.quotes&&(n.lastOpeningBracketAt=e,n.slashPresent=!1,n.attributes=[],V===null?n.leftOuterWhitespace=e:l.trimOnlySpaces&&V===0?n.leftOuterWhitespace=w||e:n.leftOuterWhitespace=V,`${t[e+1]}${t[e+2]}${t[e+3]}`=="!--"||`${t[e+1]}${t[e+2]}${t[e+3]}${t[e+4]}${t[e+5]}${t[e+6]}${t[e+7]}${t[e+8]}`=="![CDATA[")){let s=!0;t[e+2]==="-"&&(s=!1);let i;for(let a=e;a<h;a++)if((!i&&s&&`${t[a-2]}${t[a-1]}${t[a]}`=="]]>"||!s&&`${t[a-2]}${t[a-1]}${t[a]}`=="-->")&&(i=a),i&&(i<a&&t[a].trim()||t[a+1]===void 0)){let g=a;(t[a+1]===void 0&&!t[a].trim()||t[a]===">")&&(g+=1),(!b.length||b[b.length-1][0]!==n.lastOpeningBracketAt)&&b.push([n.lastOpeningBracketAt,i+1]),(!$$1.length||$$1[$$1.length-1][0]!==n.lastOpeningBracketAt)&&$$1.push([n.lastOpeningBracketAt,i+1]);let u=L(t,a,n.leftOuterWhitespace,g,n.lastOpeningBracketAt,i);l.cb({tag:n,deleteFrom:n.leftOuterWhitespace,deleteTo:g,insert:u,rangesArr:r,proposedReturn:[n.leftOuterWhitespace,g,u]}),e=a-1,t[a]===">"&&(e=a),n={},o={};break}}}!t[e].trim()||t[e].charCodeAt(0)===847?(V===null&&(V=e,n.lastOpeningBracketAt!==void 0&&n.lastOpeningBracketAt<e&&n.nameStarts&&n.nameStarts<n.lastOpeningBracketAt&&e===n.lastOpeningBracketAt+1&&!c.some(s=>s.name===n.name)&&(n.onlyPlausible=!0,n.name=void 0,n.nameStarts=void 0)),(t[e]===`
`||t[e]==="\r")&&(N=e,J&&(J=!1))):(V!==null&&(!n.quotes&&o.equalsAt>V-1&&o.nameEnds&&o.equalsAt>o.nameEnds&&t[e]!=='"'&&t[e]!=="'"&&(U(o)&&n.attributes.push(o),o={},n.equalsSpottedAt=void 0),V=null),J||(J=!0,F&&!C&&typeof N=="number"&&e&&N<e-1&&(t.slice(N+1,e).trim()?N=null:r.push([N+1,e])))),t[e]===" "?w===null&&(w=e):w!==null&&(w=null),n.name==="script"&&(C=!n.slashPresent);}if(t&&(l.trimOnlySpaces&&t[0]===" "||!l.trimOnlySpaces&&!t[0].trim()))for(let e=0;e<h;e++)if(l.trimOnlySpaces&&t[e]!==" "||!l.trimOnlySpaces&&t[e].trim()){r.push([0,e]);break}else t[e+1]||r.push([0,e+1]);if(t&&(l.trimOnlySpaces&&t[~-t.length]===" "||!l.trimOnlySpaces&&!t[~-t.length].trim())){for(let e=t.length;e--;)if(l.trimOnlySpaces&&t[e]!==" "||!l.trimOnlySpaces&&t[e].trim()){r.push([e+1,h]);break}}let O=r.current();if((!m||!m.cb)&&O){if(O[0]&&!O[0][0]){O[0][1];r.ranges[0]=[r.ranges[0][0],r.ranges[0][1]];}if(O[O.length-1]&&O[O.length-1][1]===t.length){O[O.length-1][0];if(r.ranges){let s=r.ranges[r.ranges.length-1][0];t[s-1]&&(l.trimOnlySpaces&&t[s-1]===" "||!l.trimOnlySpaces&&!t[s-1].trim())&&(s-=1);let i=r.ranges[r.ranges.length-1][2];r.ranges[r.ranges.length-1]=[s,r.ranges[r.ranges.length-1][1]],i?.trim()&&r.ranges[r.ranges.length-1].push(i.trimEnd());}}}return {log:{timeTakenInMilliseconds:Date.now()-D},result:_$1(t,r.current()),ranges:r.current(),allTagLocations:b,filteredTagLocations:$$1}}

var __defProp$d = Object.defineProperty;
var __getOwnPropDesc$d = Object.getOwnPropertyDescriptor;
var __decorateClass$d = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$d(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp$d(target, key, result);
  return result;
};
let OfflineInfiniteScrollRoutesViewer = class extends InfiniteScrollRoutesViewer$1 {
  index;
  idsOfRoutesMatchingLocalSearch = /* @__PURE__ */ new Set();
  maybeLoadMoreCells(_evt) {
    const scroll = this.lastCell?.getBoundingClientRect().top;
    const time = new Date().getTime();
    if (time - this.cellsLastLoadedAt > 500 && scroll && scroll < window.innerHeight + 400) {
      this.cellsLastLoadedAt = time;
      this.loadCellsForObjectsWithIdsReturn(this.apiDataDescribingCurrentList);
    }
  }
  async _init() {
    super._init();
    await this.maybeBuildFromLocalStorage();
  }
  async maybeBuildFromLocalStorage() {
    if (this.routeLookup) {
      await this._buildInvertedIndex(this.routeLookup);
    }
  }
  trigram(s, prefixWhitespace = true, postfixWhitespace = true) {
    let t = s.replace(/\-$/g, "");
    prefixWhitespace && (t = `   ${t}`);
    postfixWhitespace && (t = `${t}   `);
    const res = trigram(t);
    return res;
  }
  async getRoutesFromIndex(query) {
    this.index || await this._buildInvertedIndex(this.routeLookup);
    if (!query) {
      const routes2 = [];
      for (const rte of this.index?.documents() || []) {
        routes2.push(rte);
      }
      return routes2.sort(this.sortFunctionForLocal);
    }
    const routes = this.index?.get(query).sort(this.sortFunctionForLocal);
    return routes;
  }
  async buildInvertedMatchingRoutesSet(routes) {
    const matchedIds = /* @__PURE__ */ new Set();
    const fun = this.keyFunctionForPuttingRouteInIndex();
    for (const route of routes) {
      matchedIds.add(fun(route));
    }
    const allIds = this.apiDataDescribingEntireList.data.objects.map((section) => {
      return section.ids;
    }).flat();
    const ids = new Set(allIds);
    matchedIds.forEach((id) => ids.delete(id));
    return ids;
  }
  async fetchDataForQuery(query = this.query) {
    if (!this.isOnline) {
      const data = await this.fetchResponseForPageLocal(query);
      return data;
    }
    const res = await super.fetchDataForQuery(query);
    return res;
  }
  async fetchResponseForPageLocal(query) {
    const baseData = this.apiDataDescribingEntireList;
    let objects = [];
    let count = 0;
    const routes = await this.getRoutesFromIndex(query);
    this.loadedIds = await this.buildInvertedMatchingRoutesSet(routes);
    let currentSection = { title: "", ids: [] };
    const keyFun = this.routeKeyFunctionForSortOrder();
    const idKeyFun = this.keyFunctionForPuttingRouteInIndex();
    routes.forEach((route) => {
      count++;
      const key = keyFun(route);
      if (currentSection.title !== key) {
        currentSection = { title: key, ids: [] };
        objects.push(currentSection);
      }
      const id = idKeyFun(route);
      currentSection.ids.push(id);
    });
    const meta = baseData?.data.meta || {};
    meta.is_third_party = false;
    meta.logbook_size = count;
    meta.object_return_type = { name: { singular: "route", plural: "routes" } };
    meta.page = 0;
    meta.sort_by = "date";
    meta.total_matches = count;
    meta.total_pages = 1;
    meta.parsed_query = {
      queryDescription: `<span style="color:#F8CA68FF">\u26A0 No internet, using fallback search (no ranges)</span>`
    };
    meta.total_count = count;
    const data = {
      data: { meta, objects },
      status: 200
    };
    return data;
  }
  async _buildInvertedIndex(lookup) {
    const addFun = (route) => {
      const words = Array.from(new Set(
        be(
          [
            route.item_name,
            route.buttress_name,
            route.crag_name,
            route.area_name,
            route.country_name,
            route.route_grade,
            route.route_type_name,
            route.description_string,
            route.first_ascent_string,
            stars[route.star_count],
            route.associated_ascent_entry?.partners?.map((p) => p.name).join("") || ""
          ].join(" ")
        ).result.toLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu, "").split(/\s+/g)
      )).map((w) => this.trigram(w, true, false)).flat();
      return words;
    };
    const queryFun = (query) => {
      const res = Array.from(new Set(
        query.toLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu, "").split(/\s+/g)
      )).map((w) => this.trigram(w, true, false)).flat();
      return res;
    };
    const index = new invertedIndex([addFun, queryFun]);
    Object.values(lookup.routes).forEach((route) => {
      index.add(route);
    });
    this.index = index;
  }
  get sortFunctionForLocal() {
    const dir = this.sortDirectionFromButton;
    const order = this.sort_order_picker.value;
    const dateTimeFun = (rte) => {
      return new Date(rte.associated_ascent_entry?.ascent_date).getTime();
    };
    if (order === "ltr") {
      if (dir === "asc")
        return (a, b) => a.order - b.order;
      return (a, b) => b.order - a.order;
    } else if (order === "grade") {
      if (dir === "asc")
        return (a, b) => a.grade_value_rf - b.grade_value_rf;
      return (a, b) => b.grade_value_rf - a.grade_value_rf;
    } else if (order === "date") {
      if (dir === "asc")
        return (a, b) => dateTimeFun(a) - dateTimeFun(b);
      return (a, b) => dateTimeFun(b) - dateTimeFun(a);
    } else if (order === "crag_name") {
      if (dir === "asc")
        return (a, b) => a.crag_name.localeCompare(b.crag_name);
      return (a, b) => b.crag_name.localeCompare(a.crag_name);
    }
    throw new Error(`missing order function: '${order}'`);
  }
  routeKeyFunctionForSortOrder() {
    return (rte) => {
      const ascent = new UkcLocalStorage.WishlistInfo(rte.associated_ascent_entry);
      switch (this.sort_order_picker.value) {
        case "ltr":
          return rte.buttress_name;
        case "date":
          return ascent.dateString;
        case "style":
          return ascent.ascent_style?.short_name || "unknown";
        case "grade":
          return rte.route_grade;
        case "crag_name":
          return rte.crag_name;
        default:
          throw new Error(`missing key function for sort order: '${this.sort_order_picker.value}'`);
      }
    };
  }
};
OfflineInfiniteScrollRoutesViewer = __decorateClass$d([
  controller
], OfflineInfiniteScrollRoutesViewer);
const OfflineInfiniteScrollRoutesViewer$1 = OfflineInfiniteScrollRoutesViewer;

var __defProp$c = Object.defineProperty;
var __getOwnPropDesc$c = Object.getOwnPropertyDescriptor;
var __decorateClass$c = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$c(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp$c(target, key, result);
  return result;
};
const sharedStorage$3 = UkcLocalStorage.sharedLogbook;
const generateApiUrl$7 = () => {
  const targetOrigin = apiOrigin();
  return `${targetOrigin}/v1/rockfax/search/logbook`;
};
let LogbookViewerElement = class extends OfflineInfiniteScrollRoutesViewer$1 {
  searchBarPlaceholderString = "Search all routes/crags...";
  get apiUrl() {
    return generateApiUrl$7();
  }
  get defaultSortOrder() {
    return "date";
  }
  connectedCallback() {
    super.connectedCallback();
    this.sort_button.style.display = "block";
    this.sort_order_picker.style.display = "block";
    this.input.placeholder = "Filter your logbook...";
    document.addEventListener("DOMContentLoaded", () => {
      this.searchbar.submitSearchHandler = (resultsUrl) => {
        window.location.href = resultsUrl;
      };
      this.query = this.urlFilter || "";
      this.searchbar.input.value = "";
    });
  }
  get allowEmptyQuery() {
    return true;
  }
  get userIdFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get("user_id");
    if (id) {
      return parseInt(id);
    }
    return Cookies.default().userIdUkc;
  }
  get userIdForRequest() {
    return this.userIdFromUrl || Cookies.default().userIdUkc;
  }
  buildResults(_data) {
    super.buildResults(_data);
    const meta = _data?.data?.meta;
    this.routes_viewer_title.innerHTML = `<span style="font-size: 0.8em">Logbook for <a href="/user/profile.php?id=${meta?.user_id}">${escape(meta?.user_name || "")}</a></span>`;
  }
  appendRoute(target, route, _tagName) {
    const el = appendRoute({ target, route, tagName: "logbook-result" });
    const myAscent = sharedStorage$3.bestAscent(route.id_ukc);
    el.logStatus = sharedStorage$3.logbookStatus(route.id_ukc);
    el.setAttribute("title", myAscent?.lastClimbedDescription || "not in your logbook");
    const ascent = new UkcLocalStorage.AscentInfo(route.associated_ascent_entry);
    if (ascent) {
      el.ascentStyleSimple = escape(ascent.simple_style_name || "unknown");
      el.partners = ascent.partners;
      el.ascentStyle = ascent.ascent_style?.short_name || "unknown";
      el.ascentNotes = ascent.notes;
      el.ascent_date.innerText = this.sort_order_picker.value === "date" ? "" : ascent.shortDateString;
    }
    el.wishlistStatus = sharedStorage$3.wishlistStatus(route.id_ukc);
    return el;
  }
  bodyForRequest(query, pageNo) {
    const res = super.bodyForRequest(query, pageNo);
    res.user_id = this.userIdForRequest;
    return res;
  }
  htmlForSlot(slotName) {
    if (slotName === "routes-viewer-sort-order-options") {
      return html$1`
      <option value="date"      >Order by ascent date</option>
      <option value="crag_name" >Order by crag name</option>
      <option value="style"     >Order by ascent style</option>
      <option value="grade"     >Order by route grade</option>
      <!--<option value="voted_grade">Order by voted grade</option>-->
      `;
    }
    const sup = super.htmlForSlot(slotName);
    if (sup) {
      return sup;
    }
    return "";
  }
  keyFunctionForPuttingRouteInIndex() {
    return (rte) => rte.associated_ascent_entry.id;
  }
};
LogbookViewerElement = __decorateClass$c([
  controller
], LogbookViewerElement);
const LogbookViewerElement$1 = LogbookViewerElement;

var __defProp$b = Object.defineProperty;
var __getOwnPropDesc$b = Object.getOwnPropertyDescriptor;
var __decorateClass$b = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$b(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp$b(target, key, result);
  return result;
};
const sharedStorage$2 = UkcLocalStorage.sharedLogbook;
const generateApiUrl$6 = () => {
  const targetOrigin = apiOrigin();
  return `${targetOrigin}/v1/rockfax/search/wishlist`;
};
let WishlistViewerElement = class extends LogbookViewerElement$1 {
  get apiUrl() {
    return generateApiUrl$6();
  }
  routeKeyFunctionForSortOrder() {
    return (rte) => {
      const ascent = new UkcLocalStorage.WishlistInfo(rte.associated_ascent_entry);
      switch (this.sort_order_picker.value) {
        case "date":
          return ascent.dateString;
        case "crag_name":
          return rte.crag_name;
        case "grade":
          return rte.route_grade;
        default:
          return rte.buttress_name;
      }
    };
  }
  buildResults(_data) {
    super.buildResults(_data);
    const meta = _data?.data?.meta;
    this.routes_viewer_title.innerHTML = `<span style="font-size: 0.8em">Wishlist for <a href="/user/profile.php?id=${meta?.user_id}">${escape(meta?.user_name || "")}</a></span>`;
  }
  appendRoute(target, route, _tagName) {
    const el = appendRoute({ target, route, tagName: "logbook-result" });
    const myAscent = sharedStorage$2.bestAscent(route.id_ukc);
    el.logStatus = sharedStorage$2.logbookStatus(route.id_ukc);
    el.setAttribute("title", myAscent?.lastClimbedDescription || "not in your logbook");
    const ascent = new UkcLocalStorage.WishlistInfo(route.associated_ascent_entry);
    el.partner_names_with.hidden = true;
    if (ascent) {
      el.ascentStyleSimple = ascent.simple_style_name || "unknown";
      el.ascent_style_indicator.style.display = "none";
    }
    el.ascent_notes.innerHTML = escape(route.description_string?.trim());
    el.ascent_notes.hidden = false;
    el.wishlistStatus = sharedStorage$2.wishlistStatus(route.id_ukc);
    return el;
  }
  htmlForSlot(slotName) {
    if (slotName === "routes-viewer-sort-order-options") {
      return html$1`
      <option value="date"      >Order by date added</option>
      <option value="crag_name" >Order by crag name</option>
      <option value="grade"     >Order by route grade</option>
      <!--<option value="voted_grade">Order by voted grade</option>-->
      `;
    }
    const sup = super.htmlForSlot(slotName);
    if (sup) {
      return sup;
    }
    return "";
  }
};
WishlistViewerElement = __decorateClass$b([
  controller
], WishlistViewerElement);

var __defProp$a = Object.defineProperty;
var __getOwnPropDesc$a = Object.getOwnPropertyDescriptor;
var __decorateClass$a = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$a(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp$a(target, key, result);
  return result;
};
const sharedStorage$1 = UkcLocalStorage.sharedLogbook;
const generateApiUrl$5 = () => {
  const targetOrigin = apiOrigin();
  return `${targetOrigin}/v1/rockfax/search/ascents/partner`;
};
let PartnerAscentsViewerElement = class extends PagedRoutesViewer$1 {
  get apiUrl() {
    return generateApiUrl$5();
  }
  ascentsByDateLookup = {};
  get defaultSortOrder() {
    return "date";
  }
  connectedCallback() {
    super.connectedCallback();
    this.sort_button.style.display = "block";
    this.sort_order_picker.style.display = "block";
    this.input.placeholder = `Filter your partners' ascents...`;
  }
  get allowEmptyQuery() {
    return true;
  }
  appendRoute(target, route, _tagName) {
    const el = appendRoute({ target, route, tagName: "logbook-result" });
    const showCragName = !(this.sort_order_picker.value === "date" || this.sort_order_picker.value === "crag_name");
    el.showCragName = showCragName;
    const myAscent = sharedStorage$1.bestAscent(route.id_ukc);
    el.logStatus = sharedStorage$1.logbookStatus(route.id_ukc);
    el.setAttribute("title", myAscent?.lastClimbedDescription || "not in your logbook");
    const ascent = new UkcLocalStorage.AscentInfo(route.associated_ascent_entry);
    if (ascent) {
      el.ascentStyleSimple = ascent.simple_style_name || "unknown";
      el.ascentNotes = ascent.notes;
      el.ascensionistDetails = { name: ascent.user_name, id: ascent.user_id_ukc };
      el.partners = ascent.partners;
      el.ascentStyle = ascent.ascent_style?.short_name || "unknown";
      el.ascent_date.innerText = this.sort_order_picker.value === "date" ? "" : ascent.shortDateString;
    }
    el.wishlistStatus = sharedStorage$1.wishlistStatus(route.id_ukc);
    return el;
  }
  async fetchResults(query, pageNo) {
    if (!this.isOnline) {
      this.clearResultsDropdown();
      appendNoResults(this, "Partner ascents are not available offline");
      return void 0;
    }
    const res = await super.fetchResults(query, pageNo);
    if (res.data?.meta?.is_third_party) {
      this.input.placeholder = `Filter ${res.data?.meta?.user_name_short}'s partners' ascents...`;
    } else {
      this.input.placeholder = `Filter your partners' ascents...`;
    }
    this.routes_viewer_title.innerHTML = `<span style="font-size: 0.8em">Recent partner ascents for <a href="/user/profile.php?id=${res.data?.meta?.user_id}">${escape(res.data?.meta?.user_name || "")}</a></span>`;
    return res;
  }
  get userIdFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get("user_id");
    if (id) {
      return parseInt(id);
    }
    return Cookies.default().userIdUkc;
  }
  get userIdForRequest() {
    return this.userIdFromUrl || Cookies.default().userIdUkc;
  }
  bodyForRequestAndPage(query, pageNo) {
    const body = super.bodyForRequestAndPage(query, pageNo);
    body.user_id = this.userIdForRequest;
    body.sort_by = this.sort_order_picker.value;
    return body;
  }
  htmlForSlot(slotName) {
    if (slotName === "routes-viewer-sort-order-options") {
      return html$1`
        <option value="date"      >Order by ascent date</option>
        <option value="crag_name" >Order by crag name</option>
        <option value="grade"     >Order by route grade</option>
        <option value="user_name" >Order by partner</option>
        <!--<option value="voted_grade">Order by voted grade</option>-->
      `;
    }
    const sup = super.htmlForSlot(slotName);
    if (sup) {
      return sup;
    }
    return "";
  }
};
PartnerAscentsViewerElement = __decorateClass$a([
  controller
], PartnerAscentsViewerElement);
const PartnerAscentsViewerElement$1 = PartnerAscentsViewerElement;

var __defProp$9 = Object.defineProperty;
var __getOwnPropDesc$9 = Object.getOwnPropertyDescriptor;
var __decorateClass$9 = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$9(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp$9(target, key, result);
  return result;
};
const generateApiUrl$4 = () => {
  const targetOrigin = apiOrigin();
  return `${targetOrigin}/v1/rockfax/search/ascents/top`;
};
let TopAscentsViewerElement = class extends PartnerAscentsViewerElement$1 {
  get apiUrl() {
    return generateApiUrl$4();
  }
  connectedCallback() {
    super.connectedCallback();
    this.fixedHeaderFillingStrategy = "closestTwo";
    this.fixed_section_header_2.hidden = false;
    this.sort_button.style.display = "block";
    this.sort_order_picker.style.display = "block";
    this.input.placeholder = `Filter recent top ascents...`;
    this.routes_viewer_title.innerHTML = `<span style="font-size: 0.8em">Recent top ascents</span>`;
  }
  async fetchResults(query, pageNo) {
    if (!this.isOnline) {
      this.clearResultsDropdown();
      appendNoResults(this, "Top ascents are not available offline");
      return void 0;
    }
    const res = await super.fetchResults(query, pageNo);
    this.currentRouteDate = void 0;
    this.currentCragName = void 0;
    this.input.placeholder = `Filter recent top ascents...`;
    this.routes_viewer_title.innerHTML = `<span style="font-size: 0.8em">Recent top ascents</span>`;
    return res;
  }
  currentRouteDate = void 0;
  currentCragName = void 0;
  willAppendRoute(route) {
    switch (this.sort_order_picker.value) {
      case "crag_name":
        return this.appendInterstitialDateHeaderForRoute(route);
      case "date":
        return this.appendInterstitialCragNameHeaderForRoute(route);
    }
  }
  appendInterstitialDateHeaderForRoute(route) {
    const date = new Date(route.associated_ascent_entry.ascent_date).getTime();
    if (date !== this.currentRouteDate || route.crag_name !== this.currentCragName) {
      this.currentRouteDate = date;
      this.currentCragName = route.crag_name;
      this.queue.push(
        () => {
          const headerEl = document.createElement("section-header");
          headerEl.classList.add("sub-header");
          this.routes_viewer_container.appendChild(headerEl);
          headerEl.flag_element.hidden = true;
          headerEl.left_label.innerText = new Date(route.associated_ascent_entry.ascent_date).toLocaleString("default", { weekday: "long", year: "numeric", month: "long", day: "numeric" });
          headerEl.style.fontSize = "0.75em";
        }
      );
    }
  }
  appendInterstitialCragNameHeaderForRoute(route) {
    const date = new Date(route.associated_ascent_entry.ascent_date).getTime();
    if (route.crag_name !== this.currentCragName || date !== this.currentRouteDate) {
      this.currentRouteDate = date;
      this.currentCragName = route.crag_name;
      this.queue.push(
        () => {
          const headerEl = document.createElement("section-header");
          headerEl.classList.add("sub-header");
          this.routes_viewer_container.appendChild(headerEl);
          headerEl.left_label.innerHTML = this.linkForCragId(route.crag_id_ukc, route.crag_name);
          headerEl.right_label.innerHTML = route.county_name;
          headerEl.flag_element.hidden = false;
          headerEl.flag_element.className = `ml-1 fi fi-${route.associated_ascent_entry?.country_code.toLowerCase()}`;
          headerEl.style.fontSize = "0.75em";
        }
      );
    }
  }
  linkForCragId(cragId, cragName) {
    if (window.location.host.match(/localhost/g)) {
      return `<a style='color:#bbdcee;opacity: 0.75;' href='/pages/crag/?crag_id=${cragId}'>${escape(cragName)}</a>`;
    }
    if (window.location.host.match(/dkk8m.ondigitalocean.app/g)) {
      return `<a style='color:#bbdcee;opacity: 0.75;' href='/crag/?crag_id=${cragId}'>${escape(cragName)}</a>`;
    }
    return `<a style='color:#bbdcee;opacity: 0.75;' href='/logbook/crags/ -${cragId}'>${escape(cragName)}</a>`;
  }
};
TopAscentsViewerElement = __decorateClass$9([
  controller
], TopAscentsViewerElement);
const TopAscentsViewerElement$1 = TopAscentsViewerElement;

var __defProp$8 = Object.defineProperty;
var __getOwnPropDesc$8 = Object.getOwnPropertyDescriptor;
var __decorateClass$8 = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$8(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp$8(target, key, result);
  return result;
};
const generateApiUrl$3 = () => {
  const targetOrigin = apiOrigin();
  return `${targetOrigin}/v1/rockfax/search/ascents/winter`;
};
let WinterAscentsViewerElement = class extends TopAscentsViewerElement$1 {
  get apiUrl() {
    return generateApiUrl$3();
  }
  connectedCallback() {
    super.connectedCallback();
    this.sort_button.style.display = "block";
    this.sort_order_picker.style.display = "block";
    this.input.placeholder = `Filter recent winter ascents...`;
    this.routes_viewer_title.innerHTML = `<span style="font-size: 0.8em">Recent winter ascents</span>`;
  }
  async fetchResults(query, pageNo) {
    if (!this.isOnline) {
      this.clearResultsDropdown();
      appendNoResults(this, "Winter ascents are not available offline");
      return void 0;
    }
    const res = await super.fetchResults(query, pageNo);
    this.input.placeholder = `Filter recent winter ascents...`;
    this.routes_viewer_title.innerHTML = `<span style="font-size: 0.8em">Recent winter ascents</span>`;
    return res;
  }
};
WinterAscentsViewerElement = __decorateClass$8([
  controller
], WinterAscentsViewerElement);
const WinterAscentsViewerElement$1 = WinterAscentsViewerElement;

var __defProp$7 = Object.defineProperty;
var __getOwnPropDesc$7 = Object.getOwnPropertyDescriptor;
var __decorateClass$7 = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$7(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp$7(target, key, result);
  return result;
};
const generateApiUrl$2 = () => {
  const targetOrigin = apiOrigin();
  return `${targetOrigin}/v1/rockfax/search/ascents/alpine`;
};
let AlpineAscentsViewerElement = class extends WinterAscentsViewerElement$1 {
  get apiUrl() {
    return generateApiUrl$2();
  }
  connectedCallback() {
    super.connectedCallback();
    this.sort_button.style.display = "block";
    this.sort_order_picker.style.display = "block";
    this.input.placeholder = `Filter recent alpine ascents...`;
    this.routes_viewer_title.innerHTML = `<span style="font-size: 0.8em">Recent alpine ascents</span>`;
  }
  async fetchResults(query, pageNo) {
    if (!this.isOnline) {
      this.clearResultsDropdown();
      appendNoResults(this, "Alpine ascents are not available offline");
      return void 0;
    }
    const res = await super.fetchResults(query, pageNo);
    this.input.placeholder = `Filter recent alpine ascents...`;
    this.routes_viewer_title.innerHTML = `<span style="font-size: 0.8em">Recent alpine ascents</span>`;
    return res;
  }
};
AlpineAscentsViewerElement = __decorateClass$7([
  controller
], AlpineAscentsViewerElement);

var __defProp$6 = Object.defineProperty;
var __getOwnPropDesc$6 = Object.getOwnPropertyDescriptor;
var __decorateClass$6 = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$6(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp$6(target, key, result);
  return result;
};
const generateApiUrl$1 = () => {
  const targetOrigin = apiOrigin();
  return `${targetOrigin}/v1/rockfax/search/ascents/mountain`;
};
let MountainAscentsViewerElement = class extends WinterAscentsViewerElement$1 {
  get apiUrl() {
    return generateApiUrl$1();
  }
  connectedCallback() {
    super.connectedCallback();
    this.sort_button.style.display = "block";
    this.sort_order_picker.style.display = "block";
    this.input.placeholder = `Filter recent mountain ascents...`;
    this.routes_viewer_title.innerHTML = `<span style="font-size: 0.8em">Recent mountain ascents</span>`;
  }
  async fetchResults(query, pageNo) {
    if (!this.isOnline) {
      this.clearResultsDropdown();
      appendNoResults(this, "Alpine ascents are not available offline");
      return void 0;
    }
    const res = await super.fetchResults(query, pageNo);
    this.input.placeholder = `Filter recent mountain ascents...`;
    this.routes_viewer_title.innerHTML = `<span style="font-size: 0.8em">Recent mountain ascents</span>`;
    return res;
  }
};
MountainAscentsViewerElement = __decorateClass$6([
  controller
], MountainAscentsViewerElement);

var __defProp$5 = Object.defineProperty;
var __getOwnPropDesc$5 = Object.getOwnPropertyDescriptor;
var __decorateClass$5 = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$5(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp$5(target, key, result);
  return result;
};
const generateApiUrl = () => {
  const targetOrigin = apiOrigin();
  return `${targetOrigin}/v1/rockfax/search/route_ukc_for_crag`;
};
const sharedStorage = UkcLocalStorage.sharedLogbook;
let CragRoutesViewerElement = class extends OfflineInfiniteScrollRoutesViewer$1 {
  cragId;
  get apiUrl() {
    return generateApiUrl();
  }
  get urlPage() {
    return void 0;
  }
  set urlPage(_newVal) {
    return;
  }
  get sortOrderKey() {
    return "routes_viewer_sort_order";
  }
  get defaultSortOrder() {
    return "ltr";
  }
  get allowEmptyQuery() {
    return true;
  }
  connectedCallback() {
    if (window.location.host.match(/dkk8m.ondigitalocean.app|localhost/)) {
      let urlParams = new URLSearchParams(window.location.search);
      const cragId = Number(urlParams.get("crag_id"));
      console.error("turn this off for prod");
      if (cragId)
        this.cragId = cragId;
    }
    super.connectedCallback();
    this.sort_button.style.display = "block";
    this.sort_order_picker.style.display = "block";
    this.input.placeholder = "Filter routes at this crag...";
    this.sort_order_picker.value = this.urlSortOrder || this.savedSortOrder;
  }
  buildRoutesLookup(data) {
    const lookup = super.buildRoutesLookup(data);
    lookup.meta.crag_name = data.data.meta["crag_name"];
    return lookup;
  }
  keyFunctionForPuttingRouteInIndex() {
    return (rte) => rte.id_ukc;
  }
  bodyForRequest(query, _pageNo) {
    const type = Object.keys(this.routeLookup || {}).length ? "ids" : "full";
    const cookie = Cookies.default().cookie;
    return {
      cookie,
      search_query: query,
      sort_by: this.sort_order_picker.value,
      direction: this.sortDirectionFromButton,
      return_type: type,
      crag_id: Number(this.cragId)
    };
  }
  buildResults(_data) {
    super.buildResults(_data);
    const meta = _data?.data?.meta;
    this.routes_viewer_title.innerHTML = `<span style="font-size: 0.8em">Routes at ${escape(meta?.crag_name || "")}</span>`;
  }
  appendRoute(target, route, _tagName) {
    const el = appendRoute({ target, route, tagName: "route-result" });
    const myAscent = sharedStorage.bestAscent(route.id_ukc);
    el.logStatus = sharedStorage.logbookStatus(route.id_ukc);
    el.setAttribute("title", escape(myAscent?.lastClimbedDescription) || "not in your logbook");
    el.routeDescription = escape(route.description_string_rockfax || route.description_string);
    el.faDetails = escape(route.first_ascent_string);
    el.wishlistStatus = sharedStorage.wishlistStatus(route.id_ukc);
    return el;
  }
  htmlForSlot(slotName) {
    if (slotName === "routes-viewer-sort-order-options") {
      return this.sortOrderOptionsForSortOrder(this.urlSortDirection || this.savedSortDirection || "asc", this.sort_order_picker?.selectedIndex || 0);
    }
    const sup = super.htmlForSlot(slotName);
    if (sup) {
      return sup;
    }
    return "";
  }
  toggleSortDirection() {
    super.toggleSortDirection();
    this.sort_order_picker.innerHTML = this.sortOrderOptionsForSortOrder(this.sortDirectionFromButton, this.sort_order_picker.selectedIndex);
  }
  sortOrderChanged(evt) {
    super.sortOrderChanged(evt);
    if (this.sort_order_picker.value !== "ltr")
      return;
    this.sort_order_picker.innerHTML = this.sortOrderOptionsForSortOrder(this.sortDirectionFromButton, this.sort_order_picker.selectedIndex);
  }
  sortOrderOptionsForSortOrder(sortOrder, selectedIndex) {
    const ltrSelectedString = selectedIndex === 0 ? "selected" : "";
    const gradeSelectedString = selectedIndex === 1 ? "selected" : "";
    if (sortOrder === "asc") {
      return html$1`
      <option value="ltr" ${ltrSelectedString}>Order left to right</option>
      <option value="grade" ${gradeSelectedString}>Order by route grade</option>
      <!--<option value="voted_grade">Order by voted grade</option>-->
      `;
    }
    return html$1`
      <option value="ltr" ${ltrSelectedString}>Order right to left</option>
      <option value="grade" ${gradeSelectedString}>Order by route grade</option>
      <!--<option value="voted_grade">Order by voted grade</option>-->
      `;
  }
};
__decorateClass$5([
  attr
], CragRoutesViewerElement.prototype, "cragId", 2);
CragRoutesViewerElement = __decorateClass$5([
  controller
], CragRoutesViewerElement);

const template$2 = (element) => {
  const elementName = element.elementName;
  return html$1`
  <div class='rfd-search'>
    <div data-target='${elementName}.gray_view' data-action='click:${elementName}#hide' id='gray-view'></div>
    <div data-target='${elementName}.container' class='filters-controller-content' >
      <span>Hello</span>
    </div>
    
  </div>`;
};

var __defProp$4 = Object.defineProperty;
var __getOwnPropDesc$4 = Object.getOwnPropertyDescriptor;
var __decorateClass$4 = (decorators, target2, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$4(target2, key) : target2;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target2, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp$4(target2, key, result);
  return result;
};
let FiltersControllerElement = class extends BaseCon$1 {
  gray_view;
  container;
  get template() {
    return template$2;
  }
  die() {
    console.log("hello");
    this.parentElement.removeChild(this);
  }
  show() {
    this.gray_view.style.opacity = "1";
    this.container.style.top = "0";
  }
  hide() {
    this.gray_view.style.opacity = "0";
    this.container.style.top = "100vh";
    setTimeout(() => {
      this.die();
    }, 500);
  }
};
__decorateClass$4([
  target
], FiltersControllerElement.prototype, "gray_view", 2);
__decorateClass$4([
  target
], FiltersControllerElement.prototype, "container", 2);
FiltersControllerElement = __decorateClass$4([
  controller
], FiltersControllerElement);

const flagIcons_min = '';

const template$1 = (element) => {
  return html$1`
    <span data-target='${element.elementName}.left_label'></span>
    <span><span data-target='${element.elementName}.right_label'></span><span data-target='${element.elementName}.flag_element' style='opacity:0.9;' hidden></span></span>
`;
};

var __defProp$3 = Object.defineProperty;
var __getOwnPropDesc$3 = Object.getOwnPropertyDescriptor;
var __decorateClass$3 = (decorators, target2, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$3(target2, key) : target2;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target2, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp$3(target2, key, result);
  return result;
};
let SectionHeaderElement = class extends BaseCon$1 {
  left_label;
  right_label;
  flag_element;
  get template() {
    return template$1;
  }
};
__decorateClass$3([
  target
], SectionHeaderElement.prototype, "left_label", 2);
__decorateClass$3([
  target
], SectionHeaderElement.prototype, "right_label", 2);
__decorateClass$3([
  target
], SectionHeaderElement.prototype, "flag_element", 2);
SectionHeaderElement = __decorateClass$3([
  controller
], SectionHeaderElement);

const cragIconTemplate = (_element) => {
  return html$1`
<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path data-target='crag-icon.stroke' fill-rule="evenodd" clip-rule="evenodd" d="M35.2797 13.6441C36.5208 11.8103 38.5673 10.7879 40.6491 10.7879C42.7304 10.7879 44.7598 11.8813 45.9602 13.6813L45.9703 13.6964L62.1445 38.4495C65.1097 42.9245 61.3358 47.8788 56.9047 47.8788H6.53211C1.71195 47.8788 -1.67085 42.6244 1.08555 38.2616L1.09176 38.2518L18.4137 11.1955C19.7424 9.03294 22.0318 8.12122 24.0381 8.12122C26.0129 8.12122 28.2465 9.06783 29.5495 11.1478L33.2254 16.6014L35.2797 13.6441Z" fill="black"/>
    <path data-target='crag-icon.fill' d="M58.9054 40.5833L42.7332 15.8333C42.233 15.0833 41.3994 14.6667 40.6491 14.6667C39.8155 14.6667 38.9819 15.0833 38.4817 15.8333L33.1772 23.4697L26.2888 13.25C25.7887 12.4167 24.8717 12 24.0381 12C23.1211 12 22.2041 12.4167 21.704 13.25L4.36471 40.3333C3.36437 41.9167 4.53143 44 6.53211 44H56.9047C58.7386 44 59.9057 42.0833 58.9054 40.5833Z" fill="white"/>
    <line data-target='crag-icon.stroke' x1="32.7288" y1="18.7442" x2="38.7442" y2="29.2712" stroke="black" stroke-width="4" stroke-linecap="round"/>
</svg>
`;
};

var __defProp$2 = Object.defineProperty;
var __getOwnPropDesc$2 = Object.getOwnPropertyDescriptor;
var __decorateClass$2 = (decorators, target2, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$2(target2, key) : target2;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target2, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp$2(target2, key, result);
  return result;
};
let CragIconElement = class extends BaseCon$1 {
  stroke;
  fill;
  get template() {
    return cragIconTemplate;
  }
};
__decorateClass$2([
  target
], CragIconElement.prototype, "stroke", 2);
__decorateClass$2([
  target
], CragIconElement.prototype, "fill", 2);
CragIconElement = __decorateClass$2([
  controller
], CragIconElement);

const template = (_element) => {
  return html$1`
<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M58.9054 40.5833L42.7332 15.8333C42.233 15.0833 41.3994 14.6667 40.6491 14.6667C39.8155 14.6667 38.9819 15.0833 38.4817 15.8333L33.1772 23.4697L26.2888 13.25C25.7887 12.4167 24.8717 12 24.0381 12C23.1211 12 22.2041 12.4167 21.704 13.25L4.36471 40.3333C3.36437 41.9167 4.53143 44 6.53211 44H56.9047C58.7386 44 59.9057 42.0833 58.9054 40.5833Z" fill="#696770FF"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M40.6491 10.7879C38.5673 10.7879 36.5208 11.8103 35.2797 13.6441L33.2254 16.6014L29.5495 11.1478C28.2465 9.06783 26.0129 8.12122 24.0381 8.12122C22.0318 8.12122 19.7424 9.03294 18.4137 11.1955L1.09176 38.2518L1.08555 38.2616C-1.67085 42.6244 1.71195 47.8788 6.53211 47.8788H56.9047C61.3358 47.8788 65.1097 42.9245 62.1445 38.4495L45.9703 13.6964L45.9602 13.6813C44.7598 11.8813 42.7304 10.7879 40.6491 10.7879ZM58.9054 40.5833L42.7332 15.8333C42.233 15.0833 41.3994 14.6667 40.6491 14.6667C39.8155 14.6667 38.9819 15.0833 38.4817 15.8333L34.1054 22.1335L48.1 44H56.9047C58.7386 44 59.9057 42.0833 58.9054 40.5833Z" fill="black"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M33.1772 23.4697L34.1054 22.1335L48.1 44H6.53211C4.53143 44 3.36437 41.9167 4.36471 40.3333L21.704 13.25C22.2041 12.4167 23.1211 12 24.0381 12C24.8717 12 25.7887 12.4167 26.2888 13.25L33.1772 23.4697Z" fill="white"/>
    <line x1="31.7648" y1="17.5963" x2="49.5963" y2="45.2352" stroke="black" stroke-width="4" stroke-linecap="round"/>
</svg>
`;
};

var __defProp$1 = Object.defineProperty;
var __getOwnPropDesc$1 = Object.getOwnPropertyDescriptor;
var __decorateClass$1 = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$1(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp$1(target, key, result);
  return result;
};
let ButtressIconElement = class extends BaseCon$1 {
  get template() {
    return template;
  }
};
ButtressIconElement = __decorateClass$1([
  controller
], ButtressIconElement);

const wishlistIndicatorTemplate = (_el) => {
  return html$1`
<svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path id="routeWishList-bezier2" stroke="none" fill="#F8CA23" d="M 69.15,86 C 68.23,86 67.26,85.71 66.2,85.11 L 45.02,74.03 23.75,85.14 C 21.79,86.24 19.9,86.28 18.53,85.24 17.55,84.51 16.5,83.05 17.01,80.24 L 21.03,56.68 3.96,40.02 C 1.82,38.01 1.81,36.2 2.19,35.03 2.58,33.87 3.62,32.42 6.44,32.05 L 30.17,28.59 40.82,7.09 C 42.08,4.54 43.78,4 44.98,4 46.17,4 47.86,4.53 49.16,7.06 L 59.84,28.59 83.58,32.06 C 86.37,32.42 87.42,33.86 87.81,35.01 88.18,36.17 88.2,37.94 86.22,39.98 L 68.96,56.68 72.99,80.26 C 73.51,83.04 72.45,84.51 71.47,85.24 70.81,85.74 70.01,86 69.15,86 Z M 69.15,86" />
</svg>
`;
};

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __decorateClass = (decorators, target2, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target2, key) : target2;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target2, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp(target2, key, result);
  return result;
};
let WishlistIndicatorElement = class extends BaseCon$1 {
  stroke;
  fill;
  get template() {
    return wishlistIndicatorTemplate;
  }
};
__decorateClass([
  target
], WishlistIndicatorElement.prototype, "stroke", 2);
__decorateClass([
  target
], WishlistIndicatorElement.prototype, "fill", 2);
WishlistIndicatorElement = __decorateClass([
  controller
], WishlistIndicatorElement);
})();
