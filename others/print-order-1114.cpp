#include <functional>
#include <iostream>
#include <thread>
using namespace std;

function<void ()> test() {
    cout << "testing" << endl;
}

class Foo {
public:
    Foo() {
        
    }

    void first(function<void()> printFirst) {
        // printFirst() outputs "first". Do not change or remove this line.
        printFirst();
    }

    void second(function<void()> printSecond) {
        
        // printSecond() outputs "second". Do not change or remove this line.
        printSecond();
    }

    void third(function<void()> printThird) {
        
        // printThird() outputs "third". Do not change or remove this line.
        printThird();
    }
};


int main()
{
    std::cout << "Hello World" << std::endl;
    test();
    Foo f;
    std::thread t([](int x){
        while(x-- > 0) {
            cout << x << endl;
        }
    }, 10);

    std::thread s([](int x){
        while(x-- > 0) {
            cout << x << endl;
        }
    }, 15);

    s.join();
    t.join();
    return 0;
}