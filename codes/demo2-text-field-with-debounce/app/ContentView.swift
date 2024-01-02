//
//  ContentView.swift
//  app
//
//  Created by Arno Solo on 1/2/24.
//

import SwiftUI

struct ContentView: View {
    @State var userInput: String = "123"
    
    var body: some View {
        VStack {
            TextFieldWithDebounce(
                title: "Input#1",
                text: userInput,
                onChange: { userInput = $0 },
                debounceTimeoutMs: 500
            )
                .submitLabel(.done)
                .font(.system(size: 14))
                .padding(.leading, 4)
            
            TextFieldWithDebounce(
                title: "Input#2",
                text: userInput,
                onChange: { userInput = $0 }
            )
            Text("userInput = \(userInput)")
        }
    }
}

#Preview {
    ContentView()
}
