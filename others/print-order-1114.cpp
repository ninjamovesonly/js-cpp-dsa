#include <iostream>
using namespace std;

class Foo {
private:
    promise<void> p1;
    promise<void> p2;
public:
    Foo() {
    }

    void first(function<void()> printFirst) {
        
        // printFirst() outputs "first". Do not change or remove this line.
        printFirst();
        p1.set_value();
    }

    void second(function<void()> printSecond) {
        
        // printSecond() outputs "second". Do not change or remove this line.
        p1.get_future().get();
        printSecond();
        p2.set_value();
    }

    void third(function<void()> printThird) {
        
        // printThird() outputs "third". Do not change or remove this line.
        p2.get_future().get();
        printThird();
    }
};
