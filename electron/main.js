//
// Comment IV 
//    Copyright 2016 Kary Foundation, Inc.
//    Author: Pouya Kary <k@karyfoundation.org>
//

'use strict';

//
// ─── DEFS ───────────────────────────────────────────────────────────────────────
//

	const electron = require( 'electron' );
	const app = electron.app;
	const BrowserWindow = electron.BrowserWindow;
	
//
// ─── GENERATE MAIN WINDOW ───────────────────────────────────────────────────────
//

	let mainWindow;
	
	function createWindow ( ) {
		const window_width = 1100;
		const window_height = 630;
		mainWindow = new BrowserWindow({ 
			width: window_width, 	minWidth: window_width, 
			height: window_height,	minHeight: window_height,
			backgroundColor: "#2E2E2E"
		});

		mainWindow.loadURL( 'file://' + __dirname + '/index.html' );
		
		mainWindow.webContents.openDevTools();

		mainWindow.on( 'closed' , function( ) {
			mainWindow = null;
			app.quit( );
		});
	}
	
//
// ─── ON READY ───────────────────────────────────────────────────────────────────
//

	app.on( 'ready' , createWindow );

// ────────────────────────────────────────────────────────────────────────────────
