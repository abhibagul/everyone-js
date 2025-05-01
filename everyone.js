/**
 * EveryoneJS - A comprehensive accessibility widget
 * Version 1.0.0
 */

; (() => {
    // Configuration
    const config = {
        buttonSize: "50px",
        buttonColor: "#007bff",
        iconColor: "#ffffff",
        panelWidth: "360px",
        zIndex: 999999,
        localStorageKey: "everyoneJS_preferences",
        logoUrl:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALEAAAAfCAYAAACoPyxbAAAACXBIWXMAAAsTAAALEwEAmpwYAAAGW0lEQVR4nO1b63EqOwz+kjkNcEuACjSbEkgJpARSApQAJYQSsiWEEg6jCqCEQwnn/rAMtlbe9b5I7tz9ZjITFizrZVmSvU+YMOFBIKIZgDWAJYALgC0zX/vS/dWXwIQJLbCDc2KPOYDXvkSf+xKYMKEF5urzcgiikxNPeCQu6vNhCKJTOjHhkdgiduRBnHjChAkTJnw3nlJfSDukCB5dmfk0PktpjMETEc1xLzhOQ7R8WswdFTbMfByAZihPJ/38JNsTUQFgVsdHxYll0AbAyqB5AbBn5kouIwb5Cn/LzIsGBs+IK9YFM+vkvzNPwfgvBJUwMz8JzR3iCnkLoARwViRe6owoRj/jrmwAeE/oaR7IMtPfw+WJe0sPCXmuzPyP6H+DasXv+7Flil5At5eeM+hv4HTu8Wot3KCfvEFVR1c4G9109KwGrwH8TggBOIf7IKIvmegGYSY09FxHGjXXCrEDHxIO3JmnmrkLuAWn+TsKD9pQa9RDO+Ql4cBeljVsB/ZzncXgOZgJXUsewOnnU/SdxBh67gKh/QXn7NY83sHPwvPdieXBR+ZcSwCfxnNtuDrF6e9SRu/Lk4VPGCs8iLY6aq0bDKedp06WXAfYtXDkHB0lfzOinrtggziVuQDYy58Ocmsimj0Dty0uFOIKt7UumPmJmZ8AvCkiS78SPCT6hDnlyjK+zBc68VFv10PxlIDfAS4AjsGflyP6LDDpGrIAahHIb3bqN0cAb4EsL3ocnCPnHgjsEevmHbEtZlY0HlnPXRDSvTDzgpm38rfAXa4TXDpy9ZFYr/g3Zo7yMsmpXhArxhJkH/w/gx2NG6PwwDxZ2IqCXuXvTX1ficYJOhVZjLRI53alzHmbg5lPwoPWRU403ouRQ90cENsCqJ6YWfSH1nNbRGmZ/lLkWsDVHFfgnk6EDJWpKlkGhUouZCWHyDG+Xm1W0TEkTxpbZtYG1nQPiJU4T0Sf2igsCMdd4aJJkjdUo15TCpKSJaejMKaeuyBcKEsrpWLmqEvxy9iuCql+U9CMzxEonZkvRHTAXTkFEc39ypb5QhoVAwzNk4HGSj3gLdxqVwgMKQVimL+dtBMYshzr2njMfCWiEnGELFBNb6IxSQlq8AA9d8EBsey+NrilfXqns46dwz5jV5SIV/gaLsIAceTy7ZImDMHTDXXtK4UScZW8DBck8tIijZzoqJ2y1okHxKB67og9XPEYBgeflq4AQILkLeWxnPiCdqurEgWY+UhEp4CRNYBt0P+7MZwZRXrz1AUSFfeIi7IN7ulAlwX5k/Eteg4h/vAi0XcNe1Gt4ZoGr8x8spy4ZOat8bwtDrhvxb4ybsqfUxiKpy44IHbiFRFt4aKF7nPnGLVo/kmlDfeo07Lv1HMEqVn24jcF7Oj8CWDxbCTyZlusAxOVdhviKGwebsjYUXjqAqOgCd9OCGGmEm1lMXYrYCQn/kl6ToGZS+m8vMB1JfSBWuG7E6EBrJ5mBCLaZAob0q2c0LUYOyRPXaCLzzXiVKJsyLO1rHUHC/qkqrYQHACD6ZmIlvJ9r/YbERXWHKJjbYuZTyf2UIWYVK57SDUoRJe4R6ECrgleB11pelQONwyMxVNryFwl7o7bNi3aIz6aXhHRb7iaoARunQLr7sPY2/sgetZ3Z6QAbs27LIAdgCsRvVu7hfp8egZuHq57l/4k50xEfwH8gctBvJJXTStO6FoGbqzix+KpB1I8p/rcN4gs2qAF3J2GvyKLdffhfezbYwPqWTtXazvIQvBH83MAX0R0lvsaO1n44TyH8MTO57D6qLIOR+QVZtr4jUZ/AE+tYVxw8si61dVBFvMW3BgYSc+tUyDRsXXK6HepqCcPCQzRLTYR5gXOMCkmSrgz69ecXE0YC/PF2pMyY/zgPPWAdipd9NUiU5YD3L2Fh766M4Ce9bhWdg742MK9AZ1aJP5ux42H5KV4oHIheZBL233xnTxJbvgneHRg5roj5CZ6P06/Hl14o/uF/KuVBuXeJ1ZjwhTLpFvrxBNiGEaovSw/IYa6zA9kOHEOplf220FfXJocOBMSAHThOoj+plf2MyHVeJs+9wQARPQB+1Ws3BPORkyROB9dLvtMcNHWOkYfrP895cQZkCLnd/CoV0H3fwPdXwi+wOmuU+cihSmdyINu3P/Xb6s9FNzw1ntf/AskdqTg15PHCwAAAABJRU5ErkJggg==",
        languages: [
            { code: "en", name: "English" },
            { code: "es", name: "Español" },
            { code: "fr", name: "Français" },
            { code: "de", name: "Deutsch" },
            { code: "it", name: "Italiano" },
            { code: "pt", name: "Português" },
            { code: "ru", name: "Русский" },
            { code: "zh", name: "中文" },
            { code: "ja", name: "日本語" },
            { code: "ar", name: "العربية" },
        ],
        sections: [
            { id: "profiles", label: "Accessibility Profiles", icon: "user" },
            { id: "content", label: "Content Adjustments", icon: "type" },
            { id: "color", label: "Color Adjustments", icon: "palette" },
            { id: "orientation", label: "Orientation Adjustments", icon: "compass" },
        ],
    }

    // Translations
    const translations = {
        en: {
            title: "Accessibility Options",
            search: "Search options...",
            profiles: {
                title: "Accessibility Profiles",
                seizureSafe: "Seizure Safe Profile",
                visionImpaired: "Vision Impaired Profile",
                adhdFriendly: "ADHD Friendly Profile",
                cognitiveDisability: "Cognitive Disability Profile",
                keyboardNavigation: "Keyboard Navigation (Motor)",
                blindUsers: "Blind Users (Screen Reader)",
            },
            content: {
                title: "Content Adjustments",
                contentScaling: "Content Scaling",
                readableFont: "Readable Font",
                highlightTitles: "Highlight Titles",
                highlightLinks: "Highlight Links",
                contentAlignment: "Content Alignment",
                left: "Left",
                center: "Center",
                right: "Right",
                fontSize: "Font Size",
                lineHeight: "Line Height",
                letterSpacing: "Letter Spacing",
                increase: "Increase",
                decrease: "Decrease",
                textMagnifier: "Text Magnifier",
                readingGuide: "Reading Guide",
                readingMask: "Reading Mask",
            },
            color: {
                title: "Color Adjustments",
                darkContrast: "Dark Contrast",
                lightContrast: "Light Contrast",
                highContrast: "High Contrast",
                highSaturation: "High Saturation",
                textColors: "Text Colors",
                monochrome: "Monochrome",
                lowSaturation: "Low Saturation",
                titleColors: "Title Colors",
                backgroundColors: "Background Colors",
                customColor: "Custom Color",
            },
            orientation: {
                title: "Orientation Adjustments",
                muteSounds: "Mute Sounds",
                hideImages: "Hide Images",
                usefulLinks: "Useful Links",
                stopAnimation: "Stop Animation",
                highlightFocus: "Highlight Focus",
                highlightHover: "Highlight Hover",
                readMode: "Read Mode",
                bigBlackCursor: "Big Black Cursor",
                bigWhiteCursor: "Big White Cursor",
            },
            reset: "Reset All",
            save: "Save Settings",
            close: "Close",
            saved: "Settings saved",
            resetConfirm: "Are you sure you want to reset all settings?",
            statement: "Accessibility Statement",
            hideInterface: "Hide Interface",
        },
        // Add other languages as needed
    }

    // Current language
    let currentLang = "en"

    // Get translation
    const t = (key) => {
        const keys = key.split(".")
        let value = translations[currentLang]

        for (const k of keys) {
            if (value && value[k]) {
                value = value[k]
            } else {
                return key
            }
        }

        return value
    }

    // Create widget styles
    const createWidgetStyles = () => {
        return `
                      :host {
                        --button-size: ${config.buttonSize};
                        --button-color: ${config.buttonColor};
                        --icon-color: ${config.iconColor};
                        --panel-width: ${config.panelWidth};
                        --z-index: ${(config.zIndex + 100)};
                        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
                        font-size: 16px;
                        line-height: 1.5;
                        color: #333;
                      }
                      
                      .everyone-widget {
                        position: fixed;
                        left: 20px;
                        bottom: 20px;
                        width: var(--button-size);
                        height: var(--button-size);
                        border-radius: 50%;
                        background: ${` url(data:image/png;base64,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)`};
                        color: var(--icon-color);
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        cursor: pointer;
                        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
                        z-index: ${config.zIndex}99;
                        transition: all 0.3s ease;
                        border: none;
                      }
                      
                      .everyone-widget:hover {
                        transform: scale(1.1);
                      }
                      
                      .everyone-widget:focus {
                        outline: 3px solid #fff;
                        outline-offset: 2px;
                      }
                      
                      .everyone-icon {
                        width: 60%;
                        height: 60%;
                      }
                      
                      .everyone-panel {
                        position: fixed;
                        left: 20px;
                        bottom: 86px;
                        width: var(--panel-width);
                        height: 70vh;
                        background-color: rgba(255, 255, 255, .7);
                        backdrop-filter: blur(10px);
                        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAEiCAIAAACA07fvAAAKQ2lDQ1BJQ0MgcHJvZmlsZQAAeNqdU3dYk/cWPt/3ZQ9WQtjwsZdsgQAiI6wIyBBZohCSAGGEEBJAxYWIClYUFRGcSFXEgtUKSJ2I4qAouGdBiohai1VcOO4f3Ke1fXrv7e371/u855zn/M55zw+AERImkeaiagA5UoU8Otgfj09IxMm9gAIVSOAEIBDmy8JnBcUAAPADeXh+dLA//AGvbwACAHDVLiQSx+H/g7pQJlcAIJEA4CIS5wsBkFIAyC5UyBQAyBgAsFOzZAoAlAAAbHl8QiIAqg0A7PRJPgUA2KmT3BcA2KIcqQgAjQEAmShHJAJAuwBgVYFSLALAwgCgrEAiLgTArgGAWbYyRwKAvQUAdo5YkA9AYACAmUIszAAgOAIAQx4TzQMgTAOgMNK/4KlfcIW4SAEAwMuVzZdL0jMUuJXQGnfy8ODiIeLCbLFCYRcpEGYJ5CKcl5sjE0jnA0zODAAAGvnRwf44P5Dn5uTh5mbnbO/0xaL+a/BvIj4h8d/+vIwCBAAQTs/v2l/l5dYDcMcBsHW/a6lbANpWAGjf+V0z2wmgWgrQevmLeTj8QB6eoVDIPB0cCgsL7SViob0w44s+/zPhb+CLfvb8QB7+23rwAHGaQJmtwKOD/XFhbnauUo7nywRCMW735yP+x4V//Y4p0eI0sVwsFYrxWIm4UCJNx3m5UpFEIcmV4hLpfzLxH5b9CZN3DQCshk/ATrYHtctswH7uAQKLDljSdgBAfvMtjBoLkQAQZzQyefcAAJO/+Y9AKwEAzZek4wAAvOgYXKiUF0zGCAAARKCBKrBBBwzBFKzADpzBHbzAFwJhBkRADCTAPBBCBuSAHAqhGJZBGVTAOtgEtbADGqARmuEQtMExOA3n4BJcgetwFwZgGJ7CGLyGCQRByAgTYSE6iBFijtgizggXmY4EImFINJKApCDpiBRRIsXIcqQCqUJqkV1II/ItchQ5jVxA+pDbyCAyivyKvEcxlIGyUQPUAnVAuagfGorGoHPRdDQPXYCWomvRGrQePYC2oqfRS+h1dAB9io5jgNExDmaM2WFcjIdFYIlYGibHFmPlWDVWjzVjHVg3dhUbwJ5h7wgkAouAE+wIXoQQwmyCkJBHWExYQ6gl7CO0EroIVwmDhDHCJyKTqE+0JXoS+cR4YjqxkFhGrCbuIR4hniVeJw4TX5NIJA7JkuROCiElkDJJC0lrSNtILaRTpD7SEGmcTCbrkG3J3uQIsoCsIJeRt5APkE+S+8nD5LcUOsWI4kwJoiRSpJQSSjVlP+UEpZ8yQpmgqlHNqZ7UCKqIOp9aSW2gdlAvU4epEzR1miXNmxZDy6Qto9XQmmlnafdoL+l0ugndgx5Fl9CX0mvoB+nn6YP0dwwNhg2Dx0hiKBlrGXsZpxi3GS+ZTKYF05eZyFQw1zIbmWeYD5hvVVgq9ip8FZHKEpU6lVaVfpXnqlRVc1U/1XmqC1SrVQ+rXlZ9pkZVs1DjqQnUFqvVqR1Vu6k2rs5Sd1KPUM9RX6O+X/2C+mMNsoaFRqCGSKNUY7fGGY0hFsYyZfFYQtZyVgPrLGuYTWJbsvnsTHYF+xt2L3tMU0NzqmasZpFmneZxzQEOxrHg8DnZnErOIc4NznstAy0/LbHWaq1mrX6tN9p62r7aYu1y7Rbt69rvdXCdQJ0snfU6bTr3dQm6NrpRuoW623XP6j7TY+t56Qn1yvUO6d3RR/Vt9KP1F+rv1u/RHzcwNAg2kBlsMThj8MyQY+hrmGm40fCE4agRy2i6kcRoo9FJoye4Ju6HZ+M1eBc+ZqxvHGKsNN5l3Gs8YWJpMtukxKTF5L4pzZRrmma60bTTdMzMyCzcrNisyeyOOdWca55hvtm82/yNhaVFnMVKizaLx5balnzLBZZNlvesmFY+VnlW9VbXrEnWXOss623WV2xQG1ebDJs6m8u2qK2brcR2m23fFOIUjynSKfVTbtox7PzsCuya7AbtOfZh9iX2bfbPHcwcEh3WO3Q7fHJ0dcx2bHC866ThNMOpxKnD6VdnG2ehc53zNRemS5DLEpd2lxdTbaeKp26fesuV5RruutK10/Wjm7ub3K3ZbdTdzD3Ffav7TS6bG8ldwz3vQfTw91jicczjnaebp8LzkOcvXnZeWV77vR5Ps5wmntYwbcjbxFvgvct7YDo+PWX6zukDPsY+Ap96n4e+pr4i3z2+I37Wfpl+B/ye+zv6y/2P+L/hefIW8U4FYAHBAeUBvYEagbMDawMfBJkEpQc1BY0FuwYvDD4VQgwJDVkfcpNvwBfyG/ljM9xnLJrRFcoInRVaG/owzCZMHtYRjobPCN8Qfm+m+UzpzLYIiOBHbIi4H2kZmRf5fRQpKjKqLupRtFN0cXT3LNas5Fn7Z72O8Y+pjLk722q2cnZnrGpsUmxj7Ju4gLiquIF4h/hF8ZcSdBMkCe2J5MTYxD2J43MC52yaM5zkmlSWdGOu5dyiuRfm6c7Lnnc8WTVZkHw4hZgSl7I/5YMgQlAvGE/lp25NHRPyhJuFT0W+oo2iUbG3uEo8kuadVpX2ON07fUP6aIZPRnXGMwlPUit5kRmSuSPzTVZE1t6sz9lx2S05lJyUnKNSDWmWtCvXMLcot09mKyuTDeR55m3KG5OHyvfkI/lz89sVbIVM0aO0Uq5QDhZML6greFsYW3i4SL1IWtQz32b+6vkjC4IWfL2QsFC4sLPYuHhZ8eAiv0W7FiOLUxd3LjFdUrpkeGnw0n3LaMuylv1Q4lhSVfJqedzyjlKD0qWlQyuCVzSVqZTJy26u9Fq5YxVhlWRV72qX1VtWfyoXlV+scKyorviwRrjm4ldOX9V89Xlt2treSrfK7etI66Trbqz3Wb+vSr1qQdXQhvANrRvxjeUbX21K3nShemr1js20zcrNAzVhNe1bzLas2/KhNqP2ep1/XctW/a2rt77ZJtrWv913e/MOgx0VO97vlOy8tSt4V2u9RX31btLugt2PGmIbur/mft24R3dPxZ6Pe6V7B/ZF7+tqdG9s3K+/v7IJbVI2jR5IOnDlm4Bv2pvtmne1cFoqDsJB5cEn36Z8e+NQ6KHOw9zDzd+Zf7f1COtIeSvSOr91rC2jbaA9ob3v6IyjnR1eHUe+t/9+7zHjY3XHNY9XnqCdKD3x+eSCk+OnZKeenU4/PdSZ3Hn3TPyZa11RXb1nQ8+ePxd07ky3X/fJ897nj13wvHD0Ivdi2yW3S609rj1HfnD94UivW2/rZffL7Vc8rnT0Tes70e/Tf/pqwNVz1/jXLl2feb3vxuwbt24m3Ry4Jbr1+Hb27Rd3Cu5M3F16j3iv/L7a/eoH+g/qf7T+sWXAbeD4YMBgz8NZD+8OCYee/pT/04fh0kfMR9UjRiONj50fHxsNGr3yZM6T4aeypxPPyn5W/3nrc6vn3/3i+0vPWPzY8Av5i8+/rnmp83Lvq6mvOscjxx+8znk98ab8rc7bfe+477rfx70fmSj8QP5Q89H6Y8en0E/3Pud8/vwv94Tz+4A5JREAAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdlUmVhZHlxyWU8AAADJGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNy4xLWMwMDAgNzkuZGFiYWNiYiwgMjAyMS8wNC8xNC0wMDozOTo0NCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIzLjAgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjgzMURFRkY5MjY3RjExRjA5RDNGRkIxQjRBNUYxNjdGIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjgzMURFRkZBMjY3RjExRjA5RDNGRkIxQjRBNUYxNjdGIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ODMxREVGRjcyNjdGMTFGMDlEM0ZGQjFCNEE1RjE2N0YiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6ODMxREVGRjgyNjdGMTFGMDlEM0ZGQjFCNEE1RjE2N0YiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5X1FVlAACGiUlEQVR42uy96ZYjOY8sSFPr/d9zzvyY9c5Md99ymwzJSWKlU4qIrFyAc7q/rMxYJJc7CBgMZiDZKioqKir+rLjVJaioqKio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);
                        box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
                        z-index: 99999991;
                        transition: left 0.3s ease;
                        overflow-y: hidden;
                        display: none;
                        flex-direction: column;
                        max-height: 650px;
                        overflow-x: hidden;
                        border-radius: 10px;
                        width: 80vw;
                        max-width: 456px;
                        background-size: 100% 100%;
                      }
                      
                      .everyone-panel.active {
                        display: flex;
                      }
                      
                      
                      .everyone-header {
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        padding: 16px;
                        position: sticky;
                        top: 0;
                        z-index: 50;
                        background-color: rgba(255, 255, 255, .5);
                        backdrop-filter: blur(10px);
                        background-size: cover;
                        padding-bottom: 0px;
                      }
                      
                      .everyone-logo {
                        display: flex;
                        align-items: center;
                      }
                      
                      .everyone-logo img {
                        height: 18px;
                        margin-right: 10px;
                      }
                      
                      .everyone-logo-text {
                        font-weight: bold;
                        font-size: 18px;
                        color: #333;
                      }
                      
                      .everyone-language-select {
                        position: relative;
                      }
                      
                      .everyone-language-button {
                        background: none;
                        border: 1px solid #ddd;
                        border-radius: 4px;
                        padding: 6px 10px;
                        cursor: pointer;
                        display: flex;
                        align-items: center;
                        font-size: 14px;
                      }
                      
                      .everyone-language-button:after {
                        content: '';
                        display: inline-block;
                        margin-left: 8px;
                        width: 0;
                        height: 0;
                        border-left: 5px solid transparent;
                        border-right: 5px solid transparent;
                        border-top: 5px solid #333;
                      }
                      
                      .everyone-language-dropdown {
                        position: absolute;
                        top: 100%;
                        right: 0;
                        background-color: white;
                        border: 1px solid #ddd;
                        border-radius: 4px;
                        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
                        display: none;
                        z-index: 1;
                        max-height: 300px;
                        overflow-y: auto;
                        width: 150px;
                      }
                      
                      .everyone-language-dropdown.active {
                        display: block;
                      }
                      
                      .everyone-language-option {
                        padding: 8px 12px;
                        cursor: pointer;
                        transition: background-color 0.2s;
                      }
                      
                      .everyone-language-option:hover {
                        background-color: #f5f5f5;
                      }
                      
                      .everyone-language-option.active {
                        background-color: #e6f7ff;
                        font-weight: bold;
                      }
                      
                      .everyone-search {
                        padding: 16px;
                        border-bottom: 1px solid #eee;
                        padding-top: 5px;
                        position: sticky;
                        top: 44px;
                        background-color: rgba(255, 255, 255, .5);
                        backdrop-filter: blur(10px);
                        z-index: 5;
                      }
                      
                      .everyone-search-input {
                        width: 100%;
                        padding: 10px 12px;
                        border: 1px solid #ddd;
                        border-radius: 4px;
                        font-size: 14px;
                        box-sizing: border-box;
                        margin-top: 6px;
                        box-shadow: 0px 2px #ddd;
                      }
                      
                      .everyone-search-input:focus {
                        outline: none;
                        border-color: var(--button-color);
                        box-shadow: 0 0 0 2px rgba(67, 56, 202, 0.2);
                      }
                      
                      .everyone-content {
                        flex: 1;
                        padding: 16px;
                        height: calc(100% - 67px);
                        overflow: auto;
                      }
                      
                      .everyone-section {
                        margin-bottom: 24px;
                      }
                      
                      .everyone-section-header {
                        display: flex;
                        align-items: center;
                        margin-bottom: 6px;
                        padding-bottom: 8px;
                        text-align: center;
                        padding-left: 4px;
                      }
                      
                      .everyone-section-icon {
                        margin-right: 10px;
                        color: var(--button-color);
                      }
                      
                      .everyone-section-title {
                        font-weight: bold;
                        font-size: 16px;
                        color: #333;
                      }
                      
                      .everyone-option-hidden {
                        display: none;
                      }
                      
                      .everyone-option-row {
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        text-align: center;
                      }
                      
                      .everyone-option-title {
                        font-weight: 500;
                        font-size: 14px;
                        color: #333;
                        margin-bottom: 10px;
                      }
                      
                      .everyone-switch {
                        position: relative;
                        display: inline-block;
                        width: 50px;
                        height: 24px;
                      }
                      
                      .everyone-switch input {
                        opacity: 0;
                        width: 0;
                        height: 0;
                      }
                      
                      .everyone-slider {
                        position: absolute;
                        cursor: pointer;
                        top: 0;
                        left: 0;
                        right: 0;
                        bottom: 0;
                        background-color: #ccc;
                        transition: .4s;
                        border-radius: 24px;
                      }
                      
                      .everyone-slider:before {
                        position: absolute;
                        content: "";
                        height: 16px;
                        width: 16px;
                        left: 4px;
                        bottom: 4px;
                        background-color: white;
                        transition: .4s;
                        border-radius: 50%;
                      }
                      
                      input:checked + .everyone-slider {
                        background-color: var(--button-color);
                      }
                      
                      input:focus + .everyone-slider {
                        box-shadow: 0 0 1px var(--button-color);
                      }
                      
                      input:checked + .everyone-slider:before {
                        transform: translateX(26px);
                      }
                      
                      .everyone-button-group {
                        display: flex;
                        gap: 8px;
                      }
                      
                      .everyone-button {
                        padding: 8px 12px;
                        background-color: #f5f5f5;
                        border: 1px solid #ddd;
                        border-radius: 4px;
                        cursor: pointer;
                        font-size: 14px;
                        transition: all 0.2s;
                      }
                      
                      .everyone-button:hover {
                        background-color: #e9e9e9;
                      }
                      
                      .everyone-button.active {
                        background-color: var(--button-color);
                        color: white;
                        border-color: var(--button-color);
                      }
                      
                      .everyone-value-control {
                        display: flex;
                        align-items: center;
                      }
                      
                      .everyone-value-button {
                        width: 30px;
                        height: 30px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        background-color: #f5f5f5;
                        border: 1px solid #ddd;
                        border-radius: 4px;
                        cursor: pointer;
                        font-size: 16px;
                        transition: all 0.2s;
                      }
                      
                      .everyone-value-button:hover {
                        background-color: #e9e9e9;
                      }
                      
                      .everyone-value-display {
                        margin: 0 10px;
                        min-width: 30px;
                        text-align: center;
                      }

                      .everyone-color-group{
                        display: grid;
                        grid-template-columns: auto 35px;
                        gap: 8px;
                        align-items: center;
                      }
                      
                      .everyone-color-options {
                        display: flex;
                        flex-wrap: wrap;
                        gap: 8px;
                        margin-top: 10px;
                      }
                      
                      .everyone-color-option {
                        width: 30px;
                        height: 30px;
                        border-radius: 5px;
                        cursor: pointer;
                        border: 2px solid transparent;
                        transition: all 0.2s;
                      }
                      
                      .everyone-color-option:hover {
                        transform: scale(1.1);
                      }
                      
                      .everyone-color-option.active {
                        border-color: #333;
                      }
                      
                      .everyone-color-picker {
                        margin-top: 10px;
                      }
                      
                      .everyone-color-picker input {
                        width: 100%;
                        height: 40px;
                        padding: 0;
                        border: 1px solid #ddd;
                        border-radius: 4px;
                        cursor: pointer;
                      }
                      
                      .everyone-footer {
                        padding: 5px 16px;
                        border-top: 1px solid #eee;
                        display: flex;
                        justify-content: space-between;
                        position: sticky;
                        bottom: 0;
                        background-color: rgba(255, 255, 255, .5);
                        backdrop-filter: blur(10px);
                      }
                      
                      .everyone-reset-button {
                        background-color: #f44336;
                        color: white;
                        border: none;
                        padding: 10px 16px;
                        border-radius: 4px;
                        cursor: pointer;
                        font-size: 14px;
                        transition: all 0.2s;
                      }
                      
                      .everyone-reset-button:hover {
                        background-color: #d32f2f;
                      }
                      
                      .everyone-save-button {
                        background-color: var(--button-color);
                        color: white;
                        border: none;
                        padding: 10px 16px;
                        border-radius: 4px;
                        cursor: pointer;
                        font-size: 14px;
                        transition: all 0.2s;
                      }
                      
                      .everyone-save-button:hover {
                        background-color: #3730a3;
                      }
                      
                      .everyone-close-button {
                        background: none;
                        border: none;
                        position: absolute;
                        top: 16px;
                        right: 16px;
                        font-size: 24px;
                        line-height: 1;
                        cursor: pointer;
                        color: #666;
                      }
                      
                      .everyone-save-indicator {
                        position: fixed;
                        bottom: 20px;
                        left: 50%;
                        transform: translateX(-50%);
                        background-color: #4caf50;
                        color: white;
                        padding: 10px 16px;
                        border-radius: 4px;
                        font-size: 14px;
                        opacity: 0;
                        transition: opacity 0.3s ease;
                        z-index: calc(var(--z-index) + 10);
                      }
                      
                      .everyone-save-indicator.active {
                        opacity: 1;
                      }
                      
                      .everyone-links-list {
                        margin-top: 10px;
                        border: 1px solid #ddd;
                        border-radius: 4px;
                        max-height: 200px;
                        overflow-y: auto;
                      }
                      
                      .everyone-links-list-item {
                        padding: 8px 12px;
                        border-bottom: 1px solid #eee;
                      }
                      
                      .everyone-links-list-item:last-child {
                        border-bottom: none;
                      }
                      
                      .everyone-links-list-item a {
                        color: var(--button-color);
                        text-decoration: none;
                      }
                      
                      .everyone-links-list-item a:hover {
                        text-decoration: underline;
                      }
                      
                      .sr-only {
                        position: absolute;
                        width: 1px;
                        height: 1px;
                        padding: 0;
                        margin: -1px;
                        overflow: hidden;
                        clip: rect(0, 0, 0, 0);
                        white-space: nowrap;
                        border-width: 0;
                      }
                      
                      /* Text magnifier */
                      .everyone-text-magnifier-glass {
                        position: fixed;
                        width: 150px;
                        height: 150px;
                        border-radius: 50%;
                        background: rgba(255, 255, 255, 0.9);
                        border: 3px solid var(--button-color);
                        box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
                        pointer-events: none;
                        z-index: 9999;
                        display: none;
                        overflow: hidden;
                      }
                      
                      .everyone-text-magnifier-content {
                        position: absolute;
                        left: 0;
                        top: 0;
                        transform-origin: 0 0;
                        pointer-events: none;
                      }
                      
                      /* Reading guide */
                      .everyone-reading-guide-element {
                        position: fixed;
                        left: 0;
                        width: 100%;
                        height: 40px;
                        background-color: rgba(255, 255, 0, 0.2);
                        pointer-events: none;
                        z-index: 9998;
                        transition: top 0.1s ease;
                      }
                      
                      /* Reading mask */
                      .everyone-reading-mask-element {
                        position: fixed;
                        left: 0;
                        width: 100%;
                        height: 150px;
                        background-color: transparent;
                        border: 2px solid rgba(255, 255, 0, 0.5);
                        box-shadow: 0 0 0 9999px rgba(0, 0, 0, 0.7);
                        pointer-events: none;
                        z-index: 9997;
                        top: 50%;
                        transform: translateY(-50%);
                      }
                      
                      /* Read mode */
                      .everyone-read-mode-overlay {
                        position: fixed;
                        left: 0;
                        top: 0;
                        width: 100%;
                        height: 100%;
                        background-color: rgba(0, 0, 0, 0.8);
                        z-index: 9996;
                      }
                      
                      .everyone-read-mode-content {
                        position: fixed;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                        width: 80%;
                        max-width: 800px;
                        max-height: 80vh;
                        overflow-y: auto;
                        background-color: #fff;
                        padding: 30px;
                        border-radius: 8px;
                        z-index: 9997;
                        font-size: 18px;
                        line-height: 1.8;
                      }

                      /*new layout try*/
                      .everyone-section > div:has(.everyone-option){
                        display: grid;
                        grid-template-columns: 1fr 1fr 1fr;
                        gap: 10px;
                    }
                    .everyone-option {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        min-height: 78px;
                        border: 1px solid rgba(0, 0, 0, .1);
                        border-radius: 6px;
                        padding: 10px;
                        background: #fff;
                    }

                    .everyone-option[data-option="contentScaling"],
                    .everyone-option[data-option="readingMask"],
                    .everyone-option[data-option="stopAnimations"]
                    {
                        grid-column: span 2;
                    }

                    .everyone-option:has(.everyone-button-group),
                    .everyone-option:has(.everyone-color-options),
                    .everyone-option:has(.everyone-links-list),
                    .everyone-option[data-option="fontSize"],
                    .everyone-option[data-option="lineHeight"],
                    .everyone-option[data-option="letterSpacing"]
                    {
                        grid-column: span 3;
                        flex-direction: column;
                    }
                    `
    }

    // Create document styles (outside shadow DOM)
    const createDocumentStyles = () => {
        const docStyle = document.createElement("style")
        docStyle.id = "everyone-js-styles"
        docStyle.textContent = `
                      /* Accessibility Classes */
                      body.everyone-seizure-safe * {
                        animation: none !important;
                        transition: none !important;
                        flashing-animation: none !important;
                        -webkit-animation: none !important;
                        -webkit-transition: none !important;
                      }
            
                      body.everyone-seizure-safe > *{
                        filter: saturate(0.7) brightness(1) !important;
                      }
            
                      body.everyone-seizure-safe video,
                      body.everyone-seizure-safe canvas,
                      body.everyone-seizure-safe [role="alert"],
                      body.everyone-seizure-safe [aria-live="assertive"] {
                        filter: saturate(0) contrast(0.8) !important;
                      }
                      
                      body.everyone-vision-impaired {
                        zoom: 1.1;
                      }
            
                      body.everyone-vision-impaired > * {
                        filter: contrast(1.5) brightness(1.1) !important;
                        font-size: 120% !important;
                        line-height: 1.6 !important;
                        letter-spacing: 0.12em !important;
                        word-spacing: 0.16em !important;
                      }
            
                      body.everyone-vision-impaired a, 
                      body.everyone-vision-impaired button,
                      body.everyone-vision-impaired input,
                      body.everyone-vision-impaired select,
                      body.everyone-vision-impaired textarea {
                        text-decoration: underline !important;
                        font-size: 120% !important;
                        border: 2px solid !important;
                        padding: 4px 8px !important;
                      }
            
                      body.everyone-vision-impaired img {
                        border: 2px solid #000000 !important;
                        padding: 2px !important;
                      }
                      
                      body.everyone-adhd-friendly {
                        font-size: 110% !important;
                        line-height: 1.8 !important;
                      }
            
                      body.everyone-adhd-friendly p,
                      body.everyone-adhd-friendly li,
                      body.everyone-adhd-friendly td,
                      body.everyone-adhd-friendly th,
                      body.everyone-adhd-friendly div:not(.everyone-panel):not(.everyone-widget):not(.everyone-section):not(.everyone-option) {
        
                        margin-left: auto !important;
                        margin-right: auto !important;
                      }
                      
                      body.everyone-cognitive-disability  > * {
                        font-family: Arial, sans-serif !important;
                        font-size: 120% !important;
                        line-height: 1.8 !important;
                      }
        
            
                      body.everyone-cognitive-disability h1,
                      body.everyone-cognitive-disability h2,
                      body.everyone-cognitive-disability h3,
                      body.everyone-cognitive-disability h4,
                      body.everyone-cognitive-disability h5,
                      body.everyone-cognitive-disability h6 {
                        outline: 2px solid #ff9800 !important;
                      }
            
                      body.everyone-cognitive-disability a {
                        background: #ffff00 !important;
                        color: #000000 !important;
                      }
            
                      body.everyone-cognitive-disability button,
                      body.everyone-cognitive-disability input[type="button"],
                      body.everyone-cognitive-disability input[type="submit"] {
                        font-size: 120% !important;
                        padding: 10px 15px !important;
                        margin: 10px 0 !important;
                        background: #ffff00 !important;
                        color: #000000 !important;
                        font-weight: bold !important;
                      }
                      
                      body.everyone-keyboard-navigation a:focus,
                      body.everyone-keyboard-navigation button:focus,
                      body.everyone-keyboard-navigation input:focus,
                      body.everyone-keyboard-navigation select:focus,
                      body.everyone-keyboard-navigation textarea:focus,
                      body.everyone-keyboard-navigation [tabindex]:focus {
                        outline: 3px solid #ff9800 !important;
                        outline-offset: 3px !important;
                        background-color: #fff3e0 !important;
                        color: #000000 !important;
                        text-decoration: underline !important;
                        box-shadow: 0 0 5px #ff9800 !important;
                      }
            
                      body.everyone-keyboard-navigation [role="button"]:focus,
                      body.everyone-keyboard-navigation [role="tab"]:focus,
                      body.everyone-keyboard-navigation [role="menuitem"]:focus {
                        outline: 3px solid #ff9800 !important;
                        outline-offset: 3px !important;
                        background-color: #fff3e0 !important;
                        color: #000000 !important;
                      }
        
                      .everyone-keyboard-highlight-style{
                            outline: 3px solid #ff9800 !important;
                            background: #fff3e0 !important;
                      }
                      
                      body.everyone-screen-reader .sr-only {
                        position: static !important;
                        width: auto !important;
                        height: auto !important;
                        padding: 10px !important;
                        margin: 10px 0 !important;
                        overflow: visible !important;
                        clip: auto !important;
                        white-space: normal !important;
                        border: 2px solid #4338ca !important;
                        display: block !important;
                        background-color: #f8f9fa !important;
                        border-radius: 4px !important;
                        color: #000000 !important;
                        font-weight: bold !important;
                      }
            
                      body.everyone-screen-reader img:not([alt]),
                      body.everyone-screen-reader area:not([alt]),
                      body.everyone-screen-reader input[type="image"]:not([alt]) {
                        border: 5px solid #ff0000 !important;
                        outline: 5px solid #ff0000 !important;
                      }
            
                      body.everyone-screen-reader [aria-hidden="true"] {
                        display: none !important;
                      }
                      
                      body.everyone-content-scaling-1 {
                        zoom: 1.1;
                      }
                      
                      body.everyone-content-scaling-2 {
                        zoom: 1.2;
                      }
                      
                      body.everyone-content-scaling-3 {
                        zoom: 1.3;
                      }
                      
                      body.everyone-content-scaling-4 {
                        zoom: 1.4;
                      }
                      
                      body.everyone-content-scaling-5 {
                        zoom: 1.5;
                      }
                      
                      body.everyone-readable-font * {
                        font-family: Arial, Helvetica, sans-serif !important;
                      }
                      
                      body.everyone-highlight-titles h1, 
                      body.everyone-highlight-titles h2, 
                      body.everyone-highlight-titles h3, 
                      body.everyone-highlight-titles h4, 
                      body.everyone-highlight-titles h5, 
                      body.everyone-highlight-titles h6 {
                        background-color: #e6f7ff !important;
                        border: 1px solid #91d5ff !important;
                        padding: 5px !important;
                      }
                      
                      body.everyone-highlight-links a {
                        text-decoration: underline !important;
                        background-color: yellow !important;
                        color: black !important;
                      }
                      
                      body.everyone-text-align-left * {
                        text-align: left !important;
                      }
                      
                      body.everyone-text-align-center * {
                        text-align: center !important;
                      }
                      
                      body.everyone-text-align-right * {
                        text-align: right !important;
                      }
                      
                      body.everyone-font-size-1 {
                        font-size: 110% !important;
                      }
                      
                      body.everyone-font-size-2 {
                        font-size: 120% !important;
                      }
                      
                      body.everyone-font-size-3 {
                        font-size: 130% !important;
                      }
                      
                      body.everyone-font-size-4 {
                        font-size: 140% !important;
                      }
                      
                      body.everyone-font-size-5 {
                        font-size: 150% !important;
                      }
                      
                      body.everyone-line-height-1 {
                        line-height: 1.5 !important;
                      }
                      
                      body.everyone-line-height-2 {
                        line-height: 1.7 !important;
                      }
                      
                      body.everyone-line-height-3 {
                        line-height: 1.9 !important;
                      }
                      
                      body.everyone-line-height-4 {
                        line-height: 2.1 !important;
                      }
                      
                      body.everyone-line-height-5 {
                        line-height: 2.3 !important;
                      }
                      
                      body.everyone-letter-spacing-1 * {
                        letter-spacing: 0.12em !important;
                      }
                      
                      body.everyone-letter-spacing-2 * {
                        letter-spacing: 0.14em !important;
                      }
                      
                      body.everyone-letter-spacing-3 * {
                        letter-spacing: 0.16em !important;
                      }
                      
                      body.everyone-letter-spacing-4 * {
                        letter-spacing: 0.18em !important;
                      }
                      
                      body.everyone-letter-spacing-5 * {
                        letter-spacing: 0.2em !important;
                      }
                      
                      body.everyone-dark-contrast {
                        background-color: #000000 !important;
                        color: #ffffff !important;
                      }
                
                      body.everyone-dark-contrast * {
                        background-color: #000000 !important;
                        color: #ffffff !important;
                      }
                
                      body.everyone-dark-contrast a {
                        color: #4da6ff !important;
                        border-bottom: 1px solid #4da6ff !important;
                        text-decoration: underline !important;
                      }
                
                      body.everyone-dark-contrast button,
                      body.everyone-dark-contrast [role="button"],
                      body.everyone-dark-contrast input[type="button"],
                      body.everyone-dark-contrast input[type="submit"] {
                        border: 2px solid #ffffff !important;
                        padding: 4px 8px !important;
                        outline: 1px solid #4da6ff !important;
                        outline-offset: 2px !important;
                      }
                
                      body.everyone-dark-contrast input[type="text"],
                      body.everyone-dark-contrast input[type="email"],
                      body.everyone-dark-contrast input[type="password"],
                      body.everyone-dark-contrast input[type="search"],
                      body.everyone-dark-contrast input[type="tel"],
                      body.everyone-dark-contrast textarea,
                      body.everyone-dark-contrast select {
                        background-color: #000000 !important;
                        color: #ffffff !important;
                        border: 2px solid #ffffff !important;
                        padding: 4px 8px !important;
                        outline: 1px solid #4da6ff !important;
                        outline-offset: 2px !important;
                      }
                
                      body.everyone-dark-contrast h1, 
                      body.everyone-dark-contrast h2, 
                      body.everyone-dark-contrast h3, 
                      body.everyone-dark-contrast h4, 
                      body.everyone-dark h3,
                      body.everyone-dark-contrast h4,
                      body.everyone-dark h3,
                      body.everyone-dark-contrast h4,
                      body.everyone-dark-contrast h5,
                      body.everyone-dark-contrast h6 {
                        color: #ffffff !important;
                        border-bottom: 2px solid #ffff00 !important;
                        padding-bottom: 5px !important;
                        margin-bottom: 10px !important;
                      }
                
                      body.everyone-dark-contrast h1 {
                        border-width: 4px !important;
                      }
                
                      body.everyone-dark-contrast h2 {
                        border-width: 3px !important;
                      }
                
                      body.everyone-dark-contrast img {
                        filter: brightness(0.8) contrast(1.2);
                        outline: 2px solid #ffffff !important;
                      }
                
                      body.everyone-dark-contrast :focus {
                        outline: 3px solid #ffff00 !important;
                        outline-offset: 3px !important;
                      }
                
                      body.everyone-dark-contrast table,
                      body.everyone-dark-contrast th,
                      body.everyone-dark-contrast td {
                        border: 2px solid #ffffff !important;
                      }
                
                      body.everyone-dark-contrast hr {
                        border-color: #ffffff !important;
                        height: 2px !important;
                      }
                
                      body.everyone-dark-contrast ul,
                      body.everyone-dark-contrast ol {
                        border-left: 2px solid #ffffff !important;
                        padding-left: 20px !important;
                      }
                
                      body.everyone-dark-contrast li {
                        margin: 8px 0 !important;
                      }
                
                      body.everyone-dark-contrast blockquote {
                        border-left: 4px solid #ffff00 !important;
                        padding-left: 15px !important;
                      }
                      
                      body.everyone-light-contrast p, 
                      body.everyone-light-contrast div, 
                      body.everyone-light-contrast span, 
                      body.everyone-light-contrast img, 
                      body.everyone-light-contrast a, 
                      body.everyone-light-contrast h1, 
                      body.everyone-light-contrast h2, 
                      body.everyone-light-contrast h3, 
                      body.everyone-light-contrast h4, 
                      body.everyone-light-contrast h5, 
                      body.everyone-light-contrast h6, 
                      body.everyone-light-contrast li, 
                      body.everyone-light-contrast table, 
                      body.everyone-light-contrast form, 
                      body.everyone-light-contrast label, 
                      body.everyone-light-contrast article, 
                      body.everyone-light-contrast section, 
                      body.everyone-light-contrast main {
                        filter: brightness(1.2) contrast(1.5) !important;
                      }
                      
                      body.everyone-high-contrast p, 
                      body.everyone-high-contrast div, 
                      body.everyone-high-contrast span, 
                      body.everyone-high-contrast img, 
                      body.everyone-high-contrast a, 
                      body.everyone-high-contrast h1, 
                      body.everyone-high-contrast h2, 
                      body.everyone-high-contrast h3, 
                      body.everyone-high-contrast h4, 
                      body.everyone-high-contrast h5, 
                      body.everyone-high-contrast h6, 
                      body.everyone-high-contrast li, 
                      body.everyone-high-contrast table, 
                      body.everyone-high-contrast form, 
                      body.everyone-high-contrast label, 
                      body.everyone-high-contrast article, 
                      body.everyone-high-contrast section, 
                      body.everyone-high-contrast main {
                        filter: contrast(2) !important;
                      }
                      
                      body.everyone-high-saturation p, 
                      body.everyone-high-saturation div, 
                      body.everyone-high-saturation span, 
                      body.everyone-high-saturation img, 
                      body.everyone-high-saturation a, 
                      body.everyone-high-saturation h1, 
                      body.everyone-high-saturation h2, 
                      body.everyone-high-saturation h3, 
                      body.everyone-high-saturation h4, 
                      body.everyone-high-saturation h5, 
                      body.everyone-high-saturation h6, 
                      body.everyone-high-saturation li, 
                      body.everyone-high-saturation table, 
                      body.everyone-high-saturation form, 
                      body.everyone-high-saturation label, 
                      body.everyone-high-saturation article, 
                      body.everyone-high-saturation section, 
                      body.everyone-high-saturation main {
                        filter: saturate(2) !important;
                      }
                      
                      body.everyone-monochrome p, 
                      body.everyone-monochrome div, 
                      body.everyone-monochrome span, 
                      body.everyone-monochrome img, 
                      body.everyone-monochrome a, 
                      body.everyone-monochrome h1, 
                      body.everyone-monochrome h2, 
                      body.everyone-monochrome h3, 
                      body.everyone-monochrome h4, 
                      body.everyone-monochrome h5, 
                      body.everyone-monochrome h6, 
                      body.everyone-monochrome li, 
                      body.everyone-monochrome table, 
                      body.everyone-monochrome form, 
                      body.everyone-monochrome label, 
                      body.everyone-monochrome article, 
                      body.everyone-monochrome section, 
                      body.everyone-monochrome main {
                        filter: grayscale(1) !important;
                      }
                      
                      body.everyone-low-saturation p, 
                      body.everyone-low-saturation div, 
                      body.everyone-low-saturation span, 
                      body.everyone-low-saturation img, 
                      body.everyone-low-saturation a, 
                      body.everyone-low-saturation h1, 
                      body.everyone-low-saturation h2, 
                      body.everyone-low-saturation h3, 
                      body.everyone-low-saturation h4, 
                      body.everyone-low-saturation h5, 
                      body.everyone-low-saturation h6, 
                      body.everyone-low-saturation li, 
                      body.everyone-low-saturation table, 
                      body.everyone-low-saturation form, 
                      body.everyone-low-saturation label, 
                      body.everyone-low-saturation article, 
                      body.everyone-low-saturation section, 
                      body.everyone-low-saturation main {
                        filter: saturate(0.5) !important;
                      }
                      
                      body.everyone-mute-sounds audio,
                      body.everyone-mute-sounds video {
                        volume: 0 !important;
                      }
                      
                      body.everyone-hide-images img {
                        opacity: 0 !important;
                        filter: brightness(0) !important;
                      }
                      
                      body.everyone-stop-animations *,
                      body.everyone-stop-animations * ::before,
                      body.everyone-stop-animations * ::after {
                        animation: none !important;
                        transition: none !important;
                      }
                      
                      body.everyone-highlight-focus a:focus,
                      body.everyone-highlight-focus button:focus,
                      body.everyone-highlight-focus input:focus,
                      body.everyone-highlight-focus select:focus,
                      body.everyone-highlight-focus textarea:focus,
                      body.everyone-highlight-focus [tabindex]:focus {
                        outline: 3px solid #ff9800 !important;
                        outline-offset: 3px !important;
                      }
                      
                      body.everyone-highlight-hover a:hover,
                      body.everyone-highlight-hover button:hover,
                      body.everyone-highlight-hover input:hover,
                      body.everyone-highlight-hover select:hover,
                      body.everyone-highlight-hover textarea:hover,
                      body.everyone-highlight-hover [tabindex]:hover {
                        outline: 3px solid #ff9800 !important;
                        outline-offset: 3px !important;
                      }
                      
                      body.everyone-text-magnifier {
                        cursor: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='11' cy='11' r='8'%3E%3C/circle%3E%3Cline x1='21' y1='21' x2='16.65' y2='16.65'%3E%3C/line%3E%3Cline x1='11' y1='8' x2='11' y2='14'%3E%3C/line%3E%3Cline x1='8' y1='11' x2='14' y2='11'%3E%3C/line%3E%3C/svg%3E"), auto;
                      }
                      
                      body.everyone-big-black-cursor, body.everyone-big-black-cursor * {
                        cursor:  url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNTVweCIgaGVpZ2h0PSI1NXB4IiB2aWV3Qm94PSIwIDAgNTUgNTUiIHZlcnNpb249IjEuMSI+CjxnIGlkPSJzdXJmYWNlMSI+CjxwYXRoIHN0eWxlPSJmaWxsLXJ1bGU6ZXZlbm9kZDtmaWxsOnJnYigwJSwwJSwwJSk7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlLXdpZHRoOjE7c3Ryb2tlLWxpbmVjYXA6YnV0dDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlOnJnYigyNTUlLDI1NSUsMjU1JSk7c3Ryb2tlLW9wYWNpdHk6MTtzdHJva2UtbWl0ZXJsaW1pdDo0OyIgZD0iTSA3LjAwMDU2OCAxLjk5OTQzMiBMIDE5LjAwMDU2OCAxMy4yIEwgMTMuMiAxMy42OTk0MzIgTCAxNi41IDIxIEwgMTQuMjk5NDMyIDIyLjAwMDU2OCBMIDExLjEgMTQuNTk5NDMyIEwgNy4wMDA1NjggMTguNDk5NDMyIEwgNy4wMDA1NjggMS45OTk0MzIgIiB0cmFuc2Zvcm09Im1hdHJpeCgyLjI5MTY2NywwLDAsMi4yOTE2NjcsMCwwKSIvPgo8L2c+Cjwvc3ZnPgo=), auto;
                      }
            
                      body.everyone-big-white-cursor,body.everyone-big-white-cursor *  {
                        cursor:  url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNTVweCIgaGVpZ2h0PSI1NXB4IiB2aWV3Qm94PSIwIDAgNTUgNTUiIHZlcnNpb249IjEuMSI+CjxnIGlkPSJzdXJmYWNlMSI+CjxwYXRoIHN0eWxlPSJmaWxsLXJ1bGU6ZXZlbm9kZDtmaWxsOnJnYigxMDAlLDEwMCUsMTAwJSk7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlLXdpZHRoOjE7c3Ryb2tlLWxpbmVjYXA6YnV0dDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlOnJnYigwJSwwJSwwJSk7c3Ryb2tlLW9wYWNpdHk6MTtzdHJva2UtbWl0ZXJsaW1pdDo0OyIgZD0iTSA3LjAwMDU2OCAxLjk5OTQzMiBMIDE5LjAwMDU2OCAxMy4yIEwgMTMuMiAxMy42OTk0MzIgTCAxNi41IDIxIEwgMTQuMjk5NDMyIDIyLjAwMDU2OCBMIDExLjEgMTQuNTk5NDMyIEwgNy4wMDA1NjggMTguNDk5NDMyIEwgNy4wMDA1NjggMS45OTk0MzIgIiB0cmFuc2Zvcm09Im1hdHJpeCgyLjI5MTY2NywwLDAsMi4yOTE2NjcsMCwwKSIvPgo8L2c+Cjwvc3ZnPgo=), auto;
                      }
            
                      /*readmode*/
                      .everyone-readmode-inner {
                          max-width: 800px;
                          margin: 0 auto;
                      }
                      
                      /* External elements created by the widget */
                      #everyone-text-magnifier-glass {
                        position: fixed;
                        width: 150px;
                        height: 150px;
                        border-radius: 50%;
                        background: rgba(255, 255, 255, 0.9);
                        border: 3px solid #4338ca;
                        box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
                        pointer-events: none;
                        z-index: 9999999;
                        display: none;
                        overflow: hidden;
                      }
                      
                      #everyone-text-magnifier-content {
                        left: 0;
                        top: 0;
                        transform-origin: 0 0;
                        pointer-events: none;
                      }
                      
                      #everyone-reading-guide {
                        position: fixed;
                        left: 0;
                        width: 100%;
                        height: 40px;
                        background-color: rgba(255, 255, 0, 0.2);
                        pointer-events: none;
                        z-index: 9999998;
                        display: none;
                      }
                      
                      #everyone-reading-mask {
                        position: fixed;
                        left: 0;
                        width: 100%;
                        height: 150px;
                        background-color: transparent;
                        border: 2px solid rgba(255, 255, 0, 0.5);
                        box-shadow: 0 0 0 9999px rgba(0, 0, 0, 0.7);
                        pointer-events: none;
                        z-index: 9999997;
                        display: none;
                      }
                      
                      #everyone-read-mode-overlay {
                        position: fixed;
                        left: 0;
                        top: 0;
                        width: 100%;
                        height: 100%;
                        background-color: rgba(0, 0, 0, 0.8);
                        z-index: 9999996;
                        display: none;
                      }
                      
                      #everyone-read-mode-content {
                        position: fixed;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                        width: 90%;
                        max-width: 900px;
                        max-height: 85vh;
                        overflow-y: auto;
                        background-color: #fff;
                        padding: 20px;
                        border-radius: 0;
                        z-index: 9999997;
                        font-family: Arial, sans-serif;
                        font-size: 18px;
                        line-height: 1.6;
                        color: #000;
                        display: none;
                      }
                   
                    `

        // Add isolation for widget elements
        docStyle.textContent += `
                  /* Isolation for widget elements */
                  #everyone-js-container, 
                  #everyone-js-container *, 
                  #everyone-text-magnifier-glass, 
                  #everyone-reading-mask, 
                  #everyone-read-mode-overlay {
                    all: initial;
                    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif !important;
                    text-align: left !important;
                    line-height: normal !important;
                    letter-spacing: normal !important;
                    font-size: 16px !important;
                    color: initial !important;
                    background: initial !important;
                    filter: none !important;
                    zoom: 1 !important;
                    cursor: auto !important;
                  }
                  
                  /* Additional overrides for specific elements */
                  .everyone-widget, 
                  .everyone-panel, 
                  .everyone-header, 
                  .everyone-content, 
                  .everyone-footer, 
                  .everyone-section, 
                  .everyone-option {
                    zoom: 1 !important;
                    filter: none !important;
                    background: initial !important;
                    color: initial !important;
                  }
                `
        // Add an exclusion for the widget elements
        docStyle.textContent += `
                  /* Add an exclusion for the widget elements */
                  #everyone-js-container *,
                  #everyone-text-magnifier-glass,
                  #everyone-reading-guide,
                  #everyone-reading-mask,
                  #everyone-read-mode-overlay,
                  #everyone-read-mode-content {
                    filter: none !important;
                  }
                  `

        docStyle.textContent += `
        /* External elements created by the widget */
        #everyone-text-magnifier-tooltip {
          position: fixed;
          z-index: 9999999;
          background-color: rgba(0,0,0,.7);
          border: 1px solid #ddd;
          border-radius: 6px;
          box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
          padding: 12px;
          min-width: 100px;
          max-width: 500px;
          min-height: 30px;
          overflow: hidden;
          display: none;
          pointer-events: none;
          transition: width 0.1s ease, height 0.1s ease;
        }
        
        #everyone-text-magnifier-arrow {
          position: absolute;
          width: 10px;
          height: 10px;
          border: 1px solid #ddd;
          border-right: none;
          border-bottom: none;
          transform: rotate(45deg);
        }
        
        #everyone-text-magnifier-content {
          font-family: Arial, sans-serif;
          font-size: 28px;
          line-height: 1.4;
          color: #fff;
        }
        `
        return docStyle
    }

    // Create accessibility widget
    const createWidget = () => {
        // Add document styles (outside shadow DOM)
        const docStyle = createDocumentStyles()
        document.head.appendChild(docStyle)

        // Create external elements for features
        createExternalElements()

        // Create container for shadow DOM
        const container = document.createElement("div")
        container.id = "everyone-js-container"

        // Create shadow DOM
        const shadow = container.attachShadow({ mode: "open" })

        // Add styles to shadow DOM
        const style = document.createElement("style")
        style.textContent = createWidgetStyles()
        shadow.appendChild(style)

        // Create main button
        const button = document.createElement("button")
        button.className = "everyone-widget"
        button.setAttribute("aria-label", "Open accessibility menu")
        button.setAttribute("aria-expanded", "false")
        button.innerHTML = `
                      <svg fill="rgba(0,0,0,.7)" width="25px" height="25px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff">

<g id="SVGRepo_bgCarrier" stroke-width="0"/>

<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>

<g id="SVGRepo_iconCarrier">

<path d="M256,112a56,56,0,1,1,56-56A56.06,56.06,0,0,1,256,112Z"/>

<path d="M432,112.8l-.45.12h0l-.42.13c-1,.28-2,.58-3,.89-18.61,5.46-108.93,30.92-172.56,30.92-59.13,0-141.28-22-167.56-29.47a73.79,73.79,0,0,0-8-2.58c-19-5-32,14.3-32,31.94,0,17.47,15.7,25.79,31.55,31.76v.28l95.22,29.74c9.73,3.73,12.33,7.54,13.6,10.84,4.13,10.59.83,31.56-.34,38.88l-5.8,45L150.05,477.44q-.15.72-.27,1.47l-.23,1.27h0c-2.32,16.15,9.54,31.82,32,31.82,19.6,0,28.25-13.53,32-31.94h0s28-157.57,42-157.57,42.84,157.57,42.84,157.57h0c3.75,18.41,12.4,31.94,32,31.94,22.52,0,34.38-15.74,32-31.94-.21-1.38-.46-2.74-.76-4.06L329,301.27l-5.79-45c-4.19-26.21-.82-34.87.32-36.9a1.09,1.09,0,0,0,.08-.15c1.08-2,6-6.48,17.48-10.79l89.28-31.21a16.9,16.9,0,0,0,1.62-.52c16-6,32-14.3,32-31.93S451,107.81,432,112.8Z"/>

</g>

</svg>
                    `

        // Create panel overlay
        const overlay = document.createElement("div")
        overlay.className = "everyone-panel-overlay"

        // Create panel
        const panel = document.createElement("div")
        panel.className = "everyone-panel"
        panel.setAttribute("role", "dialog")
        panel.setAttribute("aria-label", "Accessibility options")

        // Create header
        const header = document.createElement("div")
        header.className = "everyone-header"

        const logo = document.createElement("div")
        logo.className = "everyone-logo"
        logo.innerHTML = `
                      <img src="${config.logoUrl}" alt="EveryoneJS Logo">
                    `

        const languageSelect = document.createElement("div")
        languageSelect.className = "everyone-language-select"

        const languageButton = document.createElement("button")
        languageButton.className = "everyone-language-button"
        languageButton.textContent = "English"
        languageButton.setAttribute("aria-label", "Select language")
        languageButton.setAttribute("aria-expanded", "false")

        const languageDropdown = document.createElement("div")
        languageDropdown.className = "everyone-language-dropdown"

        config.languages.forEach((lang) => {
            const option = document.createElement("div")
            option.className = `everyone-language-option ${lang.code === currentLang ? "active" : ""}`
            option.setAttribute("data-lang", lang.code)
            option.textContent = lang.name
            languageDropdown.appendChild(option)
        })

        // languageSelect.appendChild(languageButton)
        // languageSelect.appendChild(languageDropdown)

        header.appendChild(logo)
        header.appendChild(languageSelect)

        // Create search
        const search = document.createElement("div")
        search.className = "everyone-search"
        search.innerHTML = `
                      <input type="text" class="everyone-search-input" placeholder="${t("search")}" aria-label="${t("search")}">
                    `

        // Create content
        const content = document.createElement("div")
        content.className = "everyone-content"

        // Create sections
        config.sections.forEach((section) => {
            const sectionEl = document.createElement("div")
            sectionEl.className = "everyone-section"
            sectionEl.setAttribute("data-section", section.id)

            const sectionHeader = document.createElement("div")
            sectionHeader.className = "everyone-section-header"
            sectionHeader.innerHTML = `
                        <div class="everyone-section-icon">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            ${getSectionIcon(section.icon)}
                          </svg>
                        </div>
                        <div class="everyone-section-title">${t(section.id + ".title")}</div>
                      `

            sectionEl.appendChild(sectionHeader)

            // Add section content based on section id
            switch (section.id) {
                case "profiles":
                    sectionEl.appendChild(createProfilesSection())
                    break
                case "content":
                    sectionEl.appendChild(createContentSection())
                    break
                case "color":
                    sectionEl.appendChild(createColorSection())
                    break
                case "orientation":
                    sectionEl.appendChild(createOrientationSection())
                    break
            }

            content.appendChild(sectionEl)
        })

        // Create footer
        const footer = document.createElement("div")
        footer.className = "everyone-footer"

        const resetButton = document.createElement("button")
        resetButton.className = "everyone-reset-button"
        resetButton.textContent = t("reset")
        resetButton.setAttribute("aria-label", t("reset"))

        const saveButton = document.createElement("button")
        saveButton.className = "everyone-save-button"
        saveButton.textContent = t("save")
        saveButton.setAttribute("aria-label", t("save"))

        footer.appendChild(resetButton)
        footer.appendChild(saveButton)

        // Create close button
        const closeButton = document.createElement("button")
        closeButton.className = "everyone-close-button"
        closeButton.innerHTML = "&times;"
        closeButton.setAttribute("aria-label", t("close"))

        // Create save indicator
        const saveIndicator = document.createElement("div")
        saveIndicator.className = "everyone-save-indicator"
        saveIndicator.textContent = t("saved")

        // Assemble panel
        panel.appendChild(header)
        panel.appendChild(search)
        panel.appendChild(content)
        panel.appendChild(footer)
        panel.appendChild(closeButton)

        // Append elements to shadow DOM
        shadow.appendChild(button)
        shadow.appendChild(overlay)
        shadow.appendChild(panel)
        shadow.appendChild(saveIndicator)

        // Append container to body
        document.body.appendChild(container)

        return {
            container,
            shadow,
            button,
            panel,
            overlay,
            saveIndicator,
            search: shadow.querySelector(".everyone-search-input"),
            languageButton,
            languageDropdown,
            resetButton,
            saveButton,
            closeButton,
        }
    }

    // Create external elements for features
    const createExternalElements = () => {
        // Remove any existing elements to avoid duplicates
        const existingElements = [
            document.getElementById("everyone-text-magnifier-glass"),
            document.getElementById("everyone-reading-guide"),
            document.getElementById("everyone-reading-mask"),
            document.getElementById("everyone-read-mode-overlay"),
            document.getElementById("everyone-read-mode-content"),
        ]

        existingElements.forEach((el) => {
            if (el) el.remove()
        })

        // Text magnifier tooltip (will be created in initTextMagnifier)
        // We don't create it here to avoid duplication

        // Reading guide
        const readingGuide = document.createElement("div")
        readingGuide.id = "everyone-reading-guide"
        readingGuide.style.position = "fixed"
        readingGuide.style.left = "0"
        readingGuide.style.width = "100%"
        readingGuide.style.height = "40px"
        readingGuide.style.backgroundColor = "rgba(255, 255, 0, 0.2)"
        readingGuide.style.pointerEvents = "none"
        readingGuide.style.zIndex = "9999998"
        readingGuide.style.display = "none"

        // Reading mask
        const readingMask = document.createElement("div")
        readingMask.id = "everyone-reading-mask"
        readingMask.style.position = "fixed"
        readingMask.style.left = "0"
        readingMask.style.width = "100%"
        readingMask.style.height = "150px"
        readingMask.style.backgroundColor = "transparent"
        readingMask.style.border = "2px solid rgba(255, 255, 0, 0.5)"
        readingMask.style.boxShadow = "0 0 0 9999px rgba(0, 0, 0, 0.7)"
        readingMask.style.pointerEvents = "none"
        readingMask.style.zIndex = "9999997"
        readingMask.style.display = "none"

        // Read mode overlay
        const readModeOverlay = document.createElement("div")
        readModeOverlay.id = "everyone-read-mode-overlay"
        readModeOverlay.style.position = "fixed"
        readModeOverlay.style.left = "0"
        readModeOverlay.style.top = "0"
        readModeOverlay.style.width = "100%"
        readModeOverlay.style.height = "100%"
        readModeOverlay.style.backgroundColor = "rgba(0, 0, 0, 0.8)"
        readModeOverlay.style.zIndex = "9999996"
        readModeOverlay.style.display = "none"

        // Read mode content
        const readModeContent = document.createElement("div")
        readModeContent.id = "everyone-read-mode-content"
        readModeContent.style.position = "fixed"
        readModeContent.style.top = "50%"
        readModeContent.style.left = "50%"
        readModeContent.style.transform = "translate(-50%, -50%)"
        readModeContent.style.width = "100%"
        readModeContent.style.maxWidth = "100%"
        readModeContent.style.maxHeight = "100vh"
        readModeContent.style.overflowY = "auto"
        readModeContent.style.backgroundColor = "#fff"
        readModeContent.style.padding = "30px"
        readModeContent.style.borderRadius = "8px"
        readModeContent.style.zIndex = "9999997"
        readModeContent.style.fontSize = "18px"
        readModeContent.style.lineHeight = "1.8"
        readModeContent.style.display = "none"

        // Append all elements to body
        document.body.appendChild(readingGuide)
        document.body.appendChild(readingMask)
        document.body.appendChild(readModeOverlay)
        document.body.appendChild(readModeContent)
    }

    // Create profiles section
    const createProfilesSection = () => {
        const container = document.createElement("div")

        // Seizure Safe Profile
        const seizureSafe = createToggleOption("seizureSafe", t("profiles.seizureSafe"))
        container.appendChild(seizureSafe)

        // Vision Impaired Profile
        const visionImpaired = createToggleOption("visionImpaired", t("profiles.visionImpaired"))
        container.appendChild(visionImpaired)

        // ADHD Friendly Profile
        const adhdFriendly = createToggleOption("adhdFriendly", t("profiles.adhdFriendly"))
        container.appendChild(adhdFriendly)

        // Cognitive Disability Profile
        const cognitiveDisability = createToggleOption("cognitiveDisability", t("profiles.cognitiveDisability"))

        container.appendChild(cognitiveDisability)

        // Keyboard Navigation
        const keyboardNavigation = createToggleOption("keyboardNavigation", t("profiles.keyboardNavigation"))
        container.appendChild(keyboardNavigation)

        // Blind Users
        const blindUsers = createToggleOption("screenReader", t("profiles.blindUsers"))
        container.appendChild(blindUsers)

        return container
    }

    // Create content section
    const createContentSection = () => {
        const container = document.createElement("div")

        // Content Scaling
        const contentScaling = createValueOption("contentScaling", t("content.contentScaling"), 0, 0, 5)
        container.appendChild(contentScaling)

        // Readable Font
        const readableFont = createToggleOption("readableFont", t("content.readableFont"))
        container.appendChild(readableFont)

        // Highlight Titles
        const highlightTitles = createToggleOption("highlightTitles", t("content.highlightTitles"))
        container.appendChild(highlightTitles)

        // Highlight Links
        const highlightLinks = createToggleOption("highlightLinks", t("content.highlightLinks"))
        container.appendChild(highlightLinks)

        // Text Magnifier
        const textMagnifier = createToggleOption("textMagnifier", t("content.textMagnifier"))
        container.appendChild(textMagnifier)

        // Content Alignment
        const contentAlignment = document.createElement("div")
        contentAlignment.className = "everyone-option"
        contentAlignment.innerHTML = `
                    <div class="everyone-option-title">${t("content.contentAlignment")}</div>
                    <div class="everyone-button-group">
                      <button class="everyone-button" data-action="text-align-left">${t("content.left")}</button>
                      <button class="everyone-button" data-action="text-align-center">${t("content.center")}</button>
                      <button class="everyone-button" data-action="text-align-right">${t("content.right")}</button>
                    </div>
                  `
        container.appendChild(contentAlignment)

        // Font Size
        const fontSize = createValueOption("fontSize", t("content.fontSize"), 0, 0, 5)
        container.appendChild(fontSize)

        // Line Height
        const lineHeight = createValueOption("lineHeight", t("content.lineHeight"), 0, 0, 5)
        container.appendChild(lineHeight)

        // Letter Spacing
        const letterSpacing = createValueOption("letterSpacing", t("content.letterSpacing"), 0, 0, 5)
        container.appendChild(letterSpacing)

        // Reading Guide
        const readingGuide = createToggleOption("readingGuide", t("content.readingGuide"))
        container.appendChild(readingGuide)

        // Reading Mask
        const readingMask = createToggleOption("readingMask", t("content.readingMask"))
        container.appendChild(readingMask)

        return container
    }

    // Create color section
    const createColorSection = () => {
        const container = document.createElement("div")

        // Dark Contrast
        const darkContrast = createToggleOption("darkContrast", t("color.darkContrast"))
        container.appendChild(darkContrast)

        // Light Contrast
        const lightContrast = createToggleOption("lightContrast", t("color.lightContrast"))
        container.appendChild(lightContrast)

        // High Contrast
        const highContrast = createToggleOption("highContrast", t("color.highContrast"))
        container.appendChild(highContrast)

        // High Saturation
        const highSaturation = createToggleOption("highSaturation", t("color.highSaturation"))
        container.appendChild(highSaturation)

        // Monochrome
        const monochrome = createToggleOption("monochrome", t("color.monochrome"))
        container.appendChild(monochrome)

        // Low Saturation
        const lowSaturation = createToggleOption("lowSaturation", t("color.lowSaturation"))
        container.appendChild(lowSaturation)

        // Text Colors
        const textColors = document.createElement("div")
        textColors.className = "everyone-option"
        textColors.innerHTML = `
                      <div class="everyone-option-title">${t("color.textColors")}</div>
                      <div class="everyone-color-group">
                      <div class="everyone-color-options">
                        <div class="everyone-color-option" style="background-color: #000000;" data-color="#000000" data-target="text"></div>
                        <div class="everyone-color-option" style="background-color: #0000FF;" data-color="#0000FF" data-target="text"></div>
                        <div class="everyone-color-option" style="background-color: #008000;" data-color="#008000" data-target="text"></div>
                        <div class="everyone-color-option" style="background-color: #FF0000;" data-color="#FF0000" data-target="text"></div>
                        <div class="everyone-color-option" style="background-color: #800080;" data-color="#800080" data-target="text"></div>
                        <div class="everyone-color-option" style="background-color: #FFA500;" data-color="#FFA500" data-target="text"></div>
                      </div>
                      <div class="everyone-color-picker">
                        <input type="color" data-target="text" aria-label="${t("color.customColor")}">
                      </div>
                      </div>
                    `
        container.appendChild(textColors)

        // Title Colors
        const titleColors = document.createElement("div")
        titleColors.className = "everyone-option"
        titleColors.innerHTML = `
                      <div class="everyone-option-title">${t("color.titleColors")}</div>
                       <div class="everyone-color-group">
                      <div class="everyone-color-options">
                        <div class="everyone-color-option" style="background-color: #000000;" data-color="#000000" data-target="title"></div>
                        <div class="everyone-color-option" style="background-color: #0000FF;" data-color="#0000FF" data-target="title"></div>
                        <div class="everyone-color-option" style="background-color: #008000;" data-color="#008000" data-target="title"></div>
                        <div class="everyone-color-option" style="background-color: #FF0000;" data-color="#FF0000" data-target="title"></div>
                        <div class="everyone-color-option" style="background-color: #800080;" data-color="#800080" data-target="title"></div>
                        <div class="everyone-color-option" style="background-color: #FFA500;" data-color="#FFA500" data-target="title"></div>
                      </div>
                      <div class="everyone-color-picker">
                        <input type="color" data-target="title" aria-label="${t("color.customColor")}">
                      </div>
                      </div>
                    `
        container.appendChild(titleColors)

        // Background Colors
        const backgroundColors = document.createElement("div")
        backgroundColors.className = "everyone-option"
        backgroundColors.innerHTML = `
                      <div class="everyone-option-title">${t("color.backgroundColors")}</div>
                       <div class="everyone-color-group">
                      <div class="everyone-color-options">
                        <div class="everyone-color-option" style="background-color: #FFFFFF;" data-color="#FFFFFF" data-target="background"></div>
                        <div class="everyone-color-option" style="background-color: #F0F0F0;" data-color="#F0F0F0" data-target="background"></div>
                        <div class="everyone-color-option" style="background-color: #FFFFCC;" data-color="#FFFFCC" data-target="background"></div>
                        <div class="everyone-color-option" style="background-color: #E0F7FA;" data-color="#E0F7FA" data-target="background"></div>
                        <div class="everyone-color-option" style="background-color: #F9FBE7;" data-color="#F9FBE7" data-target="background"></div>
                        <div class="everyone-color-option" style="background-color: #F3E5F5;" data-color="#F3E5F5" data-target="background"></div>
                      </div>
                      <div class="everyone-color-picker">
                        <input type="color" data-target="background" aria-label="${t("color.customColor")}">
                      </div>
                      </div>
                    `
        container.appendChild(backgroundColors)

        return container
    }

    // Create orientation section
    const createOrientationSection = () => {
        const container = document.createElement("div")

        // Mute Sounds
        const muteSounds = createToggleOption("muteSounds", t("orientation.muteSounds"))
        container.appendChild(muteSounds)

        // Hide Images
        const hideImages = createToggleOption("hideImages", t("orientation.hideImages"))
        container.appendChild(hideImages)

        // Read Mode
        const readMode = createToggleOption("readMode", t("orientation.readMode"))
        container.appendChild(readMode)

        // Useful Links
        const usefulLinks = document.createElement("div")
        usefulLinks.className = "everyone-option"
        usefulLinks.innerHTML = `
                    <div class="everyone-option-title">${t("orientation.usefulLinks")}</div>
                    <div class="everyone-links-list">
                    </div>
                  `
        container.appendChild(usefulLinks)

        // Stop Animation
        const stopAnimation = createToggleOption("stopAnimations", t("orientation.stopAnimation"))
        container.appendChild(stopAnimation)

        // Highlight Hover
        const highlightHover = createToggleOption("highlightHover", t("orientation.highlightHover"))
        container.appendChild(highlightHover)

        // Highlight Focus
        const highlightFocus = createToggleOption("highlightFocus", t("orientation.highlightFocus"))
        container.appendChild(highlightFocus)

        // Big Black Cursor
        const bigBlackCursor = createToggleOption("bigBlackCursor", t("orientation.bigBlackCursor"))
        container.appendChild(bigBlackCursor)

        // Big White Cursor
        const bigWhiteCursor = createToggleOption("bigWhiteCursor", t("orientation.bigWhiteCursor"))
        container.appendChild(bigWhiteCursor)

        return container
    }

    // Create toggle option
    const createToggleOption = (id, label) => {
        const option = document.createElement("div")
        option.className = "everyone-option"
        option.setAttribute("data-option", id)
        option.innerHTML = `
                      <div class="everyone-option-row">
                        <div class="everyone-option-title">${label}</div>
                        <label class="everyone-switch">
                          <input type="checkbox" data-action="${id}">
                          <span class="everyone-slider"></span>
                        </label>
                      </div>
                    `
        return option
    }

    // Create value option
    const createValueOption = (id, label, value, min, max) => {
        const option = document.createElement("div")
        option.className = "everyone-option"
        option.setAttribute("data-option", id)
        option.innerHTML = `
                      <div class="everyone-option-row">
                        <div class="everyone-option-title">${label}</div>
                        <div class="everyone-value-control">
                          <button class="everyone-value-button" data-action="${id}-decrease" aria-label="${t("content.decrease")} ${label}">-</button>
                          <div class="everyone-value-display" data-value="${value}" data-min="${min}" data-max="${max}">${value}</div>
                          <button class="everyone-value-button" data-action="${id}-increase" aria-label="${t("content.increase")} ${label}">+</button>
                        </div>
                      </div>
                    `
        return option
    }

    // Get section icon
    const getSectionIcon = (icon) => {
        switch (icon) {
            case "user":
                return '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle>'
            case "type":
                return '<polyline points="4 7 4 4 20 4 20 7"></polyline><line x1="9" y1="20" x2="15" y2="20"></line><line x1="12" y1="4" x2="12" y2="20"></line>'
            case "palette":
                return '<circle cx="13.5" cy="6.5" r="2.5"></circle><circle cx="17.5" cy="10.5" r="2.5"></circle><circle cx="8.5" cy="7.5" r="2.5"></circle><circle cx="6.5" cy="12.5" r="2.5"></circle><path d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20z"></path>'
            case "compass":
                return '<circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>'
            default:
                return '<circle cx="12" cy="12" r="10"></circle>'
        }
    }

    // Save preferences to localStorage
    const savePreferences = (saveIndicator) => {
        if (!localStorage) {
            console.error("localStorage is not available")
            return
        }

        try {
            const preferences = {
                // Profiles
                seizureSafe: document.body.classList.contains("everyone-seizure-safe"),
                visionImpaired: document.body.classList.contains("everyone-vision-impaired"),
                adhdFriendly: document.body.classList.contains("everyone-adhd-friendly"),
                cognitiveDisability: document.body.classList.contains("everyone-cognitive-disability"),
                keyboardNavigation: document.body.classList.contains("everyone-keyboard-navigation"),
                screenReader: document.body.classList.contains("everyone-screen-reader"),

                // Content
                contentScaling: getContentScalingValue(),
                readableFont: document.body.classList.contains("everyone-readable-font"),
                highlightTitles: document.body.classList.contains("everyone-highlight-titles"),
                highlightLinks: document.body.classList.contains("everyone-highlight-links"),
                textMagnifier: document.body.classList.contains("everyone-text-magnifier"),
                readingGuide: document.body.classList.contains("everyone-reading-guide"),
                readingMask: document.body.classList.contains("everyone-reading-mask"),
                readMode: document.body.classList.contains("everyone-read-mode"),
                textAlign: document.body.classList.contains("everyone-text-align-left")
                    ? "left"
                    : document.body.classList.contains("everyone-text-align-center")
                        ? "center"
                        : document.body.classList.contains("everyone-text-align-right")
                            ? "right"
                            : "default",
                fontSize: getFontSizeValue(),
                lineHeight: getLineHeightValue(),
                letterSpacing: getLetterSpacingValue(),

                // Color
                darkContrast: document.body.classList.contains("everyone-dark-contrast"),
                lightContrast: document.body.classList.contains("everyone-light-contrast"),
                highContrast: document.body.classList.contains("everyone-high-contrast"),
                highSaturation: document.body.classList.contains("everyone-high-saturation"),
                monochrome: document.body.classList.contains("everyone-monochrome"),
                lowSaturation: document.body.classList.contains("everyone-low-saturation"),
                textColor: document.documentElement.style.getPropertyValue("--everyone-text-color") || "",
                titleColor: document.documentElement.style.getPropertyValue("--everyone-title-color") || "",
                backgroundColor: document.documentElement.style.getPropertyValue("--everyone-background-color") || "",

                // Orientation
                muteSounds: document.body.classList.contains("everyone-mute-sounds"),
                hideImages: document.body.classList.contains("everyone-hide-images"),
                stopAnimations: document.body.classList.contains("everyone-stop-animations"),
                highlightFocus: document.body.classList.contains("everyone-highlight-focus"),
                highlightHover: document.body.classList.contains("everyone-highlight-hover"),
                bigBlackCursor: document.body.classList.contains("everyone-big-black-cursor"),
                bigWhiteCursor: document.body.classList.contains("everyone-big-white-cursor"),

                // Settings
                language: currentLang,
            }

            localStorage.setItem(config.localStorageKey, JSON.stringify(preferences))
            console.log("Preferences saved to localStorage:", preferences)

            // Show save indicator
            saveIndicator.classList.add("active")
            setTimeout(() => {
                saveIndicator.classList.remove("active")
            }, 2000)
        } catch (e) {
            console.error("Error saving preferences to localStorage:", e)
        }
    }

    // Load preferences from localStorage
    const loadPreferences = (elements) => {
        if (!localStorage) return

        const savedPrefs = localStorage.getItem(config.localStorageKey)
        if (!savedPrefs) return

        try {
            const preferences = JSON.parse(savedPrefs)

            // Set language
            if (preferences.language) {
                currentLang = preferences.language
                updateLanguage(elements)
            }

            // Apply profiles
            if (preferences.seizureSafe) {
                document.body.classList.add("everyone-seizure-safe")
                elements.shadow.querySelector('input[data-action="seizureSafe"]').checked = true
            }

            if (preferences.visionImpaired) {
                document.body.classList.add("everyone-vision-impaired")
                elements.shadow.querySelector('input[data-action="visionImpaired"]').checked = true
            }

            if (preferences.adhdFriendly) {
                document.body.classList.add("everyone-adhd-friendly")
                elements.shadow.querySelector('input[data-action="adhdFriendly"]').checked = true
                handleADHDProfile(true) // This will enable Reading Mask automatically
            }

            if (preferences.cognitiveDisability) {
                document.body.classList.add("everyone-cognitive-disability")
                elements.shadow.querySelector('input[data-action="cognitiveDisability"]').checked = true
            }

            if (preferences.keyboardNavigation) {
                document.body.classList.add("everyone-keyboard-navigation")
                elements.shadow.querySelector('input[data-action="keyboardNavigation"]').checked = true
            }

            if (preferences.screenReader) {
                document.body.classList.add("everyone-screen-reader")
                elements.shadow.querySelector('input[data-action="screenReader"]').checked = true
                optimizeForScreenReaders()
            }

            // Apply content adjustments
            if (preferences.contentScaling > 0) {
                document.body.classList.add(`everyone-content-scaling-${preferences.contentScaling}`)
                const scalingDisplay = elements.shadow.querySelector('[data-option="contentScaling"] .everyone-value-display')
                scalingDisplay.textContent = preferences.contentScaling
                scalingDisplay.setAttribute("data-value", preferences.contentScaling)
            }

            if (preferences.readableFont) {
                document.body.classList.add("everyone-readable-font")
                elements.shadow.querySelector('input[data-action="readableFont"]').checked = true
            }

            if (preferences.highlightTitles) {
                document.body.classList.add("everyone-highlight-titles")
                elements.shadow.querySelector('input[data-action="highlightTitles"]').checked = true
            }

            if (preferences.highlightLinks) {
                document.body.classList.add("everyone-highlight-links")
                elements.shadow.querySelector('input[data-action="highlightLinks"]').checked = true
            }

            if (preferences.textMagnifier) {
                document.body.classList.add("everyone-text-magnifier")
                elements.shadow.querySelector('input[data-action="textMagnifier"]').checked = true
                initTextMagnifier()
            }

            if (preferences.readingGuide) {
                document.body.classList.add("everyone-reading-guide")
                elements.shadow.querySelector('input[data-action="readingGuide"]').checked = true
                initReadingGuide()
            }

            if (preferences.readingMask) {
                document.body.classList.add("everyone-reading-mask")
                elements.shadow.querySelector('input[data-action="readingMask"]').checked = true
                initReadingMask()
            }

            if (preferences.readMode) {
                document.body.classList.add("everyone-read-mode")
                elements.shadow.querySelector('input[data-action="readMode"]').checked = true
                initReadMode()
            }

            if (preferences.highlightHover) {
                document.body.classList.add("everyone-highlight-hover")
                elements.shadow.querySelector('input[data-action="highlightHover"]').checked = true
            }

            if (preferences.textAlign === "left") {
                document.body.classList.add("everyone-text-align-left")
                elements.shadow.querySelector('[data-action="text-align-left"]').classList.add("active")
            } else if (preferences.textAlign === "center") {
                document.body.classList.add("everyone-text-align-center")
                elements.shadow.querySelector('[data-action="text-align-center"]').classList.add("active")
            } else if (preferences.textAlign === "right") {
                document.body.classList.add("everyone-text-align-right")
                elements.shadow.querySelector('[data-action="text-align-right"]').classList.add("active")
            }

            if (preferences.fontSize > 0) {
                document.body.classList.add(`everyone-font-size-${preferences.fontSize}`)
                const fontSizeDisplay = elements.shadow.querySelector('[data-option="fontSize"] .everyone-value-display')
                fontSizeDisplay.textContent = preferences.fontSize
                fontSizeDisplay.setAttribute("data-value", preferences.fontSize)
            }

            if (preferences.lineHeight > 0) {
                document.body.classList.add(`everyone-line-height-${preferences.lineHeight}`)
                const lineHeightDisplay = elements.shadow.querySelector('[data-option="lineHeight"] .everyone-value-display')
                lineHeightDisplay.textContent = preferences.lineHeight
                lineHeightDisplay.setAttribute("data-value", preferences.lineHeight)
            }

            if (preferences.letterSpacing > 0) {
                document.body.classList.add(`everyone-letter-spacing-${preferences.letterSpacing}`)
                const letterSpacingDisplay = elements.shadow.querySelector(
                    '[data-option="letterSpacing"] .everyone-value-display',
                )
                letterSpacingDisplay.textContent = preferences.letterSpacing
                letterSpacingDisplay.setAttribute("data-value", preferences.letterSpacing)
            }

            // Apply color adjustments
            if (preferences.darkContrast) {
                document.body.classList.add("everyone-dark-contrast")
                elements.shadow.querySelector('input[data-action="darkContrast"]').checked = true
            }

            if (preferences.lightContrast) {
                document.body.classList.add("everyone-light-contrast")
                elements.shadow.querySelector('input[data-action="lightContrast"]').checked = true
            }

            if (preferences.highContrast) {
                document.body.classList.add("everyone-high-contrast")
                elements.shadow.querySelector('input[data-action="highContrast"]').checked = true
            }

            if (preferences.highSaturation) {
                document.body.classList.add("everyone-high-saturation")
                elements.shadow.querySelector('input[data-action="highSaturation"]').checked = true
            }

            if (preferences.monochrome) {
                document.body.classList.add("everyone-monochrome")
                elements.shadow.querySelector('input[data-action="monochrome"]').checked = true
            }

            if (preferences.lowSaturation) {
                document.body.classList.add("everyone-low-saturation")
                elements.shadow.querySelector('input[data-action="lowSaturation"]').checked = true
            }

            if (preferences.bigBlackCursor) {
                document.body.classList.add("everyone-big-black-cursor")
                elements.shadow.querySelector('input[data-action="bigBlackCursor"]').checked = true
            }

            if (preferences.bigWhiteCursor) {
                document.body.classList.add("everyone-big-white-cursor")
                elements.shadow.querySelector('input[data-action="bigWhiteCursor"]').checked = true
            }

            if (preferences.textColor) {
                document.documentElement.style.setProperty("--everyone-text-color", preferences.textColor)
                document.body.style.color = preferences.textColor

                // Find and mark the active color option
                const textColorOptions = elements.shadow.querySelectorAll('[data-target="text"]')
                textColorOptions.forEach((option) => {
                    if (option.tagName === "INPUT") {
                        option.value = preferences.textColor
                    } else if (option.getAttribute("data-color") === preferences.textColor) {
                        option.classList.add("active")
                    }
                })
            }

            if (preferences.titleColor) {
                document.documentElement.style.setProperty("--everyone-title-color", preferences.titleColor)
                const headings = document.querySelectorAll("h1, h2, h3, h4, h5, h6")
                headings.forEach((heading) => {
                    heading.style.color = preferences.titleColor
                })

                // Find and mark the active color option
                const titleColorOptions = elements.shadow.querySelectorAll('[data-target="title"]')
                titleColorOptions.forEach((option) => {
                    if (option.tagName === "INPUT") {
                        option.value = preferences.titleColor
                    } else if (option.getAttribute("data-color") === preferences.titleColor) {
                        option.classList.add("active")
                    }
                })
            }

            if (preferences.backgroundColor) {
                document.documentElement.style.setProperty("--everyone-background-color", preferences.backgroundColor)
                document.body.style.backgroundColor = preferences.backgroundColor

                // Find and mark the active color option
                const bgColorOptions = elements.shadow.querySelectorAll('[data-target="background"]')
                bgColorOptions.forEach((option) => {
                    if (option.tagName === "INPUT") {
                        option.value = preferences.backgroundColor
                    } else if (option.getAttribute("data-color") === preferences.backgroundColor) {
                        option.classList.add("active")
                    }
                })
            }

            // Apply orientation adjustments
            if (preferences.muteSounds) {
                document.body.classList.add("everyone-mute-sounds")
                elements.shadow.querySelector('input[data-action="muteSounds"]').checked = true
                muteAllMedia()
            }

            if (preferences.hideImages) {
                document.body.classList.add("everyone-hide-images")
                elements.shadow.querySelector('input[data-action="hideImages"]').checked = true
            }

            if (preferences.stopAnimations) {
                document.body.classList.add("everyone-stop-animations")
                elements.shadow.querySelector('input[data-action="stopAnimations"]').checked = true
            }

            if (preferences.highlightFocus) {
                document.body.classList.add("everyone-highlight-focus")
                elements.shadow.querySelector('input[data-action="highlightFocus"]').checked = true
            }
        } catch (e) {
            console.error("Error loading EveryoneJS preferences:", e)
        }
    }

    // Update language
    const updateLanguage = (elements) => {
        const langOption = config.languages.find((lang) => lang.code === currentLang)
        if (langOption) {
            elements.languageButton.textContent = langOption.name
        }

        // Update active language in dropdown
        elements.shadow.querySelectorAll(".everyone-language-option").forEach((option) => {
            option.classList.toggle("active", option.getAttribute("data-lang") === currentLang)
        })

        // Update all text elements
        // This would need to update all text in the UI based on the translations
        // For a complete implementation, you would need to update all text elements
    }

    // Get content scaling value
    const getContentScalingValue = () => {
        for (let i = 1; i <= 5; i++) {
            if (document.body.classList.contains(`everyone-content-scaling-${i}`)) {
                return i
            }
        }
        return 0
    }

    // Get font size value
    const getFontSizeValue = () => {
        for (let i = 1; i <= 5; i++) {
            if (document.body.classList.contains(`everyone-font-size-${i}`)) {
                return i
            }
        }
        return 0
    }

    // Get line height value
    const getLineHeightValue = () => {
        for (let i = 1; i <= 5; i++) {
            if (document.body.classList.contains(`everyone-line-height-${i}`)) {
                return i
            }
        }
        return 0
    }

    // Get letter spacing value
    const getLetterSpacingValue = () => {
        for (let i = 1; i <= 5; i++) {
            if (document.body.classList.contains(`everyone-letter-spacing-${i}`)) {
                return i
            }
        }
        return 0
    }

    // Optimize for screen readers
    const optimizeForScreenReaders = () => {
        // Add ARIA landmarks
        const landmarks = [
            { selector: "main, [role='main']", role: "main", label: "Main content" },
            { selector: "nav, [role='navigation']", role: "navigation", label: "Main navigation" },
            { selector: "header, [role='banner']", role: "banner", label: "Site header" },
            { selector: "footer, [role='contentinfo']", role: "contentinfo", label: "Site footer" },
            { selector: "aside, [role='complementary']", role: "complementary", label: "Complementary content" },
            { selector: "form, [role='form']", label: "Form" },
            { selector: "section, article", role: "region", label: "Content section" },
        ]

        landmarks.forEach(({ selector, role, label }) => {
            const elements = document.querySelectorAll(selector)
            elements.forEach((el, index) => {
                if (!el.getAttribute("role")) {
                    el.setAttribute("role", role)
                }

                if (!el.getAttribute("aria-label") && !el.getAttribute("aria-labelledby")) {
                    // If there's a heading inside, use that for the label
                    const heading = el.querySelector("h1, h2, h3, h4, h5, h6")
                    if (heading && heading.textContent.trim()) {
                        const id = `sr-heading-${role}-${index}`
                        heading.id = id
                        el.setAttribute("aria-labelledby", id)
                    } else {
                        el.setAttribute("aria-label", `${label} ${index + 1}`)
                    }
                }
            })
        })

        // Add missing alt text to images
        const images = document.querySelectorAll("img:not([alt])")
        images.forEach((img, index) => {
            let altText = img.getAttribute("title") || ""
            if (!altText) {
                const src = img.src.split("/").pop().split("?")[0].split("#")[0]
                const fileName = src.split(".")[0].replace(/[_-]/g, " ")
                altText = `Image: ${fileName}`
            }
            img.setAttribute("alt", altText)
        })

        // Add ARIA labels to buttons without text
        const buttons = document.querySelectorAll('button:not([aria-label]), [role="button"]:not([aria-label])')
        buttons.forEach((button) => {
            if (!button.textContent.trim() && !button.getAttribute("aria-label") && !button.getAttribute("title")) {
                // Try to find an icon inside
                const icon = button.querySelector("i, svg")
                if (icon) {
                    const iconClass = icon.className || ""
                    let label = "Button"

                    // Try to extract a meaningful name from icon classes
                    if (iconClass) {
                        const classes = iconClass.split(" ")
                        for (const cls of classes) {
                            if (cls.includes("close") || cls.includes("times")) {
                                label = "Close"
                                break
                            } else if (cls.includes("search")) {
                                label = "Search"
                                break
                            } else if (cls.includes("menu")) {
                                label = "Menu"
                                break
                            } else if (cls.includes("user")) {
                                label = "User profile"
                                break
                            } else if (cls.includes("cart")) {
                                label = "Shopping cart"
                                break
                            }
                        }
                    }
                    button.setAttribute("aria-label", label)
                } else {
                    button.setAttribute("aria-label", "Button")
                }
            }
        })

        // Add ARIA labels to form fields without labels
        const formFields = document.querySelectorAll("input, select, textarea")
        formFields.forEach((field) => {
            const id = field.id
            if (id) {
                const label = document.querySelector(`label[for="${id}"]`)
                if (!label) {
                    const placeholder = field.getAttribute("placeholder")
                    if (placeholder) {
                        field.setAttribute("aria-label", placeholder)
                    }
                }
            } else if (!field.getAttribute("aria-label")) {
                const placeholder = field.getAttribute("placeholder")
                if (placeholder) {
                    field.setAttribute("aria-label", placeholder)
                } else {
                    const type = field.type || "text"
                    field.setAttribute("aria-label", `${type} field`)
                }
            }
        })

        // Make sure all interactive elements are keyboard accessible
        const interactiveElements = document.querySelectorAll("a, button, input, select, textarea, [tabindex]")
        interactiveElements.forEach((el) => {
            if (!el.hasAttribute("tabindex") && el.style.display !== "none" && el.style.visibility !== "hidden") {
                // Only add tabindex if it's not already set and the element is visible
                if (el.disabled) {
                    el.setAttribute("tabindex", "-1")
                } else {
                    el.setAttribute("tabindex", "0")
                }
            }
        })

        // Add skip to content link if it doesn't exist
        if (!document.querySelector('.skip-to-content, .skip-link, [role="main"]')) {
            const skipLink = document.createElement("a")
            skipLink.href = "#main"
            skipLink.className = "skip-to-content"
            skipLink.textContent = "Skip to content"
            skipLink.style.position = "absolute"
            skipLink.style.top = "-40px"
            skipLink.style.left = "0"
            skipLink.style.padding = "8px"
            skipLink.style.zIndex = "10000"
            skipLink.style.background = "#fff"
            skipLink.style.color = "#000"
            skipLink.style.textDecoration = "none"
            skipLink.style.transition = "top 0.3s"
            skipLink.addEventListener("focus", () => {
                skipLink.style.top = "0"
            })
            skipLink.addEventListener("blur", () => {
                skipLink.style.top = "-40px"
            })

            document.body.insertBefore(skipLink, document.body.firstChild)

            // Add id to main content if it doesn't exist
            const main = document.querySelector('main, [role="main"]')
            if (main && !main.id) {
                main.id = "main"
            }
        }

        // Announce optimization complete
        const announcement = document.createElement("div")
        announcement.setAttribute("role", "status")
        announcement.setAttribute("aria-live", "polite")
        announcement.className = "sr-only"
        announcement.textContent = "Screen reader optimization complete. Press Tab to navigate with keyboard."
        document.body.appendChild(announcement)

        setTimeout(() => {
            announcement.remove()
        }, 3000)

        // Add keyboard shortcuts for navigation
        const addKeyboardShortcuts = () => {
            // Store current index for each element type to enable cycling
            const currentIndices = {
                menu: 0,
                heading: 0,
                form: 0,
                button: 0,
                graphic: 0,
            }

            document.addEventListener("keydown", (e) => {
                // Only apply shortcuts when keyboard navigation is enabled
                if (!document.body.classList.contains("everyone-keyboard-navigation")) return

                // Skip if user is typing in an input field
                if (
                    document.activeElement.tagName === "INPUT" ||
                    document.activeElement.tagName === "TEXTAREA" ||
                    document.activeElement.tagName === "SELECT"
                )
                    return

                const key = e.key.toLowerCase()
                const isReverse = e.ctrlKey || e.altKey || e.metaKey || e.shiftKey // Check for modifier keys

                switch (key) {
                    case "m": // Jump to menus
                        focusElement('nav, [role="navigation"]', "menu", isReverse)
                        break
                    case "h": // Jump to headings
                        focusElement("h1, h2, h3, h4, h5, h6", "heading", isReverse)
                        break
                    case "f": // Jump to forms
                        focusElement('form, [role="form"]', "form", isReverse)
                        break
                    case "b": // Jump to buttons
                        focusElement('button, [role="button"], input[type="button"], input[type="submit"]', "button", isReverse)
                        break
                    case "g": // Jump to graphics
                        focusElement("img, svg, canvas", "graphic", isReverse)
                        break
                }
            })

            function focusElement(selector, type, isReverse = false) {
                // Get all matching elements
                const allElements = document.querySelectorAll(selector)

                // Filter to only visible elements
                const visibleElements = Array.from(allElements).filter((el) => {
                    // Check if element is visible
                    const style = window.getComputedStyle(el)
                    const isVisible = style.display !== "none" && style.visibility !== "hidden" && style.opacity !== "0"

                    // Check if element is in viewport and not in a hidden container
                    if (isVisible) {
                        // Check if any parent is hidden
                        let parent = el.parentElement
                        while (parent) {
                            const parentStyle = window.getComputedStyle(parent)
                            if (
                                parentStyle.display === "none" ||
                                parentStyle.visibility === "hidden" ||
                                parentStyle.opacity === "0" ||
                                (parentStyle.height === "0px" && parentStyle.overflow === "hidden")
                            ) {
                                return false
                            }
                            parent = parent.parentElement
                        }
                        return true
                    }
                    return false
                })

                if (visibleElements.length === 0) return

                // Update the index based on direction
                if (isReverse) {
                    // Go backwards
                    currentIndices[type] = (currentIndices[type] - 1 + visibleElements.length) % visibleElements.length
                } else {
                    // Go forwards
                    currentIndices[type] = (currentIndices[type] + 1) % visibleElements.length
                }

                // Get the element at the current index
                const element = visibleElements[currentIndices[type]]

                // Store original styles
                const originalOutline = element.style.outline
                const originalBackground = element.style.backgroundColor

                // Apply strong highlight
                // element.setAttribute('data-keyboard-highlight', 'true');
                // element.style.outline = '3px solid #ff9800';
                // element.style.backgroundColor = '#fff3e0';

                document.querySelectorAll(".everyone-keyboard-highlight-style").forEach((el) => {
                    el.classList.remove("everyone-keyboard-highlight-style")
                })

                // Focus the element
                element.focus()
                element.classList.add("everyone-keyboard-highlight-style")

                // Scroll element into view
                element.scrollIntoView({ behavior: "smooth", block: "center" })

                // Add event listener to remove highlight when focus is lost
                element.addEventListener(
                    "blur",
                    function onBlur() {
                        element.style.outline = originalOutline
                        element.style.backgroundColor = originalBackground
                        element.removeAttribute("data-keyboard-highlight")
                        element.removeEventListener("blur", onBlur)
                    },
                    { once: true },
                ) // Use once option to ensure it only runs once
            }
        }

        // Call the function at the end of optimizeForScreenReaders
        addKeyboardShortcuts()
    }

    // Mute all media
    const muteAllMedia = () => {
        const mediaElements = document.querySelectorAll("audio, video")
        mediaElements.forEach((media) => {
            media.muted = true
        })

        // Also try to catch dynamically added media elements
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.addedNodes) {
                    mutation.addedNodes.forEach((node) => {
                        if (node.tagName === "AUDIO" || node.tagName === "VIDEO") {
                            node.muted = true
                        }

                        // Check for media elements inside added nodes
                        if (node.querySelectorAll) {
                            const mediaInNode = node.querySelectorAll("audio, video")
                            mediaInNode.forEach((media) => {
                                media.muted = true
                            })
                        }
                    })
                }
            })
        })

        observer.observe(document.body, { childList: true, subtree: true })
    }

    // Build useful links list
    const buildUsefulLinksList = (elements) => {
        const linksList = elements.shadow.querySelector(".everyone-links-list")
        if (!linksList) return

        linksList.innerHTML = ""

        // Get all links on the page
        const links = document.querySelectorAll('a[href]:not([href^="#"]):not([href^="javascript:"])')
        const uniqueLinks = new Map()

        links.forEach((link) => {
            const href = link.getAttribute("href")
            const text = link.textContent.trim()

            // Skip empty links or links without text
            if (!href || !text) return

            // Skip if already added
            if (uniqueLinks.has(href)) return

            uniqueLinks.set(href, text)
        })

        // Add links to the list
        if (uniqueLinks.size === 0) {
            linksList.innerHTML = '<div class="everyone-links-list-item">No links found on this page</div>'
            return
        }

        uniqueLinks.forEach((text, href) => {
            const item = document.createElement("div")
            item.className = "everyone-links-list-item"

            const fullHref = href.startsWith("http") ? href : new URL(href, window.location.origin).href

            item.innerHTML = `<a href="${fullHref}" target="_blank">${text}</a>`
            linksList.appendChild(item)
        })
    }

    // Filter options based on search
    const filterOptions = (searchText, elements) => {
        const options = elements.shadow.querySelectorAll(".everyone-option")
        const lowerSearchText = searchText.toLowerCase()

        options.forEach((option) => {
            const title = option.querySelector(".everyone-option-title")
            if (!title) return

            const titleText = title.textContent.toLowerCase()

            if (titleText.includes(lowerSearchText) || !searchText) {
                option.classList.remove("everyone-option-hidden")
            } else {
                option.classList.add("everyone-option-hidden")
            }
        })

        // Show/hide section headers based on visible options
        const sections = elements.shadow.querySelectorAll(".everyone-section")
        sections.forEach((section) => {
            const options = section.querySelectorAll(".everyone-option:not(.everyone-option-hidden)")
            if (options.length === 0) {
                section.classList.add("everyone-option-hidden")
            } else {
                section.classList.remove("everyone-option-hidden")
            }
        })
    }

    // Initialize text magnifier
    const initTextMagnifier = () => {
        // Get or create the magnifier elements
        let tooltip = document.getElementById("everyone-text-magnifier-tooltip")
        let content = document.getElementById("everyone-text-magnifier-content")

        // If elements don't exist, create them
        if (!tooltip) {
            tooltip = document.createElement("div")
            tooltip.id = "everyone-text-magnifier-tooltip"
            document.body.appendChild(tooltip)

            // Style the tooltip
            tooltip.style.position = "fixed"
            tooltip.style.border = "1px solid  rgba(0, 0, 0, 0.2)"
            tooltip.style.borderRadius = "6px"
            tooltip.style.boxShadow = "0 3px 10px rgba(0, 0, 0, 0.2)"
            tooltip.style.padding = "12px"
            tooltip.style.minWidth = "100px"
            tooltip.style.maxWidth = "500px" // Increased to accommodate larger text
            tooltip.style.minHeight = "30px"
            tooltip.style.maxHeight = "none" // Allow it to grow as needed
            tooltip.style.overflow = "hidden"
            tooltip.style.display = "none"
            tooltip.style.pointerEvents = "none" // Prevent tooltip from interfering with mouse events
            tooltip.style.transition = "width 0.1s ease, height 0.1s ease"

            // Create arrow element
            const arrow = document.createElement("div")
            arrow.id = "everyone-text-magnifier-arrow"
            arrow.style.position = "absolute"
            arrow.style.width = "10px"
            arrow.style.height = "10px"
            arrow.style.border = "1px solid #ddd"
            arrow.style.borderRight = "none"
            arrow.style.borderBottom = "none"
            arrow.style.transform = "rotate(45deg)"
            arrow.style.bottom = "-6px"
            arrow.style.left = "50%"
            arrow.style.marginLeft = "-5px"
            tooltip.appendChild(arrow)

            // Create content container
            content = document.createElement("div")
            content.id = "everyone-text-magnifier-content"
            content.style.transformOrigin = "top left"
            tooltip.appendChild(content)
        }

        const scale = 1.5 // Magnification level
        const offset = 15 // Distance from cursor

        const moveMagnifier = (e) => {
            if (!document.body.classList.contains("everyone-text-magnifier")) {
                tooltip.style.display = "none"
                return
            }

            // Get mouse position
            const x = e.clientX
            const y = e.clientY

            try {
                // Get the element under the cursor
                const element = document.elementFromPoint(x, y)
                if (
                    !element ||
                    element.id === "everyone-text-magnifier-tooltip" ||
                    element.closest("#everyone-js-container") ||
                    element.closest("#everyone-text-magnifier-tooltip")
                ) {
                    tooltip.style.display = "none"
                    return
                }

                // Get text content or HTML from the element
                let displayContent

                // Handle different element types
                if (element.tagName === "IMG") {
                    // For images, create a copy of the image
                    displayContent = document.createElement("img")
                    displayContent.src = element.src
                    displayContent.alt = element.alt
                    displayContent.style.maxWidth = "100%"
                    displayContent.style.height = "auto"
                } else {
                    // For text elements, get the text near the cursor
                    displayContent = document.createElement("div")

                    // Set standard styling with larger font size, capped at 50px
                    displayContent.style.fontFamily = "Arial, sans-serif"
                    displayContent.style.fontSize = "28px" // Large but not exceeding 50px
                    displayContent.style.fontWeight = "normal"
                    displayContent.style.lineHeight = "1.4"
                    displayContent.style.color = "#fff"
                    displayContent.style.whiteSpace = "normal"
                    displayContent.style.wordBreak = "break-word"

                    // Try to get the most specific text node near the cursor
                    let textContent = ""

                    // If it's a text node or has text content
                    if (element.nodeType === Node.TEXT_NODE) {
                        textContent = element.textContent
                    } else {
                        // Try to get text from child nodes
                        const range = document.caretRangeFromPoint(x, y)
                        if (range) {
                            const textNode = range.startContainer
                            if (textNode.nodeType === Node.TEXT_NODE) {
                                // Get a portion of text around the cursor
                                const offset = range.startOffset
                                const text = textNode.textContent
                                // Get more context - up to 100 characters
                                const start = Math.max(0, offset - 50)
                                const end = Math.min(text.length, offset + 50)
                                textContent = text.substring(start, end)
                            } else {
                                textContent = element.innerText || element.textContent
                            }
                        } else {
                            textContent = element.innerText || element.textContent
                        }
                    }

                    // Set the text content
                    displayContent.textContent = textContent.trim()
                }

                // Clear previous content and add new content
                content.innerHTML = ""
                content.appendChild(displayContent)

                // Show the tooltip
                tooltip.style.display = "block"

                // Position the tooltip
                const tooltipRect = tooltip.getBoundingClientRect()
                const tooltipWidth = tooltipRect.width
                const tooltipHeight = tooltipRect.height
                const viewportWidth = window.innerWidth
                const viewportHeight = window.innerHeight

                // Default position above the cursor
                let posX = x - tooltipWidth / 2
                let posY = y - tooltipHeight - offset
                let arrowPosition = "bottom"

                // Adjust if tooltip would go off screen
                if (posY < 0) {
                    // Position below cursor if it would go off the top
                    posY = y + offset
                    arrowPosition = "top"
                }

                if (posX < 0) {
                    posX = 0
                } else if (posX + tooltipWidth > viewportWidth) {
                    posX = viewportWidth - tooltipWidth
                }

                // Position the tooltip
                tooltip.style.left = `${posX}px`
                tooltip.style.top = `${posY}px`

                // Adjust arrow position
                const arrow = document.getElementById("everyone-text-magnifier-arrow")
                if (arrow) {
                    if (arrowPosition === "top") {
                        arrow.style.top = "-6px"
                        arrow.style.bottom = "auto"
                        arrow.style.transform = "rotate(225deg)"
                    } else {
                        arrow.style.bottom = "-6px"
                        arrow.style.top = "auto"
                        arrow.style.transform = "rotate(45deg)"
                    }

                    // Center the arrow relative to the cursor
                    const arrowLeft = x - posX - 5 // 5 is half the arrow width
                    arrow.style.left = `${Math.max(10, Math.min(tooltipWidth - 20, arrowLeft))}px`
                    arrow.style.marginLeft = "0"
                }
            } catch (err) {
                console.error("Text magnifier error:", err)
                tooltip.style.display = "none"
            }
        }

        const hideMagnifier = () => {
            tooltip.style.display = "none"
        }

        // Add event listeners
        document.addEventListener("mousemove", moveMagnifier)
        document.addEventListener("mouseout", hideMagnifier)

        // Store handlers for cleanup
        window.everyoneJSHandlers = window.everyoneJSHandlers || {}
        window.everyoneJSHandlers.textMagnifier = {
            move: moveMagnifier,
            hide: hideMagnifier,
        }

        // Also update the destroyTextMagnifier function
        window.destroyTextMagnifier = () => {
            if (window.everyoneJSHandlers && window.everyoneJSHandlers.textMagnifier) {
                document.removeEventListener("mousemove", window.everyoneJSHandlers.textMagnifier.move)
                document.removeEventListener("mouseout", window.everyoneJSHandlers.textMagnifier.hide)

                const tooltip = document.getElementById("everyone-text-magnifier-tooltip")
                if (tooltip) {
                    tooltip.style.display = "none"
                }
            }
        }
    }

    // Destroy text magnifier
    const destroyTextMagnifier = () => {
        if (window.everyoneJSHandlers && window.everyoneJSHandlers.textMagnifier) {
            document.removeEventListener("mousemove", window.everyoneJSHandlers.textMagnifier.move)
            document.removeEventListener("mouseout", window.everyoneJSHandlers.textMagnifier.hide)

            const tooltip = document.getElementById("everyone-text-magnifier-tooltip")
            if (tooltip) {
                tooltip.style.display = "none"
            }
        }
    }

    // Initialize the reading guide
    const initReadingGuide = () => {
        // Get or create the reading guide element
        let guide = document.getElementById("everyone-reading-guide")

        // If the guide doesn't exist, create it
        if (!guide) {
            guide = document.createElement("div")
            guide.id = "everyone-reading-guide"
            document.body.appendChild(guide)
        }

        // Set explicit styles to ensure visibility and proper positioning
        guide.style.position = "fixed"
        guide.style.left = "0"
        guide.style.width = "100%"
        guide.style.height = "40px"
        guide.style.backgroundColor = "rgba(255, 255, 0, 0.2) !important"
        guide.style.pointerEvents = "none"
        guide.style.zIndex = "9999998"
        guide.style.display = "block"
        guide.style.top = "50%"
        guide.style.transition = "top 0.1s ease"

        // Remove any existing event listener to avoid duplicates
        if (window.everyoneJSHandlers && window.everyoneJSHandlers.readingGuide) {
            document.removeEventListener("mousemove", window.everyoneJSHandlers.readingGuide)
        }

        // Create a new handler function
        const moveGuide = (e) => {
            if (document.body.classList.contains("everyone-reading-guide")) {
                // Make sure the guide is visible
                guide.style.display = "block"
                // Position the guide at the mouse cursor's Y position
                guide.style.top = `${e.clientY}px`
            } else {
                guide.style.display = "none"
            }
        }

        // Add the event listener
        document.addEventListener("mousemove", moveGuide)

        // Store the handler for later removal
        window.everyoneJSHandlers = window.everyoneJSHandlers || {}
        window.everyoneJSHandlers.readingGuide = moveGuide

        // Log for debugging
        console.log("Reading guide initialized")

        // Force the guide to be visible if the feature is enabled
        if (document.body.classList.contains("everyone-reading-guide")) {
            guide.style.display = "block"
            console.log("Reading guide feature is enabled")
        } else {
            guide.style.display = "none"
            console.log("Reading guide feature is disabled")
        }
    }

    // Also update the destroyReadingGuide function for completeness
    const destroyReadingGuide = () => {
        const guide = document.getElementById("everyone-reading-guide")
        if (guide) {
            guide.style.display = "none"
        }

        if (window.everyoneJSHandlers && window.everyoneJSHandlers.readingGuide) {
            document.removeEventListener("mousemove", window.everyoneJSHandlers.readingGuide)
            console.log("Reading guide event listener removed")
        }
    }

    // Initialize reading mask
    const initReadingMask = () => {
        const mask = document.getElementById("everyone-reading-mask")
        mask.style.display = "block"
        mask.style.top = "50%"
        mask.style.zIndex = "9999997" // Ensure proper z-index

        // Fix the box-shadow to ensure it covers the entire screen
        mask.style.boxShadow = "0 0 0 9999px rgba(0, 0, 0, 0.7)"

        const moveMask = (e) => {
            if (document.body.classList.contains("everyone-reading-mask")) {
                mask.style.display = "block"
                mask.style.top = `${e.clientY}px`
            } else {
                mask.style.display = "none"
            }
        }

        document.addEventListener("mousemove", moveMask)

        window.everyoneJSHandlers = window.everyoneJSHandlers || {}
        window.everyoneJSHandlers.readingMask = moveMask
    }

    // Destroy reading mask
    const destroyReadingMask = () => {
        const mask = document.getElementById("everyone-reading-mask")
        if (mask) {
            mask.style.display = "none"
        }

        if (window.everyoneJSHandlers && window.everyoneJSHandlers.readingMask) {
            document.removeEventListener("mousemove", window.everyoneJSHandlers.readingMask)
        }
    }

    // Initialize read mode
    const initReadMode = () => {
        // Get read mode elements
        const overlay = document.getElementById("everyone-read-mode-overlay")
        const readModeContent = document.getElementById("everyone-read-mode-content")

        if (!overlay || !readModeContent) {
            console.error("Read mode elements not found")
            return
        }

        // Ensure proper styling for overlay
        overlay.style.position = "fixed"
        overlay.style.left = "0"
        overlay.style.top = "0"
        overlay.style.width = "100%"
        overlay.style.height = "100%"
        overlay.style.backgroundColor = "rgba(0, 0, 0, 0.8)"
        overlay.style.zIndex = "9999996"

        // Ensure proper styling for content container - simple and plain
        readModeContent.style.position = "fixed"
        readModeContent.style.top = "50%"
        readModeContent.style.left = "50%"
        readModeContent.style.transform = "translate(-50%, -50%)"
        readModeContent.style.width = "100%"
        readModeContent.style.maxHeight = "100vh"
        readModeContent.style.overflowY = "auto"
        readModeContent.style.backgroundColor = "#ffffff"
        readModeContent.style.padding = "20px"
        readModeContent.style.borderRadius = "0"
        readModeContent.style.zIndex = "9999997"
        readModeContent.style.fontFamily = "Arial, sans-serif"
        readModeContent.style.fontSize = "18px"
        readModeContent.style.lineHeight = "1.6"
        readModeContent.style.color = "#000000"

        // Extract main content
        let content = ""
        const mainElement =
            document.querySelector("main") ||
            document.querySelector("article") ||
            document.querySelector(".content") ||
            document.querySelector(".main")

        if (mainElement) {
            content = mainElement.innerHTML
        } else {
            // If no main content container found, use body content but filter out scripts, styles, etc.
            const tempDiv = document.createElement("div")
            tempDiv.innerHTML = document.body.innerHTML

            // Remove scripts, styles, and other non-content elements
            const scripts = tempDiv.querySelectorAll("script, style, noscript, iframe, nav, footer, header")
            scripts.forEach((script) => script.remove())

            content = tempDiv.innerHTML
        }

        // Create a temporary element to clean up the content
        const tempElement = document.createElement("div")
        tempElement.innerHTML = content

        // Remove all inline styles and classes
        const allElements = tempElement.querySelectorAll("*")
        allElements.forEach((el) => {
            // Keep only essential attributes for media and links
            if (el.tagName === "IMG") {
                const src = el.getAttribute("src")
                const alt = el.getAttribute("alt") || ""
                el.removeAttribute("class")
                el.removeAttribute("style")
                el.setAttribute("src", src)
                el.setAttribute("alt", alt)
                el.style.maxWidth = "100%"
                el.style.height = "auto"
                el.style.margin = "10px 0"
            } else if (el.tagName === "VIDEO" || el.tagName === "AUDIO") {
                const src = el.getAttribute("src")
                const controls = el.hasAttribute("controls")
                el.removeAttribute("class")
                el.removeAttribute("style")
                if (src) el.setAttribute("src", src)
                if (controls) el.setAttribute("controls", "")
                el.style.maxWidth = "100%"
                el.style.margin = "10px 0"
            } else if (el.tagName === "A") {
                const href = el.getAttribute("href")
                const text = el.textContent
                el.removeAttribute("class")
                el.removeAttribute("style")
                el.setAttribute("href", href)
                el.textContent = text
                el.style.color = "#0066cc"
            } else {
                // For all other elements, strip all attributes except essential ones
                const tagName = el.tagName.toLowerCase()
                const textContent = el.textContent

                // Preserve heading levels
                if (tagName.match(/^h[1-6]$/)) {
                    const level = tagName.charAt(1)
                    const fontSize = 24 - (level - 1) * 2
                    el.style.fontSize = `${fontSize}px`
                    el.style.fontWeight = "bold"
                    el.style.margin = "16px 0 8px 0"
                } else if (tagName === "p") {
                    el.style.margin = "8px 0"
                } else if (tagName === "ul" || tagName === "ol") {
                    el.style.margin = "8px 0 8px 20px"
                }

                // Remove all attributes
                while (el.attributes.length > 0) {
                    el.removeAttribute(el.attributes[0].name)
                }
            }
        })

        // Set cleaned content
        readModeContent.innerHTML = `<div class="everyone-readmode-inner">${tempElement.innerHTML}</div>`

        // Show read mode
        overlay.style.display = "block"
        readModeContent.style.display = "block"
    }

    // Destroy read mode
    const destroyReadMode = () => {
        const overlay = document.getElementById("everyone-read-mode-overlay")
        const readModeContent = document.getElementById("everyone-read-mode-content")

        if (overlay) {
            overlay.style.display = "none"
        }

        if (readModeContent) {
            readModeContent.style.display = "none"
            readModeContent.innerHTML = ""
        }
    }

    // Apply value change
    const applyValueChange = (action, value) => {
        switch (action) {
            case "contentScaling":
                // Remove all content scaling classes
                for (let i = 1; i <= 5; i++) {
                    document.body.classList.remove(`everyone-content-scaling-${i}`)
                }

                // Add the new content scaling class if value > 0
                if (value > 0) {
                    document.body.classList.add(`everyone-content-scaling-${value}`)
                }
                break

            case "fontSize":
                // Remove all font size classes
                for (let i = 1; i <= 5; i++) {
                    document.body.classList.remove(`everyone-font-size-${i}`)
                }

                // Add the new font size class if value > 0
                if (value > 0) {
                    document.body.classList.add(`everyone-font-size-${value}`)
                }
                break

            case "lineHeight":
                // Remove all line height classes
                for (let i = 1; i <= 5; i++) {
                    document.body.classList.remove(`everyone-line-height-${i}`)
                }

                // Add the new line height class if value > 0
                if (value > 0) {
                    document.body.classList.add(`everyone-line-height-${value}`)
                }
                break

            case "letterSpacing":
                // Remove all letter spacing classes
                for (let i = 1; i <= 5; i++) {
                    document.body.classList.remove(`everyone-letter-spacing-${i}`)
                }

                // Add the new letter spacing class if value > 0
                if (value > 0) {
                    document.body.classList.add(`everyone-letter-spacing-${value}`)
                }
                break
        }
    }

    // Apply color change
    const applyColorChange = (action, value) => {
        // Declare color variable
        const color = value

        switch (action) {
            case "text":
                document.documentElement.style.setProperty("--everyone-text-color", color)
                document.body.style.color = color
                break

            case "title":
                document.documentElement.style.setProperty("--everyone-title-color", color)
                const headings = document.querySelectorAll("h1, h2, h3, h4, h5, h6")
                headings.forEach((heading) => {
                    heading.style.color = color
                })
                break

            case "background":
                document.documentElement.style.setProperty("--everyone-background-color", color)
                document.body.style.backgroundColor = color
                break
        }
    }

    // Reset all settings
    const resetAllSettings = (elements) => {
        // Reset body classes
        const classesToRemove = Array.from(document.body.classList).filter((cls) => cls.startsWith("everyone-"))
        classesToRemove.forEach((cls) => {
            document.body.classList.remove(cls)
        })

        // Reset inline styles
        document.body.style.color = ""
        document.body.style.backgroundColor = ""

        const headings = document.querySelectorAll("h1, h2, h3, h4, h5, h6")
        headings.forEach((heading) => {
            heading.style.color = ""
        })

        // Reset CSS variables
        document.documentElement.style.removeProperty("--everyone-text-color")
        document.documentElement.style.removeProperty("--everyone-title-color")
        document.documentElement.style.removeProperty("--everyone-background-color")

        // Reset all checkboxes
        elements.shadow.querySelectorAll('input[type="checkbox"]').forEach((checkbox) => {
            checkbox.checked = false
        })

        // Reset all value displays
        elements.shadow.querySelectorAll(".everyone-value-display").forEach((display) => {
            display.textContent = "0"
            display.setAttribute("data-value", "0")
        })

        // Reset all active buttons
        elements.shadow.querySelectorAll(".everyone-button.active").forEach((button) => {
            button.classList.remove("active")
        })

        // Reset all active color options
        elements.shadow.querySelectorAll(".everyone-color-option.active").forEach((option) => {
            option.classList.remove("active")
        })

        // Reset all color pickers
        elements.shadow.querySelectorAll(".everyone-color-picker input").forEach((picker) => {
            picker.value = "#000000"
        })

        // Clear localStorage
        localStorage.removeItem(config.localStorageKey)

        // Remove reading guide
        destroyReadingGuide()

        // Remove reading mask
        destroyReadingMask()

        // Remove read mode
        destroyReadMode()

        // Remove text magnifier
        destroyTextMagnifier()

        // Hide all external elements
        const externalElements = [
            "everyone-text-magnifier-glass",
            "everyone-reading-guide",
            "everyone-reading-mask",
            "everyone-read-mode-overlay",
            "everyone-read-mode-content",
        ]

        externalElements.forEach((id) => {
            const element = document.getElementById(id)
            if (element) {
                element.style.display = "none"
                if (id === "everyone-text-magnifier-glass" || id === "everyone-read-mode-content") {
                    element.innerHTML = ""
                }
            }
        })

        // Remove any added event listeners
        if (window.everyoneJSHandlers) {
            if (window.everyoneJSHandlers.textMagnifier) {
                document.removeEventListener("mousemove", window.everyoneJSHandlers.textMagnifier.move)
                document.removeEventListener("mouseout", window.everyoneJSHandlers.textMagnifier.hide)
            }

            if (window.everyoneJSHandlers.readingGuide) {
                document.removeEventListener("mousemove", window.everyoneJSHandlers.readingGuide)
            }

            if (window.everyoneJSHandlers.readingMask) {
                document.removeEventListener("mousemove", window.everyoneJSHandlers.readingMask)
            }
        }
    }

    // Initialize when DOM is fully loaded
    const init = () => {
        const elements = createWidget()

        // Load saved preferences
        loadPreferences(elements)

        // Build useful links list
        buildUsefulLinksList(elements)

        // Toggle panel
        elements.button.addEventListener("click", () => {
            const isExpanded = elements.button.getAttribute("aria-expanded") === "true"
            elements.button.setAttribute("aria-expanded", !isExpanded)
            elements.panel.classList.toggle("active")
            elements.overlay.classList.toggle("active")

            if (!isExpanded) {
                // Rebuild useful links list when opening panel
                buildUsefulLinksList(elements)
            }
        })

        // Close panel when clicking overlay
        elements.overlay.addEventListener("click", () => {
            elements.panel.classList.remove("active")
            elements.overlay.classList.remove("active")
            elements.button.setAttribute("aria-expanded", "false")
        })

        // Close panel with close button
        elements.closeButton.addEventListener("click", () => {
            elements.panel.classList.remove("active")
            elements.overlay.classList.remove("active")
            elements.button.setAttribute("aria-expanded", "false")
        })

        // Toggle language dropdown
        elements.languageButton.addEventListener("click", () => {
            const isExpanded = elements.languageButton.getAttribute("aria-expanded") === "true"
            elements.languageButton.setAttribute("aria-expanded", !isExpanded)
            elements.languageDropdown.classList.toggle("active")
        })

        // Close language dropdown when clicking outside
        document.addEventListener("click", (e) => {
            if (!elements.languageButton.contains(e.target) && !elements.languageDropdown.contains(e.target)) {
                elements.languageDropdown.classList.remove("active")
                elements.languageButton.setAttribute("aria-expanded", "false")
            }
        })

        // Handle language selection
        elements.shadow.querySelectorAll(".everyone-language-option").forEach((option) => {
            option.addEventListener("click", () => {
                const lang = option.getAttribute("data-lang")
                if (lang) {
                    currentLang = lang
                    updateLanguage(elements)
                    elements.languageDropdown.classList.remove("active")
                    elements.languageButton.setAttribute("aria-expanded", "false")

                    // Save preferences immediately
                    savePreferences(elements.saveIndicator)
                }
            })
        })

        // Handle search
        elements.search.addEventListener("input", () => {
            filterOptions(elements.search.value, elements)
        })

        // Handle toggle switches
        const toggles = elements.shadow.querySelectorAll('input[type="checkbox"]')
        toggles.forEach((toggle) => {
            toggle.addEventListener("change", () => {
                const action = toggle.getAttribute("data-action")

                // Handle different actions
                switch (action) {
                    // Profiles
                    case "seizureSafe":
                        document.body.classList.toggle("everyone-seizure-safe", toggle.checked)
                        break
                    case "visionImpaired":
                        document.body.classList.toggle("everyone-vision-impaired", toggle.checked)
                        break
                    case "adhdFriendly":
                        document.body.classList.toggle("everyone-adhd-friendly", toggle.checked)
                        handleADHDProfile(toggle.checked)
                        break
                    case "cognitiveDisability":
                        document.body.classList.toggle("everyone-cognitive-disability", toggle.checked)
                        break
                    case "keyboardNavigation":
                        document.body.classList.toggle("everyone-keyboard-navigation", toggle.checked)
                        // Automatically enable screen reader mode when keyboard navigation is enabled
                        if (toggle.checked && !document.body.classList.contains("everyone-screen-reader")) {
                            document.body.classList.add("everyone-screen-reader")
                            elements.shadow.querySelector('input[data-action="screenReader"]').checked = true
                            optimizeForScreenReaders()
                            console.log("Screen reader mode automatically enabled with keyboard navigation")
                        }
                        break
                    case "screenReader":
                        document.body.classList.toggle("everyone-screen-reader", toggle.checked)
                        if (toggle.checked) {
                            optimizeForScreenReaders()
                            // Automatically enable keyboard navigation when screen reader is enabled
                            if (!document.body.classList.contains("everyone-keyboard-navigation")) {
                                document.body.classList.add("everyone-keyboard-navigation")
                                elements.shadow.querySelector('input[data-action="keyboardNavigation"]').checked = true
                                console.log("Keyboard navigation automatically enabled with screen reader")
                            }
                        }
                        break

                    // Content
                    case "readableFont":
                        document.body.classList.toggle("everyone-readable-font", toggle.checked)
                        break
                    case "highlightTitles":
                        document.body.classList.toggle("everyone-highlight-titles", toggle.checked)
                        break
                    case "highlightLinks":
                        document.body.classList.toggle("everyone-highlight-links", toggle.checked)
                        break
                    case "textMagnifier":
                        document.body.classList.toggle("everyone-text-magnifier", toggle.checked)
                        if (toggle.checked) {
                            initTextMagnifier()
                        } else {
                            destroyTextMagnifier()
                            // Ensure the magnifier is hidden
                            const glass = document.getElementById("everyone-text-magnifier-glass")
                            if (glass) glass.style.display = "none"
                        }
                        break
                    case "readingGuide":
                        document.body.classList.toggle("everyone-reading-guide", toggle.checked)
                        if (toggle.checked) {
                            initReadingGuide()
                        } else {
                            destroyReadingGuide()
                            // Ensure the guide is hidden
                            const guide = document.getElementById("everyone-reading-guide")
                            if (guide) guide.style.display = "none"
                        }
                        break
                    case "readingMask":
                        document.body.classList.toggle("everyone-reading-mask", toggle.checked)
                        if (toggle.checked) {
                            initReadingMask()
                        } else {
                            destroyReadingMask()
                            // Ensure the mask is hidden
                            const mask = document.getElementById("everyone-reading-mask")
                            if (mask) mask.style.display = "none"
                        }
                        break
                    case "readMode":
                        document.body.classList.toggle("everyone-read-mode", toggle.checked)
                        if (toggle.checked) {
                            initReadMode()
                        } else {
                            destroyReadMode()
                            // Ensure read mode elements are hidden
                            const overlay = document.getElementById("everyone-read-mode-overlay")
                            const content = document.getElementById("everyone-read-mode-content")
                            if (overlay) overlay.style.display = "none"
                            if (content) content.style.display = "none"
                        }
                        break
                    case "highlightHover":
                        document.body.classList.toggle("everyone-highlight-hover", toggle.checked)
                        break
                    case "bigBlackCursor":
                        document.body.classList.toggle("everyone-big-black-cursor", toggle.checked)
                        if (toggle.checked) {
                            // Disable other cursor options
                            document.body.classList.remove("everyone-big-white-cursor")
                            elements.shadow.querySelector('input[data-action="bigWhiteCursor"]').checked = false
                        }
                        break
                    case "bigWhiteCursor":
                        document.body.classList.toggle("everyone-big-white-cursor", toggle.checked)
                        if (toggle.checked) {
                            // Disable other cursor options
                            document.body.classList.remove("everyone-big-black-cursor")
                            elements.shadow.querySelector('input[data-action="bigBlackCursor"]').checked = false
                        }
                        break

                    // Color
                    case "darkContrast":
                        document.body.classList.toggle("everyone-dark-contrast", toggle.checked)
                        if (toggle.checked) {
                            // Remove conflicting modes
                            document.body.classList.remove("everyone-light-contrast", "everyone-high-contrast")
                            elements.shadow.querySelector('input[data-action="lightContrast"]').checked = false
                            elements.shadow.querySelector('input[data-action="highContrast"]').checked = false

                            // Override any custom text/background colors when dark contrast is enabled
                            document.body.style.backgroundColor = "#000000"
                            document.body.style.color = "#ffffff"

                            // Store the original colors to restore them when dark contrast is enabled
                            if (!document.body.hasAttribute("data-original-bg")) {
                                document.body.setAttribute(
                                    "data-original-bg",
                                    document.documentElement.style.getPropertyValue("--everyone-background-color") || "",
                                )
                            }
                            if (!document.body.hasAttribute("data-original-text")) {
                                document.body.setAttribute(
                                    "data-original-text",
                                    document.documentElement.style.getPropertyValue("--everyone-text-color") || "",
                                )
                            }

                            // Set dark contrast colors
                            document.documentElement.style.setProperty("--everyone-background-color", "#000000")
                            document.documentElement.style.setProperty("--everyone-text-color", "#ffffff")

                            // Apply focus outlines to all interactive elements for better visibility
                            const interactiveElements = document.querySelectorAll(
                                'a, button, input, select, textarea, [tabindex]:not([tabindex="-1"])',
                            )
                            interactiveElements.forEach((el) => {
                                if (!el.closest("#everyone-js-container")) {
                                    el.setAttribute("data-original-tabindex", el.getAttribute("tabindex") || "")
                                    if (el.getAttribute("tabindex") !== "-1") {
                                        el.setAttribute("tabindex", "0")
                                    }
                                }
                            })
                        } else {
                            // Restore original colors if they exist
                            const originalBg = document.body.getAttribute("data-original-bg")
                            const originalText = document.body.getAttribute("data-original-text")

                            if (originalBg) {
                                document.documentElement.style.setProperty("--everyone-background-color", originalBg)
                                document.body.style.backgroundColor = originalBg || ""
                            } else {
                                document.documentElement.style.removeProperty("--everyone-background-color")
                                document.body.style.backgroundColor = ""
                            }

                            if (originalText) {
                                document.documentElement.style.setProperty("--everyone-text-color", originalText)
                                document.body.style.color = originalText || ""
                            } else {
                                document.documentElement.style.removeProperty("--everyone-text-color")
                                document.body.style.color = ""
                            }

                            document.body.removeAttribute("data-original-bg")
                            document.body.removeAttribute("data-original-text")

                            // Restore original tabindex values
                            const interactiveElements = document.querySelectorAll("[data-original-tabindex]")
                            interactiveElements.forEach((el) => {
                                const originalTabindex = el.getAttribute("data-original-tabindex")
                                if (originalTabindex) {
                                    if (originalTabindex === "") {
                                        el.removeAttribute("tabindex")
                                    } else {
                                        el.setAttribute("tabindex", originalTabindex)
                                    }
                                    el.removeAttribute("data-original-tabindex")
                                }
                            })
                        }
                        break
                    case "lightContrast":
                        document.body.classList.toggle("everyone-light-contrast", toggle.checked)
                        if (toggle.checked) {
                            // Remove conflicting modes
                            document.body.classList.remove("everyone-dark-contrast", "everyone-high-contrast")
                            elements.shadow.querySelector('input[data-action="darkContrast"]').checked = false
                            elements.shadow.querySelector('input[data-action="highContrast"]').checked = false
                        }
                        break
                    case "highContrast":
                        document.body.classList.toggle("everyone-high-contrast", toggle.checked)
                        if (toggle.checked) {
                            // Remove conflicting modes
                            document.body.classList.remove("everyone-dark-contrast", "everyone-light-contrast")
                            elements.shadow.querySelector('input[data-action="darkContrast"]').checked = false
                            elements.shadow.querySelector('input[data-action="lightContrast"]').checked = false
                        }
                        break
                    case "highSaturation":
                        document.body.classList.toggle("everyone-high-saturation", toggle.checked)
                        if (toggle.checked) {
                            // Remove conflicting modes
                            document.body.classList.remove("everyone-monochrome", "everyone-low-saturation")
                            elements.shadow.querySelector('input[data-action="monochrome"]').checked = false
                            elements.shadow.querySelector('input[data-action="lowSaturation"]').checked = false
                        }
                        break
                    case "monochrome":
                        document.body.classList.toggle("everyone-monochrome", toggle.checked)
                        if (toggle.checked) {
                            // Remove conflicting modes
                            document.body.classList.remove("everyone-high-saturation", "everyone-low-saturation")
                            elements.shadow.querySelector('input[data-action="highSaturation"]').checked = false
                            elements.shadow.querySelector('input[data-action="lowSaturation"]').checked = false
                        }
                        break
                    case "lowSaturation":
                        document.body.classList.toggle("everyone-low-saturation", toggle.checked)
                        if (toggle.checked) {
                            // Remove conflicting modes
                            document.body.classList.remove("everyone-high-saturation", "everyone-monochrome")
                            elements.shadow.querySelector('input[data-action="highSaturation"]').checked = false
                            elements.shadow.querySelector('input[data-action="monochrome"]').checked = false
                        }
                        break

                    // Orientation
                    case "muteSounds":
                        document.body.classList.toggle("everyone-mute-sounds", toggle.checked)
                        if (toggle.checked) {
                            muteAllMedia()
                        }
                        break
                    case "hideImages":
                        document.body.classList.toggle("everyone-hide-images", toggle.checked)
                        break
                    case "stopAnimations":
                        document.body.classList.toggle("everyone-stop-animations", toggle.checked)
                        break
                    case "highlightFocus":
                        document.body.classList.toggle("everyone-highlight-focus", toggle.checked)
                        break
                }

                // Add this line to save preferences automatically when a toggle is changed
                savePreferences(elements.saveIndicator)
            })
        })

        // Handle buttons
        const buttons = elements.shadow.querySelectorAll(".everyone-button")
        buttons.forEach((btn) => {
            btn.addEventListener("click", () => {
                const action = btn.getAttribute("data-action")

                // Handle text alignment
                if (action === "text-align-left" || action === "text-align-center" || action === "text-align-right") {
                    // Remove all alignment classes
                    document.body.classList.remove(
                        "everyone-text-align-left",
                        "everyone-text-align-center",
                        "everyone-text-align-right",
                    )

                    // Remove active state from all alignment buttons
                    elements.shadow.querySelectorAll('[data-action^="text-align-"]').forEach((b) => {
                        b.classList.remove("active")
                    })

                    // Add the selected alignment class
                    if (action === "text-align-left") {
                        document.body.classList.add("everyone-text-align-left")
                    } else if (action === "text-align-center") {
                        document.body.classList.add("everyone-text-align-center")
                    } else if (action === "text-align-right") {
                        document.body.classList.add("everyone-text-align-right")
                    }

                    // Add active state to the clicked button
                    btn.classList.add("active")

                    // Add this line to save preferences automatically when alignment is changed
                    savePreferences(elements.saveIndicator)
                }
            })
        })

        // Handle value controls
        const valueControls = elements.shadow.querySelectorAll(".everyone-value-control")
        valueControls.forEach((control) => {
            const display = control.querySelector(".everyone-value-display")
            const decreaseBtn = control.querySelector('[data-action$="-decrease"]')
            const increaseBtn = control.querySelector('[data-action$="-increase"]')

            if (!display || !decreaseBtn || !increaseBtn) return

            const min = Number.parseInt(display.getAttribute("data-min") || "0")
            const max = Number.parseInt(display.getAttribute("data-max") || "5")

            decreaseBtn.addEventListener("click", () => {
                let value = Number.parseInt(display.getAttribute("data-value") || "0")
                if (value > min) {
                    value--
                    display.setAttribute("data-value", value)
                    display.textContent = value

                    // Apply the value
                    const action = decreaseBtn.getAttribute("data-action").replace("-decrease", "")
                    applyValueChange(action, value)

                    // Add this line to save preferences automatically when a value is decreased
                    savePreferences(elements.saveIndicator)
                }
            })

            increaseBtn.addEventListener("click", () => {
                let value = Number.parseInt(display.getAttribute("data-value") || "0")
                if (value < max) {
                    value++
                    display.setAttribute("data-value", value)
                    display.textContent = value

                    // Apply the value
                    const action = increaseBtn.getAttribute("data-action").replace("-increase", "")
                    applyValueChange(action, value)

                    // Add this line to save preferences automatically when a value is increased
                    savePreferences(elements.saveIndicator)
                }
            })
        })

        // Handle color options
        const colorOptions = elements.shadow.querySelectorAll(".everyone-color-option")
        colorOptions.forEach((option) => {
            option.addEventListener("click", () => {
                const color = option.getAttribute("data-color")
                const target = option.getAttribute("data-target")

                if (!color || !target) return

                // Remove active state from all color options with the same target
                elements.shadow.querySelectorAll(`.everyone-color-option[data-target="${target}"]`).forEach((opt) => {
                    opt.classList.remove("active")
                })

                // Add active state to the clicked option
                option.classList.add("active")

                // Apply the color
                applyColorChange(target, color)

                // Add this line to save preferences automatically when a color option is selected
                savePreferences(elements.saveIndicator)
            })
        })

        // Handle color pickers
        const colorPickers = elements.shadow.querySelectorAll(".everyone-color-picker input")
        colorPickers.forEach((picker) => {
            picker.addEventListener("input", () => {
                const color = picker.value
                const target = picker.getAttribute("data-target")

                if (!color || !target) return

                // Remove active state from all color options with the same target
                elements.shadow.querySelectorAll(`.everyone-color-option[data-target="${target}"]`).forEach((opt) => {
                    opt.classList.remove("active")
                })

                // Apply the color
                applyColorChange(target, color)

                // Add this line to save preferences automatically when a color picker is used
                savePreferences(elements.saveIndicator)
            })
        })

        // Handle reset button
        elements.resetButton.addEventListener("click", () => {
            if (confirm(t("resetConfirm"))) {
                resetAllSettings(elements)
            }
        })

        // Handle save button
        elements.saveButton.addEventListener("click", () => {
            savePreferences(elements.saveIndicator)
        })

        // Handle keyboard navigation
        document.addEventListener("keydown", (e) => {
            if (e.key === "Escape") {
                if (elements.panel.classList.contains("active")) {
                    elements.panel.classList.remove("active")
                    elements.overlay.classList.remove("active")
                    elements.button.setAttribute("aria-expanded", "false")
                }

                if (elements.languageDropdown.classList.contains("active")) {
                    elements.languageDropdown.classList.remove("active")
                    elements.languageButton.setAttribute("aria-expanded", "false")
                }
            }
        })

        // Announce to screen readers when widget is loaded
        const announcement = document.createElement("div")
        announcement.setAttribute("role", "status")
        announcement.setAttribute("aria-live", "polite")
        announcement.className = "sr-only"
        announcement.textContent =
            "Accessibility widget loaded. Press the button at the bottom left of the screen to open accessibility options."
        document.body.appendChild(announcement)

        // Remove announcement after it's been read
        setTimeout(() => {
            announcement.remove()
        }, 3000)
    }

    // Initialize when DOM is fully loaded
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init)
    } else {
        init()
    }

    // Replace the existing handleADHDProfile function with this updated version
    const handleADHDProfile = (enable) => {
        if (enable) {
            // Store all videos that were playing
            window.everyoneJSHandlers = window.everyoneJSHandlers || {}
            window.everyoneJSHandlers.adhdProfile = {
                playingVideos: [],
                originalIframeSources: new Map(),
            }

            // Stop all HTML5 videos
            const videos = document.querySelectorAll("video")
            videos.forEach((video) => {
                if (!video.paused) {
                    window.everyoneJSHandlers.adhdProfile.playingVideos.push(video)
                    video.pause()
                }
                // Prevent autoplay
                video.setAttribute("autoplay", "false")
                video.removeAttribute("autoplay")
                video.setAttribute("data-autoplay-disabled", "true")
            })

            // Handle YouTube, Vimeo iframes
            const videoIframes = document.querySelectorAll('iframe[src*="youtube.com"], iframe[src*="vimeo.com"]')
            videoIframes.forEach((iframe) => {
                const originalSrc = iframe.src
                window.everyoneJSHandlers.adhdProfile.originalIframeSources.set(iframe, originalSrc)

                // Modify URL to disable autoplay
                let newSrc = originalSrc
                if (originalSrc.includes("autoplay=1")) {
                    newSrc = originalSrc.replace("autoplay=1", "autoplay=0")
                } else if (originalSrc.includes("?")) {
                    newSrc = newSrc + "&autoplay=0"
                } else {
                    newSrc = originalSrc + "?autoplay=0"
                }

                // For YouTube, add additional parameters
                if (originalSrc.includes("youtube.com")) {
                    if (newSrc.includes("?")) {
                        newSrc = newSrc + "&controls=1&disablekb=1&fs=1&iv_load_policy=3&rel=0"
                    } else {
                        newSrc = newSrc + "?controls=1&disablekb=1&fs=1&iv_load_policy=3&rel=0"
                    }
                }

                iframe.src = newSrc
            })

            // Stop common carousels/sliders
            const carouselElements = [
                // Common carousel class selectors
                ".carousel",
                ".slider",
                ".slideshow",
                ".banner",
                ".swiper-container",
                // Specific libraries
                ".owl-carousel",
                ".slick-slider",
                ".flexslider",
                ".bxslider",
                // IDs
                "#carousel",
                "#slider",
                "#slideshow",
                "#banner",
            ]

            try {
                // Attempt to stop common jQuery carousels
                if (window.jQuery) {
                    carouselElements.forEach((selector) => {
                        try {
                            const $element = window.jQuery(selector)
                            if ($element.length) {
                                // Try common carousel plugin methods
                                if (typeof $element.slick === "function") $element.slick("pause")
                                if (typeof $element.owlCarousel === "function") $element.trigger("stop.owl.autoplay")
                                if (typeof $element.carousel === "function") $element.carousel("pause")
                                if (typeof $element.trigger === "function") {
                                    $element.trigger("pause")
                                    $element.trigger("stop")
                                }
                            }
                        } catch (e) {
                            console.log("ADHD profile: Error stopping carousel:", e)
                        }
                    })
                }

                // Try to stop common vanilla JS libraries
                if (window.Swiper) {
                    document.querySelectorAll(".swiper-container").forEach((container) => {
                        const swiperInstance = container.swiper
                        if (swiperInstance && typeof swiperInstance.autoplay?.stop === "function") {
                            swiperInstance.autoplay.stop()
                        }
                    })
                }
            } catch (e) {
                console.log("ADHD profile: Error stopping carousel libraries:", e)
            }

            // Enable Reading Mask for ADHD profile
            document.body.classList.add("everyone-reading-mask")

            // Find and check the Reading Mask checkbox in the UI
            const readingMaskCheckbox = document.querySelector('input[data-action="readingMask"]')
            if (readingMaskCheckbox) {
                readingMaskCheckbox.checked = true
            }

            // Initialize the Reading Mask
            initReadingMask()
            console.log("Reading Mask enabled for ADHD profile")
        } else {
            // Restore videos
            if (window.everyoneJSHandlers && window.everyoneJSHandlers.adhdProfile) {
                // Resume previously playing videos
                window.everyoneJSHandlers.adhdProfile.playingVideos.forEach((video) => {
                    try {
                        video.play()
                    } catch (e) {
                        console.log("Error resuming video:", e)
                    }
                })

                // Restore iframe sources
                window.everyoneJSHandlers.adhdProfile.originalIframeSources.forEach((originalSrc, iframe) => {
                    iframe.src = originalSrc
                })
            }

            // Disable Reading Mask when ADHD profile is turned off
            // document.body.classList.remove("everyone-reading-mask")

            // Find and uncheck the Reading Mask checkbox in the UI
            const readingMaskCheckbox = document.querySelector('input[data-action="readingMask"]')
            if (readingMaskCheckbox) {
                readingMaskCheckbox.checked = false
            }

            // Hide the Reading Mask
            const mask = document.getElementById("everyone-reading-mask")
            if (mask) {
                mask.style.display = "none"
            }

            // Remove the event listener for the Reading Mask
            if (window.everyoneJSHandlers && window.everyoneJSHandlers.readingMask) {
                document.removeEventListener("mousemove", window.everyoneJSHandlers.readingMask)
            }

            console.log("Reading Mask disabled with ADHD profile")
        }
    }
})()
