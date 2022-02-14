//
//  main.m
//  lifesized-cli
//
//  Created by Francois Laberge on 10/11/15.
//  Copyright (c) 2015 Francois Laberge. All rights reserved.
//

#import <Foundation/Foundation.h>
@import AppKit;

int main(int argc, const char * argv[]) {
    @autoreleasepool {
        
        long count = [[NSScreen screens] count];
        
        // Find the screen with the same screen ID
        for(int i = 0; i<count; i++){
            NSScreen *screen = [[NSScreen screens] objectAtIndex:i];
            NSDictionary *description = [screen deviceDescription];
            NSNumber* screenId = [description objectForKey:@"NSScreenNumber"];
          
            printf("%0.0f (devicePixelRatio)\n", [screen backingScaleFactor]);
          
            NSSize displayPixelSize = [[description objectForKey:NSDeviceSize] sizeValue];
            CGSize displayPhysicalSize = CGDisplayScreenSize([screenId unsignedIntValue]);
            
            // There are 25.4 millimeters per inch:
            // https://www.google.com/webhp?sourceid=chrome-instant&ion=1&espv=2&ie=UTF-8#q=mm+to+inches
            printf("%0.1f ppi\n",(displayPixelSize.width / displayPhysicalSize.width) * 25.4f * [screen backingScaleFactor]);
        }
    }
    return 0;
}
