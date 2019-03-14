//
//  Counter.m
//  music-room
//
//  Created by Alexandre Hoareau on 13/03/2019.
//  Copyright © 2019 650 Industries, Inc. All rights reserved.
//

#import "React/RCTBridgeModule.h"
#import "React/RCTEventEmitter.h"
@interface RCT_EXTERN_REMAP_MODULE(RNCounter, Counter, RCTEventEmitter)
RCT_EXTERN_METHOD(increment)
RCT_EXTERN_METHOD(getCount: (RCTResponseSenderBlock)callback)
RCT_EXTERN_METHOD(
                  decrement: (RCTPromiseResolveBlock)resolve
                  rejecter: (RCTPromiseRejectBlock)reject
                  )
@end
