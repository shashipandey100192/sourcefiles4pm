

var appdatas = [
    {
        appname: "google",
        applink: "http://google.com",
        appicon: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png"
    },
    {
        appname: "facebook",
        applink: "http://facebook.com",
        appicon: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/2048px-2021_Facebook_icon.svg.png"
    },
    {
        appname: "google",
        applink: "http://google.com",
        appicon: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png"
    },
    {
        appname: "google",
        applink: "http://google.com",
        appicon: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png"
    },
    {
        appname: "google",
        applink: "http://google.com",
        appicon: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png"
    },
    {
        appname: "google",
        applink: "http://google.com",
        appicon: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png"
    },
    {
        appname: "google",
        applink: "http://google.com",
        appicon: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png"
    },
    {
        appname: "google",
        applink: "http://google.com",
        appicon: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png"
    },
    {
        appname: "google",
        applink: "http://google.com",
        appicon: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png"
    },
    {
        appname: "google",
        applink: "http://google.com",
        appicon: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png"
    },
    {
        appname: "google",
        applink: "http://google.com",
        appicon: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png"
    },
    {
        appname: "google",
        applink: "http://google.com",
        appicon: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png"
    }
    ,
    {
        appname: "google",
        applink: "http://google.com",
        appicon: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png"
    }
    ,
    {
        appname: "google",
        applink: "http://google.com",
        appicon: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png"
    }
    ,
    {
        appname: "google",
        applink: "http://google.com",
        appicon: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png"
    }
    ,
    {
        appname: "google",
        applink: "http://google.com",
        appicon: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png"
    }
    ,
    {
        appname: "google",
        applink: "http://google.com",
        appicon: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png"
    }
    ,
    {
        appname: "google",
        applink: "http://google.com",
        appicon: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png"
    }
];

function addmenu()
{
    var jname,jlink,jicon;
        jname = document.getElementById('appname');
        jlink = document.getElementById('applink');
        jicon = document.getElementById('appicon');

   appdatas.push({appname:jname.value,applink:jlink.value,appicon:jicon.value});
   loadallobject();
   appmaping() ;

}








var app = 0;
var a;


function loadallobject() {
    a = document.getElementById('apps');

}
loadallobject();

function appmaping() {
    var mytemp = appdatas.map((d) => {
        return `<section>
    <a href="${d.applink}">
    <img src="${d.appicon}">
    <h4>${d.appname}</h4>
    </a>
</section> `;
    });

    console.log(mytemp);
    a.innerHTML = mytemp.join("");
}



function appdata() {

    if (app == 0) {
        a.style.visibility = "visible";
        app++;
    }
    else {
        a.removeAttribute("style");
        app = 0;
    }


}

appmaping();
