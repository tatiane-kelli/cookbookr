import React from 'react';
import {
  HeaderContainer,
  HeaderLogo
} from './styles';

function Header() {
  return (
    <HeaderContainer>
      <HeaderLogo href="/">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="73.92px"
          height="80px"
          viewBox="0 0 311 336"
          preserveAspectRatio="xMidYMid meet"
        >
          <g transform="translate(0,336) scale(0.1,-0.1)" fill="#000" stroke="none">
            <path d="M1982 3345c-56-24-91-55-112-96-40-77-36-164 11-231 11-14 19-38 19-53 0-15-40-153-90-305-49-152-90-282-90-289 0-8 53-11 185-11 102 0 185 3 185 8 0 4 9 122 20 262 11 140 20 263 20 274 0 10 23 39 51 65 28 25 60 63 70 83 24 48 24 130 0 184-44 98-174 150-269 109z" />
            <path d="M1185 3131c-22-10-47-26-55-36-12-14-8-14 20 4 19 11 43 21 52 21 16 0 16-3-2-33-13-23-22-63-28-135-4-57-6-105-4-107 5-5 159 62 199 86l32 20 7-47c17-118-21-244-85-276-19-10-36-16-37-15-2 1 16 39 38 83 34 69 38 85 29 103-15 27-48 27-78-1-21-20-24-20-41-5-24 22-45 21-67-3-23-26-15-54 35-114 22-26 40-52 40-57 0-5-33-6-72-3-86 6-115-5-140-56-31-60-24-136 19-219 20-39 38-70 40-68 2 2-11 35-29 73-42 90-45 169-8 209 24 25 25 25 139 19 141-7 163 3 207 93 27 54 29 67 31 188 1 72 4 139 7 150 8 26-7 48-32 50-11 0-33 16-48 34-28 34-78 61-111 61-10 0-36-9-58-19z m115-47c7-18 6-33-6-55-20-40-12-47 22-20 35 27 41 27 59-8 14-29 14-30-13-49-36-26-59-37-122-62l-52-21 4 88c5 110 25 153 69 153 22 0 32-6 39-26z m44-29c3-9 0-15-9-15-8 0-15 7-15 15 0 8 4 15 9 15 5 0 11-7 15-15z m73-30c8-22-6-33-17-15-13 20-12 30 0 30 6 0 13-7 17-15z m-83-232c8-19-57-163-74-163-5 0-10 3-10 8 0 4-18 29-40 56-45 54-50 89-13 94 16 2 26-5 38-29l17-31 14 28c14 28 41 54 55 54 4 0 10-7 13-17z" />
            <path d="M1017 2989c-21-12-47-61-47-89 0-21-14-27-25-10-9 15-68 12-93-6-25-17-29-56-9-90 7-12 47-59 90-105 92-99 91-99 136 45 40 124 47 177 31 216-18 44-49 59-83 39z m59-34c22-34 15-94-26-223l-33-104-64 64c-105 103-127 158-75 184 31 16 62 6 72-21 15-39 30-39 30-1 0 59 35 126 66 126 8 0 21-11 30-25z" />
            <path d="M809 2793c6-12 11-29 11-37 0-24-58-84-119-123-135-86-181-143-181-228 0-49 20-107 48-139 9-10 40-29 67-42l50-24-148 0-148 0 4-357c3-329 5-364 25-434 115-407 423-697 830-785 45-9 85-15 88-12 3 3-11 28-30 56-79 109-119 240-119 387 0 175 60 334 174 459 136 148 307 225 502 226 206 0 377-75 516-226 90-99 171-276 171-376 0-15 4-28 8-28 12 0 86 151 110 225 48 143 55 212 56 545l1 315-860 5c-778 5-864 7-900 22-30 13-70 17-156 18-103 0-120 3-166 26-40 19-57 35-72 68-47 96-12 166 137 273 69 49 122 113 122 148 0 11-7 30-16 41-15 18-15 18-5-3z" />
            <path d="M1680 1677c-212-64-370-215-443-426-27-75-31-99-31-196 0-74 6-131 18-175 49-180 175-334 339-415 201-99 399-100 596-3 47 24 89 44 93 46 3 2 83-100 178-225 183-242 210-273 241-273 26 0 59 35 59 64 0 16-66 111-190 275l-190 251 36 46c83 110 124 223 131 366 7 126-10 214-62 319-85 176-251 310-436 354-96 22-248 19-339-8z m56-103c-175-42-327-192-383-376-22-72-21-208 1-283 35-116 99-213 186-279l51-39 109 7c196 12 379 72 537 176 147 97 162 123 163 274 0 83-19 174-51 240-13 26-14 34-4 22 42-54 81-224 70-311-18-141-71-254-164-345-112-111-233-160-394-160-483 0-727 588-387 930 85 86 224 159 300 158 14 0-1-6-34-14z m559-184c10-11 16-20 13-20-3 0-13 9-23 20-10 11-16 20-13 20 2 0 12-9 23-20z" />
          </g>
        </svg>
        <h1>Cookbookr</h1>
      </HeaderLogo>
    </HeaderContainer>
  )
}

export default Header;