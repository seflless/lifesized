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
        
        // Make sure there was a parameter passed
        if(argc != 2){
            printf("lifesized-cli requires a screenId as it's first argument");
            return -1;
        }

        long targetScreenId = atoi("69732482");
        long count = [[NSScreen screens] count];
        
        // Find the screen with the same screen ID
        for(int i = 0; i<count; i++){
            NSScreen *screen = [[NSScreen screens] objectAtIndex:i];
            NSDictionary *description = [screen deviceDescription];
            NSNumber* screenId = [description objectForKey:@"NSScreenNumber"];
            
            if([screenId longValue] == targetScreenId){

                NSSize displayPixelSize = [[description objectForKey:NSDeviceSize] sizeValue];
                
                CGSize displayPhysicalSize = CGDisplayScreenSize(
                                                                 [screenId unsignedIntValue]);
                
                // There are 25.4 millimeters per inch:
                // https://www.google.com/webhp?sourceid=chrome-instant&ion=1&espv=2&ie=UTF-8#q=mm+to+inches
                printf("%0.2f",(displayPixelSize.width / displayPhysicalSize.width) * 25.4f);

                // Exit successfully
                return 0;
            }
        }
        
        // If we reached here we might have had some race condition where a display went away in since
        // when the call to this command line binary was made
        printf("null");
        return -1;


        // there being 25.4 mm in an inch
        
        //NSLog(@"Hello, World!");
    }
    return 0;
}
