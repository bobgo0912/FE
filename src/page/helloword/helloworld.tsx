import React from "react";

import {HelloRequest, HelloReply} from "./pb/helloworld_pb";
import {PostProto} from "../../common/req/req"

const HelloWorld: React.FC = () => {

    function req(name: string) {
        let helloRequest = new HelloRequest();
        helloRequest.setName(name)
        PostProto("http://192.168.1.214:8888/proto", "hello.HelloRequest",
            helloRequest.serializeBinary()).then(r => {
                console.log(r)
                let bytes: Uint8Array = r.data;
                let helloReply = HelloReply.deserializeBinary(bytes);
                console.log(helloReply)
                console.log(helloReply.getMessage())
            }
        )
    }

    return (
        <>
            <button onClick={() => req("xxxx")}>ssss</button>
        </>
    );

}

export default HelloWorld;