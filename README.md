Dockerize
1.docker build -t nextjs-docker .  
2.docker run -p 3000:3000 nextjs-docker

Base
1. Change in tsconfig baseUrl "app"
2. add .prettierrc file
3. add to prettiercc this code
{
    "trailingComma": "none",
    "tabWidth": 2,
    "useTabs": true,
    "semi": false,
    "singleQuote": true,
    "jsxSingleQuote": true,
    "arrowParens": "avoid"
}
4. npm install --save-dev prettier @trivago/prettier-plugin-sort-imports prettier-plugin-tailwindcss
5. edit the prettier
{
    "trailingComma": "none",
    "tabWidth": 2,
    "useTabs": true,
    "semi": false,
    "singleQuote": true,
    "jsxSingleQuote": true,
    "arrowParens": "avoid",
    "importOrder": [
        "<THIRD_PARY_MODULES>",
        "^@/components/(.*)$",
        "^@/layout/(.*)$",
        "^@/ui/(.*)$",
        "^@/providers/(.*)$",
        "^@/shared/(.*)$",
        "^@/assets/(.*)$",
        "^@/config/(.*)$",
        "^@/store/(.*)$",
        "^@/hooks/(.*)$",
        "^@/types/(.*)$",
        "^@/utils/(.*)$",
        "^@/api/(.*)$",
        "^../(.*)",
        "^./(.*)"
    ],
    "importOrderSeparation": true,
    "importOrderSortSpecifiers": true
}

6. edit the tsconfig add paths:
    "paths": {
      "@/layout/*": [
        "components/layout/*"
      ],
      "@/ui/*" : [
        "components/ui/*"
      ],
      "@/screens/*": [
        "components/screens/*"
      ],
      "@/*": ["./*"]
    }
  }

7. edit he tailwind config as wish
8. add .env and server_url enum
9. add to next.config this data
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    SERVER_URL: process.env.SERVER_URL
  }
}

module.exports = nextConfig

10. npm install axios
11. npm install clsx
12. npm install react-icons
13. npm install sass
14. npm install @types/js-cookie --save-dev
15. npm install react-redux redux-persist @reduxjs/toolkit
16. npm i @tanstack/react-query
17. npm install react-hook-form
18. npm i react-switch
19. npm i react-beautiful-dnd
20. npm i --save-dev @types/react-beautiful-dnd
21. npm install sweetalert2
22.npm i react-loader-spinner