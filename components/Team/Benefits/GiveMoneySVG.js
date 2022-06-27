import React from 'react'

const GiveMoneySVG = () => {
    const data = 
    `
    <title property="dc:title">Give money</title>
    <metadata id="license"
        xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
        xmlns:dc="http://purl.org/dc/elements/1.1/"
        xmlns:cc="http://creativecommons.org/ns#">
        <rdf:RDF>
        <cc:Work rdf:about="">
            <dc:creator>Enma Lidia Muñoz García</dc:creator>
            <dc:contributor>Datwit</dc:contributor>
            <dc:format>image/svg+xml</dc:format>
            <dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage" />
            <cc:license rdf:resource="https://creativecommons.org/licenses/by-nc-sa/4.0/"/>
        </cc:Work>
        <cc:License rdf:about="https://creativecommons.org/licenses/by-nc-sa/4.0/">
            <cc:permits rdf:resource="http://creativecommons.org/ns#Reproduction" />
            <cc:permits rdf:resource="http://creativecommons.org/ns#Distribution" />
            <cc:requires rdf:resource="http://creativecommons.org/ns#Notice" />
            <cc:requires rdf:resource="http://creativecommons.org/ns#Attribution" />
            <cc:permits rdf:resource="http://creativecommons.org/ns#DerivativeWorks" />
            <cc:requires rdf:resource="http://creativecommons.org/ns#ShareAlike" />
        </cc:License>
        </rdf:RDF>
    </metadata>
    `;
    
    return (
        <svg className="sizing"  viewBox="0 0 84 84" fill="none" xmlns="http://www.w3.org/2000/svg">
            
            <span dangerouslySetInnerHTML={{__html: data}} />

            <g id="3 1Recurso 1 1" clipPath="url(#clip0)">
            <path id="Vector" d="M83.62 0H0V83.68H83.62V0Z" fill="white"/>
            <path id="Vector_2" fillRule="evenodd" clipRule="evenodd" d="M29.82 2C29.74 5.79 29 8.81 29.05 13C26.31 15.79 25.43 19.83 25.05 22.91L25.58 73.35H26.39C27.05 75 28 76 29.28 76C30.44 76 31.46 75 32.08 73.39H33.24C33.72 75.93 35.36 77.79 37.05 77.77C38.73 77.77 40.17 75.98 40.81 73.45H41.2V73.82C41.2 78.55 43.15 82.39 45.51 82.37C47.87 82.37 49.79 78.46 49.78 73.74V73.52L50.22 66.9C50.82 70.05 54.96 78.9 56.59 78.83C58.14 78.72 59.36 76.54 59.72 73.6H60.15L60.39 41.46L65.07 51.71C66.07 53.96 67.91 54.88 70.07 54L71.73 53.33C73.92 52.45 73.38 48 72.16 45.86L59.89 24.3C59.5258 23.6879 59.0221 23.1705 58.42 22.79C57.0874 19.5543 54.9869 16.6919 52.3 14.45L53 4.09L38 2.71L29.82 2Z" fill="#F7B698"/>
            <path id="Vector_3" d="M25.08 38.73V35.12L25 31.19L24.92 24.4C25.27 21.32 25.92 15.85 28.63 13.06C28.72 11.06 28.85 10.35 29 8.5M29.5 5C29.5 5 29.9682 2.47 30 2M52.51 4.17L51.83 14.51C51.83 14.51 56.5992 19.5663 58.33 22.58M64.86 33.37L72.8 48C73.8 49.84 73.46 52.66 71.27 53.69C70.1914 54.2272 68.9476 54.3296 67.7956 53.976C66.6437 53.6224 65.6715 52.8398 65.08 51.79L59.49 41.4L59.27 70.86C59.27 74.43 58.46 77.51 56.84 78.5C56.3493 78.693 55.8098 78.7245 55.3 78.59C51.43 76.67 49.2 54.59 49.22 58.87L49.32 73.71C49.32 78.42 47.41 82.32 45.06 82.32C42.7 82.32 40.77 78.5 40.75 73.79V59.04M32.25 59.63V69.94C32.25 70.59 33.4 75.94 28.86 75.94C26.98 75.94 25.44 73.27 25.43 69.94C25.43 67.47 25.3 57.45 25.3 57.45M40.72 70.45C40.72 74.45 38.89 77.71 36.62 77.73C34.35 77.73 32.22 74.59 32.22 70.73" stroke="#3F4042" strokeWidth="2.45" strokeMiterlimit="16.38" strokeLinecap="round"/>
            <path id="Vector_4" fillRule="evenodd" clipRule="evenodd" d="M57.81 19.9L15.32 37.68L22.8 60.15L65.3 42.38L57.81 19.9Z" fill="#D1D2D9" stroke="#3F4042" strokeWidth="1.73" strokeLinecap="round" strokeLinejoin="round"/>
            <path id="Vector_5" fillRule="evenodd" clipRule="evenodd" d="M60.49 35.87L58.09 28.68C57.4719 28.9244 56.8093 29.036 56.1453 29.0077C55.4812 28.9794 54.8306 28.8117 54.2355 28.5156C53.6405 28.2195 53.1144 27.8016 52.6913 27.2889C52.2683 26.7763 51.9578 26.1804 51.78 25.54L23.78 37.27C24.2025 37.7782 24.4958 38.3809 24.6351 39.0269C24.7744 39.6728 24.7555 40.3429 24.58 40.98C24.4807 41.4447 24.2882 41.8843 24.0139 42.2724C23.7397 42.6604 23.3896 42.9887 22.9847 43.2374C22.5799 43.4861 22.1287 43.65 21.6587 43.7192C21.1886 43.7884 20.7094 43.7615 20.25 43.64L20 43.56L22.88 52.21C23.264 51.5787 23.8453 51.0916 24.5341 50.824C25.2228 50.5565 25.9806 50.5234 26.69 50.73C27.4958 51.0166 28.1802 51.5686 28.6308 52.2955C29.0815 53.0223 29.2716 53.8808 29.17 54.73L57.55 42.87C57.0855 41.5463 57.129 40.0973 57.6722 38.8039C58.2154 37.5106 59.2196 36.465 60.49 35.87V35.87Z" stroke="#6B6969" strokeWidth="1.71" strokeLinecap="round" strokeLinejoin="round"/>
            <path id="Vector_6" fillRule="evenodd" clipRule="evenodd" d="M18.64 39.4L24.41 56.73L62.21 40.92L56.44 23.6L18.64 39.4Z" stroke="#3F4042" strokeWidth="1.84" strokeLinecap="round" strokeLinejoin="round"/>
            <path id="Vector_7" fillRule="evenodd" clipRule="evenodd" d="M45.17 41.83C45.6525 40.453 45.5934 38.9441 45.0048 37.609C44.4162 36.274 43.342 35.2126 42 34.64C41.3334 34.4207 40.6289 34.3405 39.93 34.4044C39.2312 34.4683 38.5529 34.6748 37.9371 35.0113C37.3213 35.3478 36.781 35.8071 36.3498 36.3607C35.9186 36.9143 35.6055 37.5506 35.43 38.23C34.9523 39.6046 35.0126 41.1091 35.5988 42.4411C36.185 43.773 37.2537 44.8338 38.59 45.41C39.2565 45.6326 39.9617 45.7155 40.6616 45.6538C41.3616 45.592 42.0413 45.3869 42.6586 45.051C43.2758 44.7152 43.8173 44.2559 44.2494 43.7018C44.6815 43.1476 44.9948 42.5105 45.17 41.83Z" fill="#D1D2D9" stroke="#6B6969" strokeWidth="1.71" strokeLinecap="round" strokeLinejoin="round"/>
            <path id="Vector_8" fillRule="evenodd" clipRule="evenodd" d="M63.66 22.14L20.72 37.76L27.56 60.62L70.49 45L63.66 22.14Z" fill="#D1D2D9" stroke="#3F4042" strokeWidth="1.72" strokeLinecap="round" strokeLinejoin="round"/>
            <path id="Vector_9" fillRule="evenodd" clipRule="evenodd" d="M65.88 38.24L63.69 30.94C63.0555 31.1493 62.3845 31.2247 61.7194 31.1615C61.0543 31.0982 60.4095 30.8977 59.8259 30.5725C59.2422 30.2473 58.7324 29.8046 58.3286 29.2723C57.9248 28.74 57.6359 28.1297 57.48 27.48L29.15 37.78C29.5556 38.3048 29.8299 38.919 29.9499 39.5713C30.07 40.2236 30.0323 40.8952 29.84 41.53C29.7306 41.9914 29.5268 42.425 29.2413 42.8036C28.9559 43.1823 28.595 43.4976 28.1815 43.7297C27.7681 43.9618 27.311 44.1056 26.8391 44.1522C26.3672 44.1987 25.8908 44.1469 25.44 44L25.23 43.91L27.86 52.71C28.2661 52.0966 28.8656 51.6365 29.5631 51.4028C30.2607 51.1691 31.0163 51.1751 31.71 51.42C32.507 51.7495 33.1711 52.3359 33.5969 53.0859C34.0226 53.836 34.1856 54.7067 34.06 55.56L62.74 45.09C62.3126 43.7624 62.3979 42.3228 62.9791 41.0549C63.5603 39.787 64.5952 38.7828 65.88 38.24Z" stroke="#6B6969" strokeWidth="1.72" strokeLinecap="round" strokeLinejoin="round"/>
            <path id="Vector_10" fillRule="evenodd" clipRule="evenodd" d="M23.99 39.66L29.26 57.28L67.45 43.39L62.18 25.77L23.99 39.66Z" stroke="#3F4042" strokeWidth="1.86" strokeLinecap="round" strokeLinejoin="round"/>
            <path id="Vector_11" fillRule="evenodd" clipRule="evenodd" d="M50.41 43.42C50.9241 42.0492 50.9064 40.5356 50.3604 39.1771C49.8144 37.8187 48.7797 36.7138 47.46 36.08C46.8119 35.8206 46.1166 35.6999 45.419 35.7254C44.7214 35.751 44.0369 35.9224 43.4095 36.2286C42.7821 36.5347 42.2258 36.9688 41.7764 37.503C41.327 38.0372 40.9944 38.6595 40.8 39.33C40.2937 40.7086 40.3207 42.2266 40.8757 43.5864C41.4307 44.9461 42.4736 46.0494 43.8 46.68C44.446 46.9309 45.1371 47.0448 45.8295 47.0144C46.5218 46.984 47.2003 46.81 47.8218 46.5035C48.4434 46.1969 48.9944 45.7645 49.44 45.2337C49.8855 44.7029 50.2158 44.0853 50.41 43.42Z" fill="#D1D2D9" stroke="#6B6969" strokeWidth="1.72" strokeLinecap="round" strokeLinejoin="round"/>
            <g id="bill">
            <path id="Vector_12" fillRule="evenodd" clipRule="evenodd" d="M68.03 28.04L22.82 28.94L23.21 53L68.42 52.11L68.03 28.04Z" fill="#D1D2D9" stroke="#3F4042" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
            <path id="Vector_13" fillRule="evenodd" clipRule="evenodd" d="M65.82 44.15L65.69 36.45C65.0114 36.4293 64.3436 36.2749 63.7247 35.9957C63.1059 35.7165 62.5483 35.3178 62.0838 34.8227C61.6193 34.3276 61.2571 33.7456 61.0179 33.1102C60.7788 32.4749 60.6673 31.7985 60.69 31.12L30.86 31.71C31.1098 32.3248 31.2092 32.9903 31.1501 33.6512C31.0909 34.3121 30.8749 34.9493 30.52 35.51C30.2815 35.913 29.9595 36.2602 29.5757 36.5283C29.1918 36.7965 28.755 36.9793 28.2946 37.0646C27.8341 37.1499 27.3608 37.1356 26.9064 37.0226C26.452 36.9097 26.027 36.7008 25.66 36.41L25.48 36.26L25.63 45.52C26.1991 45.069 26.9039 44.8236 27.63 44.8236C28.3561 44.8236 29.0609 45.069 29.63 45.52C30.3018 46.0821 30.776 46.8447 30.9829 47.6959C31.1899 48.5471 31.1188 49.4422 30.78 50.25L61 49.67C60.9147 48.3006 61.373 46.9528 62.2755 45.9194C63.1779 44.8859 64.4516 44.2501 65.82 44.15V44.15Z" stroke="#6B6969" strokeWidth="1.76" strokeLinecap="round" strokeLinejoin="round"/>
            <path id="Vector_14" fillRule="evenodd" clipRule="evenodd" d="M25.44 31.82L25.74 50.37L65.94 49.57L65.64 31.02L25.44 31.82Z" stroke="#3F4042" strokeWidth="1.87" strokeLinecap="round" strokeLinejoin="round"/>
            <path id="Vector_15" fillRule="evenodd" clipRule="evenodd" d="M49.66 44.05C50.5151 42.8411 50.9005 41.3621 50.744 39.8897C50.5876 38.4172 49.9 37.0522 48.81 36.05C48.2931 35.5912 47.6838 35.2486 47.0232 35.0455C46.3626 34.8423 45.6662 34.7833 44.9808 34.8724C44.2954 34.9615 43.6372 35.1967 43.0505 35.562C42.4638 35.9273 41.9624 36.4143 41.58 36.99C40.7228 38.1981 40.3361 39.6776 40.4927 41.1507C40.6492 42.6237 41.3381 43.989 42.43 44.99C42.9469 45.4488 43.5562 45.7914 44.2168 45.9945C44.8774 46.1977 45.5739 46.2567 46.2592 46.1676C46.9446 46.0785 47.6028 45.8433 48.1895 45.478C48.7762 45.1127 49.2776 44.6257 49.66 44.05V44.05Z" fill="#D1D2D9" stroke="#6B6969" strokeWidth="1.77" strokeLinecap="round" strokeLinejoin="round"/>
            </g>
            <path id="Vector_16" fillRule="evenodd" clipRule="evenodd" d="M16.66 8.63C16.6501 7.78965 16.3919 6.97099 15.9179 6.27705C15.4438 5.5831 14.7751 5.04488 13.9959 4.7301C13.2167 4.41533 12.3617 4.33807 11.5387 4.50804C10.7156 4.67802 9.96127 5.08764 9.37049 5.68535C8.77971 6.28306 8.37892 7.04217 8.21856 7.86713C8.0582 8.6921 8.14543 9.54607 8.46928 10.3216C8.79313 11.0971 9.33912 11.7595 10.0385 12.2254C10.738 12.6913 11.5596 12.9399 12.4 12.94C13.5352 12.9294 14.6202 12.4704 15.4183 11.663C16.2163 10.8555 16.6627 9.76527 16.66 8.63V8.63Z" stroke="#30B3E7" strokeWidth="4.12" strokeMiterlimit="22.93"/>
            <path id="Vector_17" fillRule="evenodd" clipRule="evenodd" d="M9.63 20.63C9.62408 20.1408 9.47362 19.6643 9.19754 19.2605C8.92146 18.8566 8.5321 18.5434 8.07845 18.3603C7.6248 18.1772 7.12713 18.1323 6.64805 18.2314C6.16897 18.3304 5.72989 18.569 5.38605 18.917C5.04221 19.2649 4.80897 19.7069 4.71569 20.1871C4.6224 20.6673 4.67323 21.1644 4.86179 21.6159C5.05034 22.0673 5.3682 22.4528 5.77536 22.724C6.18251 22.9952 6.66079 23.14 7.15 23.14C7.81131 23.1347 8.44358 22.8676 8.90838 22.3972C9.37319 21.9268 9.63267 21.2913 9.63 20.63V20.63Z" stroke="#E59A24" strokeWidth="2.83" strokeMiterlimit="22.93"/>
            <path id="Vector_18" fillRule="evenodd" clipRule="evenodd" d="M72.4 65.63C72.3961 65.2076 72.2672 64.7959 72.0297 64.4466C71.7921 64.0973 71.4565 63.8261 71.0652 63.6672C70.6738 63.5083 70.2442 63.4688 69.8304 63.5536C69.4166 63.6384 69.0371 63.8438 68.7399 64.1438C68.4426 64.4439 68.2407 64.8252 68.1598 65.2398C68.0788 65.6544 68.1223 66.0836 68.2849 66.4735C68.4474 66.8634 68.7217 67.1964 69.0732 67.4307C69.4247 67.665 69.8376 67.79 70.26 67.79C70.8294 67.7847 71.3737 67.5548 71.7744 67.1503C72.1752 66.7458 72.4 66.1994 72.4 65.63V65.63Z" fill="#B2B4B5"/>
            </g>
            <defs>
            <clipPath id="clip0">
            <rect width="83.62" height="83.68" fill="white"/>
            </clipPath>
            </defs>
        </svg>
    )
}

export { GiveMoneySVG } 
