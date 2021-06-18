const { merge } = require( "webpack-merge" );
const { mkdirSync: mkdir, existsSync: exists } = require( "fs" );
const { resolve } = require( "path" );
const { BundleAnalyzerPlugin } = require( "webpack-bundle-analyzer" );
const StatoscopePlugin = require( "@statoscope/ui-webpack" );

module.exports = ( rootPath, packagePath ) => {
    const baseConfig = require( resolve( rootPath, "config", "./webpack.base.js" ) );
    const tempDirPath = resolve( packagePath, "temp" );
    if( !exists( tempDirPath ) ) {
        mkdir( tempDirPath );
    }
    return merge( { ...baseConfig( rootPath, packagePath ) }, {
        plugins: [
            new BundleAnalyzerPlugin( {
                analyzerMode: "static",
                generateStatsFile: true,
                openAnalyzer: true,
                logLevel: "error",
            } ),
            new StatoscopePlugin( {
                saveTo: "./temp/report-[name]-[hash].html",
                saveStatsTo: "./temp/stats-[name]-[hash].json",
                watchMode: false,
                name: "example-app",
                open: "file",
            } ),
        ],
    } );
};