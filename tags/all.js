riot.tag('contact-list', '<h1>Contacts</h1> <ul> <li each="{p in opts.people}">{p.first} {p.last}</li> </ul>', function(opts) {
    this.on('mount', function(){
      console.log('Riot mount event fired')
      opts.callback(this)
    })

    this.on('data_loaded',function(peeps){
      opts.people = peeps
      this.update()
    })
  
});
