if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise((async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},s=(s,a)=>{Promise.all(s.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(s)};self.define=(s,i,c)=>{a[s]||(a[s]=Promise.resolve().then((()=>{let a={};const r={uri:location.origin+s.slice(1)};return Promise.all(i.map((s=>{switch(s){case"exports":return a;case"module":return r;default:return e(s)}}))).then((e=>{const s=c(...e);return a.default||(a.default=s),a}))})))}}define("./sw.js",["./workbox-030153e1"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/8CDjHhj73OX_S6liwtzjI/_buildManifest.js",revision:"8CDjHhj73OX_S6liwtzjI"},{url:"/_next/static/8CDjHhj73OX_S6liwtzjI/_ssgManifest.js",revision:"8CDjHhj73OX_S6liwtzjI"},{url:"/_next/static/chunks/01ce56f8ce1c5d27e76189942ee1b98c9b150809.43010b167106a79869aa.js",revision:"8CDjHhj73OX_S6liwtzjI"},{url:"/_next/static/chunks/0265feb85496f2a37375034cc94530149fde49bb.97c9ee6c07389e1d1f6a.js",revision:"8CDjHhj73OX_S6liwtzjI"},{url:"/_next/static/chunks/2adcea914c69283f1076d983b042ea69cbba9991.1261fc262991e66c3b57.js",revision:"8CDjHhj73OX_S6liwtzjI"},{url:"/_next/static/chunks/335073842e1b430b521cc2b6d08b85466e9debee.886145f329f24cc2b3ea.js",revision:"8CDjHhj73OX_S6liwtzjI"},{url:"/_next/static/chunks/49e5663c7ccc1a8b90ada3c22412f94a860e3638.e9f9db89c757f4f3ad9a.js",revision:"8CDjHhj73OX_S6liwtzjI"},{url:"/_next/static/chunks/50ff7a25.955cd01b185e91c5e5fc.js",revision:"8CDjHhj73OX_S6liwtzjI"},{url:"/_next/static/chunks/65a938e47bc96bbae06947233e5aeb2d5d34ef93.5faa9eeec880c7e42813.js",revision:"8CDjHhj73OX_S6liwtzjI"},{url:"/_next/static/chunks/75fc9c18.1c4adbd2984e23e1808a.js",revision:"8CDjHhj73OX_S6liwtzjI"},{url:"/_next/static/chunks/c92cd2aee6ac1a73d737fcf0ea8db3d6b312b3ed.01b3a589999dcb0e043f.js",revision:"8CDjHhj73OX_S6liwtzjI"},{url:"/_next/static/chunks/ca4c1ef1ed95b44ec06aa66b6affd2c3ab009150.a86b0e07a0555555aeaf.js",revision:"8CDjHhj73OX_S6liwtzjI"},{url:"/_next/static/chunks/commons.b378e515b68bdd08b8b6.js",revision:"8CDjHhj73OX_S6liwtzjI"},{url:"/_next/static/chunks/de1caf2fa0ddf02974d316c5ada5e8b8ff634974.43124e84e3443b48cd1a.js",revision:"8CDjHhj73OX_S6liwtzjI"},{url:"/_next/static/chunks/ec4dd5cb3240a4c06d6f8f4bd9fee35ebc2575ff.d4e28391516406a4b4b6.js",revision:"8CDjHhj73OX_S6liwtzjI"},{url:"/_next/static/chunks/framework.de2efbee652401e3d726.js",revision:"8CDjHhj73OX_S6liwtzjI"},{url:"/_next/static/chunks/main-249b0907cca4e22815d8.js",revision:"8CDjHhj73OX_S6liwtzjI"},{url:"/_next/static/chunks/pages/404-310c48728914b5e83bb9.js",revision:"8CDjHhj73OX_S6liwtzjI"},{url:"/_next/static/chunks/pages/_app-02797d3f0a2cdc415dcd.js",revision:"8CDjHhj73OX_S6liwtzjI"},{url:"/_next/static/chunks/pages/_error-b2e4bf6f3a96eab40072.js",revision:"8CDjHhj73OX_S6liwtzjI"},{url:"/_next/static/chunks/pages/articles/about-donation-f2140a2d7ffaaec648b2.js",revision:"8CDjHhj73OX_S6liwtzjI"},{url:"/_next/static/chunks/pages/articles/become-volunteer-095a12d58b31a57aa2f3.js",revision:"8CDjHhj73OX_S6liwtzjI"},{url:"/_next/static/chunks/pages/articles/benefits-and-privileges-df4b1a3ffab030af9cb6.js",revision:"8CDjHhj73OX_S6liwtzjI"},{url:"/_next/static/chunks/pages/articles/bonus-program-1b56de83c3f983d0e87f.js",revision:"8CDjHhj73OX_S6liwtzjI"},{url:"/_next/static/chunks/pages/articles/corporate-donation-03d726c7fc56103b4743.js",revision:"8CDjHhj73OX_S6liwtzjI"},{url:"/_next/static/chunks/pages/articles/donor-and-work-ff75139dae67edf0cb4c.js",revision:"8CDjHhj73OX_S6liwtzjI"},{url:"/_next/static/chunks/pages/articles/how-to-prepare-for-donation-25960aa1ba542d38f7bd.js",revision:"8CDjHhj73OX_S6liwtzjI"},{url:"/_next/static/chunks/pages/articles/minimum-requirements-for-donor-e4e887ee4c35a571f65a.js",revision:"8CDjHhj73OX_S6liwtzjI"},{url:"/_next/static/chunks/pages/articles/plasma-donors-a6dd670ae1bc676741ab.js",revision:"8CDjHhj73OX_S6liwtzjI"},{url:"/_next/static/chunks/pages/articles/privacy-policy-1ba01acb2c18412658f3.js",revision:"8CDjHhj73OX_S6liwtzjI"},{url:"/_next/static/chunks/pages/articles/procedural-documents-cb8db96cc46dca1a68f5.js",revision:"8CDjHhj73OX_S6liwtzjI"},{url:"/_next/static/chunks/pages/articles/recovery-from-donation-b17bf99503f2e91cea95.js",revision:"8CDjHhj73OX_S6liwtzjI"},{url:"/_next/static/chunks/pages/articles/support-project-12610b7500296d5237f4.js",revision:"8CDjHhj73OX_S6liwtzjI"},{url:"/_next/static/chunks/pages/articles/user-agreement-3804c1f0facb72e10e6f.js",revision:"8CDjHhj73OX_S6liwtzjI"},{url:"/_next/static/chunks/pages/articles/who-needs-blood-ee4695ee136ee972ce07.js",revision:"8CDjHhj73OX_S6liwtzjI"},{url:"/_next/static/chunks/pages/auth-6aaa34767bc71bee9b2d.js",revision:"8CDjHhj73OX_S6liwtzjI"},{url:"/_next/static/chunks/pages/dashboard-92ce97dc9721fae22dd9.js",revision:"8CDjHhj73OX_S6liwtzjI"},{url:"/_next/static/chunks/pages/dashboard/archive-28dec9f8ce6c2da2bbda.js",revision:"8CDjHhj73OX_S6liwtzjI"},{url:"/_next/static/chunks/pages/dashboard/bonuses-f690942bb1ad75fe4e9e.js",revision:"8CDjHhj73OX_S6liwtzjI"},{url:"/_next/static/chunks/pages/dashboard/details-1b60437cb067ab33d10c.js",revision:"8CDjHhj73OX_S6liwtzjI"},{url:"/_next/static/chunks/pages/dashboard/donations-dd2e622ebec2909a77bd.js",revision:"8CDjHhj73OX_S6liwtzjI"},{url:"/_next/static/chunks/pages/dashboard/logout-2af35194fb2c19ce56c0.js",revision:"8CDjHhj73OX_S6liwtzjI"},{url:"/_next/static/chunks/pages/dashboard/planning-40ee2ec8e576973764d3.js",revision:"8CDjHhj73OX_S6liwtzjI"},{url:"/_next/static/chunks/pages/dashboard/questionnaire-582b3ce935c3a3c27fd0.js",revision:"8CDjHhj73OX_S6liwtzjI"},{url:"/_next/static/chunks/pages/dashboard/recipients-b88a51a728032d88b20e.js",revision:"8CDjHhj73OX_S6liwtzjI"},{url:"/_next/static/chunks/pages/dashboard/reviews-36a68581e49cd8173090.js",revision:"8CDjHhj73OX_S6liwtzjI"},{url:"/_next/static/chunks/pages/dashboard/settings-b17dc3951ed2103c16cd.js",revision:"8CDjHhj73OX_S6liwtzjI"},{url:"/_next/static/chunks/pages/donor-search-384a3dd8a9b8a0d512cf.js",revision:"8CDjHhj73OX_S6liwtzjI"},{url:"/_next/static/chunks/pages/donor-stories-1eef2fa087a90e7b58b4.js",revision:"8CDjHhj73OX_S6liwtzjI"},{url:"/_next/static/chunks/pages/index-6899c7ffc0fb74da9bba.js",revision:"8CDjHhj73OX_S6liwtzjI"},{url:"/_next/static/chunks/pages/monitoring-2ade9786e05281059ace.js",revision:"8CDjHhj73OX_S6liwtzjI"},{url:"/_next/static/chunks/pages/top-donors-e0c7597ee1cd6bffd364.js",revision:"8CDjHhj73OX_S6liwtzjI"},{url:"/_next/static/chunks/polyfills-b1ff853df982321582fb.js",revision:"8CDjHhj73OX_S6liwtzjI"},{url:"/_next/static/chunks/webpack-e067438c4cf4ef2ef178.js",revision:"8CDjHhj73OX_S6liwtzjI"},{url:"/_next/static/css/10c1dda1e4b632660f6d.css",revision:"8CDjHhj73OX_S6liwtzjI"},{url:"/_next/static/css/679831fc89b69737c4c0.css",revision:"8CDjHhj73OX_S6liwtzjI"},{url:"/icons/128x128.png",revision:"0488af03c47d1ad8dde145dda8bbf351"},{url:"/icons/144x144.png",revision:"f55cff57b3c0622dbc7e09798e6f86b7"},{url:"/icons/192x192.png",revision:"a152185562d9bc6c46847691a2b02269"},{url:"/icons/512x512.png",revision:"d5d98b1f531e41e477d68902970cc4ed"},{url:"/icons/72x72.png",revision:"2a2e79688c00ff7bd4e9ad22b3f77a58"},{url:"/icons/96x96.png",revision:"1aafcc6bb12c4c878569bc5daa579e2b"},{url:"/icons/apple-touch-icon.png",revision:"bca102c35fea4acc8ac14e1488fcb7e1"},{url:"/icons/icon.ico",revision:"bbff5910e749ae41dbed45ac5d7e5950"},{url:"/icons/icon.svg",revision:"e2c9e8add988991cba7505f33f7c9ec5"},{url:"/images/Frame.svg",revision:"5995152cb9b0ffc3447bf40a16bf3220"},{url:"/images/arrow-right.svg",revision:"2e62f16e6167e6ad9b6fdd03363a3aa9"},{url:"/images/auth.png",revision:"9f0576a8e3c33ea88c997b4a414e37dd"},{url:"/images/avatars/man.png",revision:"80d0c56f4111b7dab3c39dc3adbe6f84"},{url:"/images/avatars/women.png",revision:"f53293bb1319fb42ff07166d7e4e8816"},{url:"/images/carousel/next.svg",revision:"dc261a7413c279cb25982a9c5ddce902"},{url:"/images/carousel/prev.svg",revision:"907826a5628208aba53bc03a3ed5d0b7"},{url:"/images/clip.svg",revision:"4e1921fbb827bb62ea489ce871789df4"},{url:"/images/eu-flag.png",revision:"21c41f10f5a2ae85f270aefcab6d8e53"},{url:"/images/feedback.svg",revision:"953a7d1cfafdf6d416758838bdd1cd45"},{url:"/images/icons/heart+.svg",revision:"c8e92128751dde7441fba2619ca04685"},{url:"/images/logo/heart.svg",revision:"e2c9e8add988991cba7505f33f7c9ec5"},{url:"/images/pages/404.svg",revision:"1a1f397e26d562c12f23fc9154687955"},{url:"/images/pages/Cool pic.svg",revision:"89ae2da5bf98299e8f47058b8d34ebb0"},{url:"/images/pages/articles/about-donation/Benefits and privileges.svg",revision:"d8ee251cec7a88da499c51d9fddcf708"},{url:"/images/pages/articles/about-donation/Donor and work.svg",revision:"491118b05f5d097a514b66e80861b6a1"},{url:"/images/pages/articles/about-donation/Regulatory documents.svg",revision:"f04b9dbbdfb917031b71e1ab53a7c186"},{url:"/images/pages/articles/about-donation/donation-questions.svg",revision:"1bbfa5c128768514be73d52c8c3692bf"},{url:"/images/pages/articles/about-donation/preparation-blood-donation.svg",revision:"e8161cf305478ce2c49e69c7b865900b"},{url:"/images/pages/articles/logo__active.png",revision:"4d6ac87ce82f9da1b64858a5c4b9dc58"},{url:"/images/pages/articles/op.png",revision:"58fa48789075fb85a6e45f2b18c4ebc3"},{url:"/images/pages/dashboard/left-aside/bonuses.svg",revision:"9a2a1056aae3f825e91d479cad845999"},{url:"/images/pages/dashboard/left-aside/details.svg",revision:"5c2be4826361dd2bdbcec6c69e1ee868"},{url:"/images/pages/dashboard/left-aside/donations.svg",revision:"3a73852f36c8a76490c0ee54001f71f5"},{url:"/images/pages/dashboard/left-aside/logout.svg",revision:"0dbf1946118a5977d06ec06ea4310d2d"},{url:"/images/pages/dashboard/left-aside/recipients.svg",revision:"19d72516defef84bb3f398ee40a4ed73"},{url:"/images/pages/dashboard/left-aside/reviews.svg",revision:"9c0e52e382f552004263fa94759efbf5"},{url:"/images/pages/dashboard/left-aside/settings.svg",revision:"d33ee17205b0259343473d31905d5e64"},{url:"/images/pages/dashboard/right-aside/add-donation.svg",revision:"972fcc157cccd7f44255fcad45992887"},{url:"/images/pages/dashboard/right-aside/question.svg",revision:"5d0074dd1d8538a3ae0c22d2932e650b"},{url:"/images/pages/dashboard/right-aside/schedule-donation.svg",revision:"71b476562b5938cb4742002f64823e8c"},{url:"/images/pages/dashboard/right-aside/support-project.svg",revision:"b6674c92a297125cb2b2a1cbd0672343"},{url:"/images/pages/donations.svg",revision:"89ae2da5bf98299e8f47058b8d34ebb0"},{url:"/images/pages/home/about-donations/donation-going.svg",revision:"95797a1f4b4118e4b4e1f6a99e02184f"},{url:"/images/pages/home/about-donations/donor-requirements.svg",revision:"7f67b8c19c91ac0a5a8942e3299e83e3"},{url:"/images/pages/home/about-donations/hover-md.svg",revision:"9a0080f473e109c1daf4e72ab68ca9d3"},{url:"/images/pages/home/about-donations/hover.svg",revision:"8f6b44e8b3127fc65e289207950b5bf7"},{url:"/images/pages/home/about-donations/preparation-donation.svg",revision:"845f195335b6ab925b4d350ccb7e26bf"},{url:"/images/pages/home/hearts/enough.svg",revision:"bafab0bc94311c3cb33dd6fde0d680cd"},{url:"/images/pages/home/hearts/few.svg",revision:"e0a598cb70f621906d16193aaf384736"},{url:"/images/pages/home/hearts/lot.svg",revision:"33b6e990e1916925309295f577c73f08"},{url:"/images/pages/home/love.svg",revision:"2a38acae1e4be1cae006bbd2da2c86b5"},{url:"/images/pages/home/top-donors.png",revision:"a9332f37a706f4bba39c6a2b250f5e32"},{url:"/images/pages/home/we-are-in-social.png",revision:"198dcaa7504a54f7306fd51bbf2b8a66"},{url:"/images/pages/love-pic.png",revision:"0e7e2b07019c66bd6c8ccb2ec8e5d686"},{url:"/images/pages/recipients.svg",revision:"edfe40a083b71d9adcf200796f59ccbe"},{url:"/images/pages/settings.svg",revision:"361b08880d16a13de2e6b364feb795cb"},{url:"/images/pages/welcome.png",revision:"e2765564ece1ca215d4839d2350bd33f"},{url:"/images/rate/filled.svg",revision:"cf5da08eead0a061faf23c36f09beae7"},{url:"/images/rate/outlined.svg",revision:"e9d5e73c1bf4872bb1b8ff930456f7bd"},{url:"/images/social-icons/fb.svg",revision:"8669a115b959356475e6932fc2c2cff3"},{url:"/images/social-icons/google.svg",revision:"61826b604e6a712ca29a54c895581fcf"},{url:"/images/social-icons/instagram.svg",revision:"accf996370932e618fb691546362740d"},{url:"/images/social-icons/ok.svg",revision:"0e63c3e2f1f4c3928cf4b82791f56167"},{url:"/images/social-icons/vk.svg",revision:"7e4590c1bac61f69fb3dee7a90e18420"},{url:"/manifest.json",revision:"00b66ad688fa50154c278a66bf152032"},{url:"/stub.svg",revision:"931e05a7291ddd48c77dc6689655cbef"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
