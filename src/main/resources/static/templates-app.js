angular.module('templates-app', ['about/about.tpl.html', 'dashboard/dashboard.tpl.html', 'home/home.tpl.html', 'inventory/displayInventory.tpl.html', 'inventory/inventory.tpl.html', 'login/login.tpl.html', 'price/displayPrice.tpl.html', 'price/price.tpl.html']);

angular.module("about/about.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("about/about.tpl.html",
    "<div class=\"row\">\n" +
    "  <h1 class=\"page-header\">\n" +
    "    The Elevator Pitch\n" +
    "    <small>For the lazy and impatient.</small>\n" +
    "  </h1>\n" +
    "  <p>\n" +
    "    <code>ng-boilerplate</code> is an opinionated kickstarter for web\n" +
    "    development projects. It's an attempt to create a simple starter for new\n" +
    "    web sites and apps: just download it and start coding. The goal is to\n" +
    "    have everything you need to get started out of the box; of course it has\n" +
    "    slick styles and icons, but it also has a best practice directory structure\n" +
    "    to ensure maximum code reuse. And it's all tied together with a robust\n" +
    "    build system chock-full of some time-saving goodness.\n" +
    "  </p>\n" +
    "\n" +
    "  <h2>Why?</h2>\n" +
    "\n" +
    "  <p>\n" +
    "    Because my team and I make web apps, and \n" +
    "    last year AngularJS became our client-side framework of choice. We start\n" +
    "    websites the same way every time: create a directory structure, copy and\n" +
    "    ever-so-slightly tweak some config files from an older project, and yada\n" +
    "    yada, etc., and so on and so forth. Why are we repeating ourselves? We wanted a starting point; a set of\n" +
    "    best practices that we could identify our projects as embodying and a set of\n" +
    "    time-saving wonderfulness, because time is money.\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    There are other similar projects out there, but none of them suited our\n" +
    "    needs. Some are awesome but were just too much, existing more as reference\n" +
    "    implementations, when we really just wanted a kickstarter. Others were just\n" +
    "    too little, with puny build systems and unscalable architectures.  So we\n" +
    "    designed <code>ng-boilerplate</code> to be just right.\n" +
    "  </p>\n" +
    "\n" +
    "  <h2>What ng-boilerplate Is Not</h2>\n" +
    "\n" +
    "  <p>\n" +
    "    This is not an example of an AngularJS app. This is a kickstarter. If\n" +
    "    you're looking for an example of what a complete, non-trivial AngularJS app\n" +
    "    that does something real looks like, complete with a REST backend and\n" +
    "    authentication and authorization, then take a look at <code><a\n" +
    "        href=\"https://github.com/angular-app/angular-app/\">angular-app</a></code>, \n" +
    "    which does just that, and does it well.\n" +
    "  </p>\n" +
    "\n" +
    "  <h1 class=\"page-header\">\n" +
    "    So What's Included?\n" +
    "    <small>I'll try to be more specific than \"awesomeness\".</small>\n" +
    "  </h1>\n" +
    "  <p>\n" +
    "    This section is just a quick introduction to all the junk that comes\n" +
    "    pre-packaged with <code>ng-boilerplate</code>. For information on how to\n" +
    "    use it, see the <a\n" +
    "      href=\"https://github.com/joshdmiller/ng-boilerplate#readme\">project page</a> at\n" +
    "    GitHub.\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    The high-altitude view is that the base project includes \n" +
    "    <a href=\"http://getbootstrap.com\">Twitter Bootstrap</a>\n" +
    "    styles to quickly produce slick-looking responsive web sites and apps. It also\n" +
    "    includes <a href=\"http://angular-ui.github.com/bootstrap\">UI Bootstrap</a>,\n" +
    "    a collection of native AngularJS directives based on the aforementioned\n" +
    "    templates and styles. It also includes <a href=\"http://fortawesome.github.com/Font-Awesome/\">Font Awesome</a>,\n" +
    "    a wicked-cool collection of font-based icons that work swimmingly with all\n" +
    "    manner of web projects; in fact, all images on the site are actually font-\n" +
    "    based icons from Font Awesome. Neat! Lastly, this also includes\n" +
    "    <a href=\"http://joshdmiller.github.com/angular-placeholders\">Angular Placeholders</a>,\n" +
    "    a set of pure AngularJS directives to do client-side placeholder images and\n" +
    "    text to make mocking user interfaces super easy.\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    And, of course, <code>ng-boilerplate</code> is built on <a href=\"http://angularjs.org\">AngularJS</a>,\n" +
    "    by the far the best JavaScript framework out there! But if you don't know\n" +
    "    that already, then how did you get here? Well, no matter - just drink the\n" +
    "    Kool Aid. Do it. You know you want to.\n" +
    "  </p>\n" +
    "  \n" +
    "  <h2>Twitter Bootstrap</h2>\n" +
    "\n" +
    "  <p>\n" +
    "    You already know about this, right? If not, <a\n" +
    "      href=\"http://getbootstrap.com\">hop on over</a> and check it out; it's\n" +
    "    pretty sweet. Anyway, all that wonderful stylistic goodness comes built in.\n" +
    "    The LESS files are available for you to import in your main stylesheet as\n" +
    "    needed - no excess, no waste. There is also a dedicated place to override\n" +
    "    variables and mixins to suit your specific needs, so updating to the latest\n" +
    "    version of Bootstrap is as simple as: \n" +
    "  </p>\n" +
    "\n" +
    "  <pre>$ cd vendor/twitter-bootstrap<br />$ git pull origin master</pre>\n" +
    "\n" +
    "  <p>\n" +
    "    Boom! And victory is ours.\n" +
    "  </p>\n" +
    "\n" +
    "  <h2>UI Bootstrap</h2>\n" +
    "\n" +
    "  <p>\n" +
    "    What's better than Bootstrap styles? Bootstrap directives!  The fantastic <a href=\"http://angular-ui.github.com/bootstrap\">UI Bootstrap</a>\n" +
    "    library contains a set of native AngularJS directives that are endlessly\n" +
    "    extensible. You get the tabs, the tooltips, the accordions. You get your\n" +
    "    carousel, your modals, your pagination. And <i>more</i>.\n" +
    "    How about a quick demo? \n" +
    "  </p>\n" +
    "\n" +
    "  <ul>\n" +
    "    <li class=\"dropdown\">\n" +
    "      <a class=\"btn dropdown-toggle\">\n" +
    "        Click me!\n" +
    "      </a>\n" +
    "      <ul class=\"dropdown-menu\">\n" +
    "        <li ng-repeat=\"choice in dropdownDemoItems\">\n" +
    "          <a>{{choice}}</a>\n" +
    "        </li>\n" +
    "      </ul>\n" +
    "    </li>\n" +
    "  </ul>\n" +
    "\n" +
    "  <p>\n" +
    "    Oh, and don't include jQuery;  \n" +
    "    you don't need it.\n" +
    "    This is better.\n" +
    "    Don't be one of those people. <sup>*</sup>\n" +
    "  </p>\n" +
    "\n" +
    "  <p><small><sup>*</sup> Yes, there are exceptions.</small></p>\n" +
    "\n" +
    "  <h2>Font Awesome</h2>\n" +
    "\n" +
    "  <p>\n" +
    "    Font Awesome has earned its label. It's a set of open (!) icons that come\n" +
    "    distributed as a font (!) for super-easy, lightweight use. Font Awesome \n" +
    "    works really well with Twitter Bootstrap, and so fits right in here.\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    There is not a single image on this site. All of the little images and icons \n" +
    "    are drawn through Font Awesome! All it takes is a little class:\n" +
    "  </p>\n" +
    "\n" +
    "  <pre>&lt;i class=\"fa fa-flag\"&gt;&lt/i&gt</pre>\n" +
    "\n" +
    "  <p>\n" +
    "    And you get one of these: <i class=\"fa fa-flag\"> </i>. Neat!\n" +
    "  </p>\n" +
    "\n" +
    "  <h2>Placeholders</h2>\n" +
    "\n" +
    "  <p>\n" +
    "    Angular Placeholders is a simple library for mocking up text and images. You\n" +
    "    can automatically throw around some \"lorem ipsum\" text:\n" +
    "  </p>\n" +
    "\n" +
    "  <pre>&lt;p ph-txt=\"3s\"&gt;&lt;/p&gt;</pre>\n" +
    "\n" +
    "  <p>\n" +
    "    Which gives you this:\n" +
    "  </p>\n" +
    "\n" +
    "  <div class=\"pre\">\n" +
    "    &lt;p&gt;\n" +
    "    <p ph-txt=\"3s\"></p>\n" +
    "    &lt;/p&gt;\n" +
    "  </div>\n" +
    "\n" +
    "  <p>\n" +
    "    Even more exciting, you can also create placeholder images, entirely \n" +
    "    client-side! For example, this:\n" +
    "  </p>\n" +
    "  \n" +
    "  <pre>\n" +
    "&lt;img ph-img=\"50x50\" /&gt;\n" +
    "&lt;img ph-img=\"50x50\" class=\"img-polaroid\" /&gt;\n" +
    "&lt;img ph-img=\"50x50\" class=\"img-rounded\" /&gt;\n" +
    "&lt;img ph-img=\"50x50\" class=\"img-circle\" /&gt;</pre>\n" +
    "\n" +
    "  <p>\n" +
    "    Gives you this:\n" +
    "  </p>\n" +
    "\n" +
    "  <div>\n" +
    "    <img ph-img=\"50x50\" />\n" +
    "    <img ph-img=\"50x50\" class=\"img-polaroid\" />\n" +
    "    <img ph-img=\"50x50\" class=\"img-rounded\" />\n" +
    "    <img ph-img=\"50x50\" class=\"img-circle\" />\n" +
    "  </div>\n" +
    "\n" +
    "  <p>\n" +
    "    Which is awesome.\n" +
    "  </p>\n" +
    "\n" +
    "  <h1 class=\"page-header\">\n" +
    "    The Roadmap\n" +
    "    <small>Really? What more could you want?</small>\n" +
    "  </h1>\n" +
    "\n" +
    "  <p>\n" +
    "    This is a project that is <i>not</i> broad in scope, so there's not really\n" +
    "    much of a wish list here. But I would like to see a couple of things:\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    I'd like it to be a little simpler. I want this to be a universal starting\n" +
    "    point. If someone is starting a new AngularJS project, she should be able to\n" +
    "    clone, merge, or download its source and immediately start doing what she\n" +
    "    needs without renaming a bunch of files and methods or deleting spare parts\n" +
    "    ... like this page. This works for a first release, but I just think there\n" +
    "    is a little too much here right now.\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    I'd also like to see a simple generator. Nothing like <a href=\"yeoman.io\">\n" +
    "    Yeoman</a>, as there already is one of those, but just something that\n" +
    "    says \"I want Bootstrap but not Font Awesome and my app is called 'coolApp'.\n" +
    "    Gimme.\" Perhaps a custom download builder like UI Bootstrap\n" +
    "    has. Like that. Then again, perhaps some Yeoman generators wouldn't be out\n" +
    "    of line. I don't know. What do you think?\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    Naturally, I am open to all manner of ideas and suggestions. See the \"Can I\n" +
    "    Help?\" section below.\n" +
    "  </p>\n" +
    "\n" +
    "  <h2>The Tactical To Do List</h2>\n" +
    "\n" +
    "  <p>\n" +
    "    There isn't much of a demonstration of UI Bootstrap. I don't want to pollute\n" +
    "    the code with a demo for demo's sake, but I feel we should showcase it in\n" +
    "    <i>some</i> way.\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    <code>ng-boilerplate</code> should include end-to-end tests. This should\n" +
    "    happen soon. I just haven't had the time.\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    Lastly, this site should be prettier, but I'm no web designer. Throw me a\n" +
    "    bone here, people!\n" +
    "  </p>\n" +
    "\n" +
    "  <h2>Can I Help?</h2>\n" +
    "\n" +
    "  <p>\n" +
    "    Yes, please!\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    This is an opinionated kickstarter, but the opinions are fluid and\n" +
    "    evidence-based. Don't like the way I did something? Think you know of a\n" +
    "    better way? Have an idea to make this more useful? Let me know! You can\n" +
    "    contact me through all the usual channels or you can open an issue on the\n" +
    "    GitHub page. If you're feeling ambitious, you can even submit a pull\n" +
    "    request - how thoughtful of you!\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    So join the team! We're good people.\n" +
    "  </p>\n" +
    "</div>\n" +
    "\n" +
    "");
}]);

angular.module("dashboard/dashboard.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("dashboard/dashboard.tpl.html",
    "<head>\n" +
    "<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\n" +
    "</head>\n" +
    "<style>\n" +
    "body {\n" +
    "    height: 100%;\n" +
    "   background-color:     #66b7b0    ;\n" +
    "}\n" +
    "#page {\n" +
    "    width: 1200px;\n" +
    "    margin: 0px auto -1px auto;\n" +
    "    padding: 15px;\n" +
    "}\n" +
    ".InsideContent{\n" +
    "    display:inline-block;\n" +
    "}\n" +
    "}\n" +
    "#divTable {\n" +
    "    width: 800px;\n" +
    "}\n" +
    "</style><br/><br/>\n" +
    "<body background-image: url(\"/home/swathi/Pictures/blue.jpg\");\">\n" +
    "<div class=\"dashboard\" ng-style=\"{'background-image':'url(/swathi/Pictures/blue.jpg)'}\">\n" +
    "    <div id=\"page\">\n" +
    "<div id=\"divTable\" class=\"InsideContent\">\n" +
    "                <div class=\"span1\">\n" +
    "\n" +
    "<img src=\"/src/assets/logo1.png\" height=\"200\" width=\"200\"/>\n" +
    "</div></div>\n" +
    "\n" +
    "            <div id=\"divTable\" class=\"InsideContent\">\n" +
    "                <div class=\"span1\">\n" +
    "    <a ng-click=\"navigateToPrice()\" class=\"btn btn-primary\">\n" +
    "        <i class=\"fa fa-money\" aria-hidden=\"true\"></i>\n" +
    "        <span><strong>PRICE</strong></span>            \n" +
    "    </a>\n" +
    "                </div>\n" +
    "            </div>&nbsp;\n" +
    "            <div id=\"divTable\" class=\"InsideContent\">\n" +
    "                    <div class=\"span1\">\n" +
    "                        <a ng-click=\"navigateToInventory()\" class=\"btn btn-primary\">\n" +
    "                        <i class=\"fa fa-newspaper-o\" aria-hidden=\"true\"></i>\n" +
    "                        <span><strong>INVENTORY</strong></span>          \n" +
    "                        </a>\n" +
    "                    </div>\n" +
    "            </div>  \n" +
    "    </div></div></body>\n" +
    "");
}]);

angular.module("home/home.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home/home.tpl.html",
    "<div class=\"jumbotron\">\n" +
    "  <h1>Non-Trivial AngularJS Made Easy</h1>\n" +
    "\n" +
    "  <p class=\"lead\">\n" +
    "    Everything you need to kickstart AngularJS projects: a best-practice\n" +
    "    directory structure, an intelligent build system, and the best web design\n" +
    "    libraries around.\n" +
    "  </p>\n" +
    "\n" +
    "  <ul class=\"list-inline social-buttons\">\n" +
    "    <li>\n" +
    "      <iframe \n" +
    "        src=\"http://ghbtns.com/github-btn.html?user=ngbp&amp;repo=ngbp&amp;type=watch&amp;count=true\" \n" +
    "        allowtransparency=\"true\" \n" +
    "        frameborder=\"0\" \n" +
    "        scrolling=\"0\" \n" +
    "        width=\"110\" \n" +
    "        height=\"20\">\n" +
    "      </iframe>\n" +
    "    </li>\n" +
    "    <li>\n" +
    "      <iframe \n" +
    "        src=\"http://ghbtns.com/github-btn.html?user=ngbp&amp;repo=ngbp&amp;type=fork&amp;count=true\" \n" +
    "        allowtransparency=\"true\" \n" +
    "        frameborder=\"0\" \n" +
    "        scrolling=\"0\" \n" +
    "        width=\"95\" \n" +
    "        height=\"20\">\n" +
    "      </iframe>\n" +
    "    </li>\n" +
    "    <li>\n" +
    "       <iframe allowtransparency=\"true\" frameborder=\"0\" scrolling=\"no\"\n" +
    "        src=\"https://platform.twitter.com/widgets/tweet_button.html?url=http%3A%2F%2Fbit.ly%2FngBoilerplate&counturl=http%3A%2F%2Fngbp.github.com%2Fngbp&text=Check%20out%20%23ngbp%20-%20an%20awesome%20kickstarter%20for%20web%20projects%20%7C&hashtags=angularjs&via=joshdmiller&related=joshdmiller\"\n" +
    "        style=\"width:130px; height:20px;\"></iframe>\n" +
    "    </li>\n" +
    "    <li plus-one></li>\n" +
    "  </ul> \n" +
    "  \n" +
    "  <div class=\"btn-group\">\n" +
    "    <a href=\"https://github.com/ngbp/ngbp#readme\" class=\"btn btn-large btn-default\">\n" +
    "      <i class=\"fa fa-book\"></i>\n" +
    "      Read the Docs\n" +
    "    </a>\n" +
    "    <a href=\"https://github.com/ngbp/ngbp\" class=\"btn btn-large btn-success\">\n" +
    "      <i class=\"fa fa-download\"></i>\n" +
    "      Download\n" +
    "    </a>\n" +
    "  </div>\n" +
    "\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"marketing\">\n" +
    "  <div class=\"row\">\n" +
    "    <div class=\"col-xs-12 col-sm-6 col-md-4\">\n" +
    "      <h4><i class=\"fa fa-thumbs-up\"></i> Good to Go!</h4>\n" +
    "      <p>\n" +
    "        Kickstarts your project quickly, with everything you need, so you can \n" +
    "        focus on what matters: your app.\n" +
    "      </p>\n" +
    "    </div>\n" +
    "    <div class=\"col-xs-12 col-sm-6 col-md-4\">\n" +
    "      <h4><i class=\"fa fa-magic\"></i> Complete Build System</h4>\n" +
    "      <p>\n" +
    "        A smart, <a href=\"http://gruntjs.com\">Grunt</a>-based build system \n" +
    "        designed to save you time and energy.\n" +
    "      </p>\n" +
    "    </div>\n" +
    "    <div class=\"col-xs-12 col-sm-6 col-md-4\">\n" +
    "      <h4><i class=\"fa fa-retweet\"></i> Modularization</h4>\n" +
    "      <p>\n" +
    "        Supports a structure that maintains separation of concerns while\n" +
    "        ensuring maximum code reuse.\n" +
    "      </p>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div class=\"row\">\n" +
    "    <div class=\"col-xs-12 col-sm-6 col-md-4\">\n" +
    "      <h4><i class=\"fa fa-star\"></i> AngularJS</h4>\n" +
    "      <p>\n" +
    "        JavaScript framework that augments browser-based, single-page \n" +
    "        applications with MVC functionality.\n" +
    "        <a href=\"http://angularjs.org\">More &raquo;</a>\n" +
    "      </p>\n" +
    "    </div>\n" +
    "    <div class=\"col-xs-12 col-sm-6 col-md-4\">\n" +
    "      <h4><i class=\"fa fa-resize-small\"></i> LESS CSS</h4>\n" +
    "      <p>\n" +
    "        The dynamic stylesheet language that extends CSS with efficiency.\n" +
    "        <a href=\"http://lesscss.org\">More &raquo;</a>\n" +
    "      </p>\n" +
    "    </div>\n" +
    "    <div class=\"col-xs-12 col-sm-6 col-md-4\">\n" +
    "      <h4><i class=\"fa fa-twitter\"></i> Twitter Bootstrap</h4>\n" +
    "      <p>\n" +
    "        Sleek, intuitive, and powerful front-end framework for faster and easier\n" +
    "        web development.\n" +
    "        <a href=\"http://getbootstrap.com\">More &raquo;</a>\n" +
    "      </p>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div class=\"row\">\n" +
    "    <div class=\"col-xs-12 col-sm-6 col-md-4\">\n" +
    "      <h4><i class=\"fa fa-circle\"></i> Angular UI Bootstrap</h4>\n" +
    "      <p>\n" +
    "        Pure AngularJS components for Bootstrap written by the \n" +
    "        <a href=\"https://github.com/angular-ui?tab=members\">AngularUI Team</a>.\n" +
    "        <a href=\"http://angular-ui.github.com/bootstrap\">More &raquo;</a>\n" +
    "      </p>\n" +
    "    </div>\n" +
    "    <div class=\"col-xs-12 col-sm-6 col-md-4\">\n" +
    "      <h4><i class=\"fa fa-flag\"></i> Font Awesome</h4>\n" +
    "      <p>\n" +
    "        The iconic font designed for use with Twitter Bootstrap.\n" +
    "        <a href=\"http://fortawesome.github.com/Font-Awesome\">\n" +
    "          More &raquo;\n" +
    "        </a>\n" +
    "      </p>\n" +
    "    </div>\n" +
    "    <div class=\"col-xs-12 col-sm-6 col-md-4\">\n" +
    "      <h4><i class=\"fa fa-asterisk\"></i> Placeholders</h4>\n" +
    "      <p>\n" +
    "        Client-side image and text placeholder directives written in pure \n" +
    "        AngularJS to make designing mock-ups wicked-fast.\n" +
    "        <button ui-sref=\"login\">\n" +
    "          More &raquo;\n" +
    "        </button>\n" +
    "      </p>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "");
}]);

angular.module("inventory/displayInventory.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("inventory/displayInventory.tpl.html",
    "<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\">\n" +
    "  <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js\"></script>\n" +
    "  <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js\"></script>\n" +
    "\n" +
    "\n" +
    "<div ng-app=\"displayInventory\" ng-controller=\"displayInventoryCtrl\"> \n" +
    "<br/><br/>\n" +
    "      <style>\n" +
    "#page {\n" +
    "    width: 1200px;\n" +
    "    margin: 0px auto -1px auto;\n" +
    "    padding: 15px;\n" +
    "}\n" +
    ".InsideContent{\n" +
    "    display:inline-block;\n" +
    "}\n" +
    "}\n" +
    "#divTable {\n" +
    "    width: 800px;\n" +
    "    body{\n" +
    "      background-color: 92eec2;\n" +
    "    }\n" +
    "}\n" +
    "</style>\n" +
    "\n" +
    "<br/>\n" +
    "<br/>\n" +
    "<div id=\"page\">\n" +
    " <div id=\"divTable\" class=\"InsideContent\">\n" +
    "     <div><a ng-click=\"navigateToDashboard()\">Dashboard</a></div>\n" +
    "  </div>\n" +
    "  <div id=\"divTable\" class=\"InsideContent\">\n" +
    "    <div><p>/</p></div>\n" +
    "\n" +
    "  </div>\n" +
    "  <div id=\"divTable\" class=\"InsideContent\">\n" +
    "     <div><a ng-click=\"navigateToInventory()\">Inventory</a></div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "</div>\n" +
    "       \n" +
    "  <table border=\"1\" class=\"table table-bordered\">\n" +
    "    <tr ng-repeat=\"item in data1 | limitTo:1\">\n" +
    "  <th ng-repeat=\"(key, value) in item\"> {{key | uppercase }}</th></tr>\n" +
    "  <tr ng-repeat=\"item in data1\">\n" +
    "  <td ng-repeat=\"(key,value) in item\">\n" +
    "  {{value}}\n" +
    "</td></tr>\n" +
    "\n" +
    "\n" +
    "\n" +
    "   <!--<tr ng-repeat=\"x in data1\">\n" +
    "   <td>{{x.date}}</td>\n" +
    "   <td>{{x.reservationId}}</td>\n" +
    "   <td>{{x.revisionId}}</td>\n" +
    "   <td>{{x.hotelId}}</td>\n" +
    "   <td>{{x.roomId}}</td>\n" +
    "   <td>{{x.occupancy}}</td>\n" +
    "   <td>{{x.uniqueId}}</td>\n" +
    "   <td>{{x.status}}</td>\n" +
    "   <td>{{x.type}}</td>\n" +
    "   <td>{{x.createdDate}}</td>\n" +
    "</tr>-->\n" +
    "   </table>  \n" +
    "</div>\n" +
    "\n" +
    "<!--<script>\n" +
    "var log = [];\n" +
    "angular.forEach(data1, function(value, key) {\n" +
    "  console.log(key + ': ' + value);\n" +
    "});\n" +
    "</script>-->\n" +
    "\n" +
    "<script>\n" +
    "  console.log($scope.filters);\n" +
    "</script>\n" +
    "\n" +
    "</body>\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "  \n" +
    "");
}]);

angular.module("inventory/inventory.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("inventory/inventory.tpl.html",
    "<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\">\n" +
    "  <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js\"></script>\n" +
    "  <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js\"></script>\n" +
    "<style>\n" +
    "#page {\n" +
    "    width: 1200px;\n" +
    "    margin: 0px auto -1px auto;\n" +
    "    padding: 15px;\n" +
    "}\n" +
    ".InsideContent{\n" +
    "    display:inline-block;\n" +
    "}\n" +
    "}\n" +
    "#divTable {\n" +
    "    width: 800px;\n" +
    "    body{\n" +
    "      background-color: 92eec2;\n" +
    "    }\n" +
    "}\n" +
    "body{\n" +
    "  background-color:     #66b7b0    ;\n" +
    "}\n" +
    ".datepicker.dropdown-menu {\n" +
    "  width: 250px;\n" +
    "  height: 250px;\n" +
    "  button {\n" +
    "    outline: none;\n" +
    "    border: 0px;\n" +
    "  }\n" +
    "  tbody {\n" +
    "    height: 180px;\n" +
    "  }\n" +
    "  tbody button {\n" +
    "    padding: 6px;\n" +
    "  }\n" +
    "  &.datepicker-mode-1, &.datepicker-mode-2 {\n" +
    "    tbody button {\n" +
    "      height: 65px;\n" +
    "    }\n" +
    "  }\n" +
    "}\n" +
    "\n" +
    ".timepicker.dropdown-menu {\n" +
    "  padding: 0 4px;\n" +
    "  button {\n" +
    "    outline: none;\n" +
    "    border: 0px;\n" +
    "  }\n" +
    "  tbody button {\n" +
    "    padding: 6px;\n" +
    "  }\n" +
    "}\n" +
    "</style>\n" +
    "\n" +
    "<form ng-controller=\"InventoryCtrl\"> \n" +
    "<br/>\n" +
    "<br/>\n" +
    "<div>\n" +
    "<div id=\"page\">\n" +
    " <div id=\"divTable\" class=\"InsideContent\">\n" +
    "     <div><a ng-click=\"navigateToDashboard()\">Dashboard</a></div>\n" +
    "  </div>\n" +
    "  <div id=\"divTable\" class=\"InsideContent\">\n" +
    "    <div><p>/</p></div>\n" +
    "\n" +
    "  </div>\n" +
    "  <div id=\"divTable\" class=\"InsideContent\">\n" +
    "     <div><a ng-href=\"\">Inventory</a></div>\n" +
    "  </div>\n" +
    "</div></div>\n" +
    "<div>\n" +
    "               <label class=\"control-label\"> Hotel ID </label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n" +
    "                      <label class=\"control-label\"> Room ID </label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n" +
    "                     \n" +
    "                      <label class=\"control-label\"> Reservation ID </label>&nbsp;\n" +
    "                      <label class=\"control-label\"><i class=\"fa fa-calendar\"></i> Start Date </label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n" +
    "                      <label class=\"control-label\"><i class=\"fa fa-calendar\"></i> End Date </label>\n" +
    "  </div>\n" +
    "<div>\n" +
    "                  <input type=\"text\" ng-model=\"filters.hotelId\" id=\"hotelid\" style=\"width: 100px;\">\n" +
    "             <span ng-show=\"hotelid\">{{hotelid}}</span>            \n" +
    " <input type=\"text\" ng-model=\"filters.roomId\" id=\"roomId\" style=\"width: 100px;\">     \n" +
    "       <input type=\"text\" ng-model=\"filters.reservationId\" id=\"reservationId\" style=\"width: 100px;\">\n" +
    "<input ng-model=\"filters.startDate\" data-date-format=\"dd-MM-yyyy\" data-date-type=\"number\" data-min-date=\"02-10-14\" data-max-date=\"today\" data-autoclose=\"1\" name=\"date2\" bs-datepicker type=\"text\" style=\"width: 150px;\">\n" +
    "    <input ng-model=\"filters.endDate\" data-date-format=\"dd-MM-yyyy\" data-date-type=\"number\" data-min-date=\"{{filters.startDate}}\" data-max-date=\"22-01-50\" data-autoclose=\"1\" name=\"date2\" bs-datepicker type=\"text\" style=\"width: 150px; \">\n" +
    "  </div>\n" +
    "  <br/>          \n" +
    "                    <div id=\"divTable\" class=\"input-group-btn search-panel\">\n" +
    "                    <div class=\"span1\" >\n" +
    "                        <a ng-click=\"displayinventorydetails()\" class=\"btn btn-primary\" ng-disabled=\"!(!!filters.hotelId || !!filters.roomId  || !!filters.rateplanId || !!filters.reservationId || !!filters.startDate || !!filters.endDate)\">\n" +
    "                        <i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n" +
    "                        <span><strong>SEARCH</strong></span>          \n" +
    "                        </a>\n" +
    "                    </div>\n" +
    "            </div>           \n" +
    "     <div ng-show=\"myVar\"> \n" +
    "<br/>\n" +
    "  <table border=\"1\" class=\"table table-bordered\">\n" +
    "    <tr ng-repeat=\"item in data1 | limitTo:1\">\n" +
    "      <th ng-repeat=\"(key, value) in item\"> {{key | uppercase }}\n" +
    "      </th>\n" +
    "    </tr>\n" +
    "    <tr ng-repeat=\"item in data1\">\n" +
    "      <td ng-repeat=\"(ky, val) in item\">\n" +
    "      \n" +
    "        <span ng-if=\"ky != 'price'\">{{val}}</span> \n" +
    "        <ul ng-if=\"ky == 'price'\">\n" +
    "          <li ng-repeat=\"(key,value) in item.price\">{{key}} : {{value}}</li>\n" +
    "        </ul>\n" +
    "      </td>\n" +
    "    </tr>\n" +
    " </table>  \n" +
    "</div>\n" +
    " </form>\n" +
    "\n" +
    "               \n" +
    "");
}]);

angular.module("login/login.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("login/login.tpl.html",
    "<link href=\"/home/swathi/project/ng-boilerplate/src/common/css/style.css\" rel=\"stylesheet\">\n" +
    "<div class=\"container\">\n" +
    "        <div class=\"card card-container\">\n" +
    "            <img id=\"profile-img\" class=\"profile-img-card\" src=\"/src/assets/logo3.png\" height=\"200\" width=\"200\" />\n" +
    "            <form class=\"form-signin\" name=\"myform\" ng-submit=\"formSubmit()\">\n" +
    "\n" +
    "                <span id=\"reauth-email\" class=\"reauth-email\"></span>\n" +
    "\n" +
    "                <input type=\"text\" ng-model=\"email\" id=\"inputEmail\" class=\"form-control\" placeholder=\"Email address\" required>\n" +
    "\n" +
    "                <input type=\"password\" ng-model=\"password\" id=\"inputPassword\" minlength=\"6\" maxlength=\"12\" class=\"form-control\" placeholder=\"Password\" required>\n" +
    "\n" +
    "                <div id=\"remember\" class=\"checkbox\">\n" +
    "                    <label>\n" +
    "                        <input type=\"checkbox\" value=\"remember-me\"> Remember me\n" +
    "                    </label>\n" +
    "                </div>\n" +
    "                <button class=\"btn btn-lg btn-primary btn-block btn-signin\" type=\"submit\">Sign in</button>\n" +
    "            </form>\n" +
    "            <a href=\"#\" class=\"forgot-password\">\n" +
    "                Forgot the password?\n" +
    "            </a>\n" +
    "        </div>\n" +
    "    <style>\n" +
    "   \n" +
    "body, html {\n" +
    "    height: 100%;\n" +
    "    background-repeat: no-repeat;\n" +
    "    background-image: linear-gradient(rgb(104, 145, 162), rgb(12, 97, 33));\n" +
    "}\n" +
    "\n" +
    ".card-container.card {\n" +
    "    max-width: 350px;\n" +
    "    padding: 40px 40px;\n" +
    "}\n" +
    "\n" +
    ".btn {\n" +
    "    font-weight: 700;\n" +
    "    height: 36px;\n" +
    "    -moz-user-select: none;\n" +
    "    -webkit-user-select: none;\n" +
    "    user-select: none;\n" +
    "    cursor: default;\n" +
    "}\n" +
    "\n" +
    "/*\n" +
    " * Card component\n" +
    " */\n" +
    ".card {\n" +
    "    background-color: #F7F7F7;\n" +
    "    /* just in case there no content*/\n" +
    "    padding: 20px 25px 30px;\n" +
    "    margin: 0 auto 25px;\n" +
    "    margin-top: 50px;\n" +
    "    /* shadows and rounded borders */\n" +
    "    -moz-border-radius: 2px;\n" +
    "    -webkit-border-radius: 2px;\n" +
    "    border-radius: 2px;\n" +
    "    -moz-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\n" +
    "    -webkit-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\n" +
    "    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\n" +
    "}\n" +
    "\n" +
    ".profile-img-card {\n" +
    "    width: 220px;\n" +
    "    height: 220px;\n" +
    "    margin: 0 auto 10px;\n" +
    "    display: block;\n" +
    "    -moz-border-radius: 50%;\n" +
    "    -webkit-border-radius: 50%;\n" +
    "    border-radius: 50%;\n" +
    "}\n" +
    "\n" +
    "/*\n" +
    " * Form styles\n" +
    " */\n" +
    ".profile-name-card {\n" +
    "    font-size: 16px;\n" +
    "    font-weight: bold;\n" +
    "    text-align: center;\n" +
    "    margin: 10px 0 0;\n" +
    "    min-height: 1em;\n" +
    "}\n" +
    "\n" +
    ".reauth-email {\n" +
    "    display: block;\n" +
    "    color: #404040;\n" +
    "    line-height: 2;\n" +
    "    margin-bottom: 10px;\n" +
    "    font-size: 14px;\n" +
    "    text-align: center;\n" +
    "    overflow: hidden;\n" +
    "    text-overflow: ellipsis;\n" +
    "    white-space: nowrap;\n" +
    "    -moz-box-sizing: border-box;\n" +
    "    -webkit-box-sizing: border-box;\n" +
    "    box-sizing: border-box;\n" +
    "}\n" +
    "\n" +
    ".form-signin #inputEmail,\n" +
    ".form-signin #inputPassword {\n" +
    "    direction: ltr;\n" +
    "    height: 44px;\n" +
    "    font-size: 16px;\n" +
    "}\n" +
    "\n" +
    ".form-signin input[type=email],\n" +
    ".form-signin input[type=password],\n" +
    ".form-signin input[type=text],\n" +
    ".form-signin button {\n" +
    "    width: 100%;\n" +
    "    display: block;\n" +
    "    margin-bottom: 10px;\n" +
    "    z-index: 1;\n" +
    "    position: relative;\n" +
    "    -moz-box-sizing: border-box;\n" +
    "    -webkit-box-sizing: border-box;\n" +
    "    box-sizing: border-box;\n" +
    "}\n" +
    "\n" +
    ".form-signin .form-control:focus {\n" +
    "    border-color: rgb(104, 145, 162);\n" +
    "    outline: 0;\n" +
    "    -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgb(104, 145, 162);\n" +
    "    box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgb(104, 145, 162);\n" +
    "}\n" +
    "\n" +
    ".btn.btn-signin {\n" +
    "    /*background-color: #4d90fe; */\n" +
    "    background-color: rgb(104, 145, 162);\n" +
    "    /* background-color: linear-gradient(rgb(104, 145, 162), rgb(12, 97, 33));*/\n" +
    "    padding: 0px;\n" +
    "    font-weight: 700;\n" +
    "    font-size: 14px;\n" +
    "    height: 36px;\n" +
    "    -moz-border-radius: 3px;\n" +
    "    -webkit-border-radius: 3px;\n" +
    "    border-radius: 3px;\n" +
    "    border: none;\n" +
    "    -o-transition: all 0.218s;\n" +
    "    -moz-transition: all 0.218s;\n" +
    "    -webkit-transition: all 0.218s;\n" +
    "    transition: all 0.218s;\n" +
    "}\n" +
    "\n" +
    ".btn.btn-signin:hover,\n" +
    ".btn.btn-signin:active,\n" +
    ".btn.btn-signin:focus {\n" +
    "    background-color: rgb(12, 97, 33);\n" +
    "}\n" +
    "\n" +
    ".forgot-password {\n" +
    "    color: rgb(104, 145, 162);\n" +
    "}\n" +
    "\n" +
    ".forgot-password:hover,\n" +
    ".forgot-password:active,\n" +
    ".forgot-password:focus{\n" +
    "    color: rgb(12, 97, 33);\n" +
    "}\n" +
    "    </style>");
}]);

angular.module("price/displayPrice.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("price/displayPrice.tpl.html",
    "<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\">\n" +
    "  <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js\"></script>\n" +
    "  <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js\"></script>\n" +
    "\n" +
    "\n" +
    "<div ng-app=\"displayPrice\" ng-controller=\"displayPriceCtrl\"> \n" +
    "<br/><br/>\n" +
    "      <style>\n" +
    "#page {\n" +
    "    width: 1200px;\n" +
    "    margin: 0px auto -1px auto;\n" +
    "    padding: 15px;\n" +
    "}\n" +
    ".InsideContent{\n" +
    "    display:inline-block;\n" +
    "}\n" +
    "}\n" +
    "#divTable {\n" +
    "    width: 800px;\n" +
    "    body{\n" +
    "      background-color: 92eec2;\n" +
    "    }\n" +
    "}\n" +
    "</style>\n" +
    "\n" +
    "<br/>\n" +
    "<br/>\n" +
    "<div id=\"page\">\n" +
    " <div id=\"divTable\" class=\"InsideContent\">\n" +
    "     <div><a ng-click=\"navigateToDashboard()\">Dashboard</a></div>\n" +
    "  </div>\n" +
    "  <div id=\"divTable\" class=\"InsideContent\">\n" +
    "    <div><p>/</p></div>\n" +
    "\n" +
    "  </div>\n" +
    "  <div id=\"divTable\" class=\"InsideContent\">\n" +
    "     <div><a ng-click=\"navigateToPrice()\">Price</a></div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "</div>\n" +
    "       \n" +
    "  <table border=\"1\" class=\"table table-bordered\">\n" +
    "    <tr ng-repeat=\"item in data1 | limitTo:1\">\n" +
    "  <th ng-repeat=\"(key, value) in item\"> {{key | uppercase }}</th></tr>\n" +
    "  <tr ng-repeat=\"item in data1\">\n" +
    "  <td ng-repeat=\"(key,value) in item\">\n" +
    "  {{value}}\n" +
    "  \n" +
    "</td>\n" +
    "\n" +
    "<td ng-repeat=\"(key,value) in item\">\n" +
    "  {{value}}\n" +
    "</td>\n" +
    "\n" +
    "<table border=\"1\" class=\"table table-bordered\">\n" +
    "<tr ng-repeat=\"item in data1.price | limitTo:1\">\n" +
    "  <th ng-repeat=\"(key, value) in item\"> {{key | uppercase }}</th></tr>\n" +
    "  <tr ng-repeat=\"item in data1.price\">\n" +
    "  <td ng-repeat=\"(key,value) in item\">\n" +
    "  {{value}}\n" +
    "</td>\n" +
    "\n" +
    "</tr>\n" +
    "</table>\n" +
    "\n" +
    "\n" +
    "   <!--<tr ng-repeat=\"x in data1\">\n" +
    "   <td>{{x.date}}</td>\n" +
    "   <td>{{x.reservationId}}</td>\n" +
    "   <td>{{x.revisionId}}</td>\n" +
    "   <td>{{x.hotelId}}</td>\n" +
    "   <td>{{x.roomId}}</td>\n" +
    "   <td>{{x.occupancy}}</td>\n" +
    "   <td>{{x.uniqueId}}</td>\n" +
    "   <td>{{x.status}}</td>\n" +
    "   <td>{{x.type}}</td>\n" +
    "   <td>{{x.createdDate}}</td>\n" +
    "</tr>-->\n" +
    "   </table>  \n" +
    "  \n" +
    "</div>\n" +
    "<script>\n" +
    "var log = [];\n" +
    "angular.forEach(data1, function(value, key) {\n" +
    "  console.log(key + ': ' + value);\n" +
    "});\n" +
    "</script>\n" +
    "\n" +
    "</body>\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "  \n" +
    "");
}]);

angular.module("price/price.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("price/price.tpl.html",
    "<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\">\n" +
    "  <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js\"></script>\n" +
    "  <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js\"></script>\n" +
    "  <meta charset=\"utf-8\">\n" +
    "  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n" +
    "  <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\">\n" +
    "  <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js\"></script>\n" +
    "  <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js\"></script>\n" +
    "<style>\n" +
    "#page {\n" +
    "    width: 1200px;\n" +
    "    margin: 0px auto -1px auto;\n" +
    "    padding: 15px;\n" +
    "}\n" +
    ".InsideContent{\n" +
    "    display:inline-block;\n" +
    "}\n" +
    "}\n" +
    "#divTable {\n" +
    "    width: 800px;\n" +
    "    body{\n" +
    "      background-color: 92eec2;\n" +
    "    }\n" +
    "}\n" +
    "body{\n" +
    "  background-color:     #66b7b0    ;\n" +
    "}\n" +
    ".datepicker.dropdown-menu {\n" +
    "  width: 250px;\n" +
    "  height: 250px;\n" +
    "  button {\n" +
    "    outline: none;\n" +
    "    border: 0px;\n" +
    "  }\n" +
    "  tbody {\n" +
    "    height: 180px;\n" +
    "  }\n" +
    "  tbody button {\n" +
    "    padding: 6px;\n" +
    "  }\n" +
    "  &.datepicker-mode-1, &.datepicker-mode-2 {\n" +
    "    tbody button {\n" +
    "      height: 65px;\n" +
    "    }\n" +
    "  }\n" +
    "}\n" +
    "\n" +
    ".timepicker.dropdown-menu {\n" +
    "  padding: 0 4px;\n" +
    "  button {\n" +
    "    outline: none;\n" +
    "    border: 0px;\n" +
    "  }\n" +
    "  tbody button {\n" +
    "    padding: 6px;\n" +
    "  }\n" +
    "}\n" +
    "table{\n" +
    "  border-color: black;\n" +
    "}\n" +
    "</style>\n" +
    "<body background=\"/home/swathi/Pictures/blue.jpg\">\n" +
    "<form ng-controller=\"PriceCtrl\"> \n" +
    "<br/>\n" +
    "<br/>\n" +
    "<div>\n" +
    "<div id=\"page\">\n" +
    " <div id=\"divTable\" class=\"InsideContent\">\n" +
    "     <div><a ng-click=\"navigateToDashboard()\">Dashboard</a></div>\n" +
    "  </div>\n" +
    "  <div id=\"divTable\" class=\"InsideContent\">\n" +
    "    <div><p>/</p></div>\n" +
    "\n" +
    "  </div>\n" +
    "  <div id=\"divTable\" class=\"InsideContent\">\n" +
    "     <div><a ng-href=\"\">Price</a></div>\n" +
    "  </div>\n" +
    "</div></div>\n" +
    "\n" +
    "<div>     \n" +
    "                     <label class=\"control-label\"> Hotel ID </label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n" +
    "                      <label class=\"control-label\"> Room ID </label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n" +
    "                     <label class=\"control-label\"> Rateplan ID </label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n" +
    "                      <label class=\"control-label\"> Reservation ID </label>&nbsp;\n" +
    "                      <label class=\"control-label\"><i class=\"fa fa-calendar\"></i> Start Date </label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n" +
    "                      <label class=\"control-label\"><i class=\"fa fa-calendar\"></i> End Date </label>\n" +
    "  </div>\n" +
    "<div>\n" +
    "            <input type=\"text\" ng-model=\"filters.hotelId\" id=\"hotelid\" style=\"width: 100px;\">\n" +
    " <input type=\"text\" ng-model=\"filters.roomId\" id=\"roomId\" style=\"width: 100px;\">\n" +
    "     <input type=\"text\" ng-model=\"filters.rateplanId\" id=\"rateplanId\" style=\"width: 100px;\">\n" +
    "       <input type=\"text\" ng-model=\"filters.reservationId\" id=\"reservationId\" style=\"width: 100px;\">\n" +
    "    <input ng-model=\"filters.startDate\" data-date-format=\"dd-MM-yyyy\" data-date-type=\"number\" data-min-date=\"02-10-14\" data-max-date=\"today\" data-autoclose=\"1\" name=\"date2\" bs-datepicker type=\"text\" style=\"width: 150px;\">\n" +
    "    <input ng-model=\"filters.endDate\" data-date-format=\"dd-MM-yyyy\" data-date-type=\"number\" data-min-date=\"{{filters.startDate}}\" data-max-date=\"22-01-50\" data-autoclose=\"1\" name=\"date2\" bs-datepicker type=\"text\" style=\"width: 150px;\">\n" +
    "  </div>\n" +
    "  <br/>          \n" +
    "                    <div id=\"divTable\" class=\"input-group-btn search-panel\">\n" +
    "                    <div class=\"span1\">\n" +
    "                        <a ng-click=\"displaypricedetails()\" class=\"btn btn-primary\" ng-disabled=\"!(!!filters.hotelId || !!filters.roomId  || !!filters.rateplanId || !!filters.reservationId || !!filters.startDate || !!filters.endDate)\">\n" +
    "                        <i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n" +
    "                        <span><strong>SEARCH</strong></span>          \n" +
    "                        </a>\n" +
    "                    </div>\n" +
    "            </div>  \n" +
    "<div ng-show=\"myVar\"> \n" +
    "<br/>\n" +
    "  <table border=\"10\" class=\"table table-bordered\">\n" +
    "    <tr ng-repeat=\"item in data1 | limitTo:1\">\n" +
    "      <th ng-repeat=\"(key, value) in item\"> {{key | uppercase }}\n" +
    "      </th>\n" +
    "    </tr>\n" +
    "    <tr ng-repeat=\"item in data1\">\n" +
    "      <td ng-repeat=\"(ky, val) in item\">\n" +
    "      \n" +
    "        <span ng-if=\"ky != 'price'\">{{val}}</span> \n" +
    "        <ul ng-if=\"ky == 'price'\">\n" +
    "          <li ng-repeat=\"(key,value) in item.price\">{{key}} : {{value}}</li>\n" +
    "        </ul>\n" +
    "      </td>\n" +
    "    </tr>\n" +
    " </table>  \n" +
    "</div>\n" +
    " </form>\n" +
    "</body>\n" +
    "               \n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "");
}]);
