$(function() {
	$("body").one("pinegrow-ready", function(e, pgp) {
		var f = new PgFramework("pwspkplugin", "PWSPK Enable Dev Tools Plugin");
		f.type = "pwspkplugin";
		f.author = 'itsmeleo';
		f.author_link = 'https://bestsoftpro.com';
		f.allow_single_type = true;
		pgp.addFramework(f);
		f.on_plugin_activated = function(pgPage){
		var $menu = $('<li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown"><span>PWSPK DevTools</span></a>\
    <ul class="dropdown-menu with-checkboxes">\
        <li><a href="#" class="devtools">Enable Debugging</a></li>\
    </ul></li>');
			$menu.find('.devtools').on('click', function(e) {
           		require('nw.gui').Window.get().showDevTools()
        	})
			pgp.addPluginControlToTopbar(f, $menu);

			return pgPage;
		}
	})
})
