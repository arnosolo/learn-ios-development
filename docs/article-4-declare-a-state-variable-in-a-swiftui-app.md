---
title: Declare a state variable in a SwiftUI app
lang: en-US
description: Usually variables are initialized at the time of declaration, but variables can also be initialized in the init function.
---

# {{ $frontmatter.title }}

{{ $frontmatter.description }}

## Declare a state variable

When you declare a variable with `@State`, SwiftUI automatically monitors the changes to that variable and updates the corresponding view whenever the state changes.
```swift
import SwiftUI

struct ContentView: View {
    @State var count = 0

    var body: some View {
        VStack {
            Text("\(count)")
            Button("Add one") {
                count += 1
            }
        }
    }
}
```

You can also declare a state variable in a view model.
```swift
import SwiftUI

class ContentViewModel: ObservableObject {
    @Published var count = 0
}

struct ContentView: View {
    @StateObject var vm = ContentViewModel()

    var body: some View {
        VStack {
            Text("\(vm.count)")
            Button("Add one") {
                vm.count += 1
            }
        }
    }
}
```

## Give state variable initial value

To give state variable an initial value, `State(wrappedValue:)` function can be used. Here is an example.
```swift
struct ContentView: View {
    @State var count: Int
    
    init(countRepository: CountRepository) {
        _count = State(wrappedValue: countRepository.getCount())
    }

    var body: some View {
        VStack {
            Text("\(count)")
            Button("Add one") {
                count += 1
            }
        }
    }
}
```

If the states are stored in a `ObservableObject` instance. `StateObject(wrappedValue:)` function can be used. Here is an example.
```swift
import SwiftUI

class CountRepository {
    func getCount() -> Int {
        return 12
    }
}

class ContentViewModel: ObservableObject {
    @Published var count: Int
    
    init(countRepository: CountRepository) {
        self.count = countRepository.getCount()
    }
}

struct ContentView: View {
    @StateObject var vm: ContentViewModel
    
    init(countRepository: CountRepository) {
        _vm = StateObject(wrappedValue: ContentViewModel(countRepository: countRepository))
    }

    var body: some View {
        VStack {
            Text("\(vm.count)")
            Button("Add one") {
                vm.count += 1
            }
        }
    }
}

#Preview {
    ContentView(countRepository: CountRepository())
}
```
