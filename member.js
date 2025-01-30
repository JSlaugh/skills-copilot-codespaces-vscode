function skillsMember(){
    return {
        restrict: "E",
        templateUr: "modules/skills/views/member.html",
        controller: 'SkillsMemberController',
        controllerAs: 'vm',
        bindToController: true,
        scope: {
            member: '='
        }
    }
}