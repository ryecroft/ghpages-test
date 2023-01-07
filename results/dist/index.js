(function () {
'use strict';
const style = "*,\n::after,\n::before {\n  box-sizing: border-box;\n}\n\n.icon-nightmode-toggle {\n  position: absolute;\n  right: 5pt;\n  top: 5pt;\n  display: inline-block;\n  background-color: rgba(0, 0, 0, 0.392);\n  cursor: pointer;\n  width: var(--icon-size);\n  height: var(--icon-size);\n  -webkit-mask-size: var(--icon-size) var(--icon-size);\n  -webkit-mask-repeat: no-repeat;\n  -webkit-mask-position: center;\n  mask-size: var(--icon-size) var(--icon-size);\n  mask-repeat: no-repeat;\n  mask-position: center;\n  mask: url(\"/assets/moon.svg\");\n  -webkit-mask: url(\"/assets/moon.svg\");\n}\n\n.icon-nightmode-toggle:focus {\n  background-color: var(--flash-color);\n}\n\ninput[type=search]::-webkit-search-decoration,\ninput[type=search]::-webkit-search-cancel-button,\ninput[type=search]::-webkit-search-results-button,\ninput[type=search]::-webkit-search-results-decoration {\n  display: none;\n}\n\nukc-searchbar {\n  margin-bottom: 12px;\n  transition: all;\n}\n\n.nightmode .icon-nightmode-toggle {\n  width: var(--icon-size);\n  height: var(--icon-size);\n  -webkit-mask-size: var(--icon-size) var(--icon-size);\n  -webkit-mask-repeat: no-repeat;\n  -webkit-mask-position: center;\n  mask-size: var(--icon-size) var(--icon-size);\n  mask-repeat: no-repeat;\n  mask-position: center;\n  mask: url(\"/assets/sun.svg\");\n  -webkit-mask: url(\"/assets/sun.svg\");\n  background-color: rgba(255, 255, 255, 0.492);\n}\n\n.nightmode .rfd-search {\n  --background-color-page: #19181f;\n  --background-color-page-semi: #19181fa5;\n  --brightness-multiplier: 100%;\n  --background-color: #282630;\n  --background-color-2: var(--background-color-page-semi);\n  --title-color: rgb(217, 217, 217);\n  --subtitle-color: rgba(255, 255, 255, 0.62);\n  --subtitle-color-2: rgba(255, 255, 255, 0.492);\n  --subtitle-color-3: rgba(255, 255, 255, 0.39);\n  --subtitle-color-4: rgba(255, 255, 255, 0.28);\n  --flash-color: hotpink;\n  --border-color: #565656;\n}\n\n.nightmode .rfd-search logbook-result .result-entry-container {\n  border-bottom: solid #212029 1px;\n}\n\n.nightmode .rfd-search page-button {\n  background-color: var(--background-color);\n  color: var(--subtitle-color-2);\n}\n\n.nightmode .rfd-search .page-control-current {\n  color: var(--subtitle-color-2);\n  background-color: var(--background-color-2);\n}\n\n.nightmode .rfd-search #page-control-next.disabled,\n.nightmode .rfd-search #page-control-previous.disabled {\n  background-color: var(--background-color);\n}\n\n.nightmode .rfd-search #search-widget {\n  box-shadow: 0px 0px 10px rgba(1, 1, 1, 0.2);\n}\n\n.nightmode .rfd-search .gray-background input {\n  background-color: var(--background-color);\n}\n\n@media (hover: hover) and (pointer: fine) {\n  .nightmode .icon-nightmode-toggle:hover {\n    background-color: var(--flash-color);\n  }\n  .nightmode .result-entry:hover {\n    border-radius: calc(var(--radius) * 0.7);\n  }\n  .nightmode .mouse-over:hover {\n    color: var(--flash-color);\n  }\n  .nightmode .icon:hover {\n    background-color: var(--flash-color);\n  }\n  .nightmode .result-entry-container:hover {\n    background-color: var(--background-color-2);\n  }\n  .nightmode .page-control-page:hover {\n    border-color: var(--flash-color);\n    color: var(--flash-color);\n    z-index: 2;\n  }\n  .nightmode .page-control-current:hover {\n    border-color: var(--background-color-2);\n    color: var(--subtitle-color-2);\n    z-index: 2;\n  }\n  .nightmode #page-control-next.disabled:hover,\n.nightmode #page-control-previous.disabled:hover {\n    color: var(--subtitle-color-2);\n  }\n  .nightmode #page-control-next:hover,\n.nightmode #page-control-previous:hover {\n    border-color: var(--flash-color);\n    color: var(--flash-color);\n    z-index: 2;\n  }\n  .nightmode a:hover {\n    color: var(--flash-color);\n  }\n  .nightmode .page-control-page:hover {\n    color: var(--flash-color);\n  }\n  .nightmode .page-control-current:hover {\n    color: var(--subtitle-color-2);\n  }\n  .nightmode #page-control-next.disabled:hover,\n.nightmode #page-control-previous.disabled:hover {\n    color: var(--subtitle-color-2);\n  }\n}\n\nhtml {\n  --background-color-page: #e8e8e8;\n  --base-mask-size: 2rem;\n  --icon-size: var(--base-mask-size);\n  --big-screen-multiplier: 0.45;\n}\n\n.rfd-search {\n  --background-color-page-semi: #eeeeef;\n  --brightness-multiplier: 100%;\n  --background-color: white;\n  --background-color-2: #dadada;\n  --title-color: rgba(0, 0, 0, 0.75);\n  --subtitle-color: rgba(0, 0, 0, 0.65);\n  --subtitle-color-2: rgba(0, 0, 0, 0.5);\n  --subtitle-color-3: rgba(0, 0, 0, 0.45);\n  --subtitle-color-4: rgba(0, 0, 0, 0.35);\n  --flash-color: var(--flash-color);\n  --border-color: #444444;\n  --base-padding: 10pt;\n  --base-font-size: 1.1rem;\n  --base-font-size-2: calc(var(--base-font-size) * 0.9);\n  --base-font-size-3: calc(var(--base-font-size-2) * 0.9);\n  --base-font-size-4: calc(var(--base-font-size-3) * 1);\n  --base-result-icon-size: 1.7rem;\n  --padding: var(--base-padding);\n  --font-size: var(--base-font-size);\n  --font-size-2: var(--base-font-size-2);\n  --font-size-3: var(--base-font-size-3);\n  --font-size-4: var(--base-font-size-4);\n  --page-control-font-size: 1.3rem;\n  --page-control-size: calc(var(--page-control-font-size) * 1.8);\n  --result-icon-size: var(--base-result-icon-size);\n  --radius: 10pt;\n  --radius-search-results: 0pt;\n  --border-width: 1pt;\n  --search-container-z-index: 1030;\n  --gray-view-opacity-animation-duration: 0.2s;\n  margin-bottom: 16px;\n}\n\n.rfd-search crag-icon *,\n.rfd-search topo-dot *,\n.rfd-search external-link-icon * {\n  width: var(--result-icon-size);\n  height: var(--result-icon-size);\n}\n\n.rfd-search select {\n  background-color: var(--background-color);\n  color: var(--subtitle-color);\n  border: none;\n}\n\n.rfd-search {\n  width: 100%;\n  font-size: var(--font-size);\n  position: relative;\n}\n\n.rfd-search ::-webkit-scrollbar-thumb {\n  filter: brightness(80%);\n}\n\n.rfd-search #searchbar-footer,\n.rfd-search #searchbar-query-suggestion-flex {\n  filter: brightness(90%);\n}\n\n.rfd-search ::-webkit-scrollbar {\n  height: 10pt;\n  width: 5pt;\n}\n\n.rfd-search ::-webkit-scrollbar-thumb {\n  background: var(--background-color-2);\n}\n\n.rfd-search ::-webkit-scrollbar-track {\n  background: rgba(1, 1, 1, 0);\n}\n\n.rfd-search scrollbar-thumb {\n  background: var(--background-color-2);\n}\n\n.rfd-search scrollbar-track {\n  background: rgba(1, 1, 1, 0);\n}\n\n.rfd-search ul {\n  list-style-type: none;\n  margin: 0pt;\n  padding: 0pt;\n  padding-bottom: var(--padding);\n  outline: none;\n}\n\n.rfd-search ul a:link {\n  color: unset;\n}\n\n.rfd-search ul a:visited {\n  color: unset;\n}\n\n.rfd-search ul a:hover {\n  color: unset;\n}\n\n.rfd-search ul a:active {\n  color: unset;\n}\n\n.rfd-search input {\n  outline: none;\n  width: 100%;\n  font-size: var(--font-size);\n  border-radius: var(--radius);\n  color: rgba(0, 0, 0, 0);\n  background-color: var(--background-color);\n  color: var(--title-color);\n  border: none;\n  transition-property: all;\n}\n\n.rfd-search a {\n  text-decoration: none !important;\n}\n\n.rfd-search a:link {\n  color: cadetblue;\n}\n\n.rfd-search a:visited {\n  color: cadetblue;\n}\n\n.rfd-search a:active {\n  color: var(--flash-color);\n}\n\n.rfd-search #name-dash {\n  display: none;\n}\n\n.rfd-search .logged-clean logbook-indicator,\n.rfd-search .logged-followed logbook-indicator,\n.rfd-search .logged-dogged logbook-indicator {\n  display: block;\n}\n\n.rfd-search .on-wishlist wishlist-indicator {\n  display: block;\n}\n\n.rfd-search .logged-clean.on-wishlist wishlist-indicator,\n.rfd-search .logged-followed.on-wishlist wishlist-indicator,\n.rfd-search .logged-dogged.on-wishlist wishlist-indicator {\n  right: 24px;\n}\n\n.rfd-search logbook-indicator {\n  display: none;\n  position: absolute;\n  top: 0px;\n  right: -6px;\n  width: calc(var(--result-icon-size) * 1);\n  height: calc(var(--result-icon-size) * 1);\n}\n\n.rfd-search wishlist-indicator {\n  display: none;\n  position: absolute;\n  top: -1px;\n  right: 4px;\n  width: calc(var(--result-icon-size) * 0.5);\n  height: calc(var(--result-icon-size) * 0.5);\n}\n\n.rfd-search input,\n.rfd-search #search-query-description,\n.rfd-search .search-results-search-query-description {\n  padding: calc(var(--padding) * 0.65);\n  padding-left: var(--padding);\n}\n\n.rfd-search #filter-icon {\n  left: 16px;\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  background-color: var(--subtitle-color);\n}\n\n.rfd-search #filter-bar-container input {\n  width: calc(100% - (var(--padding) * 2 - 8px));\n  display: block;\n  padding: var(--padding);\n  padding-top: calc(var(--padding) - 2px);\n  padding-bottom: calc(var(--padding) - 2px);\n  padding-left: 40px;\n  margin: var(--padding);\n  margin-right: calc(var(--padding) - 4px);\n  margin-left: calc(var(--padding) - 4px);\n  border-width: var(--border-width);\n  background-color: var(--background-color-page-semi);\n  transition: all 0.2s;\n}\n\n.rfd-search #name-and-grade {\n  display: flex;\n  justify-content: space-between;\n  font-weight: 500;\n}\n\n.rfd-search #gray-view {\n  width: 100vw;\n  height: 100vh;\n  background-color: rgba(0, 0, 0, 0.7);\n  position: fixed;\n  top: 0vw;\n  left: 0vw;\n  z-index: calc(var(--search-container-z-index) - 1);\n  opacity: 1;\n  backdrop-filter: blur(5px);\n  -webkit-backdrop-filter: blur(5px);\n}\n\n.rfd-search #search-container {\n  position: relative;\n  z-index: var(--search-container-z-index);\n}\n\n.rfd-search #search-container input {\n  padding-right: calc(var(--icon-size) + var(--padding));\n  padding-left: calc(var(--icon-size) + var(--padding) - 4px);\n  transition: all 0.2s;\n}\n\n.rfd-search #searchbar-inner-container {\n  position: relative;\n}\n\n.rfd-search #search-absolute {\n  position: absolute;\n  top: 0;\n  width: 100%;\n  transition: transform 0.3s ease-out;\n}\n\n.rfd-search #search-results-header-container,\n.rfd-search #search-widget,\n.rfd-search #search-results-widget {\n  border-width: var(--border-width);\n  background-color: var(--background-color);\n  transition: all 0.2s;\n  overflow: hidden;\n}\n\n.rfd-search #search-widget {\n  box-shadow: 0px 0px 10px rgba(1, 1, 1, 0.1);\n  transition: opacity 0.3s;\n  border-radius: var(--radius);\n}\n\n.rfd-search #search-results-header-container,\n.rfd-search #search-results-widget {\n  margin-left: calc(-50vw + 50%);\n  margin-right: calc(-51vw + 51%);\n}\n\n.rfd-search #searchbar-footer {\n  background-color: var(--background-color);\n  font-size: var(--font-size-4);\n  color: var(--subtitle-color-2);\n  border-bottom-left-radius: var(--radius);\n  border-bottom-right-radius: var(--radius);\n  filter: brightness(90%);\n}\n\n.rfd-search #search-results-container {\n  contain: layout paint;\n  overflow-y: auto;\n  overflow-x: hidden;\n  overscroll-behavior-y: contain;\n  scrollbar-color: var(--background-color-2) rgba(1, 1, 1, 0);\n  transition: opacity 0.3s ease-out;\n}\n\n.rfd-search #search-icon {\n  position: absolute;\n  left: 4pt;\n  top: 50%;\n  transform: translateY(-50%);\n  background-color: var(--subtitle-color);\n}\n\n.rfd-search #filter-bar-container {\n  position: relative;\n}\n\n.rfd-search #input-hidden {\n  background-color: rgba(0, 0, 0, 0) !important;\n}\n\n.rfd-search #delete-search-text-button,\n.rfd-search #filter-delete-text-button {\n  position: absolute;\n  right: 0px;\n  top: 50%;\n  transform: translateY(-50%);\n  cursor: pointer;\n}\n\n.rfd-search #filter-delete-text-button {\n  right: 10px;\n}\n\n.rfd-search #return-key-action {\n  padding: var(--padding);\n  margin-top: calc(var(--padding) * 5);\n}\n\n.rfd-search #search-results-header-container {\n  backface-visibility: hidden;\n  background-color: var(--background-color);\n  position: sticky;\n  z-index: 2;\n  width: 100vw;\n  margin-left: -15px;\n}\n\n.rfd-search .ukc-search-results-header {\n  padding-left: var(--padding);\n  width: 100vw;\n}\n\n.rfd-search .result-icon {\n  display: inline-block;\n}\n\n.rfd-search .gray-background input {\n  background-color: #e0e0e0;\n  transition: background-color 0.2s ease;\n}\n\n.rfd-search .normal-background input {\n  background-color: var(--background-color);\n  transition: background-color 0.2s ease;\n}\n\n.rfd-search .searchbar-help-text-container {\n  transition: height 0.2s ease;\n  overscroll-behavior-y: contain;\n}\n\n.rfd-search #searchbar-help-text {\n  padding: calc(var(--padding) * 2);\n}\n\n.rfd-search #placeholder-short-display {\n  color: var(--title-color);\n  opacity: 0.5;\n  margin-left: -6px;\n}\n\n.rfd-search #searchbar-short-display-container {\n  position: absolute;\n  left: 4pt;\n  transform: translateY(-8%);\n}\n\n.rfd-search #search-icon-short-display {\n  background-color: var(--subtitle-color);\n  display: inline-block;\n  transform: translateY(30%);\n}\n\n.rfd-search #searchbar-query-suggestion-flex {\n  position: relative;\n  padding-right: calc(var(--icon-size) + var(--padding));\n  border-bottom-left-radius: var(--radius);\n  border-bottom-right-radius: var(--radius);\n}\n\n.rfd-search .ascent-notes a,\n.rfd-search .ascent-details a {\n  color: #bbdcee !important;\n  opacity: 0.7;\n  line-height: 1.3em;\n}\n\n.rfd-search #help-button,\n.rfd-search #filter-bar-help-button {\n  position: absolute;\n  right: 0pt;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n.rfd-search #searchbar-query-suggestion-flex,\n.rfd-search #search-query-description,\n.rfd-search .search-results-search-query-description {\n  font-size: var(--font-size-3);\n  color: var(--subtitle-color-2);\n  background-color: var(--background-color);\n}\n\n.rfd-search #focus-searchbar {\n  display: none;\n}\n\n.rfd-search .logged {\n  background-color: green;\n}\n\n.rfd-search .page-control {\n  display: flex;\n  justify-content: flex-end;\n  align-content: center;\n  margin-bottom: var(--padding);\n  margin-left: calc(-50vw + 50%);\n  margin-right: calc(-50vw + 50% + var(--padding));\n}\n\n.rfd-search .fa-button {\n  border: 0;\n  width: 40px;\n  height: 40px;\n  background-color: var(--background-color);\n  border-radius: var(--radius);\n  color: var(--subtitle-color);\n  transition: background-color 0.2s ease-out;\n}\n\n.rfd-search .fa-button:hover {\n  background-color: var(--background-color-2);\n}\n\n.rfd-search .fa-button i {\n  transition: rotate 0.2s ease-out;\n}\n\n.rfd-search .hidden {\n  display: none;\n}\n\n.rfd-search #page-control-previous,\n.rfd-search #page-control-next,\n.rfd-search page-button {\n  display: flex;\n  align-items: center;\n  text-align: center;\n  aspect-ratio: 1/1;\n  font-family: monospace;\n  background-color: var(--background-color);\n  border: solid;\n  color: var(--subtitle-color-2);\n  margin-left: calc(var(--border-width) * -1);\n  border-width: var(--border-width);\n  border-color: var(--background-color-2);\n  justify-content: center;\n  font-weight: 900;\n  cursor: pointer;\n  font-size: var(--page-control-font-size);\n  height: var(--page-control-size);\n  width: var(--page-control-size);\n}\n\n.rfd-search #page-control-previous {\n  border-top-left-radius: var(--radius);\n  border-bottom-left-radius: var(--radius);\n}\n\n.rfd-search #page-control-next {\n  border-top-right-radius: var(--radius);\n  border-bottom-right-radius: var(--radius);\n}\n\n.rfd-search page-button {\n  display: flex;\n  justify-content: center;\n  align-content: center;\n}\n\n.rfd-search .date-header {\n  display: flex;\n  justify-content: space-between;\n  font-size: var(--font-size-3);\n  color: var(--subtitle-color-2);\n  padding: var(--padding);\n  padding-right: calc(var(--padding) / 2);\n  padding-top: calc(var(--padding) / 2);\n  padding-bottom: calc(var(--padding) / 2 - 2px);\n  background-color: var(--background-color-page-semi);\n}\n\n.rfd-search .page-control-current {\n  border-color: var(--background-color-2);\n  color: var(--subtitle-color-2);\n  background-color: var(--background-color-2);\n  filter: brightness(110%);\n  cursor: default;\n}\n\n.rfd-search #page-control-next.disabled,\n.rfd-search #page-control-previous.disabled {\n  background-color: var(--background-color);\n  border-color: var(--background-color-2);\n  cursor: default;\n  opacity: 0.4;\n}\n\n.rfd-search .ukc-search-results-controls {\n  color: var(--subtitle-color-2);\n  font-size: 0.9em;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  margin-bottom: 0px;\n}\n\n.rfd-search .ukc-search-results-sort-order {\n  flex-grow: 0;\n  font-family: monospace;\n  font-weight: 600;\n  margin-bottom: 0px;\n  margin-left: -0.3em;\n}\n\n.rfd-search .result-entry {\n  display: flex;\n}\n\n.rfd-search .result-icon-area {\n  margin-top: -4pt;\n  width: 30pt;\n}\n\n.rfd-search .ascent-details {\n  display: flex;\n  justify-content: space-between;\n  margin-top: 10px;\n  color: var(--subtitle-color-4);\n  font-size: calc(var(--font-size-4) * 0.9);\n}\n\n.rfd-search .ascent-notes {\n  margin-top: 14px;\n  margin-bottom: 18px;\n  font-style: italic;\n  line-height: calc(var(--font-size-4) * 1.2);\n  color: var(--subtitle-color-2);\n  font-size: calc(var(--font-size-4) * 0.9);\n}\n\n.rfd-search .result-text-area {\n  width: 100%;\n  max-width: calc(100% - 36px);\n  display: flex;\n  flex-direction: column;\n}\n\n.rfd-search .result-title {\n  overflow-x: clip;\n  text-overflow: ellipsis;\n  white-space: pre;\n}\n\n.rfd-search .result-crag-name {\n  overflow-x: clip;\n  text-overflow: ellipsis;\n}\n\n.rfd-search .result-entry-start {\n  margin-bottom: 6pt;\n  display: block;\n}\n\n.rfd-search .result-entry-end {\n  display: flex;\n  align-items: baseline;\n}\n\n.rfd-search .selected .result-entry {\n  background-color: var(--background-color-2);\n}\n\n.rfd-search .selected .result-entry * {\n  background-color: var(--background-color-2);\n}\n\n.rfd-search .footer-content {\n  padding: 10px;\n}\n\n.rfd-search .keycode {\n  display: none;\n  background-color: var(--background-color-2);\n  border-radius: 3pt;\n  padding: 4pt;\n}\n\n.rfd-search .display-if-necessary {\n  display: block;\n}\n\n.rfd-search .result-entry {\n  font-size: var(--font-size-2);\n  color: var(--title-color);\n  padding: var(--padding);\n  padding-top: calc(var(--padding) + 4px);\n  padding-bottom: calc(var(--padding) + 2px);\n  display: flex;\n}\n\n.rfd-search .result-entry-end {\n  white-space: nowrap;\n}\n\n.rfd-search .result-entry-start {\n  white-space: nowrap;\n}\n\n.rfd-search .result-grade {\n  font-size: var(--font-size-3);\n  font-style: italic;\n  color: var(--subtitle-color);\n  white-space: pre;\n}\n\n.rfd-search .result-star-count {\n  font-size: var(--font-size-2);\n  font-style: italic;\n  font-weight: bolder;\n  color: hotpink;\n}\n\n.rfd-search .result-crag-name {\n  font-size: var(--font-size-4);\n  color: var(--subtitle-color-2);\n}\n\n.rfd-search .result-context,\n.rfd-search .result-sub-context {\n  font-style: italic;\n  font-size: var(--font-size-4);\n  color: var(--subtitle-color-4);\n}\n\n.rfd-search .search-container {\n  background-color: none;\n}\n\n.rfd-search .loader-stopped,\n.rfd-search .divider {\n  opacity: 1;\n  height: var(--border-width);\n  background-color: var(--background-color-2);\n}\n\n.rfd-search .divider-no-height-set {\n  opacity: 1;\n  background-color: var(--background-color-2);\n}\n\n.rfd-search .icon {\n  background-color: var(--subtitle-color);\n  margin-right: 4pt;\n  cursor: pointer;\n}\n\n.rfd-search .icon:focus {\n  background-color: var(--flash-color);\n}\n\n.rfd-search .icon-magnifying-glass {\n  width: var(--icon-size);\n  height: var(--icon-size);\n  -webkit-mask-size: var(--icon-size) var(--icon-size);\n  -webkit-mask-repeat: no-repeat;\n  -webkit-mask-position: center;\n  mask-size: var(--icon-size) var(--icon-size);\n  mask-repeat: no-repeat;\n  mask-position: center;\n  mask: url(\"/assets/magnifying-glass.svg\");\n  -webkit-mask: url(\"/assets/magnifying-glass.svg\");\n}\n\n.rfd-search .icon-question-mark {\n  width: var(--icon-size);\n  height: var(--icon-size);\n  -webkit-mask-size: var(--icon-size) var(--icon-size);\n  -webkit-mask-repeat: no-repeat;\n  -webkit-mask-position: center;\n  mask-size: var(--icon-size) var(--icon-size);\n  mask-repeat: no-repeat;\n  mask-position: center;\n  mask: url(\"/assets/question-mark.svg\");\n  -webkit-mask: url(\"/assets/question-mark.svg\");\n}\n\n.rfd-search .icon-external-link {\n  width: var(--icon-size);\n  height: var(--icon-size);\n  -webkit-mask-size: var(--icon-size) var(--icon-size);\n  -webkit-mask-repeat: no-repeat;\n  -webkit-mask-position: center;\n  mask-size: var(--icon-size) var(--icon-size);\n  mask-repeat: no-repeat;\n  mask-position: center;\n  mask: url(\"/assets/external-link.svg\");\n  -webkit-mask: url(\"/assets/external-link.svg\");\n}\n\n.rfd-search .icon-circle-times {\n  width: var(--icon-size);\n  height: var(--icon-size);\n  -webkit-mask-size: var(--icon-size) var(--icon-size);\n  -webkit-mask-repeat: no-repeat;\n  -webkit-mask-position: center;\n  mask-size: var(--icon-size) var(--icon-size);\n  mask-repeat: no-repeat;\n  mask-position: center;\n  mask: url(\"/assets/circle-times.svg\");\n  -webkit-mask: url(\"/assets/circle-times.svg\");\n}\n\n.rfd-search .result-entry-container {\n  line-height: 1;\n}\n\n.rfd-search #search-results-widget .result-entry-container {\n  border-bottom: solid var(--background-color-page-semi) 1px;\n}\n\n.rfd-search route-result .result-text-area,\n.rfd-search logbook-result .result-text-area {\n  max-width: 100%;\n  padding-left: 40px;\n}\n\n.rfd-search .ascent-style-indicator {\n  margin-left: -15px;\n  margin-right: 4px;\n}\n\n.rfd-search .mouse-over {\n  color: cadetblue;\n  cursor: pointer;\n}\n\n.rfd-search .mouse-over:focus {\n  color: var(--flash-color);\n}\n\n.rfd-search .fade-in {\n  -webkit-animation: fadein var(--gray-view-opacity-animation-duration) linear forwards;\n  animation: fadein var(--gray-view-opacity-animation-duration) linear forwards;\n}\n\n@-webkit-keyframes fadein {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n@-moz-keyframes fadein {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n@-o-keyframes fadein {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n@keyframes fadein {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n.rfd-search .fade-out {\n  -webkit-animation: fadeout var(--gray-view-opacity-animation-duration) linear forwards;\n  animation: fadeout var(--gray-view-opacity-animation-duration) linear forwards;\n}\n\n@-webkit-keyframes fadeout {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n\n@-moz-keyframes fadeout {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n\n@-o-keyframes fadeout {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n\n@keyframes fadeout {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n\n.loader-stopped {\n  position: relative;\n  background: var(--background-color-2);\n  overflow: hidden;\n}\n\n.loader-spinning {\n  position: relative;\n  height: 2px;\n  background: transparent;\n  overflow: hidden;\n  animation: loader-rainbow 1.5s infinite linear;\n}\n\n.loader-spinning:after {\n  display: block;\n  content: \" \";\n  position: absolute;\n  height: 100%;\n  background: hotpink;\n  left: 0;\n  transform: translate3d(-150%, 0, 0);\n  animation: loader-stripe 1.5s infinite linear;\n}\n\n@keyframes loader-stripe {\n  0% {\n    transform: translate3d(-100%, 0, 0);\n  }\n  100% {\n    transform: translate3d(100%, 0, 0);\n  }\n}\n\n@keyframes loader-rainbow {\n  0% {\n    background: var(--background-color-2);\n  }\n  50% {\n    background: hotpink;\n  }\n  100% {\n    background: var(--background-color-2);\n  }\n}\n\n@media only screen and (min-width: 768px) {\n  :root {\n    --icon-size: 2rem;\n  }\n  .rfd-search {\n    --page-control-size: 18pt;\n    --radius: 4pt;\n    --radius-search-results: 4pt;\n    --border-width: 1pt;\n    --font-size: 0.9rem;\n    --page-control-font-size: var(--font-size-3);\n    --font-size-2: calc(var(--font-size) * 0.9);\n    --font-size-3: calc(var(--font-size-2) * 0.9);\n    --font-size-4: calc(var(--font-size-3) * 0.9);\n    --result-icon-size: 1.5rem;\n  }\n  .rfd-search logbook-indicator {\n    right: -5px;\n  }\n  .rfd-search wishlist-indicator {\n    right: 0px;\n  }\n  .rfd-search #name-dash {\n    display: inline-block;\n  }\n  .rfd-search #star-count-and-route-grade {\n    display: flex;\n    flex-direction: row-reverse;\n    translate: 0 1.5px;\n  }\n  .rfd-search #star-count-and-route-grade * {\n    margin-right: 0.2rem;\n  }\n  .rfd-search #search-icon {\n    background-color: var(--subtitle-color);\n  }\n  .rfd-search input {\n    padding-top: 4pt;\n    padding-bottom: 4pt;\n  }\n  .rfd-search #focus-searchbar,\n.rfd-search .keycode {\n    display: unset;\n  }\n  .rfd-search #search-results-header-container {\n    border-top-left-radius: var(--radius);\n    border-top-right-radius: var(--radius);\n  }\n  .rfd-search #searchbar-help-text {\n    padding: calc(var(--base-padding) * var(--big-screen-multiplier) * 2);\n  }\n  .rfd-search #search-results-header-container,\n.rfd-search #search-results-widget {\n    margin-right: 50%;\n    margin-left: 50%;\n    transform: translateX(-50%);\n    min-width: 700px;\n    box-shadow: 0px 0px 10px rgba(1, 1, 1, 0.1);\n  }\n  .rfd-search #placeholder-short-display {\n    margin-left: 0px;\n    position: absolute;\n    white-space: nowrap;\n    transform: translate(4px, 15px);\n  }\n  .rfd-search #searchbar-short-display-container {\n    transform: translateY(-26%);\n  }\n  .rfd-search #search-results-header-container {\n    border-top-left-radius: var(--radius-search-results);\n    border-top-right-radius: var(--radius-search-results);\n  }\n  .rfd-search .page-control {\n    width: 400pt;\n    margin-right: 50%;\n    margin-left: 50%;\n    transform: translateX(-50%);\n    min-width: 700px;\n  }\n  .rfd-search #filter-bar-container input {\n    padding-top: calc(var(--padding) / 2);\n    padding-bottom: calc(var(--padding) / 2);\n  }\n  .rfd-search #search-container {\n    max-width: 500pt;\n    left: 50%;\n    transform: translateX(-50%);\n  }\n  .rfd-search #search-results-header-container {\n    width: unset;\n  }\n  .rfd-search #search-query-description,\n.rfd-search .search-results-search-query-description {\n    padding: calc(var(--base-padding) * var(--big-screen-multiplier) * 2);\n  }\n  .rfd-search #searchbar-query-suggestion-flex,\n.rfd-search #search-query-description,\n.rfd-search .search-results-search-query-description {\n    font-size: calc(var(--font-size-2) * 0.9);\n  }\n  .rfd-search .result-entry-container {\n    line-height: 1;\n  }\n  .rfd-search .ascent-details {\n    font-size: var(--font-size-3);\n  }\n  .rfd-search .ascent-notes {\n    font-size: var(--font-size-3);\n  }\n  .rfd-search .result-entry {\n    padding-top: calc(var(--padding) / 1.85);\n    padding-bottom: calc(var(--padding) / 1.85);\n    align-items: center;\n  }\n  .rfd-search .result-crag-name {\n    padding-bottom: 2pt;\n  }\n  .rfd-search .selected .result-entry {\n    border-radius: calc(var(--radius) * 0.7);\n  }\n  .rfd-search .icon {\n    margin-right: unset;\n  }\n  .rfd-search .result-entry-end {\n    padding-left: var(--padding);\n    flex-direction: column;\n    align-items: baseline;\n    flex-grow: 1;\n  }\n  .rfd-search .footer-content {\n    padding: 4px;\n    padding-right: 10px;\n  }\n  .rfd-search .nightmode #search-results-header-container,\n.rfd-search .nightmode #search-results-widget {\n    box-shadow: 0px 0px 10px rgba(1, 1, 1, 0.2);\n  }\n  .rfd-search .result-icon-area {\n    margin-top: unset;\n  }\n  .rfd-search .result-text-area {\n    flex-direction: row;\n    justify-content: space-between;\n  }\n  .rfd-search .result-entry-start {\n    align-self: center;\n    margin-bottom: unset;\n  }\n  .rfd-search .result-entry-end {\n    flex-direction: column;\n    align-items: flex-end;\n  }\n  .rfd-search .ascent-style-indicator {\n    margin-left: -13px;\n  }\n}\n\nselect {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  text-overflow: \"\";\n}";

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

const DOMPurify = {
  sanitize: (str) => str
};
const html$1 = (raw, ...keys) => keys.length === 0 ? raw[0] : String.raw({ raw }, ...keys);
const escape = (s) => s ? DOMPurify.sanitize(s) : s;

var __defProp$i = Object.defineProperty;
var __getOwnPropDesc$i = Object.getOwnPropertyDescriptor;
var __decorateClass$i = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$i(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp$i(target, key, result);
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
    this.innerHTML ||= this.template(this);
  }
  htmlForSlot(slotName) {
    return "";
  }
};
BaseCon = __decorateClass$i([
  controller
], BaseCon);
const BaseCon$1 = BaseCon;

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
__decorateClass$h([
  target
], PageButtonElement.prototype, "span", 2);
__decorateClass$h([
  attr
], PageButtonElement.prototype, "pageNumber", 1);
PageButtonElement = __decorateClass$h([
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
__decorateClass$g([
  target
], PageControlElement.prototype, "previous", 2);
__decorateClass$g([
  targets
], PageControlElement.prototype, "pages", 2);
__decorateClass$g([
  target
], PageControlElement.prototype, "next", 2);
PageControlElement = __decorateClass$g([
  controller
], PageControlElement);

function apiOrigin() {
  const origin = window.location.origin;
  if (origin.match(/localhost|local\./gi)) {
    return "http://127.0.0.1:3002";
  }
  if (origin.match(/dev\.|ryecroft.github.io/gi)) {
    return "https://dev.api.rockfax.app";
  }
  return "https://api.rockfax.app";
}
const generateApiUrl$4 = () => {
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
            <!-- <div data-target='${elementName}.search_query_description_top' class='search-results-search-query-description fixed-top w-100 d-md-none' style='font-size:0.7em;opacity:0;transition:opacity 0.2s ease-out;'></div>-->
            
            <div data-target="${element.elementName}.search_results_header_container" id='search-results-header-container'>
                <div class='ukc-search-results-header'>
                    <h1 data-target="${element.elementName}.search_results_title" class='mb-4 mt-4 pt-3' style='font-size: 1.1rem;color:var(--title-color)'></h1>
                    <div class="ukc-search-results-controls">
                        <select data-target="${element.elementName}.sort_order" class="ukc-search-results-sort-order">
                            ${element.htmlForSlot("ukc-search-results-sort-order-options")}
                        </select>
                        <button class="fa-button" data-target="${element.elementName}.sort_button" data-action="click:${element.elementName}#toggleSortOrder"><i class="fas fa-arrow-down" data-target="${element.elementName}.sort_arrow"></i></button>
                    </div>
                </div>
                <div id='filter-bar-container'>
                    <span id='filter-icon' class='icon icon-magnifying-glass' alt='icon'></span>
                    <input data-target='${elementName}.input' id='filter-bar'  spellcheck='false' autocorrect='off' autocomplete='off' autocapitalize='off' type='search' placeholder='Filter results...' />
                    <span data-target='${elementName}.delete_text_button' id='filter-delete-text-button' tabindex='-1' class='icon icon-circle-times hidden' alt='icon'></span>
                </div>
                <div data-target='${elementName}.progressBar' id='search-results-progress' class='loader-stopped'></div>
                <div data-target='${elementName}.search_query_description' class='search-results-search-query-description' style='border-bottom: solid var(--background-color-page-semi) 1px;'></div>
            </div>
            <div id='search-results-widget'>
                <!--<div data-target='${elementName}.search_results_header_spacer'></div>-->
                <ul data-target='${elementName}.search_results_container' id='search-results-container-search-results'></ul>
            </div>
            <page-control data-target='${elementName}.page_control'></page-control>
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
function appendDivider(target, idx) {
  const divider = document.createElement("hr");
  divider.classList.add("divider-no-height-set");
  const el = target.search_results_container.children[idx];
  if (el) {
    target.search_results_container.insertBefore(divider, el);
  }
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
  target.search_results_container.appendChild(el);
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
  target.search_results_container.appendChild(el);
  el.resultType = "crag";
  return el;
}
function appendNoResults(target) {
  const el = document.createElement("search-result");
  el.classList.remove("hidden");
  el.classList.add("no-results-entry");
  el.itemName = `No matching results ='[`;
  target.search_results_container.appendChild(el);
  el.resultType = "no-result";
}

function onKeyPressedEvent(e) {
  e.stopPropagation();
  if (e.key == "Escape") {
    this.resignFocus();
    return;
  }
  if (this.search_results_container.children.length == 0) {
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
  for (let i = 0; i < this.search_results_container.children.length; i++) {
    if (this.search_results_container.children[i].classList.contains("selected")) {
      if (i < this.search_results_container.children.length - 1) {
        this.search_results_container.children[i].classList.remove("selected");
        let resultEntryElement = this.search_results_container.children[i + 1];
        if (resultEntryElement.tagName === "HR") {
          resultEntryElement = this.search_results_container.children[i + 2];
        }
        resultEntryElement.classList.add("selected");
        if (this.isElementVisible(resultEntryElement) === false) {
          resultEntryElement.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }
      return;
    }
  }
  this.search_results_container.children[0].classList.add("selected");
}
function onArrowUpKey() {
  for (let i = 0; i < this.search_results_container.children.length; i++) {
    if (this.search_results_container.children[i].classList.contains("selected")) {
      this.search_results_container.children[i].classList.remove("selected");
      if (i > 0) {
        let resultEntryElement = this.search_results_container.children[i - 1];
        if (resultEntryElement.tagName === "HR") {
          resultEntryElement = this.search_results_container.children[i - 2];
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
  for (let i = 0; i < this.search_results_container.children.length; i++) {
    if (this.search_results_container.children[i].classList.contains("selected")) {
      this.search_results_container.children[i].href.click();
      return;
    }
  }
  this.submitSearch();
}

class Cookies {
  constructor(cookie) {
    this.cookie = cookie;
    if (!cookie) {
      throw new Error("no cookie!");
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
    return this._ukcSid.ukcId || void 0;
  }
  get ukcCookiesSid() {
    return this._ukcSid.cookieSid;
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

var __defProp$f = Object.defineProperty;
var __getOwnPropDesc$f = Object.getOwnPropertyDescriptor;
var __decorateClass$f = (decorators, target2, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$f(target2, key) : target2;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target2, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp$f(target2, key, result);
  return result;
};
let SearchResults = class extends BaseCon$1 {
  get apiUrl() {
    return generateApiUrl$4();
  }
  searchResultsIdentifier = "search-results";
  lastSearch;
  searchDelay = 300;
  search_results_container;
  searchBar;
  input;
  progressBar;
  delete_text_button;
  search_query_description;
  search_results_header_container;
  search_results_title;
  page_control;
  sort_order;
  sort_arrow;
  sort_button;
  currentPage = 1;
  get query() {
    return this.input.value;
  }
  set query(query) {
    if (document.activeElement !== this.input) {
      this.input.focus();
    }
    if (this.input)
      this.input.value = query || "";
    this.input.dispatchEvent(new Event("input", { bubbles: true }));
  }
  searchBarPlaceholderString = "Perform a new search...";
  timeout;
  searchId = 0;
  preventLayoutShift = false;
  apiData;
  _baseData;
  set baseData(newVal) {
    this._baseData = newVal;
  }
  get baseData() {
    return this._baseData;
  }
  get template() {
    return searchResultsTemplate;
  }
  get sortOrderKey() {
    return "search_results_sort_order";
  }
  get sortDirectionKey() {
    return `${this.sortOrderKey}_direction`;
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
    return urlParams.get("query");
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
    if (window.location.origin.match(/local/)) {
      document.cookie = "ukcsid=ac37cdfcb90a91711a6fbd3dac9137d9#45296#Stephen%20Horne%20-%20Rockfax#0";
    }
    super.connectedCallback();
    this.sort_button.style.display = "none";
    this.sort_order.style.display = "none";
    this.sort_order.value = this.urlSortOrder || this.savedSortOrder;
    this.sortDirectionFromButton = this.urlSortDirection || this.savedSortDirection;
    this.sort_order.addEventListener("change", (evt) => {
      this.sortOrderChanged(evt);
    });
    if (isMobile()) {
      this.searchDelay = 500;
    }
    this.input.value = this.urlFilter;
    Object.defineProperty(this, "onKeyPressedEvent", { value: onKeyPressedEvent });
    Object.defineProperty(this, "onEnterKey", { value: this.onEnterKey });
    Object.defineProperty(this, "onArrowUpKey", { value: onArrowUpKey });
    Object.defineProperty(this, "onArrowDownKey", { value: onArrowDownKey });
    document.addEventListener("DOMContentLoaded", () => {
      this.searchBar = document.getElementsByTagName(this.searchbarTag)[0];
      this.searchBar.searchWidget.style.opacity = "0";
      this.searchBar.input.addEventListener("focus", () => {
        this.searchBar.searchWidget.style.opacity = "1";
      });
      this.searchBar.grayView.addEventListener("click", () => {
        this.searchBar.searchWidget.style.opacity = "0";
      });
      this.searchBar.input.placeholder = this.searchBarPlaceholderString;
      this.searchBar.input.value = this.urlQuery || "";
      if (this.searchBar.input.value) {
        this.searchBar.fetchResults();
      }
      this.searchBar.delete_text_button.classList.remove("hidden");
      this.searchBar.submitSearchHandler = (resultsUrl) => {
        this.startProgressBar();
        this.searchBar.resignFocus();
        window.history.pushState({}, "", resultsUrl);
        setTimeout(() => {
          this._init();
        }, 300);
      };
    });
    let lastScroll = 0;
    document.addEventListener("scroll", async (_evt) => {
      if (this.preventLayoutShift) {
        return;
      }
      const scroll = this.search_results_container.getBoundingClientRect().top;
      let diff = scroll - lastScroll;
      lastScroll = scroll;
      if (diff > 30) {
        this.search_results_header_container.style.top = "-64px";
      }
      if (diff > 0) {
        return;
      }
      if (diff > -20) {
        return;
      }
      const el = this.search_results_header_container;
      const height = this.search_query_description.getBoundingClientRect().top - this.search_results_header_container.getBoundingClientRect().top;
      el.style.top = -height + "px";
    });
    this.search_query_description.addEventListener("click", (evt) => {
      this.search_results_header_container.style.top = "-64px";
    });
    this.search_results_header_container.style.position = "sticky";
    this.search_results_header_container.style.top = "0";
    this.input.addEventListener("focus", () => this.onInputFocus());
    this.input.addEventListener("input", () => this.onInputUpdated());
    this.delete_text_button.addEventListener("mousedown", (evt) => evt.preventDefault());
    this.delete_text_button.addEventListener("click", (evt) => {
      this.query = "";
    });
    this.input.addEventListener("keydown", (e) => this.onKeyPressedEvent(e));
    this._init();
    this.page_control.onPageControlClicked = async (_pageControl) => {
      this.startProgressBar();
      const res = await this._fetchResults(this.fullQuery, _pageControl.currentPage);
      this.urlPage = _pageControl.currentPage;
      this.stopProgressBar();
      this.buildResults(res);
    };
    const fb = this.input;
    document.ontouchstart = function(_e) {
      if (document.activeElement === fb) {
        fb.blur();
      }
    };
    this.input.focus();
  }
  resignFocus() {
    this.input.blur();
  }
  sortOrderChanged(evt) {
    this.baseData = void 0;
    this.lastSearch = void 0;
    this.onInputUpdated();
    this.urlSortOrder = this.sort_order.value;
    localStorage.setItem(this.sortOrderKey, this.sort_order.value);
  }
  onInputFocus() {
  }
  getElementById(id) {
    let element = document.getElementById(id);
    if (!element) {
      throw new Error(`failed to find element with id ${id}`);
    }
    return element;
  }
  get allowEmptyQuery() {
    return false;
  }
  async _init() {
    this.startProgressBar();
    const results = localStorage.getItem(this.searchResultsIdentifier);
    const hasNoFilter = !this.urlFilter;
    if (results) {
      try {
        this.buildResults(JSON.parse(results));
        this.stopProgressBar();
        localStorage.setItem(this.searchResultsIdentifier, "");
        return;
      } catch (e) {
      }
    }
    let query = this.queryToUseDuringInit();
    if (query !== null || this.allowEmptyQuery) {
      let results2 = await this._fetchResults(query, this.urlPage);
      this.buildResults(results2);
      hasNoFilter && (this.baseData = results2);
      this.stopProgressBar();
    }
  }
  queryToUseDuringInit() {
    return this.fullQuery || "";
  }
  async _fetchResults(query, pageNo) {
    return await this.fetchResultsForPage(query, pageNo);
  }
  response;
  async fetchResultsForPage(query, pageNo) {
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
            this.bodyForRequest(query, pageNo)
          )
        }
      );
      this.response = response.clone();
      return await response.json();
    } catch (e) {
      console.error("failed to fetch results");
      console.error(e);
    }
  }
  bodyForRequest(query, pageNo) {
    const cookie = Cookies.default().cookie;
    return {
      cookie,
      search_query: query,
      page_size: 100,
      page: pageNo,
      sort_by: this.sort_order.value,
      direction: this.sortDirectionFromButton
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
  toggleSortOrder() {
    this.sort_arrow.style.rotate = this.sortDirectionFromButton === "desc" ? "180deg" : "0deg";
    this.baseData = void 0;
    this.lastSearch = void 0;
    this.onInputUpdated();
    localStorage.setItem(this.sortDirectionKey, this.sortDirectionFromButton);
  }
  htmlForSlot(slotName) {
    if (slotName === "ukc-search-results-sort-order-options") {
      return html$1`
        <option value="score"      >Order by search score</option>
        <option value="crag_name" >Order by crag name</option>
        <option value="grade"     >Order by route grade</option>
        <!--<option value="voted_grade">Order by voted grade</option>-->
      `;
    }
    return "";
  }
  clearResultsDropdown() {
    this.search_results_container.innerHTML = "";
  }
  queue = [];
  buildResults(data) {
    console.log(data);
    this.queue = [];
    this.clearResultsDropdown();
    this.apiData = data;
    this.page_control.pageCount = data.meta?.total_pages;
    this.page_control.currentPage = data.meta?.page;
    if (data.objects?.length === 0) {
      appendNoResults(this);
    }
    if (this.search_query_description) {
      if (data.meta?.parsed_query) {
        const c = data.meta?.total_matches;
        this.search_query_description.innerHTML = data.meta.parsed_query.queryDescription + ` (${c}&nbsp;match${c === 1 ? "" : "es"})`;
      } else {
        this.search_query_description.innerHTML = "";
      }
    }
    let routeCount = 0;
    let cragCount = 0;
    data.objects?.forEach((element, idx) => {
      switch (element.type) {
        case "route_ukc": {
          routeCount++;
          this.willAppendRoute(element, this, idx, routeCount);
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
      }
      if (routeCount == 1 && cragCount) {
        this.queue.push(() => {
          appendDivider(this, idx);
        });
      }
    });
    this.processQueue();
  }
  willAppendRoute(_route, _target, _idx, _currentRouteCount) {
  }
  processQueue() {
    if (this.queue.length) {
      this.preventLayoutShift = true;
      let i = 0;
      const max = this.search_results_container.children.length > 4 ? 1 : 10;
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
  submitSearch() {
  }
  startProgressBar() {
    this.progressBar.classList.add("loader-spinning");
    this.search_results_container.style.opacity = "0.4";
  }
  stopProgressBar() {
    this.progressBar.classList.remove("loader-spinning");
    this.search_results_container.style.opacity = "1";
  }
  showHelp() {
    alert("help text");
  }
  onInputUpdated(force = false) {
    const newValue = this.input.value.trim();
    if (newValue) {
      this.delete_text_button.classList.remove("hidden");
    } else {
      this.delete_text_button.classList.add("hidden");
    }
    clearTimeout(this.timeout);
    if (!force && !newValue && this.baseData) {
      console.log(this.baseData);
      this.lastSearch = "";
      this.stopProgressBar();
      this.buildResults(this.baseData);
      this.urlFilter = newValue;
      return;
    }
    const sortDirection = this.sortDirectionFromButton;
    this.startProgressBar();
    this.searchId++;
    const currentSearchId = this.searchId;
    this.timeout = setTimeout(async () => {
      const query = this.fullQueryWithoutUrlFilter;
      let results = await this._fetchResults(query, 0);
      if (this.searchId > currentSearchId) {
        return;
      }
      this.stopProgressBar();
      this.searchId = currentSearchId;
      this.lastSearch = query;
      this.buildResults(results);
      this.urlFilter = newValue;
      this.urlSortDirection = sortDirection;
      this.urlPage = 0;
    }, this.searchDelay);
  }
  get fullQuery() {
    let urlParams = new URLSearchParams(window.location.search);
    let query = urlParams.get("query");
    const res = ((query || "") + " " + (this.input.value || this.urlFilter || "")).trim();
    return res;
  }
  get fullQueryWithoutUrlFilter() {
    let urlParams = new URLSearchParams(window.location.search);
    let query = urlParams.get("query");
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
};
__decorateClass$f([
  target
], SearchResults.prototype, "search_results_container", 2);
__decorateClass$f([
  target
], SearchResults.prototype, "input", 2);
__decorateClass$f([
  target
], SearchResults.prototype, "progressBar", 2);
__decorateClass$f([
  target
], SearchResults.prototype, "delete_text_button", 2);
__decorateClass$f([
  target
], SearchResults.prototype, "search_query_description", 2);
__decorateClass$f([
  target
], SearchResults.prototype, "search_results_header_container", 2);
__decorateClass$f([
  target
], SearchResults.prototype, "search_results_title", 2);
__decorateClass$f([
  target
], SearchResults.prototype, "page_control", 2);
__decorateClass$f([
  target
], SearchResults.prototype, "sort_order", 2);
__decorateClass$f([
  target
], SearchResults.prototype, "sort_arrow", 2);
__decorateClass$f([
  target
], SearchResults.prototype, "sort_button", 2);
SearchResults = __decorateClass$f([
  controller
], SearchResults);
const SearchResultsElement = SearchResults;

const searchbarTemplate = (element) => {
  const elementName = element.elementName;
  return html$1`
        <div class='rfd-search'>
            <div data-target='${elementName}.grayView' id='gray-view' class='hidden'></div>
            <div id='search-container'>
                <input data-target='${elementName}.inputHidden' id='input-hidden' spellcheck='false' autocorrect='off' autocomplete='off' autocapitalize='off' type='search' placeholder='' />
                <div data-target='${elementName}.searchAbsolute' id='search-absolute'>
                    <div data-target='${elementName}.searchbarShortDisplayContainer' id='searchbar-short-display-container'>
                        <span id='search-icon-short-display' class='icon icon-magnifying-glass' alt='icon'></span>
                        <span id='placeholder-short-display'>Search all routes/crags...</span>
                    </div>
                    <div data-target='${elementName}.searchWidget' id='search-widget'>
                        <div data-target='${elementName}.searchbarInnerContainer' id='searchbar-inner-container'>
                            <span id='search-icon' class='icon icon-magnifying-glass' alt='icon'></span>
                            <input data-target='${elementName}.input' id='searchbar' spellcheck='false' autocorrect='off' autocomplete='off' autocapitalize='off' type='search' placeholder='Search all routes/crags...' data-results-url='/frontend/views/route_search/example.html' />
                            <span data-target='${elementName}.delete_text_button' id='delete-search-text-button' tabindex='-1' class='icon icon-circle-times hidden' alt='icon'></span>
                        </div>
                        <div>
                            <div data-target='${elementName}.progressBar' id='progess' class='loader-stopped hidden'></div>
                            <div data-target='${elementName}.search_query_description' id='search-query-description' class='hidden'></div>
                            <div data-target='${elementName}.querySuggestionContainer' id='searchbar-help-text-container' class='hidden'>
                                <div id='searchbar-query-suggestion-flex'>
                                    <div data-target='${elementName}.searchbarQuerySuggestion' id='searchbar-help-text'></div>
                                    <div data-target='${elementName}.helpButton' tabindex='-1' id='help-button' class='icon icon-question-mark' alt='icon'></div>
                                </div>
                            </div>
                        </div>
                        <div data-target='${elementName}.helpTextContainer' class='hidden'>
                        </div>
                        <ul data-target='${elementName}.search_results_container' id='search-results-container' class='hidden'>
                        </ul>
                        <div data-target='${elementName}.searchbarFooter' id='searchbar-footer' class='hidden'>
                            <div id='searchbar-footer-content'>
                                <div class='divider'></div>
                                <div class='footer-content'>
                                    <div style='align-items:center; display:flex; flex-direction:row-reverse; min-height:2rem'>
                                        <span data-target='${elementName}.returnKeyAction' class='mouse-over'>
                                            <span data-target='${elementName}.showAllResultsSpan' id='return-key-action' style='padding-right:4px;padding-left:8px;'>show all results</span>
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

var __defProp$e = Object.defineProperty;
var __getOwnPropDesc$e = Object.getOwnPropertyDescriptor;
var __decorateClass$e = (decorators, target2, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$e(target2, key) : target2;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target2, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp$e(target2, key, result);
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
  searchResultsIdentifier = "search-results";
  apiData;
  input;
  returnKeyAction;
  searchAbsolute;
  helpButton;
  delete_text_button;
  searchWidget;
  progressBar;
  search_results_container;
  searchbarInnerContainer;
  searchbarQuerySuggestion;
  querySuggestionContainer;
  helpTextContainer;
  search_query_description;
  searchbarFooter;
  showAllResultsSpan;
  grayView;
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
    return !this.search_results_container.classList.contains("hidden");
  }
  get query() {
    return this.input.value;
  }
  set query(query) {
    if (document.activeElement !== this.input) {
      this.input.focus();
    }
    this.input.value = query || "";
    this.input.dispatchEvent(new Event("input", { bubbles: true }));
    if (this.input.value) {
      this.delete_text_button.classList.remove("hidden");
    } else {
      this.apiData = void 0;
      this.showQuerySuggestion();
      this.stopProgressBar();
    }
  }
  get jsSelectString() {
    return html$1`document.getElementsByTagName('${this.elementName}')[0]`;
  }
  get isHelpVisible() {
    return !this.helpTextContainer.classList.contains("hidden");
  }
  get template() {
    return searchbarTemplate;
  }
  isAndroid = getMobileOS() === "android";
  connectedCallback() {
    super.connectedCallback();
    this.searchbarQuerySuggestion.innerHTML = `Here's some hint about the search bar`;
    if (isMobile()) {
      this.minSearchDelay = 500;
      this.maxSearchDelay = 1e3;
      this.input.addEventListener("input", this.debounceFunction(this._onSearchbarUpdated));
    } else {
      this.input.addEventListener("input", this.throttleFunction(this._onSearchbarUpdated));
    }
    this.input.addEventListener("focus", () => this.onSearchbarFocus());
    this.input.addEventListener("focusout", () => this.onSearchbarFocusout());
    this.grayView.addEventListener("click", () => this.hideAllExtras);
    this.helpButton.addEventListener("click", () => this.showHelp());
    this.helpButton.addEventListener("mousedown", (evt) => evt.preventDefault());
    document.addEventListener("keydown", (e) => this.maybeFocusSearchbar(e));
    this.input.addEventListener("keydown", (e) => this.onKeyPressedEvent(e));
    document.addEventListener("click", (e) => this.maybeHideDropdown(e));
    this.delete_text_button.addEventListener("click", (evt) => {
      this.query = "";
      evt.preventDefault();
    });
    this.delete_text_button.addEventListener("mousedown", (evt) => evt.preventDefault());
    this.returnKeyAction.addEventListener("click", () => this.submitSearch());
    Object.defineProperty(this, "onKeyPressedEvent", { value: onKeyPressedEvent });
    Object.defineProperty(this, "onEnterKey", { value: onEnterKey });
    Object.defineProperty(this, "onArrowUpKey", { value: onArrowUpKey });
    Object.defineProperty(this, "onArrowDownKey", { value: onArrowDownKey });
    const sb = this.input;
    this.search_results_container.ontouchstart = function(_e) {
      if (document.activeElement === sb) {
        sb.blur();
      }
    };
    this.helpTextContainer.ontouchstart = function(_e) {
      if (document.activeElement === sb) {
        sb.blur();
      }
    };
    this.search_results_container.style.maxHeight = `${window.innerHeight - 260}px`;
  }
  buildResults(_data) {
    throw new Error("You need to override this");
  }
  resignFocus() {
    this.input.blur();
    this.hideAllExtras();
  }
  showQuerySuggestion() {
    this.querySuggestionContainer.classList.remove("hidden");
    this.search_query_description.classList.add("hidden");
    this.searchbarFooter.classList.remove("display-if-necessary");
    this.search_results_container.classList.add("hidden");
    this.delete_text_button.classList.add("hidden");
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
  getElementById(id) {
    let element = document.getElementById(id);
    if (!element) {
      throw new Error(`failed to find element with id ${id}`);
    }
    return element;
  }
  createResultsDropdown() {
    let search_results_container = this.getElementById("search-results-container");
    search_results_container.classList.add("results-dropdown");
    return search_results_container;
  }
  maybeHideDropdown(e) {
    if (!this.searchWidget.contains(e.target)) {
      this.hideAllExtras();
    }
  }
  _onSearchbarUpdated = () => {
    if (this.isSearchbarEmpty) {
      this.apiData = void 0;
      this.delete_text_button.classList.add("hidden");
      this.stopProgressBar();
    } else {
      this.delete_text_button.classList.remove("hidden");
    }
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
    if (this.searchAbsolute.style.position === "fixed") {
      return;
    }
    performIfMobile(() => {
      const rect = this.searchAbsolute.getBoundingClientRect();
      this.input.style.caretColor = "transparent";
      this.input.style.paddingTop = "12pt";
      this.input.style.paddingBottom = "12pt";
      this.searchAbsolute.style.position = "fixed";
      this.searchAbsolute.style.top = rect.top + "px";
      this.searchAbsolute.style.left = rect.left + "px";
      this.searchAbsolute.style.width = rect.width + "px";
      this.searchAbsolute.style.transform = `translateY( -${Math.abs(rect.top) - 22}px)`;
      setTimeout(() => {
        this.input.style.caretColor = null;
      }, this.animateDuration);
    });
  }
  animateDuration = 300;
  resetSearchbarposition() {
    if (this.searchAbsolute.style.position !== "fixed") {
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
    this.searchAbsolute.style.transform = `translateY(0px)`;
    setTimeout(() => {
      this.searchAbsolute.style.position = null;
      this.searchAbsolute.style.top = null;
      this.searchAbsolute.style.left = null;
      this.searchAbsolute.style.width = null;
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
    this.searchWidget.classList.add("focussed");
    this.moveSearchbarHighIfMobile();
    clearTimeout(this.hideAllExtrasTimeout);
    this.setGrayViewDisplayState("visible");
    this.querySuggestionContainer.classList.add("hidden");
    this.progressBar.classList.add("hidden");
    if (this.isSearchbarFocussed) {
      this.progressBar.classList.remove("hidden");
      if (this.isSearchbarEmpty && !this.isHelpVisible) {
        this.querySuggestionContainer.classList.remove("hidden");
      }
    }
    if (!this.isSearchbarEmpty) {
      if (this.apiData) {
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
    this.searchWidget.classList.remove("focussed");
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
        this.grayView.classList.remove("fade-in");
        this.grayView.classList.add("fade-out");
        setTimeout(() => {
          this.grayView.classList.add("hidden");
        }, 200);
        break;
      case "visible":
        this.grayView.classList.remove("hidden");
        this.grayView.classList.remove("fade-out");
        this.grayView.classList.add("fade-in");
        break;
    }
  }
  showResultsDropdown() {
    this.search_results_container.classList.remove("hidden");
    this.searchWidget.classList.add("normal-background");
    this.searchbarFooter.classList.add("display-if-necessary");
    this.search_query_description.classList.remove("hidden");
    this.querySuggestionContainer.classList.add("hidden");
    if (isMobile()) {
      if (!this.isAndroid) {
        this.search_results_container.style.maxHeight = `${window.innerHeight - 260}px`;
      }
    } else {
      this.search_results_container.style.maxHeight = String(window.innerHeight * this.maxWindowHeightRatio) + "px";
    }
  }
  hideResultsDropdown() {
    this.hideHelp();
    this.resetSearchbarposition();
    this.search_results_container.classList.add("hidden");
    this.searchWidget.classList.remove("normal-background");
    this.searchbarFooter.classList.remove("display-if-necessary");
    this.search_query_description.classList.add("hidden");
    this.querySuggestionContainer.classList.add("hidden");
    if (this.isSearchbarFocussed) {
      this.querySuggestionContainer.classList.remove("hidden");
    }
    setTimeout(() => {
      if (this.isSearchbarFocussed) {
        return;
      }
      this.setGrayViewDisplayState("hidden");
    }, 150);
  }
  clearResultsDropdown() {
    this.search_results_container.innerHTML = "";
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
    this.progressBar.classList.add("hidden");
    this.querySuggestionContainer.classList.add("hidden");
    setTimeout(() => {
      this.hiding = false;
    }, 200);
  }
  selectResultEntry(index) {
    const entries = this.search_results_container.querySelectorAll("search-result");
    const resultEntryElement = entries[index];
    resultEntryElement.classList.add("selected");
    if (this.isElementVisible(resultEntryElement) === false) {
      resultEntryElement.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }
  startProgressBar() {
    this.progressBar.classList.add("loader-spinning");
  }
  stopProgressBar() {
    this.progressBar.classList.remove("loader-spinning");
  }
  showHelp() {
    alert("help text");
  }
  hideHelp() {
    this.helpTextContainer.classList.add("hidden");
  }
  submitSearch() {
    localStorage.setItem(this.searchResultsIdentifier, JSON.stringify(this.apiData));
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
    let isVisible = elemBottom < this.search_results_container.getBoundingClientRect().bottom;
    isVisible = isVisible && elemTop > this.search_results_container.getBoundingClientRect().top;
    return isVisible;
  }
};
__decorateClass$e([
  target
], BaseSearchbarElement.prototype, "input", 2);
__decorateClass$e([
  target
], BaseSearchbarElement.prototype, "returnKeyAction", 2);
__decorateClass$e([
  target
], BaseSearchbarElement.prototype, "searchAbsolute", 2);
__decorateClass$e([
  target
], BaseSearchbarElement.prototype, "helpButton", 2);
__decorateClass$e([
  target
], BaseSearchbarElement.prototype, "delete_text_button", 2);
__decorateClass$e([
  target
], BaseSearchbarElement.prototype, "searchWidget", 2);
__decorateClass$e([
  target
], BaseSearchbarElement.prototype, "progressBar", 2);
__decorateClass$e([
  target
], BaseSearchbarElement.prototype, "search_results_container", 2);
__decorateClass$e([
  target
], BaseSearchbarElement.prototype, "searchbarInnerContainer", 2);
__decorateClass$e([
  target
], BaseSearchbarElement.prototype, "searchbarQuerySuggestion", 2);
__decorateClass$e([
  target
], BaseSearchbarElement.prototype, "querySuggestionContainer", 2);
__decorateClass$e([
  target
], BaseSearchbarElement.prototype, "helpTextContainer", 2);
__decorateClass$e([
  target
], BaseSearchbarElement.prototype, "search_query_description", 2);
__decorateClass$e([
  target
], BaseSearchbarElement.prototype, "searchbarFooter", 2);
__decorateClass$e([
  target
], BaseSearchbarElement.prototype, "showAllResultsSpan", 2);
__decorateClass$e([
  target
], BaseSearchbarElement.prototype, "grayView", 2);
BaseSearchbarElement = __decorateClass$e([
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
let myQueryExamples = new Set(queryExamples);
let RouteSearchbarElement = class extends BaseSearchbarElement$1 {
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
    const wasHidden = this.searchbarQuerySuggestion.classList.contains("hidden");
    super.showQuerySuggestion();
    if (wasHidden) {
      this.setRandomQueryExample();
    }
  }
  showHelp() {
    this.helpTextContainer.innerHTML = html;
    this.helpTextContainer.style.overflowY = "auto";
    this.helpTextContainer.style.padding = "8pt";
    this.helpTextContainer.style.fontSize = "10pt";
    this.helpTextContainer.style.color = "var(--subtitle-color)";
    this.helpTextContainer.style.paddingBottom = "0px";
    this.helpTextContainer.classList.remove("hidden");
    this.helpTextContainer.style.maxHeight = String(window.innerHeight * this.maxWindowHeightRatio) + "px";
    isMobile() && (this.helpTextContainer.style.maxHeight = `${window.innerHeight - 122}px`);
    this.showResultsDropdown();
    this.querySuggestionContainer.classList.add("hidden");
    this.search_query_description.classList.add("hidden");
    this.searchbarFooter.classList.remove("display-if-necessary");
    this.search_results_container.classList.add("hidden");
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
    this.searchbarQuerySuggestion.innerHTML = html$1`Need inspiration? How about: <a href="javascript:${this.jsSelectString}.updateRandomQuery();void(0);">${random}</a>`;
  }
  fetchResults() {
    const currentSearchId = new Date();
    const currentQuery = this.query.trim();
    (async () => {
      this.search_results_container.style.opacity = "0.4";
      const response = await fetch(generateApiUrl$4(), {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(
          {
            search_query: currentQuery,
            page_size: 100,
            page: 0
          }
        )
      });
      const results = await response.json();
      if (this.searchId.getTime() > currentSearchId.getTime()) {
        return;
      }
      this.stopProgressBar();
      this.searchId = currentSearchId;
      this.lastSearch = currentQuery;
      this.buildResults(results);
      this.search_results_container.style.opacity = "1";
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
      this.searchbarQuerySuggestion.innerHTML = "Keep typing...";
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
    if (!this.apiData) {
      return;
    }
  }
  queue = [];
  buildResults(data) {
    this.queue = [];
    this.clearResultsDropdown();
    if (this.isSearchbarFocussed) {
      this.showResultsDropdown();
    }
    this.apiData = data;
    if (data.objects?.length === 0) {
      appendNoResults(this);
    }
    if (data.meta.parsed_query) {
      this.search_query_description.innerHTML = data.meta.parsed_query.queryDescription;
    } else {
      this.search_query_description.innerHTML = "";
    }
    let routeCount = 0;
    let cragCount = 0;
    data.objects?.forEach((element, idx) => {
      switch (element.type) {
        case "route_ukc": {
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
      }
      if (routeCount == 1 && cragCount) {
        this.queue.push(() => {
          appendDivider(this, idx);
        });
      }
    });
    this.showAllResultsSpan.classList.remove("hidden");
    this.showAllResultsSpan.innerHTML = `Show all ${data.meta?.total_matches} results`;
    this.processQueue();
  }
  processQueue() {
    if (this.queue.length) {
      this.queue.shift()();
      Promise.resolve().then(() => this.processQueue());
    }
  }
  appendCrag(target, crag) {
    return appendCrag({ target, crag });
  }
  appendRoute(target, route) {
    return appendRoute({ target, route });
  }
};
RouteSearchbarElement = __decorateClass$d([
  controller
], RouteSearchbarElement);
const RouteSearchbarElement$1 = RouteSearchbarElement;

var UkcLocalStorage;
((UkcLocalStorage2) => {
  class RouteLookupForCrag {
    static identifier(cragId) {
      return `crag_routes_lookup_for_crag_${cragId}`;
    }
    static fetch(cragId) {
      const data = localStorage.getItem(this.identifier(cragId));
      if (data)
        return JSON.parse(data);
      return void 0;
    }
    static store(routes) {
      localStorage.setItem(this.identifier(routes.cragId), JSON.stringify(routes));
    }
  }
  UkcLocalStorage2.RouteLookupForCrag = RouteLookupForCrag;
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
      const res = await response.json();
      this.isFetching = false;
      while (this.queue.length > 0) {
        const callback = this.queue.shift();
        callback(res);
      }
      return res;
    }
    queue = [];
    async fetchLookup(callback) {
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
        this.loadFromRemoteDetails(remoteDeets);
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
      remoteDeets.logbook.forEach((ascent) => this.addAscent(ascent));
      remoteDeets.wishlist.forEach((wish) => this.addWishlistItem(wish));
      remoteDeets.logbook_deletes.forEach((deets) => this.deleteAscent(deets));
      remoteDeets.wishlist_deletes.forEach((deets) => this.deleteWishlistItem(deets));
    }
    addAscent(ascent) {
      this.logbook[ascent.route_id_ukc] = this.logbook[ascent.route_id_ukc] || [];
      if (typeof ascent.ascent_date === "string") {
        ascent = new AscentInfo(ascent);
      }
      ascent.ascent_date = new Date(ascent.ascent_date);
      this.logbook[ascent.route_id_ukc].push(ascent);
    }
    addWishlistItem(wishlistItem) {
      this.wishlist[wishlistItem.route_id_ukc] = this.wishlist[wishlistItem.route_id_ukc] || [];
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
const sharedStorage$5 = UkcLocalStorage.sharedLogbook;
let UkcSearchbarElement = class extends RouteSearchbarElement$1 {
  searchResultsIdentifier = "ukc-search-results";
  connectedCallback() {
    super.connectedCallback();
    sharedStorage$5.fetchLookup((_res) => this.updateLogbookAndWishlistStatusOfCells());
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
UkcSearchbarElement = __decorateClass$c([
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

var __defProp$b = Object.defineProperty;
var __getOwnPropDesc$b = Object.getOwnPropertyDescriptor;
var __decorateClass$b = (decorators, target2, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$b(target2, key) : target2;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target2, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp$b(target2, key, result);
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
__decorateClass$b([
  attr
], TopoDotElement.prototype, "colorName", 1);
__decorateClass$b([
  target
], TopoDotElement.prototype, "stroke", 2);
__decorateClass$b([
  target
], TopoDotElement.prototype, "fill", 2);
TopoDotElement = __decorateClass$b([
  controller
], TopoDotElement);
const TopoDotElement$1 = TopoDotElement;

const routeTemplate = (element) => {
  const el = element;
  return html$1`
        <li class='result-entry-container'>
            <a data-target='${el.elementName}.href' href='${el.url}' style="position:relative;display:block;">
                <wishlist-indicator data-target='${el.elementName}.wishlist_indicator' alt='wishlist-indicator'></wishlist-indicator>
                <logbook-indicator data-target='${el.elementName}.logbook_indicator' color-name='green' alt='logbook-indicator'></logbook-indicator>
                <div class='result-entry'>
                    <div class="result-icon-area">
                        <topo-dot data-target='${el.elementName}.topo_dot' color-name='${el.colorName}' class='result-icon' alt='icon'></topo-dot>
                        <crag-icon data-target='${el.elementName}.crag_icon' class='result-icon' alt='icon'></crag-icon>
                    </div>
                    <div class="result-text-area">
                        <div class='result-entry-start'>
                            <div id="name-and-grade">
                                <span data-target='${el.elementName}.item_name' class='result-title'></span>
                                <div id="star-count-and-route-grade">
                                    <span data-target='${el.elementName}.star_count' class='result-star-count'></span>
                                    <span data-target='${el.elementName}.route_grade' class='result-grade'></span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div class='result-entry-end'>
                                <span data-target='${el.elementName}.crag_name' class='result-crag-name'></span>
                                <div style="margin-left:4px;">
                                    <span data-target='${el.elementName}.county_name' class='result-context'></span>
                                    <span data-target='${el.elementName}.country_name' class='result-sub-context'></span>
                                </div>
                            </div>
                            ${el.htmlForSlot("result-entry-extras")}
                        </div>
                    </div>
                </div>
            </a>
        </li>
    `;
};

var __defProp$a = Object.defineProperty;
var __getOwnPropDesc$a = Object.getOwnPropertyDescriptor;
var __decorateClass$a = (decorators, target2, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$a(target2, key) : target2;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target2, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp$a(target2, key, result);
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
__decorateClass$a([
  target
], SearchResultElement.prototype, "href", 2);
__decorateClass$a([
  target
], SearchResultElement.prototype, "topo_dot", 2);
__decorateClass$a([
  target
], SearchResultElement.prototype, "item_name", 2);
__decorateClass$a([
  target
], SearchResultElement.prototype, "route_grade", 2);
__decorateClass$a([
  target
], SearchResultElement.prototype, "star_count", 2);
__decorateClass$a([
  target
], SearchResultElement.prototype, "crag_name", 2);
__decorateClass$a([
  target
], SearchResultElement.prototype, "county_name", 2);
__decorateClass$a([
  target
], SearchResultElement.prototype, "country_name", 2);
__decorateClass$a([
  target
], SearchResultElement.prototype, "logbook_indicator", 2);
__decorateClass$a([
  target
], SearchResultElement.prototype, "wishlist_indicator", 2);
__decorateClass$a([
  target
], SearchResultElement.prototype, "crag_icon", 2);
__decorateClass$a([
  target
], SearchResultElement.prototype, "extras_slot", 2);
__decorateClass$a([
  attr
], SearchResultElement.prototype, "slugFull", 1);
__decorateClass$a([
  attr
], SearchResultElement.prototype, "itemName", 1);
__decorateClass$a([
  attr
], SearchResultElement.prototype, "routeGrade", 1);
__decorateClass$a([
  attr
], SearchResultElement.prototype, "starCount", 1);
__decorateClass$a([
  attr
], SearchResultElement.prototype, "cragName", 1);
__decorateClass$a([
  attr
], SearchResultElement.prototype, "countyName", 1);
__decorateClass$a([
  attr
], SearchResultElement.prototype, "countryName", 1);
__decorateClass$a([
  attr
], SearchResultElement.prototype, "colorId", 1);
__decorateClass$a([
  attr
], SearchResultElement.prototype, "routeIdUkc", 1);
__decorateClass$a([
  attr
], SearchResultElement.prototype, "logStatus", 1);
__decorateClass$a([
  attr
], SearchResultElement.prototype, "wishlistStatus", 1);
SearchResultElement = __decorateClass$a([
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

var __defProp$9 = Object.defineProperty;
var __getOwnPropDesc$9 = Object.getOwnPropertyDescriptor;
var __decorateClass$9 = (decorators, target2, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$9(target2, key) : target2;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target2, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp$9(target2, key, result);
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
__decorateClass$9([
  attr
], LogbookIndicatorElement.prototype, "colorName", 1);
__decorateClass$9([
  target
], LogbookIndicatorElement.prototype, "stroke", 2);
__decorateClass$9([
  target
], LogbookIndicatorElement.prototype, "fill", 2);
LogbookIndicatorElement = __decorateClass$9([
  controller
], LogbookIndicatorElement);
const LogbookIndicatorElement$1 = LogbookIndicatorElement;

const logentryTemplate = (element) => {
  const el = element;
  return html$1`
        <li class='result-entry-container'>
            <a data-target='${el.elementName}.href' href='${el.url}' style="position:relative;display:block;">
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
        </li>
    `;
};

var __defProp$8 = Object.defineProperty;
var __getOwnPropDesc$8 = Object.getOwnPropertyDescriptor;
var __decorateClass$8 = (decorators, target2, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$8(target2, key) : target2;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target2, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp$8(target2, key, result);
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
  set ascensionistDetails(ascensionist) {
    this.ascensionist.innerHTML = `<a href='/logbook/logbook/?user_id=${ascensionist.id}'>${escape(ascensionist.name)}</a>`;
  }
  set partners(partners) {
    if (this.partner_names_with)
      this.partner_names_with.hidden = partners.length === 0;
    const frags = partners.map((p) => {
      if (p.id) {
        return `<a href='/logbook/logbook/?user_id=${p.id}'>${p.name}</a>`;
      } else {
        return p?.name;
      }
    });
    this.partner_names.innerHTML = escape(frags.join(", "));
  }
  get template() {
    return logentryTemplate;
  }
};
__decorateClass$8([
  target
], LogbookResultElement.prototype, "ascensionist", 2);
__decorateClass$8([
  target
], LogbookResultElement.prototype, "partner_names", 2);
__decorateClass$8([
  target
], LogbookResultElement.prototype, "partner_names_with", 2);
__decorateClass$8([
  target
], LogbookResultElement.prototype, "ascent_style_indicator", 2);
__decorateClass$8([
  target
], LogbookResultElement.prototype, "ascent_style", 2);
__decorateClass$8([
  target
], LogbookResultElement.prototype, "ascent_notes", 2);
__decorateClass$8([
  target
], LogbookResultElement.prototype, "ascent_date", 2);
__decorateClass$8([
  targets
], LogbookResultElement.prototype, "crag_names", 2);
__decorateClass$8([
  targets
], LogbookResultElement.prototype, "county_names", 2);
__decorateClass$8([
  targets
], LogbookResultElement.prototype, "country_names", 2);
__decorateClass$8([
  attr
], LogbookResultElement.prototype, "cragName", 1);
__decorateClass$8([
  attr
], LogbookResultElement.prototype, "countyName", 1);
__decorateClass$8([
  attr
], LogbookResultElement.prototype, "countryName", 1);
__decorateClass$8([
  attr
], LogbookResultElement.prototype, "ascentNotes", 1);
__decorateClass$8([
  attr
], LogbookResultElement.prototype, "ascentStyle", 1);
__decorateClass$8([
  attr
], LogbookResultElement.prototype, "ascentStyleSimple", 1);
LogbookResultElement = __decorateClass$8([
  controller
], LogbookResultElement);

const routeResultTemplate = (element) => {
  const el = element;
  return html$1`
        <li class='result-entry-container'>
            <a data-target='${el.elementName}.href' href='${el.url}' style="position:relative;display:block;">
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
                        <div class='w-100'>
                            <div class='ascent-area'>
                                <div data-target='${el.elementName}.route_description' class='ascent-notes' hidden></div>
                                <div class='ascent-details justify-content-space-between align-items-baseline'>
                                    <div class='ascent-details-start'>
                                        <span data-target='${el.elementName}.fa_details' class="font-italic"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </a>
        </li>
    `;
};

var __defProp$7 = Object.defineProperty;
var __getOwnPropDesc$7 = Object.getOwnPropertyDescriptor;
var __decorateClass$7 = (decorators, target2, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$7(target2, key) : target2;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target2, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp$7(target2, key, result);
  return result;
};
let RouteResultElement = class extends SearchResultElement$1 {
  ascensionist;
  route_description;
  fa_details;
  set routeDescription(v) {
    if (this.route_description) {
      this.route_description.hidden = !v;
      this.route_description.innerHTML = escape(v?.trim() || "");
    }
  }
  set faDetails(v) {
    if (this.fa_details) {
      this.fa_details.hidden = !v;
      const deets = v?.trim();
      this.fa_details.innerHTML = escape(deets);
    }
  }
  get template() {
    return routeResultTemplate;
  }
};
__decorateClass$7([
  target
], RouteResultElement.prototype, "ascensionist", 2);
__decorateClass$7([
  target
], RouteResultElement.prototype, "route_description", 2);
__decorateClass$7([
  target
], RouteResultElement.prototype, "fa_details", 2);
RouteResultElement = __decorateClass$7([
  controller
], RouteResultElement);

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
const sharedStorage$4 = UkcLocalStorage.sharedLogbook;
let UkcResultsElement = class extends SearchResultsElement {
  get searchbarTag() {
    return "ukc-searchbar";
  }
  searchResultsIdentifier = "ukc-search-results";
  connectedCallback() {
    super.connectedCallback();
    sharedStorage$4.fetchLookup((_res) => this.updateLogbookAndWishlistStatusOfCells());
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
  updateLogbookAndWishlistStatusOfCells() {
    const cells = this.getElementsByClassName("search-result");
    for (let i = 0; i < cells.length; i++) {
      const cell = cells[i];
      cell.logStatus = sharedStorage$4.logbookStatus(cell.routeIdUkc);
      cell.wishlistStatus = sharedStorage$4.wishlistStatus(cell.routeIdUkc);
    }
  }
  get template() {
    return (element) => {
      return html$1`
        <style>
          #breadcrumb-container .d-flex {
            display: none !important;
          }
          .bg-danger {
            display: none;
          }
        </style>
        ${super.template(element)}
      `;
    };
  }
};
UkcResultsElement = __decorateClass$6([
  controller
], UkcResultsElement);
const UkcResultsElement$1 = UkcResultsElement;

var __defProp$5 = Object.defineProperty;
var __getOwnPropDesc$5 = Object.getOwnPropertyDescriptor;
var __decorateClass$5 = (decorators, target2, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$5(target2, key) : target2;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target2, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp$5(target2, key, result);
  return result;
};
const sharedStorage$3 = UkcLocalStorage.sharedLogbook;
const generateApiUrl$3 = () => {
  const targetOrigin = apiOrigin();
  return `${targetOrigin}/v1/rockfax/search/logbook`;
};
let UkcLogbookElement = class extends UkcResultsElement$1 {
  searchBarPlaceholderString = "Search all routes/crags...";
  get apiUrl() {
    return generateApiUrl$3();
  }
  lastHeaderString = "";
  get sortOrderKey() {
    return "logbook_sort_order";
  }
  get defaultSortOrder() {
    return "date";
  }
  connectedCallback() {
    this.innerHTML ||= this.template(this);
    super.connectedCallback();
    this.sort_button.style.display = "block";
    this.sort_order.style.display = "block";
    this.input.placeholder = "Filter your logbook...";
    document.addEventListener("DOMContentLoaded", () => {
      this.searchBar.submitSearchHandler = (resultsUrl) => {
        window.location.href = resultsUrl;
      };
      this.input.value = this.urlFilter || "";
      this.searchBar.input.value = "";
    });
  }
  queryToUseDuringInit() {
    return this.urlFilter || "";
  }
  searchResultsIdentifier = "ukc-logbook";
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
  appendHeader(innerText, ascentCount, target2, objectDescriptor) {
    const el = document.createElement("div");
    el.classList.add("date-header");
    const span = document.createElement("span");
    span.innerText = innerText;
    el.appendChild(span);
    const span2 = document.createElement("span");
    const word = objectDescriptor[ascentCount === 1 ? "singular" : "plural"];
    span2.innerText = `${ascentCount} ${word}`;
    el.appendChild(span2);
    target2.search_results_container.appendChild(el);
    return el;
  }
  appendRoute(target2, route, tagName) {
    const el = appendRoute({ target: target2, route, tagName: "logbook-result" });
    const myAscent = sharedStorage$3.bestAscent(route.id_ukc);
    el.logStatus = sharedStorage$3.logbookStatus(route.id_ukc);
    el.setAttribute("title", myAscent?.lastClimbedDescription || "not in your logbook");
    const ascent = new UkcLocalStorage.AscentInfo(route.associated_ascent_entry);
    if (ascent) {
      el.ascentStyleSimple = escape(ascent.simple_style_name || "unknown");
      el.partners = ascent.partners;
      el.ascentStyle = ascent.ascent_style?.short_name || "unknown";
      el.ascentNotes = ascent.notes;
      el.ascent_date.innerText = this.sort_order.value === "date" ? "" : ascent.shortDateString;
    }
    el.wishlistStatus = sharedStorage$3.wishlistStatus(route.id_ukc);
    return el;
  }
  async fetchResultsForPage(query, pageNo) {
    this.lastHeaderString = "";
    const res = await super.fetchResultsForPage(query, pageNo);
    if (!this.response) {
      return;
    }
    if (this.response.status === 401) {
      this.responseMessage = res.error;
      return res;
    }
    if (res.meta?.is_third_party) {
      this.input.placeholder = `Filter ${res.meta.user_name_short}'s logbook...`;
    }
    this.search_results_title.innerHTML = `<span style="font-size: 0.8em">Logbook for <a href="/user/profile.php?id=${res.meta?.user_id}">${escape(res.meta?.user_name || "")}</a></span>`;
    return res;
  }
  bodyForRequest(query, pageNo) {
    const res = super.bodyForRequest(query, pageNo);
    res.user_id = this.userIdForRequest;
    return res;
  }
  htmlForSlot(slotName) {
    if (slotName === "ukc-search-results-sort-order-options") {
      return html$1`
        <option value="date"      >Order by ascent date</option>
        <option value="crag_name" >Order by crag name</option>
        <option value="style"     >Order by ascent style</option>
        <option value="grade"     >Order by route grade</option>
        <!--<option value="voted_grade">Order by voted grade</option>-->
      `;
    }
    return "";
  }
  buildResults(_data) {
    const data = _data;
    console.dir(data, { depth: null });
    this.queue = [];
    this.clearResultsDropdown();
    this.apiData = data;
    this.page_control.pageCount = data.meta?.total_pages;
    this.page_control.currentPage = data.meta?.page;
    if (data.objects?.length === 0) {
      appendNoResults(this);
    }
    if (this.search_query_description) {
      if (data.meta?.parsed_query) {
        const c = data.meta?.total_matches;
        this.search_query_description.innerHTML = data.meta.parsed_query.queryDescription + ` (${c}&nbsp;match${c === 1 ? "" : "es"})`;
      } else {
        this.search_query_description.innerHTML = "";
      }
    }
    if (this.response.status === 401) {
      this.search_results_container.innerHTML = this.privateDivString();
      return;
    }
    data.objects.forEach((section) => {
      this.queue.push(() => {
        let title = section.title;
        this.appendHeader(title, section.routes.length, this, data.meta.object_return_type.name);
      });
      section.routes.forEach((rte) => {
        this.queue.push(() => {
          this.appendRoute(this, rte);
        });
      });
    });
    this.processQueue();
  }
  privateDivString() {
    return html$1`
    <div class='d-flex w-75 mx-auto justify-content-center pt-5 pb-5' style='opacity:0.5;'><i class="fas fa-do-not-enter pr-2 mt-1"></i>${this.responseMessage}</div>
    `;
  }
};
UkcLogbookElement = __decorateClass$5([
  controller
], UkcLogbookElement);
const UkcLogbookElement$1 = UkcLogbookElement;

var __defProp$4 = Object.defineProperty;
var __getOwnPropDesc$4 = Object.getOwnPropertyDescriptor;
var __decorateClass$4 = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$4(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp$4(target, key, result);
  return result;
};
const sharedStorage$2 = UkcLocalStorage.sharedLogbook;
const generateApiUrl$2 = () => {
  const targetOrigin = apiOrigin();
  return `${targetOrigin}/v1/rockfax/search/wishlist`;
};
let UkcWishlistElement = class extends UkcLogbookElement$1 {
  get apiUrl() {
    return generateApiUrl$2();
  }
  ascentsByDateLookup = {};
  get sortOrderKey() {
    return "wishlist_sort_order";
  }
  get defaultSortOrder() {
    return "date";
  }
  connectedCallback() {
    super.connectedCallback();
    this.sort_button.style.display = "block";
    this.sort_order.style.display = "block";
    this.input.placeholder = "Filter your wishlist...";
  }
  searchResultsIdentifier = "ukc-wishlist";
  get allowEmptyQuery() {
    return true;
  }
  appendRoute(target, route, tagName) {
    const el = appendRoute({ target, route, tagName: "logbook-result" });
    const myAscent = sharedStorage$2.bestAscent(route.id_ukc);
    el.logStatus = sharedStorage$2.logbookStatus(route.id_ukc);
    el.setAttribute("title", myAscent?.lastClimbedDescription || "not in your logbook");
    const ascent = new UkcLocalStorage.WishlistInfo(route.associated_ascent_entry);
    el.partner_names_with.hidden = true;
    if (ascent) {
      el.ascentStyleSimple = ascent.simple_style_name || "unknown";
      el.ascent_style_indicator.style.display = "none";
      el.ascentNotes = ascent.notes;
    }
    el.wishlistStatus = sharedStorage$2.wishlistStatus(route.id_ukc);
    return el;
  }
  async fetchResultsForPage(query, pageNo) {
    const res = await super.fetchResultsForPage(query, pageNo);
    if (this.response.status === 401) {
      return res;
    }
    if (res.meta?.is_third_party) {
      this.input.placeholder = `Filter ${escape(res.meta?.user_name_short || "")}'s wishlist...`;
    }
    this.search_results_title.innerHTML = `<span style="font-size: 0.8em">Wishlist for <a href="/user/profile.php?id=${res.meta?.user_id}">${escape(res.meta?.user_name || "")}</a></span>`;
    return res;
  }
  bodyForRequest(query, pageNo) {
    const res = super.bodyForRequest(query, pageNo);
    res.user_id = this.userIdForRequest;
    res.sort_by = this.sort_order.value;
    return res;
  }
  htmlForSlot(slotName) {
    if (slotName === "ukc-search-results-sort-order-options") {
      return html$1`
        <option value="date"      >Order by date added</option>
        <option value="crag_name" >Order by crag name</option>
        <option value="grade"     >Order by route grade</option>
        <!--<option value="voted_grade">Order by voted grade</option>-->
      `;
    }
    return "";
  }
};
UkcWishlistElement = __decorateClass$4([
  controller
], UkcWishlistElement);

var __defProp$3 = Object.defineProperty;
var __getOwnPropDesc$3 = Object.getOwnPropertyDescriptor;
var __decorateClass$3 = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$3(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp$3(target, key, result);
  return result;
};
const sharedStorage$1 = UkcLocalStorage.sharedLogbook;
const generateApiUrl$1 = () => {
  const targetOrigin = apiOrigin();
  return `${targetOrigin}/v1/rockfax/search/partner_ascents`;
};
let UkcPartnerAscentsElement = class extends UkcLogbookElement$1 {
  get apiUrl() {
    return generateApiUrl$1();
  }
  ascentsByDateLookup = {};
  get sortOrderKey() {
    return "partner_ascents_sort_order";
  }
  get defaultSortOrder() {
    return "date";
  }
  connectedCallback() {
    super.connectedCallback();
    this.sort_button.style.display = "block";
    this.sort_order.style.display = "block";
    this.input.placeholder = `Filter your partners' ascents...`;
  }
  searchResultsIdentifier = "ukc-partner-ascents";
  get allowEmptyQuery() {
    return true;
  }
  appendRoute(target, route, tagName) {
    const el = appendRoute({ target, route, tagName: "logbook-result" });
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
      el.ascent_date.innerText = this.sort_order.value === "date" ? "" : ascent.shortDateString;
    }
    el.wishlistStatus = sharedStorage$1.wishlistStatus(route.id_ukc);
    return el;
  }
  async fetchResultsForPage(query, pageNo) {
    const res = await super.fetchResultsForPage(query, pageNo);
    if (this.response.status === 401) {
      return res;
    }
    if (res.meta?.is_third_party) {
      this.input.placeholder = `Filter ${res.meta?.user_name_short}'s partners' ascents...`;
    } else {
      this.input.placeholder = `Filter your partners' ascents...`;
    }
    this.search_results_title.innerHTML = `<span style="font-size: 0.8em">Recent partner ascents for <a href="/user/profile.php?id=${res.meta?.user_id}">${escape(res.meta?.user_name || "")}</a></span>`;
    return res;
  }
  bodyForRequest(query, pageNo) {
    const res = super.bodyForRequest(query, pageNo);
    res.user_id = this.userIdForRequest;
    res.sort_by = this.sort_order.value;
    return res;
  }
  htmlForSlot(slotName) {
    if (slotName === "ukc-search-results-sort-order-options") {
      return html$1`
        <option value="date"      >Order by ascent date</option>
        <option value="crag_name" >Order by crag name</option>
        <option value="grade"     >Order by route grade</option>
        <option value="user_name" >Order by partner</option>
        <!--<option value="voted_grade">Order by voted grade</option>-->
      `;
    }
    return "";
  }
};
UkcPartnerAscentsElement = __decorateClass$3([
  controller
], UkcPartnerAscentsElement);

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
function isArrayLike(target) {
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
iterables.isArrayLike = isArrayLike;
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

var __defProp$2 = Object.defineProperty;
var __getOwnPropDesc$2 = Object.getOwnPropertyDescriptor;
var __decorateClass$2 = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$2(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp$2(target, key, result);
  return result;
};
const generateApiUrl = () => {
  const targetOrigin = apiOrigin();
  return `${targetOrigin}/v1/rockfax/search/route_ukc_for_crag`;
};
const sharedStorage = UkcLocalStorage.sharedLogbook;
let RoutesViewerElement = class extends UkcLogbookElement$1 {
  get apiUrl() {
    return generateApiUrl();
  }
  lastCell = null;
  loadedCellCount = 0;
  cellsToLoadAtATime = 50;
  cellsLastLoadedAt = new Date().getTime();
  loadedRoutes = /* @__PURE__ */ new Set();
  set baseData(newVal) {
    this._baseData = newVal;
    UkcLocalStorage.BaseRouteDataForCrag.store(newVal, this.cragId);
  }
  get baseData() {
    this._baseData ||= UkcLocalStorage.BaseRouteDataForCrag.fetch(this.cragId);
    return this._baseData;
  }
  cragId;
  searchResultsIdentifier = "routes-viewer";
  isInitialFetchComplete = false;
  _routesLookup;
  set routesLookup(newVal) {
    UkcLocalStorage.RouteLookupForCrag.store(newVal);
  }
  get routesLookup() {
    this._routesLookup ||= UkcLocalStorage.RouteLookupForCrag.fetch(this.cragId);
    return this._routesLookup;
  }
  get sortOrderKey() {
    return "routes_viewer_sort_order";
  }
  get defaultSortOrder() {
    return "ltr";
  }
  connectedCallback() {
    super.connectedCallback();
    this.sort_button.style.display = "block";
    this.sort_order.style.display = "block";
    this.input.placeholder = "Filter routes at this crag...";
    this.sort_order.value = this.urlSortOrder || this.savedSortOrder;
    document.addEventListener("scroll", async (_evt) => {
      const scroll = this.lastCell?.getBoundingClientRect().top;
      const time = new Date().getTime();
      if (time - this.cellsLastLoadedAt > 500 && scroll && scroll < window.innerHeight + 400) {
        this.cellsLastLoadedAt = time;
        this.loadCellsForObjectsWithIdsReturn(this.apiData);
      }
    });
    this.page_control.style.display = "none";
    this.performInitialFetch();
  }
  index;
  async performInitialFetch() {
    const routes = this.routesLookup;
    const fakeData = { objects: [{ routes: Object.values(routes.routes) }] };
    await this.buildInvertedIndex(fakeData);
    this.buildResults(this.baseData);
    this.stopProgressBar();
    const bodyWithNoQuery = this.bodyForRequest("", 0);
    bodyWithNoQuery.return_type = "full";
    const bodyWithQuery = this.bodyForRequest(this.urlFilter, 0);
    bodyWithQuery.return_type = "ids";
    const mainCall = fetch(
      this.apiUrl,
      {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(bodyWithNoQuery)
      }
    );
    const filterCall = fetch(
      this.apiUrl,
      {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(bodyWithQuery)
      }
    );
    try {
      const [data, ids] = await Promise.all([mainCall, filterCall]);
      const [dataJson, idsJson] = await Promise.all([data.json(), ids.json()]);
      this.routesLookup = this.buildRoutesLookup(dataJson);
      dataJson.objects = this.buildIdsSectionArray(dataJson);
      this.baseData = dataJson;
      this.search_results_title.innerHTML = `<span style="font-size: 0.8em">Routes at ${escape(dataJson.meta.crag_name || "")}</span>`;
      this.buildResults(idsJson);
      this.isInitialFetchComplete = true;
      void this.buildInvertedIndex(dataJson);
    } catch (err) {
      const routes2 = this.routesLookup;
      const fakeData2 = { objects: [{ routes: Object.values(routes2.routes) }] };
      await this.buildInvertedIndex(fakeData2);
      this.buildResults(this.baseData);
      this.stopProgressBar();
    }
  }
  buildIdsSectionArray(data) {
    return data.objects.map((section) => {
      return {
        title: section.title,
        routes: section.routes,
        ids: section.routes.map((rte) => rte.id_ukc)
      };
    });
  }
  async buildInvertedIndex(data) {
    const addFun = (route) => {
      const words = Array.from(new Set(
        [
          route.item_name,
          route.buttress_name,
          route.crag_name,
          route.area_name,
          route.country_name,
          route.route_grade,
          route.route_type_name,
          route.first_ascent_string,
          stars[route.star_count]
        ].join(" ").toLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu, "").split(/\s+/g).map((w) => trigramWrapped(w)).flat()
      ));
      return words;
    };
    const queryFun = (query) => {
      const res = Array.from(new Set(
        query.toLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu, "").split(/\s+/g).map((w) => trigramWrapped(w)).flat()
      ));
      console.log(res);
      return res;
    };
    const index = new invertedIndex([addFun, queryFun]);
    data.objects.forEach((section) => {
      section.routes.forEach((route) => {
        index.add(route);
      });
    });
    this.index = index;
  }
  get allowEmptyQuery() {
    return true;
  }
  async fetchResultsForPage(query, pageNo) {
    if (window.navigator.onLine && !this.isInitialFetchComplete) {
      return { meta: {}, objects: [] };
    }
    if (window.navigator.onLine) {
      this.lastHeaderString = "";
      const res = await super.fetchResultsForPage(query, pageNo);
      this.search_results_title.innerHTML = `<span style="font-size: 0.8em">Routes at ${escape(res.meta.crag_name || "")}</span>`;
      return res;
    } else {
      console.log("offline");
      return this.fetchResultsForPageLocal(query, pageNo);
    }
  }
  async fetchResultsForPageLocal(query, pageNo) {
    let objects = [];
    console.log(this.index);
    let count = 0;
    const routes = this.index?.get(query).sort((a, b) => {
      return b.order - a.order;
    });
    let currentSection = { title: "", ids: [] };
    routes.forEach((route) => {
      count++;
      if (currentSection.title !== route.buttress_name) {
        currentSection = { title: route.buttress_name, ids: [] };
        objects.push(currentSection);
      }
      currentSection.ids.push(route.id_ukc);
    });
    const meta = {
      is_third_party: false,
      logbook_size: 286,
      object_return_type: { name: { singular: "route", plural: "routes" } },
      page: 0,
      sort_by: "date",
      total_matches: 286,
      total_pages: 6,
      user_id: 45296,
      user_name: "Stephen Horne - Rockfax",
      user_name_short: "Stephen",
      parsed_query: {
        queryDescription: `<span style="color:#F8CA68FF">\u26A0 No internet, using fallback search</span>`
      }
    };
    meta.parsed_query.queryDescription;
    meta.total_count = count;
    return { meta, objects };
  }
  bodyForRequest(query, pageNo) {
    const type = Object.keys(this.routesLookup?.routes || {}).length ? "ids" : "full";
    const cookie = Cookies.default().cookie;
    return {
      cookie,
      search_query: query,
      sort_by: this.sort_order.value,
      direction: this.sortDirectionFromButton,
      return_type: type,
      crag_id: Number(this.cragId)
    };
  }
  htmlForSlot(slotName) {
    if (slotName === "ukc-search-results-sort-order-options") {
      return html$1`
        <option value="ltr" >Order left to right</option>
        <option value="grade" >Order by route grade</option>
        <!--<option value="voted_grade">Order by voted grade</option>-->
      `;
    }
    return "";
  }
  buildResults(_data) {
    if (!_data) {
      return;
    }
    this.loadedRoutes = /* @__PURE__ */ new Set();
    const data = _data;
    this.loadedCellCount = 0;
    console.dir(data, { depth: null });
    this.queue = [];
    this.clearResultsDropdown();
    this.page_control.pageCount = data.meta?.total_pages;
    this.page_control.currentPage = data.meta?.page;
    if (data.objects?.length === 0) {
      appendNoResults(this);
    }
    if (this.search_query_description) {
      if (data.meta?.parsed_query) {
        const c = data.meta?.total_matches;
        this.search_query_description.innerHTML = data.meta.parsed_query.queryDescription + ` (${c}&nbsp;match${c === 1 ? "" : "es"})`;
      } else {
        this.search_query_description.innerHTML = "";
      }
    }
    if (this.response?.status === 401) {
      this.search_results_container.innerHTML = this.privateDivString();
      return;
    }
    this.apiData = data;
    this.loadCellsForObjectsWithIdsReturn(data);
  }
  loadCellsForObjectsWithIdsReturn(data) {
    if (!data)
      return;
    const objects = data.objects;
    let count = 0;
    objects.forEach((section) => {
      if (count > this.cellsToLoadAtATime) {
        return;
      }
      if (!this.loadedRoutes.has(section.ids[0])) {
        this.queue.push(() => {
          let title = section.title;
          this.appendHeader(title, section.ids.length, this, data.meta.object_return_type.name);
        });
      }
      section.ids.forEach((routeIdUkc) => {
        if (count > this.cellsToLoadAtATime) {
          return;
        }
        if (!this.loadedRoutes.has(routeIdUkc)) {
          this.loadedRoutes.add(routeIdUkc);
          count++;
          this.queue.push(() => {
            const rte = this.routesLookup?.routes[routeIdUkc];
            if (rte) {
              const el = this.appendRoute(this, rte);
              if (!this.queue.length) {
                this.lastCell = el;
              }
            } else {
              console.log("missing route", routeIdUkc);
            }
          });
        }
      });
    });
    this.processQueue();
  }
  buildRoutesLookup(data) {
    const lookup = {};
    const wrapper = {
      cragId: this.cragId,
      routes: lookup,
      lastUpdated: new Date()
    };
    data.objects.forEach((section) => {
      section.routes.forEach((route) => {
        lookup[route.id_ukc] = route;
      });
    });
    return wrapper;
  }
  loadCellsForObjectsWithFullReturn(data) {
    if (!data)
      return;
    const objects = data.objects;
    let count = 0;
    objects.forEach((section) => {
      if (count > this.cellsToLoadAtATime) {
        return;
      }
      if (!section.routes[0]?.isLoaded) {
        this.queue.push(() => {
          let title = section.title;
          this.appendHeader(title, section.routes.length, this, data.meta.object_return_type.name);
        });
      }
      section.routes.forEach((rte) => {
        if (count > this.cellsToLoadAtATime) {
          return;
        }
        const rte_asAny = rte;
        if (!rte_asAny.isLoaded) {
          rte_asAny.isLoaded = true;
          count++;
          this.queue.push(() => {
            const el = this.appendRoute(this, rte);
            if (!this.queue.length) {
              this.lastCell = el;
            }
          });
        }
      });
    });
    this.processQueue();
  }
  appendRoute(target, route, tagName) {
    const el = appendRoute({ target, route, tagName: "route-result" });
    const myAscent = sharedStorage.bestAscent(route.id_ukc);
    el.logStatus = sharedStorage.logbookStatus(route.id_ukc);
    el.setAttribute("title", escape(myAscent?.lastClimbedDescription) || "not in your logbook");
    el.routeDescription = escape(route.description_string_rockfax || route.description_string);
    el.faDetails = escape(route.first_ascent_string);
    el.wishlistStatus = sharedStorage.wishlistStatus(route.id_ukc);
    return el;
  }
};
__decorateClass$2([
  attr
], RoutesViewerElement.prototype, "cragId", 2);
RoutesViewerElement = __decorateClass$2([
  controller
], RoutesViewerElement);
const trigramWrapped = (s) => {
  let t = s;
  while (t.length < 3) {
    t = " " + t;
  }
  return trigram(t);
};

const cragIconTemplate = (_element) => {
  return html$1`
<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path data-target='crag-icon.stroke' fill-rule="evenodd" clip-rule="evenodd" d="M35.2797 13.6441C36.5208 11.8103 38.5673 10.7879 40.6491 10.7879C42.7304 10.7879 44.7598 11.8813 45.9602 13.6813L45.9703 13.6964L62.1445 38.4495C65.1097 42.9245 61.3358 47.8788 56.9047 47.8788H6.53211C1.71195 47.8788 -1.67085 42.6244 1.08555 38.2616L1.09176 38.2518L18.4137 11.1955C19.7424 9.03294 22.0318 8.12122 24.0381 8.12122C26.0129 8.12122 28.2465 9.06783 29.5495 11.1478L33.2254 16.6014L35.2797 13.6441Z" fill="black"/>
    <path data-target='crag-icon.fill' d="M58.9054 40.5833L42.7332 15.8333C42.233 15.0833 41.3994 14.6667 40.6491 14.6667C39.8155 14.6667 38.9819 15.0833 38.4817 15.8333L33.1772 23.4697L26.2888 13.25C25.7887 12.4167 24.8717 12 24.0381 12C23.1211 12 22.2041 12.4167 21.704 13.25L4.36471 40.3333C3.36437 41.9167 4.53143 44 6.53211 44H56.9047C58.7386 44 59.9057 42.0833 58.9054 40.5833Z" fill="white"/>
    <line data-target='crag-icon.stroke' x1="32.7288" y1="18.7442" x2="38.7442" y2="29.2712" stroke="black" stroke-width="4" stroke-linecap="round"/>
</svg>
`;
};

var __defProp$1 = Object.defineProperty;
var __getOwnPropDesc$1 = Object.getOwnPropertyDescriptor;
var __decorateClass$1 = (decorators, target2, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$1(target2, key) : target2;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target2, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp$1(target2, key, result);
  return result;
};
let CragIconElement = class extends BaseCon$1 {
  stroke;
  fill;
  get template() {
    return cragIconTemplate;
  }
};
__decorateClass$1([
  target
], CragIconElement.prototype, "stroke", 2);
__decorateClass$1([
  target
], CragIconElement.prototype, "fill", 2);
CragIconElement = __decorateClass$1([
  controller
], CragIconElement);

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
