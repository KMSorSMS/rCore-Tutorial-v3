(function() {var type_impls = {
"os":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-SimpleRange%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/os/mm/address.rs.html#205-219\">source</a><a href=\"#impl-SimpleRange%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; <a class=\"struct\" href=\"os/mm/address/struct.SimpleRange.html\" title=\"struct os::mm::address::SimpleRange\">SimpleRange</a>&lt;T&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"os/mm/address/trait.StepByOne.html\" title=\"trait os::mm::address::StepByOne\">StepByOne</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html\" title=\"trait core::cmp::PartialOrd\">PartialOrd</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,</div></h3></section></summary><div class=\"impl-items\"><section id=\"method.new\" class=\"method\"><a class=\"src rightside\" href=\"src/os/mm/address.rs.html#209-212\">source</a><h4 class=\"code-header\">pub fn <a href=\"os/mm/address/struct.SimpleRange.html#tymethod.new\" class=\"fn\">new</a>(start: T, end: T) -&gt; Self</h4></section><section id=\"method.get_start\" class=\"method\"><a class=\"src rightside\" href=\"src/os/mm/address.rs.html#213-215\">source</a><h4 class=\"code-header\">pub fn <a href=\"os/mm/address/struct.SimpleRange.html#tymethod.get_start\" class=\"fn\">get_start</a>(&amp;self) -&gt; T</h4></section><section id=\"method.get_end\" class=\"method\"><a class=\"src rightside\" href=\"src/os/mm/address.rs.html#216-218\">source</a><h4 class=\"code-header\">pub fn <a href=\"os/mm/address/struct.SimpleRange.html#tymethod.get_end\" class=\"fn\">get_end</a>(&amp;self) -&gt; T</h4></section></div></details>",0,"os::mm::address::VPNRange"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-IntoIterator-for-SimpleRange%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/os/mm/address.rs.html#220-229\">source</a><a href=\"#impl-IntoIterator-for-SimpleRange%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.IntoIterator.html\" title=\"trait core::iter::traits::collect::IntoIterator\">IntoIterator</a> for <a class=\"struct\" href=\"os/mm/address/struct.SimpleRange.html\" title=\"struct os::mm::address::SimpleRange\">SimpleRange</a>&lt;T&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"os/mm/address/trait.StepByOne.html\" title=\"trait os::mm::address::StepByOne\">StepByOne</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html\" title=\"trait core::cmp::PartialOrd\">PartialOrd</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Item\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Item\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.IntoIterator.html#associatedtype.Item\" class=\"associatedtype\">Item</a> = T</h4></section></summary><div class='docblock'>The type of the elements being iterated over.</div></details><details class=\"toggle\" open><summary><section id=\"associatedtype.IntoIter\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.IntoIter\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.IntoIterator.html#associatedtype.IntoIter\" class=\"associatedtype\">IntoIter</a> = <a class=\"struct\" href=\"os/mm/address/struct.SimpleRangeIterator.html\" title=\"struct os::mm::address::SimpleRangeIterator\">SimpleRangeIterator</a>&lt;T&gt;</h4></section></summary><div class='docblock'>Which kind of iterator are we turning this into?</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.into_iter\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/os/mm/address.rs.html#226-228\">source</a><a href=\"#method.into_iter\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.IntoIterator.html#tymethod.into_iter\" class=\"fn\">into_iter</a>(self) -&gt; Self::<a class=\"associatedtype\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.IntoIterator.html#associatedtype.IntoIter\" title=\"type core::iter::traits::collect::IntoIterator::IntoIter\">IntoIter</a></h4></section></summary><div class='docblock'>Creates an iterator from a value. <a href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.IntoIterator.html#tymethod.into_iter\">Read more</a></div></details></div></details>","IntoIterator","os::mm::address::VPNRange"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-SimpleRange%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/os/mm/address.rs.html#196\">source</a><a href=\"#impl-Clone-for-SimpleRange%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"os/mm/address/struct.SimpleRange.html\" title=\"struct os::mm::address::SimpleRange\">SimpleRange</a>&lt;T&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"os/mm/address/trait.StepByOne.html\" title=\"trait os::mm::address::StepByOne\">StepByOne</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html\" title=\"trait core::cmp::PartialOrd\">PartialOrd</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/os/mm/address.rs.html#196\">source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; <a class=\"struct\" href=\"os/mm/address/struct.SimpleRange.html\" title=\"struct os::mm::address::SimpleRange\">SimpleRange</a>&lt;T&gt;</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/clone.rs.html#169\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","os::mm::address::VPNRange"],["<section id=\"impl-Copy-for-SimpleRange%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/os/mm/address.rs.html#196\">source</a><a href=\"#impl-Copy-for-SimpleRange%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"os/mm/address/struct.SimpleRange.html\" title=\"struct os::mm::address::SimpleRange\">SimpleRange</a>&lt;T&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"os/mm/address/trait.StepByOne.html\" title=\"trait os::mm::address::StepByOne\">StepByOne</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html\" title=\"trait core::cmp::PartialOrd\">PartialOrd</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>,</div></h3></section>","Copy","os::mm::address::VPNRange"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()