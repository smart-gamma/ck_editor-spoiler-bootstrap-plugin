CKEDITOR.plugins.add( 'spoiler' , {
	lang: 'en,ru',
	icons: 'spoiler',
	init: function( editor ) {
		var pluginName = 'spoiler';
		var path = this.path;

		if ( editor.blockless )
			return;

		function getDivWithClass( className )
		{
			var divs =  editor.document.getElementsByTag( 'div' ),
				len = divs.count(),
				elements = [],
				element;
			for ( var i = 0; i < len; ++i ) {
				element = divs.getItem( i );
				if ( element.hasClass( className ) ) {
					elements.push( element );
				}
			}
			return elements;
		}

		CKEDITOR.dialog.add( pluginName, path + 'dialogs/' + pluginName + '.js' );
		editor.addCommand( pluginName, new CKEDITOR.dialogCommand( pluginName ) );

		editor.ui.addButton( 'Spoiler', {
			label: editor.lang.spoiler.toolbar,
			command: pluginName
		});

		editor.on( 'mode', function() {
			if ( this.mode != 'wysiwyg' ) {
				return;
			}
			var elements = getDivWithClass( 'spoiler-header' ),
				len = elements.length;

			for ( var i = 0; i < len; ++i )
			{
				elements[i].on( 'click', function( event ) {
					var element = event.sender.getParent().getLast();

					element.setStyle( 'display' , ( ( element.getStyle('display') == 'none' ) ? '' : 'none' ) );
				});
			}
		});
	}
});