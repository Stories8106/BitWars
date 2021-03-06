ig.module(
	'game.entities.cpu'
)
.requires(
    'impact.entity',
    'impact.entity-pool'
)
.defines(function(){

	EntityCpu = ig.Entity.extend({

        // PHYCICS
        type: ig.Entity.TYPE.NONE,
    	checkAgainst: ig.Entity.TYPE.NONE,

		animSheet: 	new ig.AnimationSheet( 'media/units/cpu.png', 16, 16 ),
		size: {x:16, y:16},
		power: 		0,
		cpu: 		true,

		init: function( x, y, settings ) {
			this.parent( x, y, settings );
			this.addAnim( 'idle', 0.1, [1,1,1,1,1,1,1,1,1,1,2,2,3,4,5] );
			this.currentAnim.gotoRandomFrame();
			this.name = settings.name;
		},

		reset: function( x, y, settings ) {
        	this.parent( x, y, settings );
			this.currentAnim.gotoRandomFrame();
        	this.name = settings.name;
        },

        kill: function(){
        	ig.game.teams[ig.game.team-1].bitcoins += ig.game.settings.btcFromCpu;
            ig.game.spawnEntity( EntityParticle_cpu, this.pos.x, this.pos.y, {team:ig.game.team} );
        	this.parent();
        },

        update: function(){
			this.parent();
		},

    });

	ig.EntityPool.enableFor( EntityCpu );

});