(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{106:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),b=p(n),d=r,m=b["".concat(l,".").concat(d)]||b[d]||u[d]||i;return n?a.a.createElement(m,c(c({ref:t},s),{},{components:n})):a.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:r,l[1]=c;for(var s=2;s<i;s++)l[s]=n[s];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},90:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return o})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),i=(n(0),n(106)),l={title:"Ubuntu\u4f7f\u7528\u521d\u59cb\u5316"},c={unversionedId:"linux/ubuntuInit",id:"linux/ubuntuInit",isDocsHomePage:!1,title:"Ubuntu\u4f7f\u7528\u521d\u59cb\u5316",description:"\u5f00\u542f\u8fdc\u7a0bssh",source:"@site/docs/linux/ubuntuInit.md",slug:"/linux/ubuntuInit",permalink:"/docs/linux/ubuntuInit",version:"current",sidebar:"linux",previous:{title:"\u6811\u8393\u6d3e/RaspberryPi\u7cfb\u7edf\u5b89\u88c5",permalink:"/docs/linux/OSInstall"},next:{title:"Docker\u5b89\u88c5",permalink:"/docs/linux/dockerInstall"}},o=[{value:"\u5f00\u542f\u8fdc\u7a0bssh",id:"\u5f00\u542f\u8fdc\u7a0bssh",children:[]},{value:"\u5f00\u542froot\u7528\u6237",id:"\u5f00\u542froot\u7528\u6237",children:[]},{value:"\u66f4\u6539\u65f6\u533a",id:"\u66f4\u6539\u65f6\u533a",children:[]},{value:"\u66f4\u6539apt\u56fd\u5185\u6e90",id:"\u66f4\u6539apt\u56fd\u5185\u6e90",children:[]},{value:"\u8bbe\u7f6e\u9759\u6001IP",id:"\u8bbe\u7f6e\u9759\u6001ip",children:[]},{value:"\u8fde\u63a5Wifi",id:"\u8fde\u63a5wifi",children:[]},{value:"\u5b89\u88c5lm-sensors\u786c\u4ef6\u76d1\u63a7",id:"\u5b89\u88c5lm-sensors\u786c\u4ef6\u76d1\u63a7",children:[]}],s={toc:o};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"\u5f00\u542f\u8fdc\u7a0bssh"},"\u5f00\u542f\u8fdc\u7a0bssh"),Object(i.b)("p",null,"\u63d2\u5165MicroSD\u540e\u5f00\u542f\u7535\u6e90\uff0c\u7cfb\u7edf\u81ea\u52a8\u542f\u52a8\uff0c\u9996\u6b21\u8fdb\u5165\u9ed8\u8ba4\u7528\u6237\u540d\u5bc6\u7801\u4e3a\uff1aubuntu/ubuntu\u4e4b\u540e\u4f1a\u8ba9\u4f60\u66f4\u6539\u5bc6\u7801\u3002"),Object(i.b)("p",null,"\u9ed8\u8ba4\u5df2\u7ecf\u542f\u52a8ssh\u670d\u52a1\uff0c\u9700\u8981\u67e5\u770bip\u540e\u53ef\u4ee5\u8fdc\u7a0bssh\u8fde\u5165,ufw\u9632\u706b\u5899\u9ed8\u8ba4\u4e5f\u662f\u5173\u95ed\u3002"),Object(i.b)("h2",{id:"\u5f00\u542froot\u7528\u6237"},"\u5f00\u542froot\u7528\u6237"),Object(i.b)("p",null,"\u5728\u7ec8\u7aef\u8f93\u5165\u547d\u4ee4\uff1a",Object(i.b)("inlineCode",{parentName:"p"},"sudo passwd root")," \u5f00\u542froot\u7528\u6237\u5e76\u6dfb\u52a0\u5bc6\u7801"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"ubuntu@ubuntu:~$ sudo passwd root\nNew password:\nRetype new password:\npasswd: password updated successfully\n")),Object(i.b)("p",null,"\u5728\u7ec8\u7aef\u8f93\u5165\u547d\u4ee4\uff1a",Object(i.b)("inlineCode",{parentName:"p"},"su")," \u5207\u6362\u5230root\u7528\u6237"),Object(i.b)("p",null,"\u6dfb\u52a0root\u7528\u6237\u8fdc\u7a0b\u767b\u9646ssh\u6743\u9650\uff0c\u7f16\u8f91\u66f4\u6539\uff1a"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"vim /etc/ssh/sshd_config\n")),Object(i.b)("p",null,"\u627e\u5230 ",Object(i.b)("strong",{parentName:"p"},"#PermitRootLogin prohibit-password")," \u53bb\u6389\u524d\u9762 ",Object(i.b)("strong",{parentName:"p"},"#")," \u5e76\u4fee\u6539 ",Object(i.b)("strong",{parentName:"p"},"prohibit-password")," \u4e3ayes\u3002"),Object(i.b)("p",null,"\u5982\u4e0b\uff1a ",Object(i.b)("strong",{parentName:"p"},"PermitRootLogin yes")," \u4fdd\u5b58\u3002"),Object(i.b)("p",null,"\u5728\u7ec8\u7aef\u8f93\u5165\u547d\u4ee4\uff1a",Object(i.b)("inlineCode",{parentName:"p"},"systemctl restart sshd")," \u91cd\u542fssh\u670d\u52a1\u540e\u53ef\u4ee5\u7528root\u8fdc\u7a0b\u767b\u9646ssh"),Object(i.b)("h2",{id:"\u66f4\u6539\u65f6\u533a"},"\u66f4\u6539\u65f6\u533a"),Object(i.b)("p",null,"\u5728\u7ec8\u7aef\u8f93\u5165\u547d\u4ee4\uff1a",Object(i.b)("inlineCode",{parentName:"p"},"tzselect")),Object(i.b)("p",null,"\u7136\u540e\u9009\u62e9Asia\uff0c\u8f93\u51654\uff0c\u7136\u540eenter"),Object(i.b)("p",null,"\u7136\u540e\u8fdb\u5165\u56fd\u5bb6\u5730\u533a\u9009\u62e9\u754c\u9762\uff0c\u8fd9\u91cc\u9009\u62e9China\uff0c\u8f93\u51659\uff0c\u7136\u540eenter"),Object(i.b)("p",null,"\u6700\u540e\u8fd9\u91cc\u9009\u62e9\u5317\u4eac\u65f6\u95f4\u5c31\u884c\u4e86\uff0c\u8f93\u51651\uff0c\u7136\u540eenter"),Object(i.b)("p",null,"\u6700\u540e\u518d\u786e\u8ba4\u4e00\u4e0b\uff0c\u9009\u62e9yes\uff0c\u8f93\u51651\uff0c\u7136\u540eenter"),Object(i.b)("p",null,"\u7136\u540e\u67e5\u770b\u7535\u8111\u65f6\u533a\u8bbe\u7f6e\uff0c\u7ec8\u7aef\u8f93\u5165\u547d\u4ee4\uff1a",Object(i.b)("inlineCode",{parentName:"p"},"timedatectl")),Object(i.b)("p",null,"\u521b\u5efa\u65f6\u533a\u8f6f\u8fde\u63a5\uff0c\u7ec8\u7aef\u8f93\u5165\u547d\u4ee4\uff1a"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime\n")),Object(i.b)("p",null,"\u67e5\u770b\u7cfb\u7edf\u65f6\u95f4\uff0c\u7ec8\u7aef\u8f93\u5165\u547d\u4ee4\uff1a",Object(i.b)("inlineCode",{parentName:"p"},"date -R")),Object(i.b)("h2",{id:"\u66f4\u6539apt\u56fd\u5185\u6e90"},"\u66f4\u6539apt\u56fd\u5185\u6e90"),Object(i.b)("p",null,"\u5907\u4efd\u6587\u4ef6\uff0c\u7ec8\u7aef\u8f93\u5165\uff1a"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"mv /etc/apt/sources.list /etc/apt/sources.list.bak\n")),Object(i.b)("p",null,"\u8f93\u5165\u547d\u4ee4",Object(i.b)("inlineCode",{parentName:"p"},"vim /etc/apt/sources.list"),"\u65b0\u589esources.list\u6587\u4ef6\u5185\u5bb9\u5982\u4e0b:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-vim",metastring:'title="/etc/apt/sources.list"',title:'"/etc/apt/sources.list"'}),"deb https://mirrors.aliyun.com/ubuntu-ports focal main restricted\ndeb https://mirrors.aliyun.com/ubuntu-ports focal-updates main restricted\ndeb https://mirrors.aliyun.com/ubuntu-ports focal universe\ndeb https://mirrors.aliyun.com/ubuntu-ports focal-updates universe\ndeb https://mirrors.aliyun.com/ubuntu-ports focal multiverse\ndeb https://mirrors.aliyun.com/ubuntu-ports focal-updates multiverse\ndeb https://mirrors.aliyun.com/ubuntu-ports focal-backports main restricted universe multiverse\ndeb https://mirrors.aliyun.com/ubuntu-ports focal-security main restricted\ndeb https://mirrors.aliyun.com/ubuntu-ports focal-security universe\ndeb https://mirrors.aliyun.com/ubuntu-ports focal-security multiverse\n")),Object(i.b)("p",null,"\u5237\u65b0\u8f6f\u4ef6\u6e90\u4fe1\u606f\uff1a\u7ec8\u7aef\u8f93\u5165\u547d\u4ee4\uff1a",Object(i.b)("inlineCode",{parentName:"p"},"apt update")),Object(i.b)("p",null,"\u66f4\u65b0\u8f6f\u4ef6,\u7ec8\u7aef\u8f93\u5165\u547d\u4ee4\uff1a",Object(i.b)("inlineCode",{parentName:"p"},"apt upgrade -y")),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"Ubuntu\u7248\u672c\u95ee\u9898")),Object(i.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"\u6b64\u6b21\u4fee\u6539\u9002\u7528\u4e8eubuntu20.04arm\u7248\u3002\n\u5176\u4ed6\u7248\u672c\u5b58\u5728\u540e\u9762\u53c2\u6570\u4e0d\u9002\u7528\u3002"))),Object(i.b)("h2",{id:"\u8bbe\u7f6e\u9759\u6001ip"},"\u8bbe\u7f6e\u9759\u6001IP"),Object(i.b)("p",null,"\u4fee\u6539\u914d\u7f6e\u6587\u4ef6,\u7ec8\u7aef\u8f93\u5165\u547d\u4ee4\uff1a\n",Object(i.b)("inlineCode",{parentName:"p"},"vim /etc/netplan/50-cloud-init.yaml")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml",metastring:'{4-8} title="/etc/netplan/50-cloud-init.yaml"',"{4-8}":!0,title:'"/etc/netplan/50-cloud-init.yaml"'}),"network:\n    ethernets:\n        eth0:\n            dhcp4: false\n            addresses: [172.16.119.36/24]\n            gateway4: 172.16.119.254\n            nameserver:\n                addresses: [223.5.5.5,223.6.6.6]\n            optional: true\n    version: 2\n")),Object(i.b)("p",null,"\u67e5\u770b\u662f\u5426\u4fee\u6539\u6b63\u786e,\u7ec8\u7aef\u8f93\u5165\u547d\u4ee4\uff1a",Object(i.b)("inlineCode",{parentName:"p"},"netplan try")),Object(i.b)("p",null,"\u5982\u679c\u6ca1\u6709Error\u62a5\u9519\uff0c\u76f4\u63a5\u6309enter\u6267\u884c\u6210\u529f,\u6216\u8005\u4e4b\u540e\u7ec8\u7aef\u8f93\u5165\u547d\u4ee4\uff1a",Object(i.b)("inlineCode",{parentName:"p"},"netplan apply")),Object(i.b)("h2",{id:"\u8fde\u63a5wifi"},"\u8fde\u63a5Wifi"),Object(i.b)("p",null,"\u67e5\u770bwlan\u7f51\u53e3\u540d\u79f0,\u7ec8\u7aef\u8f93\u5165\u547d\u4ee4\uff1a",Object(i.b)("inlineCode",{parentName:"p"},"ip addr")),Object(i.b)("p",null,"\u53ef\u4ee5\u770b\u5230wlan\u7f51\u53e3\u540d\u79f0\u4e3a\uff1awlan0,\u4ee5\u4e0b\u914d\u7f6e\u4fee\u6539\u4e2d\u9700\u8981\u7528\u5230"),Object(i.b)("p",null,"\u4fee\u6539\u914d\u7f6e\u6587\u4ef6,\u7ec8\u7aef\u8f93\u5165\u547d\u4ee4\uff1a\n",Object(i.b)("inlineCode",{parentName:"p"},"vim /etc/netplan/50-cloud-init.yaml")),Object(i.b)("p",null,"\u6dfb\u52a0wifi\u4fe1\u606f\u5982\u4e0b:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml",metastring:'{10-15} title="/etc/netplan/50-cloud-init.yaml"',"{10-15}":!0,title:'"/etc/netplan/50-cloud-init.yaml"'}),'network:\n    ethernets:\n        eth0:\n            dhcp4: false\n            addresses: [172.16.119.36/24]\n            gateway4: 172.16.119.254\n            nameservers:\n                addresses: [223.5.5.5,223.6.6.6]\n            optional: true\n    wifis:\n        wlan0:\n            dhcp4: true\n            access-points:\n                "Wifi\u7684SSID":\n                    password: "wifi\u5bc6\u7801"\n    version: 2\n')),Object(i.b)("p",null,"\u67e5\u770b\u662f\u5426\u4fee\u6539\u6b63\u786e,\u7ec8\u7aef\u8f93\u5165\u547d\u4ee4\uff1a",Object(i.b)("inlineCode",{parentName:"p"},"netplan try")),Object(i.b)("p",null,"\u5982\u679c\u6ca1\u6709Error\u62a5\u9519\uff0c\u76f4\u63a5\u6309enter\u6267\u884c\u6210\u529f,\u6216\u8005\u4e4b\u540e\u7ec8\u7aef\u8f93\u5165\u547d\u4ee4\uff1a",Object(i.b)("inlineCode",{parentName:"p"},"netplan apply")),Object(i.b)("h2",{id:"\u5b89\u88c5lm-sensors\u786c\u4ef6\u76d1\u63a7"},"\u5b89\u88c5lm-sensors\u786c\u4ef6\u76d1\u63a7"),Object(i.b)("p",null,"\u5728\u7ec8\u7aef\u8f93\u5165\u547d\u4ee4\uff1a",Object(i.b)("inlineCode",{parentName:"p"},"apt install -y lm-sensors")),Object(i.b)("p",null,"\u5b89\u88c5\u5b8c\u6210\u540e\u5728\u7ec8\u7aef\u8f93\u5165\u547d\u4ee4\uff1a",Object(i.b)("inlineCode",{parentName:"p"},"sensors")," \u663e\u793a\u6e29\u5ea6\u7b49\u4fe1\u606f"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"root@ubuntu:~# sensors\ncpu_thermal-virtual-0\nAdapter: Virtual device\ntemp1:        +42.8\xb0C  \n\nrpi_volt-isa-0000\nAdapter: ISA adapter\nin0:              N/A  \n")))}p.isMDXComponent=!0}}]);