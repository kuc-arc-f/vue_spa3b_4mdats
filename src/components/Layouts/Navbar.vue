<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="/">Idx-Kuc</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" >
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <router-link  to="/" class="nav-link">Home</router-link>
                </li>
                <li class="nav-item active">
                    <router-link  to="/dexie_tasks" class="nav-link">Tasks</router-link>
                </li>
                <li class="nav-item active">
                    <router-link  to="/idx_mdat" class="nav-link">Mdats</router-link>
                </li>
                <li class="nav-item active">
                    <router-link  to="/dexie_todos" class="nav-link">Todos</router-link>
                </li>
            </ul>
			<!-- right_nav -->
			<ul class="navbar-nav">
				<li class="nav-item">
                    <router-link  to="/about" class="nav-link">About</router-link>
				</li>
			</ul>            
        </div>
        <hr />
    </nav>
</template>

<script>
import {Mixin} from '../../mixin'

export default {
    mixins:[Mixin],
    created () {
        this.valid_user = this.valid_login(this.sysConst.STORAGE_KEY_userData )
        if(this.valid_user ){
            var d = this.get_exStorage(this.sysConst.STORAGE_KEY_userData )
            this.user = d[0]
        }
//console.log(this.sysConst.HTTP_URL );
    },
    data() {
        return {
            valid_user : null,
            user : null,
        }
    },    
    methods: {
        proc_logout: function() {
            this.remove_exStorage(this.sysConst.STORAGE_KEY_userData )
            window.location.href = this.sysConst.HTTP_URL
//            this.$router.push('/users/login')
        },
        move_action: function( action  ){
            this.set_exStorage(this.sysConst.KEY_NEXT_ACTION , action )
            window.location.href = this.sysConst.HTTP_URL
        },          
    }    
}
</script>
