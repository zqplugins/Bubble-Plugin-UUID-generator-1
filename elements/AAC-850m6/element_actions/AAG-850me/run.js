function(instance, properties, context) {
    const V = properties.version;
    if( V && V.length ){
    	if( V == 'v3' || V == 'v5' ){
            instance.publishState('generated_uuid', uuid[V](properties.name, properties.namespace))
        }else{        
            instance.publishState('generated_uuid', uuid[V]())
        }
    }
}