# bootstrapConfirm
Bootstrap confirm window


<h1>Bootstrap confirm window</h1>
<h3>What is this ?</h3>
<p>This is a implementation of javascript confirm window for <a href="http://getbootstrap.com/">Twitter Bootstrap framework</a>, with bootstrap´s look and feel. Now you can use a beatiful confirm window
and avoid your users from ugly javascript´s stuff. It´s based on <a href="http://getbootstrap.com/javascript/#modals">bootstrap modal</a>.</p>

<p>A sample can be found <a href='http://www.cigi.com.br/bootstrapconfirm/sample.html'>here</a></p>

<h3>How to use</h3>
<p>You can use jQuery selector of any object to connect <em>click</em> event to fire confirm window. In most ways a button is a good way to exemplify this behaviour.</p>

<h3>Code</h3>
<p>1.Include the plugin in your html. Of course, you <strong>must</strong> have jQuery and Bootstrap previously loaded - it´s a bootstrap plugin, remember ?</p>
<pre>&lt;script src='fg1998/jquery-bootstrapConfirm.js'&gt;&lt;/script&gt;</pre>

<p>2.Create a button markup. You might want to to decorate with bootstrap CSS.</p>
<pre>&lt;input type='button' id='btnConfirm' class='btn btn-primary' value='drop all tables'&gt;</pre>

<p>3.Connect your button to bootstrapConfirm.</p>
<pre>$('#btnConfirm').bootstrapConfirm(
{
    message: "This will drop all tables. Confirm ?",
    cancelCallBack: function () { alert('cancel') },
    confirmCallBack: function () { alert('confirm') },
});
</pre>

<p>Click the button to see the new window. There are a feel properties, some of then not optional you need to inform.</p>

<h3>Options</h3>
<p>Attention - all options are in <a href='https://en.wikipedia.org/wiki/CamelCase'>lower camel case</a>.</p>
<table class="table-bordered table">
<thead>
<tr>
    <th>Property</th>
    <th>Required</th>
    <th>Description</th>
</tr>
</thead>
<tr>
<td>message</td>
<td>required</td>
<td>The main message of confirm window.</td>
</tr>
<tr>
<td>confirmCallBack</td>
<td>required</td>
<td>The callback when user click on <mark>confirm</mark> button.</td>
</tr>
<tr>
<td>cancelCallBack</td>
<td>required</td>
<td>The callback when user click on <mark>cancel</mark> button</td>
</tr>
<tr>
<td>confirmButtonText</td>
<td>optional</td>
<td>Text for confirm button. Default is <mark>Confirm</mark></td>
</tr>
<tr>
<td>cancelButtonText</td>
<td>optional</td>
<td>Text for cancel button. Default is <mark>Cancel</mark></td>
</tr>
<tr>
<td>modalId</td>
<td>optional</td>
<td>HTML ID for bootstrap modal div. Default is <mark>bootstrapConfirm</mark>. The <code>&lt;div&gt;</code> will be create with <code>id='bootstrapConfirm'</code> unless you change it with this option. In most
of cases, you dont need to change, but if you have another object with same id, use this to solve issues.</td>
</tr>
</table>

<h3>Compatibility</h3>
<p>List of tested and compatibility browsers<p>
<table class="table table-bordered">
<thead>
    <tr>
        <th>Browser</th>
        <th>Version tested</th>
        <th>Compatibility</th>
    </tr>
    </thread>
    <tr>
        <td>Chrome</td>
        <td>40</td>
        <td>Compatible</td>
    </tr>
    <tr>
        <td>Firefox</td>
        <td>34</td>
        <td>Compatible</td>
    </tr>
    <tr>
        <td>Opera</td>
        <td>26</td>
        <td>Compatible</td>
    </tr>
    <tr>
        <td>Safari</td>
        <td>5</td>
        <td>Compatible</td>
    </tr>
    <tr>
        <td>Internet Explorer</td>
        <td>11</td>
        <td>Compatible</td>
    </tr>
</table>

<h3>License</h3>
<p>Coded by <a href="https://www.facebook.com/fg1998">fg1998</a></p>
<p>
I really don´t know much about license. I believe the <em>Apache.org Version 2.0</em> is enough for everyone. In feel words, you can use, copy, modify, etc whatever you want. I hope this piece of software cand be useful for you.
If you need some more, please let me know.
</p>
<pre>http://www.apache.org/licenses/LICENSE-2.0</pre>
<p>I found this text and I believe it is important... </p>
<blockquote>Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.</blockquote>

