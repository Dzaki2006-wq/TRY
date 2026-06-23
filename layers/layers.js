var wms_layers = [];

var format_Administrasi_Malang_0 = new ol.format.GeoJSON();
var features_Administrasi_Malang_0 = format_Administrasi_Malang_0.readFeatures(json_Administrasi_Malang_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Administrasi_Malang_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Administrasi_Malang_0.addFeatures(features_Administrasi_Malang_0);
var lyr_Administrasi_Malang_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Administrasi_Malang_0, 
                style: style_Administrasi_Malang_0,
                popuplayertitle: 'Administrasi_Malang',
                interactive: true,
                title: '<img src="styles/legend/Administrasi_Malang_0.png" /> Administrasi_Malang'
            });
var format_5KM_1 = new ol.format.GeoJSON();
var features_5KM_1 = format_5KM_1.readFeatures(json_5KM_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_5KM_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_5KM_1.addFeatures(features_5KM_1);
var lyr_5KM_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_5KM_1, 
                style: style_5KM_1,
                popuplayertitle: '5KM',
                interactive: true,
                title: '<img src="styles/legend/5KM_1.png" /> 5KM'
            });
var format_FasilitasKesehatanMalang_2 = new ol.format.GeoJSON();
var features_FasilitasKesehatanMalang_2 = format_FasilitasKesehatanMalang_2.readFeatures(json_FasilitasKesehatanMalang_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FasilitasKesehatanMalang_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FasilitasKesehatanMalang_2.addFeatures(features_FasilitasKesehatanMalang_2);
var lyr_FasilitasKesehatanMalang_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FasilitasKesehatanMalang_2, 
                style: style_FasilitasKesehatanMalang_2,
                popuplayertitle: 'Fasilitas Kesehatan Malang',
                interactive: true,
                title: '<img src="styles/legend/FasilitasKesehatanMalang_2.png" /> Fasilitas Kesehatan Malang'
            });
var group_Layer = new ol.layer.Group({
                                layers: [lyr_Administrasi_Malang_0,lyr_5KM_1,lyr_FasilitasKesehatanMalang_2,],
                                fold: 'open',
                                title: 'Layer'});

lyr_Administrasi_Malang_0.setVisible(true);lyr_5KM_1.setVisible(true);lyr_FasilitasKesehatanMalang_2.setVisible(true);
var layersList = [group_Layer];
lyr_Administrasi_Malang_0.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_5KM_1.set('fieldAliases', {'fid': 'fid', 'NAMOBJ': 'NAMOBJ', 'LUAS': 'LUAS', 'REMARK': 'REMARK', 'TIPSHT': 'TIPSHT', 'FCODE': 'FCODE', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'FSKADD': 'FSKADD', 'type': 'type', 'start': 'start', });
lyr_FasilitasKesehatanMalang_2.set('fieldAliases', {'fid': 'fid', 'NAMOBJ': 'NAMOBJ', 'LUAS': 'LUAS', 'REMARK': 'REMARK', 'Foto': 'Foto', });
lyr_Administrasi_Malang_0.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_5KM_1.set('fieldImages', {'fid': '', 'NAMOBJ': '', 'LUAS': '', 'REMARK': '', 'TIPSHT': '', 'FCODE': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'FSKADD': '', 'type': '', 'start': '', });
lyr_FasilitasKesehatanMalang_2.set('fieldImages', {'fid': 'TextEdit', 'NAMOBJ': 'TextEdit', 'LUAS': 'TextEdit', 'REMARK': 'TextEdit', 'Foto': 'ExternalResource', });
lyr_Administrasi_Malang_0.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_5KM_1.set('fieldLabels', {'fid': 'no label', 'NAMOBJ': 'no label', 'LUAS': 'no label', 'REMARK': 'no label', 'TIPSHT': 'no label', 'FCODE': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'FSKADD': 'no label', 'type': 'no label', 'start': 'no label', });
lyr_FasilitasKesehatanMalang_2.set('fieldLabels', {'fid': 'no label', 'NAMOBJ': 'inline label - always visible', 'LUAS': 'inline label - always visible', 'REMARK': 'inline label - visible with data', 'Foto': 'inline label - always visible', });
lyr_FasilitasKesehatanMalang_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});