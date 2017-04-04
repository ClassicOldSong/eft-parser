var ast = [
	{
		t: 'div',
		a: {
			id: 'id1',
			class: [['class', 'text'], 'box test']
		}
	},
	'text0',
	[
		{
			t: 'br'
		}
	],
	[['root', 'text']],
	[
		{
			t: 'br'
		}
	],
	[['class', 'text']],
	[
		{
			t: 'div',
			n: 'testAlias',
			a: {
				style: [['style']]
			}
		},
		'text1',
		[['info', 'node1']],
		{ n: 'branch', t: 0 },
		[
			{
				tag: 'br'
			}
		],
		'Message: ',
		[
			{
				tag: 'br'
			}
		],
		[
			{
				t: 'input',
				a: {
					type: 'text'
				},
				p: {
					value: [['class', 'text']]
				}
			}
		],
		[
			{
				t: 'br'
			}
		],
		'Input style here: ',
		[
			{
				t: 'br'
			}
		],
		[
			{
				t: 'textarea',
				p: {
					value: [['style'], 'background-color: #ECECEC']
				}
			}
		],
		[
			{
				t: 'br'
			}
		],
		[['text']],
		'text2'
	],
	[
		{
			t: 'button',
			e: {
				click: ['sendMsg', 'some data']
			}
		},
		'sendMsg'
	],
	{ n: 'list', t: 1 }
]

var template = 'this is a comment\n' +
'>div.{{class = some class name}}\n' +
'	#style = {{attr.style}}\n' +
'	#id = testdiv\n' +
'	#some-attr = some text\n' +
'	#content =\n' +
'	%title = {{name}}\n' +
'	%anotherProperty = text\n' +
'	.Name: {{name}}&nJob: {{job}}\n' +
'	>br\n' +
'	-node1\n' +
'	>p\n' +
'		#class = some class name\n' +
'		@click = alertNotice:{{attr.style = color: #666}}\n' +
'		/@mousedown = setState\n' +
'		>span\n' +
'			.Notice: {{notice}}\n' +
'		. test\n' +
'	 	-node2\n' +
'		+list1'

var ast2 = eftParser(template)

var data1 = {
	$data: {
			class: 'box test class',
			name: 'Bob',
			job: 'Assit Alice',
			notice: 'ooooooops'
	},
	$methods: {
		alertNotice: function (info) {
			console.log('Value passed:', info.value)
			alert(info.state.$data.notice)
		}
	}
}

var module1 = new ef(ast)
var module2 = new ef(ast2)

var state = module1.render()
var state2 = module1.render()
var state3 = module2.render()
var state4 = module2.render(data1)

state3.list1.push(state4)
state2.branch = state3

// state.$data.text = 'box'
// state2.$data.text = 'box'
// state3.$data.text = 'box'
// state4.$data.text = 'box'

// state.$data.root.text = 'component 1'
state2.$data.root.text = 'component 2'
state3.$data.class = 'box'
state3.$data.name = 'Alice'
state3.$data.job = 'Developer'
state3.$data.notice = 'N/A'
state4.$data.job = 'Assisting Alice'

var data2 = {
	$data: {
		text: 'box',
		root: {
			text: 'On this node that button works.'
		}
	},
	$methods: {
		sendMsg: function (info) {
			console.log('Event triggered:', info.e)
			console.log('Value passed:', info.value)
			alert('The message is \n"' + info.state.$data.class.text + '"!')
		}
	},
	list: [state2]
}

state.$update(data2)

// state4.$methods.sendMsg = function(thisState) { alert('The message is "\n' + thisState.$data.text + '"!') }

document.querySelector('body').appendChild(state.$element)
