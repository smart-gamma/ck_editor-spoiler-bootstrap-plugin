CKEDITOR.dialog.add( 'spoiler', function( editor ) {
    function toggle( element ) {
        element.setStyle( 'display' , ( ( element.getStyle('display') == 'none' ) ? '' : 'none' ) );
    }

    function setSwitcher( element )
    {
        var content = element.getParent().getLast();
        toggle( content );
    }
    function createSpoiler(className) {
        var spoilerContainer = editor.document.createElement( 'div', { 'attributes' : { 'class': 'panel '+ className } } );
        var spoilerTitle = editor.document.createElement( 'div', { 'attributes' : { 'class': 'spoiler-header panel-heading clickable' } } );
        var spoilerContent = editor.document.createElement( 'div', { 'attributes' : { 'class': 'panel-body' } } );

        spoilerTitle.on( 'click', function( event ) {
            setSwitcher( event.sender );
        });

        spoilerTitle.appendHtml( '<br>' );
        spoilerContent.appendHtml( '<p><br></p>' );
        spoilerContainer.append( spoilerTitle );
        spoilerContainer.append( spoilerContent );

        return spoilerContainer;
    }

    return {
        title: 'Create spoiler.',
        minWidth: 400,
        minHeight: 100,
        contents: [
            {
                id: 'spoiler-dialog',
                label: '',
                title: '',
                elements: [
                    {
                        type : 'html',
                        html : 'This dialog window lets you create bootstrap-spoiler for your website.'
                    },
                    {
                        type: 'radio',
                        id: 'spoiler-type',
                        label: 'Select the type of spoiler',
                        items: [
                            [ 'Spoiler Success', 'panel-success' ],
                            [ 'Spoiler Warning', 'panel-warning' ],
                            [ 'Spoiler Danger', 'panel-danger' ],
                            [ 'Spoiler Info', 'panel-info' ]
                        ],
                        style: 'color: green',
                        'default': 'panel-success',
                    }
                ]
            }
        ],
        onOk: function() {
            var spoiler = createSpoiler(this.getValueOf( 'spoiler-dialog', 'spoiler-type' ));
            editor.insertElement( spoiler );
        }
    };
});
